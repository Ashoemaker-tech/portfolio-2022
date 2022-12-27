<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
// import HelloWorld from './components/HelloWorld.vue'
const year = new Date().getFullYear();
</script>

<template>
  <Navbar />
  <div class="container mx-auto px-8">
    <RouterView />
  </div>
  <ul class="absolute sticky ml-6 bottom-10">
      <li><a href="https://www.linkedin.com/in/andrew-shoemaker-825847a6/" target="_blank"><span class="fab fa-xl fa-linkedin"></span></a></li>
      <li><a href="https://github.com/Ashoemaker-tech" target="_blank"><span class="fab fa-xl fa-github my-6"></span></a></li>
      <li><a href="https://twitter.com/Ashoemaker_tech" target="_blank"><span class="fab fa-xl fa-twitter"></span></a></li>
  </ul>
  <footer class="py-12">
    <div>
      <p class="text-center">&copy; Copyright {{ year }} by <span>Andrew Shoemaker</span></p>
    </div>
  </footer>
</template>
