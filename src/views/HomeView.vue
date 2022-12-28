<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Hero from '../components/Hero.vue';
import Showcase from '../components/Showcase.vue';
import ContactForm from '../components/ContactForm.vue';
import Projects from '../components/Projects.vue';
</script>

<template>
<div class="mt-24">
  <Hero />
  <div class="space-y-40 lg:mx-24">
    <div>
      <h1 class="text-3xl font-bold my-10">Recent Projects</h1>
      <Projects />
    </div>
    <div>
      <h1 class="text-3xl font-bold my-10">Tech Used</h1>
      <Showcase />
    </div>
  </div>
</div>
<div class="mt-24">
  <div class="text-center">
    <h1 class="text-3xl font-bold">Let's Work Together</h1>
    <p class="mt-6">Send a message to connect with me and I will get back with you shortly.</p>
  </div>
  <ContactForm />
</div>
</template>


