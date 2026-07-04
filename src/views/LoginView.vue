<script setup lang="ts">
function login() {
  const username = document.querySelector('#username-field');
  const password = document.querySelector('#password-field');

  if (!username || !password) {
    return;
  }
}
</script>

<template>
  <div id="login-view-container">
    <form>
      <label for="username">Username</label>
      <input id="username-field" type="text" placeholder="username" name="username" required />

      <label for="password">Password</label>
      <input id="password-field" type="password" placeholder="password" name="password" required />

      <button type="submit" @click="login()">Login</button>
    </form>
  </div>
</template>

<style>
#login-view-container {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background-color: white;
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
</style>
