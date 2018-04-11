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
      this.$store.dispatch('authenticateUser')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* display: flex */
  }
  
</style>