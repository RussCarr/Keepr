<template>
  <div class="main">
    <!-- <keep v-on:keepToEdit="keepToEdit($event)" :keep="keep" v-for="keep in keeps" :key="keep.id"></keep> -->
    <topBar @showSignIn="showSignIn = true"  @showRegister="showRegister = true" ></topBar>
    <!-- <navbar></navbar> -->
    <!-- <welcome v-if="showWelcome"></welcome> -->
    <signIn v-if="showSignIn" @close="showSignIn = false" @closeSignIn="openRegister($event)"></signIn>
    <register v-if="showRegister" @close="showRegister = false" @closeRegister="openSignIn($event)"></register>
    <h5>Home Page</h5>
    <div class="container">
      <!-- <button  @click="showModal = true">Show Modal</button>
      use the modal component, pass in the prop
      <modal v-if="showModal" @close="showModal = false">
        This is a test
        
          you can use custom content here to overwrite
          default content
       
        <h3 slot="header">custom header</h3>
      </modal> -->
      <div class="row">
        <div class="col-sm-3 keep">
          <img class="text-center" src="http:\\placehold.it\250x200">
          <hr>
          <div class="row">
            <div class="col text-center">
              <span>keep#</span>
              <span>Share#</span>
              <span>View#</span>
            </div>
          </div>
          <hr>
          <p>Keep Discription</p>
          <hr>
          <div class="row">
            <div class="col text-center">
              <Button>keep</Button>
              <Button>Share</Button>
              <Button>View</Button>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <p>Hello</p>
        </div>
        <div class="col-sm-3">
          <p>Hello</p>
        </div>
        <div class="col-sm-3">
          <p>Hello</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from './TopBar'
  // import Navbar from './Navbar'
  import SignIn from './Backend/SignIn'
  import Register from './Backend/Register'
  // import Welcome from './Welcome'
  // import Modal from './Modal'
  export default {
    name: 'Home',
    components: {
      topBar: TopBar,
      // navbar: Navbar,
      signIn: SignIn,
      register: Register,
      // welcome: Welcome,
      // modal: Modal
    },
    data() {
      return {
        showSignIn: false,
        showRegister: false,
        // showWelcome: false,
        // showModal: false
      }
    },
    mount() {
      this.$store.dispatch('getAllSharedKeeps')
    },
    methods: {
      // close() {
      //   console.log('part 2')
      //   this.showSignIn = false
      // },
      openSignIn() {
        this.showRegister = false
        this.showSignIn= true
      },
      openRegister() {
         console.log('part 3')
        this.showSignIn= false
        this.showRegister = true
      }
    }

  }
</script>

<style scoped>
  .keep {
    width: 80px;
    height: 400px;
    outline: 1px solid black;
    /* outline-style: solid;
    outline-color: red; */
  }
</style>