<template>
  <div class="dashboard">
    <keepCreator v-if="showKeepCreator" @close="showKeepCreator = false"></keepCreator>
    <vaultCreator v-if="showVaultCreator" @close="showVaultCreator = false"></vaultCreator>
    <div class="row menu">
      <div class="col-sm-8">
        <h1 class="h3 text-dark font-weight-bold">Dashboard</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-alert " @click="showKeepCreator = true">New K</button>
        <button class="btn btn-alert" @click="showVaultCreator = true">New V</button>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-alarm px-4" @click="$emit('closeDashboard')">close</button>
      </div>
    </div>
    <div class="row ml-4">
      <p>Vaults</p>
      <myVaults :vault='vault' v-for='vault in vaults' :key='vault.id'></myVaults>
    </div>
    <div class="row ml-4">
      <p>Keeps</p>
      <myKeeps :keep='keep' v-for='keep in keeps' :key='keep.id'></myKeeps>
    </div>
  </div>
</template>

<script>
  import KeepCreator from './KeepCreator'
  import VaultCreator from './VaultCreator'
  import MyKeeps from './MyKeeps'
  import MyVaults from './MyVaults'
  export default {
    name: 'Dashboard',
    components: {
      myKeeps: MyKeeps,
      myVaults: MyVaults,
      keepCreator: KeepCreator,
      vaultCreator: VaultCreator,
    },
    data() {
      return {
        showKeepCreator: false,
        showVaultCreator: false,
        // user: {}
      }
    },
    // props:['user'],
    computed: {
      vaults() {
        return this.$store.state.allUserVaults
      },
      keeps() {
        return this.$store.state.allUserKeeps
      },
    }
  }

</script>

<style>
  .menu {
    outline: 1px solid black;
    margin: 20px;
    height: 60px;
    align-items: center;
  }
</style>