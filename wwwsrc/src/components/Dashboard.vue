<template>
  <div class="dashboard">
    <keepCreator v-if="showKeepCreator" @close="showKeepCreator = false"></keepCreator>
    <vaultCreator v-if="showVaultCreator" @close="showVaultCreator = false"></vaultCreator>
    <div class="row menu">
      <div class="col-sm-8">
        <h1 class="h3 text-light font-weight-bold ">Dashboard</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-info " @click="showKeepCreator = true">
          <i class="fab fa-kickstarter-k"></i>
        </button>
        <button class="btn btn-danger" @click="showVaultCreator = true">
          <i class="fas fa-archive"></i>
        </button>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-light px-4" @click="$emit('closeDashboard')">close</button>
      </div>
    </div>
    <div class="row ml-4">
      <div class="col">
        <div class="row">
          <div class="col">
            <h3 class="text-center text-light">My Vaults</h3>
          </div>
        </div>
        <div class="row">
          <myVaults :vault='vault' v-for='vault in vaults' :key='vault.id'></myVaults>
        </div>
        <div class="row">
          <div class="col">
          </div>
        </div>
      </div>
    </div>
    <div class="row ml-4">
      <div class="col">
        <div class="row">
          <div class="col">
            <h3 class="text-center text-light">My Keeps</h3>
          </div>
        </div>
        <div class="row">
          <myKeeps :keep='keep' v-for='keep in keeps' :key='keep.id'></myKeeps>

        </div>
      </div>
    </div>
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
      }
    },
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

    margin: 20px;
    height: 60px;
    align-items: center;
    background-color: teal;
    border-radius: 15px;
  }

  .dashboard {
    background-color: rgb(51, 36, 16);
    margin-bottom: 50px;
    padding-top: 30px;
    border-radius: 25px;
    margin-left: 20px;
    margin-right: 20px;
    
  }
</style>