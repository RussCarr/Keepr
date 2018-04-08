<template>
  <div class="hello">
    <div>

      <ul>
        
        <li>
          <keep v-on:keepToEdit="keepToEdit($event)" :keep="keep" v-for="keep in keeps" :key="keep.id"></keep>
        </li>
        <ul>


          <li>keeps</i>
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
      <p>Create a keep</p>
      <form>
        <p>Name</p>
        <input v-model="newkeep.name" placeholder="name">
        <p>description</p>
        <input v-model="newkeep.description" placeholder="description">
        <p>price</p>
        <input v-model="newkeep.price" placeholder="price">
        <p>Kcal</p>
        <input v-model="newkeep.kCal" placeholder="kCal">
        <button @click.prevent="sendkeep" type="submit">Submit</button>
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
    <div>
        <p>Edit a keep</p>
        <form>
          <p>Name</p>
          <input v-model="editkeep.name" placeholder="name">
          <p>description</p>
          <input v-model="editkeep.description" placeholder="description">
          <p>price</p>
          <input v-model="editkeep.price" placeholder="price">
          <p>Kcal</p>
          <input v-model="editkeep.kCal" placeholder="kCal">
          <button @click.prevent="updatekeep" type="submit">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>

  import Keep from "./Keep"
  export default {
    name: 'Ents',
    components: {
      keep: Keep
    },
    data() {
      return {
        newkeep: {
          name: "",
          description: "",
          price: "",
          kCal: ""
        },
        editkeep: {
          name: "",
          description: "",
          price: "",
          kCal: ""
        },
        
      }
    },
    
    computed: {
      keeps() {
        return this.$store.state.allkeeps
      }
    },
    mounted(){
        this.$store.dispatch('getAllkeeps')
      
    },
    methods: {
      sendkeep() {
        console.log("This is a keep", this.newkeep)
        this.$store.dispatch('sendkeep', this.newkeep)
      },
      updatekeep() {
        console.log("This is the keep to edit", this.editkeep)
        this.$store.dispatch('updatekeep', this.editkeep)
      },
      getkeeps() {
        this.$store.dispatch('getAllkeeps')
      },
      keepToEdit(keepToEdit) {
        console.log('keep to edit',keepToEdit)
        this.editkeep = keepToEdit
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