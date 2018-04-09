<template>
  <div class="user">
    <topBar @showMyKeeps="showMyKeeps = true" :user="user" ></topBar>
    <myKeepsMenu v-if="showMyKeeps" @close="showMyKeeps = false" @closeMyKeeps="close($event)"></myKeepsMenu>
    <!-- <navbar></navbar> -->
    <h5>User Home Page</h5>
    <div class="row ml-5">
        <div class="col-sm-3 keep">
          <img class="" src="http:\\placehold.it\250x200">
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
  .keep{
    width: 80px;
    height: 400px;
    justify-content: center;
    outline: 1px solid black;
    /* margin-left: 15px; */
    /* outline-style: solid;
    outline-color: red; */
  }
</style>