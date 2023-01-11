<template>
  <div class="app">
    <NavBar/>
    <SocialIcons/>
    <router-view/>
  </div>
  
</template>


<script>
  import NavBar from './components/NavBar.vue';
  import SocialIcons from '@/components/SocialIcons.vue';
  export default {
    components: {
      NavBar,
      SocialIcons,
    }
  }
</script>

<style>
:root {
  --theme-color: rgb(199, 209, 0);
  --theme-color-alpha: rgba(0, 0, 0, 0.841);
  --text-color: rgb(187, 187, 187);
}

.app {
  background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)),
    url(https://i.postimg.cc/tTsNS4Sb/image.png);
  background-attachment: fixed;
  height: 100vh;
  background-size: cover;
}

.text-theme-color {
  color: var(--theme-color);
}

.bg-theme-color {
  background: var(--theme-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
/*nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}*/ 

nav a {
  text-decoration: none;
  position: relative;
  transition: .5s;
}

nav a.router-link-exact-active::after {
  content: '';
  height: 3px;
  border-radius: 20px;
  width: 30%;
  background-color: var(--theme-color);
  position: absolute;
  left: 1.5rem;
  transition: .5s;
}
</style>
