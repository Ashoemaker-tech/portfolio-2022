<script setup>
const projects = [
    {
        id: 1,
        title: "Posty Social Media App",
        description: "A short form social media app built with Laravel and Tailwind CSS. Features include user authentication, created updating and deleting posts and comments. Users also have a notifications setting that shows notifications when someone likes or comments on their post.",
        image: "https://github.com/Ashoemaker-tech/posty/raw/master/resources/images/HomePageScreenshot.png",
        code: "https://github.com/Ashoemaker-tech/posty",
        demo: "https://posty.ashoemakerdev.com"
    },
    {
        id: 2,
        title: "Laragigs job posting app",
        description: "A job posting app built with Laravel and Bootstrap. Implemented authentication and CRUD functionality for job postings and user profiles",
        image: "https://github.com/Ashoemaker-tech/laragigsApp/raw/master/public/images/laragigs.png",
        code: "https://github.com/Ashoemaker-tech/laragigsApp",
        demo: "https://laragigs.ashoemakerdev.com"
    }
]
</script>

<template>
<div v-for="project in projects" class="card lg:card-side bg-neutral shadow-xl mb-36">
  <figure><img :src="project.image" alt="project"/></figure>
  <div class="card-body lg:w-full">
    <h2 class="card-title">{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <div class="card-actions justify-end">
      <a :href="project.code" target="_blank" class="btn btn-primary btn-outline mr-4">Code</a>
      <a :href="project.demo" target="_blank" class="btn btn-primary btn-outline mr-4">Demo</a>
    </div>
  </div>
</div>
</template>
