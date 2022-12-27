<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Hero from '../components/Hero.vue';
import Showcase from '../components/Showcase.vue';
import ContactForm from '../components/ContactForm.vue';
import Projects from '../components/Projects.vue';
</script>

<template>
<div class="spacer-y">
  <Hero />
  <div>
    <h3>Recent Projects</h3>
    <div>
      <!-- TODO Add Projects Here -->
      <Projects />
    </div>
    <div class="spacer-y">
      <h3>Tech Used</h3>
      <Showcase />
    </div>
  </div>
</div>
<div class="spacer-y">
  <div class="contact-headings">
    <h3 class="">Let's Work Together</h3>
    <p class="">Send a message to connect with me and I will get back with you shortly.</p>
  </div>
  <ContactForm />
</div>
</template>

<style scoped>
h3 {
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: medium;
}
.contact-headings {
  text-align: center;
}

</style>
