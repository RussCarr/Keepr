<template>
  <div class="nonUser">
    <homeBar @showSignIn="showSignIn = true" @showRegister="showRegister = true"></homeBar>
    <signIn v-if="showSignIn" @close="showSignIn = false" @closeSignIn="openRegister($event)"></signIn>
    <register v-if="showRegister" @close="showRegister = false" @closeRegister="openSignIn($event)"></register>
    <!-- <h5>Home Page</h5> -->
    <keeps :keep='keep' v-for='keep in keeps' :key='keep.id'></keeps>
    <!-- <bottom></bottom> -->
  </div>

</template>

<script>
  // import Footer from './Footer'
  import HomeBar from './HomeBar'
  import SignIn from './Backend/SignIn'
  import Register from './Backend/Register'
  import Keeps from './Keeps'
  export default {
    name: 'NonUser',
    components: {
      // bottom: Footer,
      homeBar: HomeBar,
      signIn: SignIn,
      register: Register,
      keeps: Keeps,
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
  .nonUser {
    background-color: slategrey;
  }
</style>