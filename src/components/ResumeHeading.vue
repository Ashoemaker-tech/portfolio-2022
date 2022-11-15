<script setup>

</script>

<template>
    <section id="wrapper-hero" class="section-page">
      <img id="profile-pic" src="../../assets/images/profile_pic.jpg" alt="profile pic"/>
      <div>
        <h1 id="username">Andrew Shoemaker</h1>
        <p id="bio">Software developer with a background in construction. My expertise is focused on full stack development with Laravel and Vue. I also have experience in WordPress full site editing theme development.   
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

#bio, a{
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
  #wrapper-hero{
    flex-direction: column;
    gap: 1em;
  }

  #profile-pic {
    width: 200px;
    height: 200px;
  }

  
}


</style>