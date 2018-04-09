<template>
  <div class="user">
    <topBar></topBar>
    <navbar></navbar>
    <h5>User Home Page</h5>
</div>
</template>

<script>
  import TopBar from './TopBar'
  import Navbar from './Navbar'
  export default {
    name: 'User',
    components: {
      topBar: TopBar,
      navbar: Navbar,
    },
    data() {
      return {
        
      }
    }

  }
</script>

<style scoped>
  .user{
    /* width: 80px;
    height: 400px;
    outline: 1px solid black; */
    /* outline-style: solid;
    outline-color: red; */
  }
</style>