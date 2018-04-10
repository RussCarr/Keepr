<template>
  <div class="col-sm-3 ml-3 mr-3 mt-5 vault">
    <h3 class="text-center">{{vault.name}}</h3>
    <hr>
    <h5 class="text-center">{{vault.description}}</h5>
    <hr>
    <div class="row">
      <hr>
      <div class="col text-center">
        <Button @click="showVault = true">open</Button>
        <Button>Delete</Button>
      </div>
    </div>
    <vault v-if="showVault" @close="showVault = false"></vault>
  </div>
</template>

<script>
  import Vault from './Vault'
  export default {
    name: 'MyVaults',
    conponents: {
      vault: Vault
    },
    data() {
      return {
        showVault: false,

      }
    },
    computed: {

    },
    props: ['vault'],
    methods: {
 
    }
  }

</script>

<style>
  .vault {
    width: 80px;
    height: 200px;
    justify-content: center;
    outline: 1px solid black;
    margin: 20px;
    /* outline-style: solid;
  outline-color: red; */
  }
</style>