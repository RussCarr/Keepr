<template>
  <div class="myKeepsMenu">
    <!-- <topBar></topBar> -->
    <div class="row">
      <div class="col header">
        <h2>My Keeps</h2>
        <button class="btn btn-alarm px-4" @click="$emit('closeMyKeeps')">close</button>
      </div>
    </div>
    <!-- <myKeeps :project='project' v-for='project in projects' :key='project._id'></myKeeps> -->
  </div>
</template>

<script>
  // import MyKeeps from './MyKeeps'
  // import TopBar from './TopBar'
  export default {
    name: 'MyKeepsMenu',
    components: {
      // topBar: TopBar,
      // myKeeps: MyKeeps,
    },
    data() {
      return {

      }
    },
    computed: {
      //   projects() {
      //     return this.$store.state.userProjects
      //   },
      //   updateProjects(){
      //     return this.$store.dispatch('getUserProjects',project.userId)

      //   },

      // },
      // methods: {
      //   getProject() {
      //     this.$store.dispatch()
      //   }
    }
  }

</script>

<style>
</style>