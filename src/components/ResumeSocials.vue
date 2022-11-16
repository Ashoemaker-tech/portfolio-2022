<script setup>

</script>


<template>
    <section class="section-page">
      <div id="socials-list">
        <a href="https://www.linkedin.com/in/andrew-shoemaker-825847a6/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Ashoemaker-tech" target="_blank">Github</a>
        <a href="https://twitter.com/Ashoemaker_tech" target="_blank">Twitter</a>
        <a href="../../public/Resume2022.pdf" target="_blank">Download Resume</a>
      </div>
    </section>
</template>

<style>



#socials-list {
  display: flex;
  justify-content: space-between;
  column-gap: 1em;
  flex-wrap: wrap;
}

#socials-list a {
  font-size: 0.9em;
  color: var(--secondaryTextColor);
  transition: 0.3s;
}

#socials-list a:hover {
  color: hsla(160, 100%, 37%, 1);
  
}

</style>