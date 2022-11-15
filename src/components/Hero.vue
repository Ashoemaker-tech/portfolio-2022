<script setup>

</script>
<template >
    <div>
        <div class="hero-content">
            <img src="../../assets/images/avatar.svg" />
            <div>
                <h1 class="text-5xl font-bold">Hi there, I'm Andrew</h1>
                <p class="py-6 text-lg">I am a full stack software developer that is based in the southestern United States. I specialize in building cutting edge, blazingly fast, pixel perfect web apps with Laravel & Vue. </p>
                <ul class="icons">
                    <li><a href="https://www.linkedin.com/in/andrew-shoemaker-825847a6/" target="_blank"><span class="fab fa-linkedin text-light"></span></a></li>
                    <li><a href="https://github.com/Ashoemaker-tech" target="_blank"><span class="fab fa-github"></span></a></li>
                    <li><a href="https://twitter.com/Ashoemaker_tech" target="_blank"><span class="fab fa-twitter"></span></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>

.hero-content {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

.hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
}

.hero-content img {
    width: 75%;
}

/* Icons */
.icons {
      list-style-type: none;
      padding: 0;
      margin-top: 1rem;
    }
    .icons li{
      height: 50px;
      width: 50px;
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      position: relative;
    }
    .icons li:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: -28%;
      z-index: -1;
      border-radius: 10%;
      background: linear-gradient(45deg, hsla(160, 100%, 37%, 1), hsla(160, 100%, 37%, 0.2));
      transition: all 0.3s ease-in;
    }
    .icons li:hover:before {
      transform: rotate(360deg);
      border-radius: 100%;
    }
    .icons li a span{
      font-size: 24px;
      line-height: 50px;
      color: #fff;
      transition: all 0.3s ease-out;
    }
    .icons li:hover a span{
      transform: scale(1.2);
    }

    @media(max-width: 768px) {
    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
    
</style>