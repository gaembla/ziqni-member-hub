<template>
  <div class="login-page"></div>
</template>

<script setup>
import { CFormInput } from '@coreui/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const memberRefId = ref(new URLSearchParams(document.location.search).get('memberRefId'));
const apiKey = ref('caa57595af97ba4a30a99aeac3e4858a');
const expires = 36000;

(async () => {
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
    localStorage.setItem('token', token);
    router.go(0)
  } else {
    console.error('Member Token Error', body.errors[0].message);
  }
})();

const isLoggedIn = !!localStorage.getItem('token');

if (isLoggedIn) {
  router.push({ name: 'Achievements' });
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
