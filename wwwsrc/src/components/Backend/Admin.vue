<template>
  <div class="admin">
    <topBar></topBar>
    <navbar></navbar>
    <h5>Admin panel</h5>
    <ents></ents>
  </div>
</template>

<script>
  import TopBar from './TopBar'
  import Navbar from './Navbar'
  import Ents from './Ents'
  export default {
    name: 'Admin',
    components: {
      topBar: TopBar,
      navbar: Navbar,
      ents: Ents
    },
    data() {
      return {

      }
    }

  }
</script>

<style scoped>
</style>