<template>
  <div class="keepPage">
    <div class="keep" >

      <ul>
        <li>keeps
          <p>Name:</p>
          <p>{{keep.name}}</p>
          <p>Description:</p>
          <p>{{keep.description}}</p>
          <p>price</p>
          <p>{{keep.price}}</p>
          <p>Kcal</p>
          <p>{{keep.kCal}}</p>
        </li>
      </ul>
      <button @click="deletekeep">Delete keep</button>
      <li>
        <a href='#' @click="keepToEdit">
          <i class="fas fa-edit"></i>
        </a>
      </li>
    </div>
 
    <!-- <a href='#' @click="users">keep</a>
            
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
    <!-- <div> -->
    <!-- <p>Create a keep</p> -->
    <!-- <form>
          <p>Name</p>
          <input v-model="keep.name" placeholder="name">
          <p>description</p>
          <input v-model="keep.description" placeholder="description">
          <p>price</p>
          <input v-model="keep.price" placeholder="price">
          <p>Kcal</p>
          <input v-model="keep.kCal" placeholder="kCal">
          <button @click.prevent="sendkeep" type="submit">Submit</button>
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
    name: 'keep',
    data() {
      return {
                

      }
    },
    props: ['keep'],
    methods: {
      sendkeep() {
        this.$store.dispatch('sendkeep', this.keep)
      },
      users() {
        this.$store.dispatch('getAllUsers')
      },
      deletekeep() {
        // console.log("This is a delte keep", this.keep)
        this.$store.dispatch('deletekeep', this.keep)
      },
      keepToEdit() {
        // console.log("This is a keep", this.keep)
        this.$emit('keepToEdit', this.keep)
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