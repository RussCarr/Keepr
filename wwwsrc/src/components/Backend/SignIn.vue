<template>
  <div class="signIn container">
    <transition name="modal">
      <div class="modal-mask">
        <div class="signInForm text-dark">
          <form class="border border-secondary rounded p-4" @submit.prevent="submit">
            <div class="form-group">
              <label class="ml-4" for="email">Email:</label>
              <input type="text" id="email" class="form-control" v-model="user.email" placeholder="my@address.com">
            </div>
            <div class="form-group">
              <label class="ml-4" for="password">Password:</label>
              <input type="password" id="password" class="form-control" v-model="user.password" placeholder="********">
            </div>
            <button class="btn btn-success px-4" type="submit">Sign in</button>
            <button class="btn btn-alarm px-4" @click="$emit('closeSignIn')">Register</button>
            <div class="text-center pt-4">
              <button class="btn btn-link px-4" @click="$emit('close')">Click here to just Browse.</button>
            </div>
          </form>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'SignIn',
    data() {
      return {
        user: {
          Password: '',
          Email: '',
        },
      }
    },
    methods: {
      submit() {
        this.$store.dispatch('loginUser', this.user)
        
        this.$emit('close')
      },
      // showRegisterForm() {
      //   this.$emit('showRegisterForm')
      // },
      // home() {
      //   console.log('Home part 1')
      //   this.$emit('close')
      // },
    }
  }

</script>

<style scoped>
  div.signIn {
    width: 95%;
    z-index: 2;
  }

  @media (min-width: 576px) {
    div.signIn {
      width: 50%;
    }
  }

  .signInForm {
    padding: 1rem;
  }

  form {
    background-color: rgb(219, 219, 219)
  }

  .button {
    display: flex;
    justify-content: flex-end;
    align-self: center;
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

  .signInForm {
    display: flex;
    align-self: center;
    margin-top: 125px;

  }
</style>