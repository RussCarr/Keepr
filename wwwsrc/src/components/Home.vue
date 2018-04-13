<template>
  <div class="main">
    <nonUser></nonUser>
    <bottom></bottom>
  </div>
</template>

<script>
  import Footer from './Footer'
  import NonUser from './NonUser'
  import Keeps from './Keeps'
  export default {
    name: 'Home',
    components: {
      bottom: Footer,
      nonUser: NonUser
    },
    data() {
      return {
        showSignIn: false,
        showRegister: false,
      }
    },
    computed: {
      keeps() {
        return this.$store.state.allSharedKeeps
        // console.log(this.$store.state.allSharedKeeps)
      }
    },
    mount() {
      // console.log("sending to get all sharedKeeps")
      this.$store.dispatch('getAllSharedKeeps')
    },
    methods: {
      openSignIn() {
        this.showRegister = false
        this.showSignIn = true
      },
      openRegister() {
        // console.log('part 3')
        this.showSignIn = false
        this.showRegister = true
      }
    }

  }
</script>

<style scoped>
  .main {
    height: 100%;
    overflow-x: hidden;
  }
</style>