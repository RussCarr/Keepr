<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  
  export default {
    name: 'App',
    components: {
    
    },
    mounted() {
      this.$store.dispatch('getAllSharedKeeps')
      this.$store.dispatch('authenticateUser')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    /* height: 100%; */
    background-color: silver;
  }
  
</style>