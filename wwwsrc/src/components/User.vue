<template>
  <div class="user">
    <topBar @showMyKeeps="showMyKeeps = true" :user="user"></topBar>
    <myKeepsMenu v-if="showMyKeeps" @close="showMyKeeps = false" @closeMyKeeps="closeKeeps($event)"></myKeepsMenu>
    <!-- <navbar></navbar> -->
    <h5>User Home Page</h5>
    <div class="row ml-4">
        <!-- <myBeats :project='project' v-for='project in projects' :key='project._id'></myBeats> -->
      <keeps :keep='keep' v-for='keep in keeps' :key='keep.id'></keeps>
    </div>

  </div>
</template>

<script>
  import TopBar from './TopBar'
  import MyKeepsMenu from './MyKeepsMenu'
  import Keeps from './Keeps'
  export default {
    name: 'User',
    components: {
      topBar: TopBar,
      keeps: Keeps,
      myKeepsMenu: MyKeepsMenu,
    },
    data() {
      return {
        showMyKeeps: true,
        user: this.$store.state.user,
        
      }
    },
    computed: {
      // getUser() {
      //   return this.$store.state.user
      // },
      keeps() {
        return this.$store.state.allSharedKeeps
        console.log(this.$store.state.allSharedKeeps)
      }
    },
    methods: {
      closeKeeps() {
        console.log('part 3')
        this.showMyKeeps = false
      }
    }

  }
</script>

<style scoped>
  .keep {
    width: 80px;
    height: 400px;
    justify-content: center;
    outline: 1px solid black;
    /* margin-left: 15px; */
    /* outline-style: solid;
    outline-color: red; */
  }
</style>