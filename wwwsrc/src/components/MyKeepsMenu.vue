<template>
  <div class="myKeepsMenu">
    <!-- <topBar></topBar> -->
    <div class="row dashboard">
      <div class="col-sm-8">
        <h1 class="h3 text-dark font-weight-bold">Dashboard</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-alert " @click="showKeepCreator = true">New K</button>
        <button class="btn btn-alert" @click="showVaultCreator = true">New V</button>
        <!-- <button class="btn btn-alert " @click="">Create</button> -->
      </div>
      <div class="col-sm-2">
        <button class="btn btn-alarm px-4" @click="$emit('closeMyKeeps')">close</button>
      </div>
    </div>
    <keepCreator v-if="showKeepCreator" @close="showKeepCreator = false"></keepCreator>
    <vaultCreator v-if="showVaultCreator" @close="showVaultCreator = false"></vaultCreator>
    <!-- <myKeeps :project='project' v-for='project in projects' :key='project._id'></myKeeps> -->
  </div>
</template>

<script>
  import KeepCreator from './KeepCreator'
  import VaultCreator from './VaultCreator'
  // import MyKeeps from './MyKeeps'
  // import TopBar from './TopBar'
  export default {
    name: 'MyKeepsMenu',
    components: {
      // topBar: TopBar,
      // myKeeps: MyKeeps,
      keepCreator: KeepCreator,
      vaultCreator: VaultCreator,
    },
    data() {
      return {
        showKeepCreator: false,
        showVaultCreator: false
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
  .dashboard {
    outline: 1px solid black;
    margin: 20px;
    height: 60px;
    align-items: center;
  }
</style>