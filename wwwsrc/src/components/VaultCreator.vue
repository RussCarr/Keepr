<template>
  <!-- template for the modal component -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h4>
              Create a Vault
            </h4>
            <button class="btn btn-danger" @click="$emit('close')">
              close
            </button>
          </div>
          <div class="modal-body">
            <form>
              <input v-model="newVault.name" placeholder="name" required>
              <p>Title...required</p>
              <input v-model="newVault.description" placeholder="description" required>
              <p>Description...required</p>
              <button class="btn btn-success form-btn" @click.prevent="sendVault" type="submit">Submit</button>
            </form>
          </div>
               </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
  export default {
    name: 'VaultCreator',
    data() {
      return {
        newVault: {
          description: "",
          name: "",
          userId: this.$store.state.user.id
        },
      }
    },
    methods: {
      sendVault() {
        // console.log("This is a Vault", this.newVault)
        this.$store.dispatch('createVault', this.newVault)
        this.newVault = {
          name: "",
          description: ""
        }
        this.$emit('close')
      },
    }
  }

</script>

<style scoped>
  
  .form-btn {
  margin-left: 335px;
  }
  input {
    width: 400px;
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

  .modal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    border-radius: 25px;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
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