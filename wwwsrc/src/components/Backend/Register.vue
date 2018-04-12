<template>
  <div class="register container">
    <transition name="modal">
      <div class="modal-mask">
        <div class="registerForm text-dark">
          <form action="#" class="border border-secondary rounded p-4" @submit.prevent="submit">
            <div class="form-group">
              <label class="ml-4" for="username">Name: </label>
              <input type="text" id="username" class="form-control" v-model="user.username" placeholder="My Name">
            </div>
            <div class="form-group">
              <label class="ml-4" for="email">Email: </label>
              <input type="text" id="email" class="form-control" v-model="user.email" placeholder="my@address.com">
            </div>
            <div class="form-group">
              <label class="ml-4" for="password">Password: </label>
              <input type="password" id="password" class="form-control" v-model="user.password" placeholder="********">
            </div>
            <button type="submit" class="btn btn-success px-4">Register</button>
            <button class="btn btn-danger px-4" @click="$emit('closeRegister')">Sign In</button>
            <div class="text-center pt-4">
            </div>
          </form>
        </div>
        <button class="btn btn-dark px-4" @click="$emit('close')">Click here to just Browse.</button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        user: {
          username: "",
          email: "",
          password: ""
        }
      }
    },
    methods: {
      submit() {
        this.$emit('close')
        this.$store.dispatch('registerUser', this.user)
      },
      // showSignInForm() {
      //   this.$emit('showSignInForm')
      // }
    }
  }
</script>

<style scoped>
  div.register {
    width: 95%;
    z-index: 2;
  }

  @media (min-width: 576px) {
    div.register {
      width: 50%;
    }
  }

  form {
    background-color: rgb(219, 219, 219);
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    transition: opacity .3s ease;
    overflow: scroll
  }

  .registerForm {
    display: flex;
    align-self: center;
    margin-top: 125px;

  }
</style>