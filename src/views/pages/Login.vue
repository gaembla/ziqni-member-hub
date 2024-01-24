<template>
  <div class="login-page"></div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
import {jwtDecode} from "jwt-decode";
import {useStore} from "vuex";
import {ApiClientStomp} from "@ziqni-tech/member-api-client";

const router = useRouter();
const memberRefId = ref(new URLSearchParams(document.location.search).get('memberRefId'));

const apiKey = ref('caa57595af97ba4a30a99aeac3e4858a');
const expires = 36000;
const isLoading = ref(false);
const store = useStore();

const initialize = async () => {
  await ApiClientStomp.instance.disconnect();
  localStorage.removeItem('token');

  isLoading.value = true;

  const memberTokenRequest = {
    member: memberRefId.value,
    apiKey: apiKey.value,
    isReferenceId: true,
    expires: expires,
    resource: 'ziqni-gapi'
  };

  const response = await fetch('https://api.ziqni.com/member-token', {
    method: 'post',
    body: JSON.stringify(memberTokenRequest),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const body = await response.json();

  if (body.data && body.data.jwtToken) {
    const token = body.data.jwtToken;

    await ApiClientStomp.instance.connect({token: token});
    await store.dispatch('setIsConnectedClient', true);
    localStorage.setItem('token', token);

    router.go(0)
  } else {
    console.error('Failed to get Member token on Ziqni side', body.errors[0].message);
  }
};

const isLoggedIn = () => {
  const savedToken = localStorage.getItem('token');
  if (!savedToken) {
    console.log('No saved JWT token found');
    return false;
  }

  const isValidJwt = jwtDecode(savedToken);
  const isValid = isValidJwt.exp > Date.now() / 1000;
  if (!isValid) {
    console.log('Saved JWT token expired at ' + isValidJwt.exp + ' (' + new Date(isValidJwt.exp * 1000) + ')')
    localStorage.removeItem('token');
  }
  return isValid;
};

if (isLoggedIn()) {
  console.log('User is logged in, proceed to Achievements')
  router.push({name: 'Achievements'});
} else {
  console.log('User is not logged in, proceed to Login')
  initialize();
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables';

.login-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: $dark-grey;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $body-text-color;

  .login-form {
    position: absolute;
    top: 35%;

    .form-row {
      display: flex;
      align-items: center;
      padding-bottom: 15px;

      .form-control {
        background-color: $light-grey;
        color: $text-color-white;
      }

      .form-label {
        margin-right: 10px;
      }
    }
  }

  .login-btn {
    margin-top: 25px;
    width: 100%;
    background-color: $purple;
    border-radius: $border-radius;
  }
}
</style>
