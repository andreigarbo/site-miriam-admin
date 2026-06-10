<script setup lang="ts"></script>

<template>
  <header>
    <div id="header-div">
      <div id="main-header-content">
        <nav>
          <RouterLink class="header-router-link" to="/">Home</RouterLink>
          <RouterLink class="header-router-link" to="/analytics">Analytics</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <div id="main-site-content">
    <RouterView />
  </div>
</template>

<style>
html {
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  position: relative;
  font-family: 'Federo Regular';
}

nav {
  width: 100%;
  text-align: center;
}

#main-header-content {
  display: flex;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

hr {
  /* display: block; */
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
  width: 100%;
}

@media (min-width: 600px) {
  nav {
    font-size: 16px;
  }

  header {
    width: 100%;
    align-items: center;
    padding-top: 1rem;
    background-color: white;
    position: sticky;
    z-index: 1;
    top: 0;
  }

  nav a {
    padding: 0 1rem;
  }

  #instagram-link img {
    height: 25px;
    width: auto;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    font-size: 0.9rem;
  }

  nav a {
    padding: 0 0.5rem;
  }

  #instagram-link img {
    height: 18px;
    width: auto;
    padding-right: 3vw;
  }

  #main-header-content {
    align-items: center;
  }
}
</style>
