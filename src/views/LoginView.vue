<script setup lang="ts"></script>

<template>
  <div id="login-view-container">
    <form>
      <label for="username">Username</label>
      <input type="text" placeholder="username" name="username" required />

      <label for="password">Password</label>
      <input type="password" placeholder="password" name="password" required />

      <button type="submit">Login</button>
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
