const { createApp } = Vue

  createApp({
    data() {
      return {
        showPortfolioSection: true,
        showResumeSection: false,
        currentYear: new Date().getFullYear(),
      }
    }
  }).mount('#app')