<script setup>
import ResumeHeading from '../components/ResumeHeading.vue'
import ResumeSocials from '../components/ResumeSocials.vue'
import ResumeQual from '../components/ResumeQual.vue'
import ResumeTechStack from '../components/ResumeTechStack.vue'
import ResumeWorkHistory from '../components/ResumeWorkHistory.vue'
import ResumeAccomplishments from '../components/ResumeAccomplishments.vue'

</script>

<template>
  <div class="container">
  <ResumeHeading />
  <ResumeSocials />
  <!-- <ResumeQual /> -->
  <ResumeTechStack />
  <ResumeAccomplishments />
  <ResumeWorkHistory />
  </div>
</template>

<style scoped>

.container {
  max-width: 700px;
  margin: 0 auto;
}

</style>
