<template>
  <NavBar/>
  <router-view/>
</template>


<script>
  import NavBar from './components/NavBar.vue';
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
:root {
  --theme-color: rgb(247, 186, 4);
  --text-color: rgb(187, 187, 187);
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
  color: #2c3e50;
}
/*nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}*/ 

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
