<script setup>

</script>

<template>
    <section class="section-page">
      <h2>Tech Stack</h2>
      <div id="wrapper-techstack-items">
        <div class="card-techstack">
          <span>JavaScript, PHP</span>
        </div>
        <div class="card-techstack">
          <span>Laravel, Wordpress</span>
        </div>
        <div class="card-techstack">
          <span>Vue, Blade, AlpineJs</span>
        </div>
        <div class="card-techstack">
          <span>MySQL, SQLite, NoSQL</span>
        </div>
      </div>
    </section>

</template>

<style>

#wrapper-techstack-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  font-size: 0.9em;
}

.card-techstack {
  border: 1px solid var(--color-border);
  padding: 0.5em 1em;
  border-radius: 5px;
}

</style>