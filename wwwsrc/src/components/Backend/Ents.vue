<template>
  <div class="hello">
    <div>

      <ul>
        <li>
          <a href='#' @click="getBurgers">Posts</a>
        </li>
        <li>
          <burgers :burger="burger" v-for="burger in Burgers" :key="burger.id"></burgers>
        </li>
        <ul>


          <li>Posts</i>
          </li>

          <li>
            <i class="fas fa-edit"></i>
          </li>
          <li>
            <i class="fas fa-trash"></i>
          </li>
        </ul>
      </ul>
    </div>
    <div>
      <p>Create a Burger</p>
      <form>
        <p>Name</p>
        <input v-model="burger.name" placeholder="name">
        <p>description</p>
        <input v-model="burger.description" placeholder="description">
        <p>price</p>
        <input v-model="burger.price" placeholder="price">
        <p>Kcal</p>
        <input v-model="burger.kCal" placeholder="kCal">
        <button @click.prevent="sendBurger" type="submit">Submit</button>
      </form>

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
  </div>
</template>

<script>

  import Posts from "./Posts"
  export default {
    name: 'Ents',
    components: {
      burgers: Posts
    },
    data() {
      return {
        burger: {
          name: "",
          description: "",
          price: "",
          kCal: ""
        },
      }
    },
    computed: {
      Posts() {
        // return this.$store.state.allBurgers
      }
    },
    mounted(){
        this.$store.dispatch('getPosts')
      
    },
    methods: {
      sendBurger() {
        console.log("This is a burger", this.burger)
        this.$store.dispatch('sendBurger', this.burger)
      },
      getBurgers() {
        this.$store.dispatch('getAllBurgers')
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