<script setup lang="ts">
import { VerifyTwoFactorRequest } from '@/requests/auth';
import router from '@/router';
import { setJwt } from '@/services/JWTService';
import { ref } from 'vue';

const twoFACodeField = ref('');
const errorMessage = ref('Login failed');

function setError(message: string) {
  const errorContainerDiv = document.querySelector('#error-container-2fa');
  errorMessage.value = message;
  errorContainerDiv?.classList.remove('not-visible');
  twoFACodeField.value = '';
  setTimeout(() => {
    errorContainerDiv?.classList.add('not-visible');
  }, 3000);
  return;
}

async function verify2FaCode() {
  if (twoFACodeField.value == '') {
    setError('Please provide a 2FA code');
    return;
  }

  const request = new VerifyTwoFactorRequest(twoFACodeField.value);
  const response = await request.dispatch();
  if (!response) {
    setError('Login failed');
    return;
  }

  if (response && response.status != 200) {
    if (
      response.message == 'Missing field temporary JWT Token on request' ||
      response.message == 'jwt expired'
    ) {
      setJwt('');
      router.push('/login');
    }

    if (response.message == 'Invalid 2FA Token') {
      twoFACodeField.value = '';
      setError('Invalid token');
      return;
    }
  }
  if (!response.token) {
    setError('Internal server error');
    return;
  }

  twoFACodeField.value = '';
  const jwt = response.token.split(' ');
  if (!jwt[1]) {
    setError('Internal server error');
    return;
  }
  setJwt(jwt[1]);
  router.push('/');
}
</script>

<template>
  <div id="twofa-view-container">
    <form @submit.prevent>
      <label for="2fa">Two Factor Authentication Code</label>
      <input
        type="text"
        v-model="twoFACodeField"
        onkeypress="
          return (
            (event.charCode != 8 && event.charCode == 0) ||
            (event.charCode >= 48 && event.charCode <= 57) ||
            event.charCode == 13
          );
        "
        placeholder="two factor code"
        name="2fa"
        required
      />

      <button type="submit" @click="verify2FaCode">Login</button>
    </form>
  </div>

  <div id="error-container-2fa" class="not-visible">
    <p id="error-message-2fa">{{ errorMessage }}</p>
  </div>
</template>

<style>
input {
  margin-bottom: 20px;
  font-size: 1rem;
  text-align: center;
  font-family: 'Federo Regular';
}

input:focus {
  outline: none;
}

#twofa-view-container {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#error-message-2fa {
  display: block;
  font-size: 1.5rem;
}

#error-container-2fa {
  color: red;
  text-align: center;
}

.not-visible {
  visibility: hidden;
}

button {
  border-color: transparent;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 1px;
  background-color: #ececec;
  font-size: 1.1rem;
  font-family: 'Federo Regular';
}

button:hover {
  transform: scale(1.1);
  transition: transform 100ms ease-in-out;
}
</style>
