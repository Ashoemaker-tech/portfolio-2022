<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Socials from './components/Socials.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const year = new Date().getFullYear();

const showSocials = ref(true)

function handleToggle() {
  showSocials.value = !showSocials.value
}

function updateSocialsState() {
  showSocials.value = window.outerWidth > 768;
}

onMounted(() => {
  updateSocialsState();
  window.addEventListener('resize', updateSocialsState);
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSocialsState)
})

</script>

<template>
  <Navbar />
  <div class="container mx-auto px-8">
    <RouterView />
  </div>
  
  <footer>
    <div class="mt-12">
      <p class="text-center">&copy; Copyright {{ year }} by <span>Andrew Shoemaker</span></p>
    </div>
  </footer>
  <button @click="handleToggle" class="bottom-44 left-[14px] sticky lg:hidden" :class="{'bottom-0 animate-bounce bottom-[0px]' : !showSocials}">
    <svg :class="{'rotate-180' : !showSocials}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all duration-300">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>
  </button>
  <Socials :class="{'hidden' : !showSocials}" /> 
</template>
