<template>
  <div class="login-page">
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
import {jwtDecode} from "jwt-decode";
import {useStore} from "vuex";
import {ApiClientStomp} from "@ziqni-tech/member-api-client";
import Cookies from 'js-cookie';

const router = useRouter();
const memberRefId = ref(new URLSearchParams(document.location.search).get('memberRefId'));

const apiKey = ref('caa57595af97ba4a30a99aeac3e4858a');
const expiresIn = 36000;
const store = useStore();

const tokenKey = `token-${memberRefId.value}`;

const initialize = async () => {

  await ApiClientStomp.instance.disconnect();
  Cookies.remove(tokenKey);

  const memberTokenRequest = {
    member: memberRefId.value,
    apiKey: apiKey.value,
    isReferenceId: true,
    expires: expiresIn,
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

    Cookies.set(tokenKey, token, {expires: expiresIn, secure: true});

    router.go(0)
  } else {
    console.error('Failed to get Member token on Ziqni side', body.errors[0].message);
  }
};

const isLoggedIn = () => {
  const savedToken = Cookies.get(tokenKey);

  if (!savedToken) {
    console.log('No saved JWT token found');
    return false;
  }

  const isValidJwt = jwtDecode(savedToken);
  const isValid = isValidJwt.exp > Date.now() / 1000;
  if (!isValid) {
    console.log('Saved JWT token expired at ' + isValidJwt.exp + ' (' + new Date(isValidJwt.exp * 1000) + ')')
    Cookies.remove(tokenKey);
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


  .login-page-loader {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;

    .spinner {
      width: 94px;
      height: 90px;
      opacity: 0.7;
      animation: rotation 2.5s linear infinite normal;

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }

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
