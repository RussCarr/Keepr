<template>
  <div class="singleVault row">
    <div class="col-4">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <!-- <h1 class="location" >Where am I</h1> -->
              
              <div class="modal-header">
                <h3>These are your keeps in this Vault!</h3>
              </div>
              <div class="modal-body">
                <div class="row ml-4">
                  <vaultKeeps :keep='keep' v-for='keep in keeps' :key='keep.id'></VaultKeeps>
                  </div>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-light" @click="$emit('close')">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>


<script>
  import VaultKeeps from './VaultKeeps'
  export default {
    name: 'Vault',
    components: {
      vaultKeeps: VaultKeeps,
    },
    data() {
      return {

      }
    },
    computed: {
      keeps() {
        return this.$store.state.userStoredVaultKeeps
        console.log(this.$store.state.userStoredVaultKeeps)
      }
    },
    methods: {
      // close() {
      //   console.log('part 2')
      //   this.showSignIn = false
      // },

    }

  }
</script>

<style scoped>
  .vault {
    width: 80px;
    height: 400px;
    outline: 1px solid black;
    /* outline-style: solid;
    outline-color: red; */
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
.location{
  position: fixed;
 height: 120px;
  background-color: white;

}
  .modal-container {
    width: 70%;
    height: 75%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    overflow-y: scroll;
    border-radius: 25px;
  }

  .modal-header {
    /* margin-top: 0; */
    color: black;
    position: sticky;
    
 /* height: 140px; */
  background-color: white;
  z-index: 9999
  }

  .modal-body {
    margin: 20px 0;
  }
  .modal-footer {
    /* margin: 20px 0; */
    position: sticky;
    top: 120px;
  }
  .modal-default-button {
    float: right;
  }

  /*
       * The following styles are auto-applied to elements with
       * transition="modal" when their visibility is toggled
       * by Vue.js.
       *
       * You can easily play with the modal transition by editing
       * these styles.
       */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>