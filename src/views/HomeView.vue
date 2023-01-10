<template>
  <div class="home-page">
    <SocialIcons/>
    <main class="main-content d-flex flex-column align-items-start justify-content-center text-white">
      <h2 class="greet-text"> <span class="text-theme-color">Hi</span>, I am</h2>
      <h1 class="full-name text-theme-color">Lazola Makubalo</h1>
      <p class="description">I am an aspiring fullstack developer.</p>
      <button class="btn-more py-2">More</button>
    </main>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
}
}
</script>

<style scoped>
  .home-page {
    
    background-size: cover;
    object-fit: cover;
    background-position: center;
    height: 100vh;
    scroll-margin: 0vh;
  }

  .main-content {
    height: 100vh;
    padding: 15rem;
  }

  .greet-text {
    font-size: 30px;
  }

  .full-name {
    font-size: 65px;
    margin: 1rem 0 .5rem 0;
  }

  p {
    font-size: 22px;
    text-align: start;
    margin-bottom: 3rem;
  }

  .btn-more {
    width: 200px;
    background: none;
    border: 2px solid var(--theme-color);
    color: var(--theme-color);
    font-size: 20px;
    position: relative;
    box-sizing: border-box;
  }

</style>
