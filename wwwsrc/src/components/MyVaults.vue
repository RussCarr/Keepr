<template>
  <div class="col-2 ml-3 mr-3 mt-5 vault">
    <h3 class="text-center text-light">{{vault.name}}</h3>
    <hr>
    <h5 class="text-center text-light">{{vault.description}}</h5>
    <hr>
    <div class="row">
      <hr>
      <div class="col text-center">
        <Button class="btn btn-sm btn-info" @click="getVaultKeeps">open</Button>
        <Button class="btn btn-sm btn-danger" @click="removeVault">Delete</Button>
      </div>
    </div>
    <vault v-if="showVault" @close="showVault = false"></vault>
  </div>
</template>

<script>
  import Vault from './Vault'
  export default {
    name: 'MyVaults',
    components: {
      vault: Vault
    },
    data() {
      return {
        showVault: false,
      }
    },
    props: ['vault'],
    methods: {
      removeVault() {
        this.$store.dispatch('removeVault',this.vault)
      },
      getVaultKeeps() {
        this.showVault = true
        this.$store.dispatch('getUserStoredVaultKeeps',this.vault.id)
      }
    }
  }

</script>

<style>
  .vault {
    width: 150px;
    height: 200px;
    justify-content: center;
    margin: 20px;
    border: 2px solid black;
    border-radius: 25px;
  background-color: tan
  }
</style>