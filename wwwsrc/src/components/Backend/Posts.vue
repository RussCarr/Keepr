<template>
    <div class="burger">
      <div>
  
        <ul>
          <li>Posts
              <p>Name:</p>  
            <p>{{Post.name}}</p>
              <p>Description:</p>
              <p>{{burger.description}}</p>
              <p>price</p>
              <p>{{burger.price}}</p>
              <p>Kcal</p>
              <p>{{burger.kCal}}</p>
          </li>
        </ul>
        <button @click="deleteBurger">Delete Burger</button>
            <!-- <a href='#' @click="users">Burger</a>
            
            <li>Roles - Create Date - </i>
            </li>
  
            <li>
              <i class="fas fa-edit"></i>
            </li>
            <li>
              <i class="fas fa-trash"></i>
            </li>
          </ul> -->
        <!-- </ul> -->
      </div>
      <!-- <div> -->
        <!-- <p>Create a Burger</p> -->
        <!-- <form>
          <p>Name</p>
          <input v-model="burger.name" placeholder="name">
          <p>description</p>
          <input v-model="burger.description" placeholder="description">
          <p>price</p>
          <input v-model="burger.price" placeholder="price">
          <p>Kcal</p>
          <input v-model="burger.kCal" placeholder="kCal">
          <button @click.prevent="sendBurger" type="submit">Submit</button>
        </form> -->
  
        <!-- <form>
            <p class="left">To:</p>
            <input class="w-5 mb-2" v-model="formData.to" placeholder="someone@somewhere.com">
            <!-- <p class="left">From:</p>
            <!-- <input v-model="formData.from" placeholder="Who are you?" disabled>
            <!-- <p class="left mt-1">Message:</p> 
            <!-- <p class="text-center">{{loggedInUser.name}} created a beat and wants you to listen!</p>
            <!-- <p>BeatMaster@beatlocker.com</p> 
            <!-- <input v-model="formData.subject" placeholder="subject" disabled> 
            <!-- <hr>
            <p>
              <button @click.prevent="sendClose">Send</button>
            </p>
            </form> -->
    
    </div>
  </template>
  
  <script>
    export default {
      name: 'Burger',
      data() {
        return {
         
        }
      },
      props: ['burger'],
      methods: {
        sendBurger(){
          this.$store.dispatch('sendBurger',this.burger)
        },
        users() {
          this.$store.dispatch('getAllUsers')
        },
        deleteBurger() {
          console.log("This is a delte burger",this.burger)
          this.$store.dispatch('deleteBurger',this.burger.id)
        }
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    h1,
    h2 {
      font-weight: normal;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      display: inline-block;
      margin: 0 10px;
    }
  
    a {
      color: #42b983;
    }
  </style>