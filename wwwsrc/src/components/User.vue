<template>
  <div class="user">
    <topBar @showMyKeeps="showMyKeeps = true" :user="user" ></topBar>
    <myKeepsMenu v-if="showMyKeeps" @close="showMyKeeps = false" @closeMyKeeps="close($event)"></myKeepsMenu>
    <!-- <navbar></navbar> -->
    <h5>User Home Page</h5>
</div>
</template>

<script>
  import TopBar from './TopBar'
  import MyKeepsMenu from './MyKeepsMenu'
  // import Navbar from './Navbar'
  export default {
    name: 'User',
    components: {
      topBar: TopBar,
      myKeepsMenu: MyKeepsMenu
      // navbar: Navbar,
    },
    data() {
      return {
        showMyKeeps: true,
        user: this.$store.state.user
      }
    },
    computed: {
      // getUser() {
      //   return this.$store.state.user
      // }
    },
    methods: {
      close() {
         console.log('part 3')
        this.showMyKeeps= false
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