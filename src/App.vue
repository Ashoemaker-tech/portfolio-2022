<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
const year = new Date().getFullYear();
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink to="/"><span class="logo">Andrew Shoemaker</span></RouterLink>
      <div>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/resume">Resume</RouterLink>
      </div>
    </div>
  </nav>

  <RouterView />

  <footer class="spacer-y">
    <div>
      <p>&copy; Copyright {{ year }} by <span>Andrew Shoemaker</span></p>
    </div>
  </footer>
</template>

<style scoped>

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

nav {
  width: 100%;
  font-size: 12px;
  margin-top: 1rem;
}

nav span {
  font-size: 2rem;
}

.nav-link.router-link-exact-active {
  color: var(--color-text);
}

.nav-link.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.logo {
  color: hsla(160, 100%, 37%, 1);
  font-size: 2rem;
  font-family: 'Great Vibes', cursive;
}

footer {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
