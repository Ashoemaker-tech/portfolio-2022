<script setup>

</script>

<template>
  <section id="wrapper-hero" class="section-page">
    <img id="profile-pic" src="../../assets/images/profile_pic.jpg" alt="profile pic" />
    <div>
      <h1 id="username">Andrew Shoemaker</h1>
      <p id="bio">I am a Laravel/Vue/MySQL developer with 2 years of experience in building and
        maintaining web applications. Proficient in PHP, JavaScript, and MySQL, with
        a strong understanding of MVC design patterns and RESTful APIs.

      </p>
      <p id="email">👉 andrew.shoemaker9@gmail.com</p>
    </div>
  </section>
</template>

<style>
#wrapper-hero {
  display: flex;
  align-items: center;
  gap: 4em;
}

.section-page {
  padding-top: 1em;
  padding-bottom: 1em;
}

#username {
  font-size: 3em;
  line-height: 1em;
}

#bio,
a {
  font-weight: 300;
}

#profile-pic {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

#email {
  color: var(--color-text);
}

@media(max-width:600px) {
  #wrapper-hero {
    flex-direction: column;
    gap: 1em;
  }

  #profile-pic {
    width: 200px;
    height: 200px;
  }


}
</style>