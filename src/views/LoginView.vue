<script setup lang="ts">
import { LoginRequest } from '@/requests/auth';
import router from '@/router';
import { ref } from 'vue';
import { setJwt } from '@/services/JWTService';
const usernameField = ref('');
const passwordField = ref('');
const errorMessage = ref('Login failed');

function setError(message: string) {
  const errorContainerDiv = document.querySelector('#error-container-login');
  errorMessage.value = message;
  errorContainerDiv?.classList.remove('not-visible');
  usernameField.value = '';
  passwordField.value = '';
  setTimeout(() => {
    errorContainerDiv?.classList.add('not-visible');
  }, 3000);
  return;
}

async function login() {
  if (usernameField.value == '' || passwordField.value == '') {
    setError('Please provide credentials');
    return;
  }

  const request = new LoginRequest(usernameField.value, passwordField.value);
  const response = await request.dispatch();
  if (!response) {
    setError('Login failed');
    return;
  }
  if (response && response.status != 200) {
    if (response.message == 'Database entry does not exist') {
      setError('User does not exist');
      return;
    }

    if (response.message == 'Invalid value for field password') {
      setError('Invalid password');
      return;
    }
  }

  if (!response.token) {
    setError('Internal server error');
    return;
  }

  usernameField.value = '';
  passwordField.value = '';
  const jwt = response.token.split(' ');
  if (!jwt[1]) {
    setError('Internal server error');
    return;
  }
  setJwt(jwt[1]);
  router.push('/2fa');
}
</script>

<template>
  <div id="login-view-container">
    <form @submit.prevent>
      <label for="username">Username</label>
      <input
        id="username-field"
        v-model="usernameField"
        type="text"
        placeholder="username"
        name="username"
        required
      />

      <label for="password">Password</label>
      <input
        id="password-field"
        v-model="passwordField"
        type="password"
        placeholder="password"
        name="password"
        required
      />

      <button type="submit" @click="login">Log in</button>
    </form>

    <div id="error-container-login" class="not-visible">
      <p id="error-message-login">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style>
#login-view-container {
  /* width: 80vw; */
  height: 50vh;
}

#error-container-login {
  color: red;
  text-align: center;
}

::placeholder {
  font-size: 1.1rem;
  font-family: 'Federo Regular';
}

#error-message-login {
  display: block;
  font-size: 1.5rem;
}

.not-visible {
  visibility: hidden;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: white;
  position: relative;
}

input {
  margin-top: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 3px;
  background-color: #ff8b8b;
  height: 30px;
}

input:focus {
  outline: none;
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
  /* color: red; */
}

button:hover {
  transform: scale(1.1);
  transition: transform 100ms ease-in-out;
}
</style>
