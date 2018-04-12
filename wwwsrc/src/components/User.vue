<template>
  <div class="user">
    <topBar @showDashboard="showDashboard = true" :user="user"></topBar>
    <dashboard v-if="showDashboard" @close="showDashboard = false" @closeDashboard="closeDashboard($event)"></dashboard>
    <!-- <h5>User Home Page</h5> -->
    <div class="row ml-4">
      <keeps :user="user" :keep='keep' v-for='keep in keeps' :key='keep.id'></keeps>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import Footer from './Footer'
  import TopBar from './TopBar'
  import Dashboard from './Dashboard'
  import Keeps from './Keeps'
  export default {
    name: 'User',
    components: {
      bottom: Footer,
      topBar: TopBar,
      keeps: Keeps,
      dashboard: Dashboard,
    },
    data() {
      return {
        showDashboard: false,
        user: this.$store.state.user,

      }
    },
    // mounted() {
    //     this.$store.dispatch('getUserVaults',this.user)
    //   },
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
      closeDashboard() {
        console.log('part 3')
        this.showDashboard = false
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
  .user{
    overflow-x: hidden;
    background-color: tan;
  }
</style>