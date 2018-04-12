<template>
  <div class="welcome text-dark">
    <div class="pb-5">
      <div class="welcome-message container">
        <h1 class="text-center m-3">Welcome!</h1>
        <p>Please Sign into the Admin Panel</p>
        <ul>
          <li>Sign-in to access your private account</li>
        </ul>
      </div>
      <errorMsg v-if="authError.error">{{authError.message}}</errorMsg>
      <signIn v-on:showRegisterForm="showSignIn = false" v-if="showSignIn"></signIn>
      <register v-on:showSignInForm="showSignIn = true" v-if="!showSignIn"></register>
    </div>
  </div>
</template>

<script>
  import TopBar from './TopBar'
  import ErrorMsg from './Backend/ErrorMsg'
  import SignIn from './Backend/SignIn'
  import Register from './Backend/Register'
  export default {
    name: 'Welcome',
    components: {
      topBar: TopBar,
      errorMsg: ErrorMsg,
      signIn: SignIn,
      register: Register
    },
    data() {
      return {
        showSignIn: true
      }
    },
    computed: {
      authError() {
        return this.$store.state.authError
      }
    }
  }
</script>

<style scoped>
  .welcome-message {
    max-width: 600px;
  }

  @media (min-width: 576px) {
    .welcome-message {
      width: 75%;
    }
  }
</style>