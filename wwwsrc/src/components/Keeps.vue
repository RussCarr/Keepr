<template>
    <div>

    </div><!-- template for the modal component -->
      
    </template>
    
    <script>
      export default {
        name: 'Keeps',
        data() {
          return {
            user: {
              Password: '',
              Email: '',
              showModal: true,
            },
          }
        },
        methods: {
          submit() {
            this.$store.dispatch('loginUser', this.user)
          },
          showRegisterForm() {
            this.$emit('showRegisterForm')
          },
          close() {
            console.log('part 1')
            this.$emit('close')
          },
        }
      }
    
    </script>
    
    <style scoped>
 
      </style>