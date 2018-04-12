<template>
  <div class="nonUser">
    <homeBar @showSignIn="showSignIn = true" @showRegister="showRegister = true"></homeBar>
    <signIn v-if="showSignIn" @close="showSignIn = false" @closeSignIn="openRegister($event)"></signIn>
    <register v-if="showRegister" @close="showRegister = false" @closeRegister="openSignIn($event)"></register>
    <div class="row">
      <keeps :keep='keep' v-for='keep in keeps' :key='keep.id'></keeps>
    </div>
  </div>

</template>

<script>

  import HomeBar from './HomeBar'
  import SignIn from './Backend/SignIn'
  import Register from './Backend/Register'
  import Keeps from './Keeps'
  export default {
    name: 'NonUser',
    components: {
      homeBar: HomeBar,
      signIn: SignIn,
      register: Register,
      keeps: Keeps,
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
  .nonUser {
    background-color: silver;
    margin-bottom: 50px;
  }
</style>