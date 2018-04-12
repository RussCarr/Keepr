<template>
  <div class="main">
    <nonUser></nonUser>
    <bottom></bottom>
  </div>
</template>

<script>
  import Footer from './Footer'
  import NonUser from './NonUser'
  // import HomeBar from './HomeBar'
  // import SignIn from './Backend/SignIn'
  // import Register from './Backend/Register'
  import Keeps from './Keeps'
  export default {
    name: 'Home',
    components: {
      bottom: Footer,
      nonUser: NonUser
      // homeBar: HomeBar,
      // signIn: SignIn,
      // register: Register,
      // keeps: Keeps,
    },
    data() {
      return {
        showSignIn: false,
        showRegister: false,
        // showWelcome: false,
        // showModal: false
      }
    },
    computed: {
      keeps() {
        return this.$store.state.allSharedKeeps
        console.log(this.$store.state.allSharedKeeps)
      }
    },
    mount() {
      console.log("sending to get all sharedKeeps")
      this.$store.dispatch('getAllSharedKeeps')
    },
    methods: {
      // getShared() {
      //   console.log("sending to get all sharedKeeps")
      // this.$store.dispatch('getAllSharedKeeps')
      // },
      openSignIn() {
        this.showRegister = false
        this.showSignIn = true
      },
      openRegister() {
        console.log('part 3')
        this.showSignIn = false
        this.showRegister = true
      }
    }

  }
</script>

<style scoped>
  /* .keep {
    width: 80px;
    height: 400px;
    outline: 1px solid black;
    /* outline-style: solid;
    outline-color: red; 
 }
*/

  .main {
    height: 100%;
    overflow-x: hidden;
  }
</style>