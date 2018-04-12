<template>
  <div class="row mykeeps">
    <div class="col-sm-12 col-md-6 col-lg-3 ml-3 mr-3 ">
      <div class="card" @mouseenter="keepButtons = true" @mouseleave="keepButtons = false" style="width: 18rem;">
        <img class="card-img-top img" :src="imgLink" alt="Card image cap">
        <div class="card-body">
          <a :href="link" class="btn btn-link">{{keep.title}}</a>
          <hr>
          <div class="row">
            <div class="col text-center">
              <span>Keep {{keep.countKeep}}</span>
              <span>Share {{keep.countShare}}</span>
              <span>View {{keep.countView}}</span>
            </div>
          </div>
          <hr>
          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          <div>
            <div class="row">
              <div class="col-3 mr-3">
                <Button class="btn-danger"@click="removeKeep"><i class="fas fa-trash"></i></Button>
                </div>
                <div class="col-6">
                <div class="">
                  <label class="switch">
                    <input type="checkbox" v-model="shared">
                    <span class="slider round"></span>
                  </label>
                  <p class="">
                    <span v-if="!shared">Private</span>
                    <span v-if="shared">Shared</span>
                  </p>
                </div>
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyKeeps',
    data() {
      return {
        shareBox: false,
        keepButtons: false,
        keepToVault: false,
        selectedVault: "",
        shared: this.keep.shared,
        loggedIn: this.$store.state.userStatus,
        link: this.keep.link
      }
    },
    watch: {
      shared: function (shared) {
        console.log('switch keep', shared, this.keep)
        // var payload = [this.keep]
        if (shared == true) {
          this.keep.shared = 1
          //  payload.push(newStatus)
          console.log(this.keep, "payload")
          this.$store.dispatch('updateKeep', this.keep)
        } else {
          // var newStatus = 0
          this.keep.shared = 0
          // payload.push(newStatus)
          console.log(this.keep, "payload")
          this.$store.dispatch('updateKeep', this.keep)
        }
      }
    },
    computed: {
      imgLink() {
        return this.keep.img
      },
      vaults() {
        return this.$store.state.allUserVaults
      },
      // loggedIn() {
      //   return this.$store.state.userStatus
      // },

    },
    mounted() {
      // console.log('This mounted worked', this.$store.state.userStatus)
      // console.log('what am I', this.loggedIn)
    },

    props: ['keep', 'user'],
    methods: {
      removeKeep() {
        console.log('This is my delete keep', this.keep)
        this.$store.dispatch('deleteKeep', this.keep)
      },
      addToVault() {
        console.log('Im a user0', this.selectedVault)

        if (this.selectedVault === "") {
          return
        } else {
          console.log('Im a user1', this.user.id)
          // var userId = this.user.id
          console.log('Im a keep2', this.keep.id)
          // var keepId = (this.keep.id)
          console.log('Im a vault3', this.selectedVault)
          // var vaultId = (this.selectedVault)
          var payload = {
            userId: this.user.id,
            keepId: this.keep.id,
            vaultId: this.selectedVault,
          }
          console.log('Im a user4', payload)
          this.$store.dispatch('addToVault', payload)
        }
        this.selectedVault = ""
      }
      // close() {
      //   console.log('part 1')
      //   this.$emit('close')
      // },
    }
  }

</script>

<style>
  .mykeeps {
    height: 100%;
    margin-bottom: 50px;
  }

  .keep {
    width: 200px;
    height: 400px;
    justify-content: center;
    /* outline: 1px solid black; */
    margin: 0;
    border: 2px solid black;
    /* outline-style: solid;
      outline-color: red; */
  }
  .card{
  background-color: papayawhip;
  border: 2px solid black;
  border-radius: 25px;
}
  .menu:hover {
    color: red;
  }

  .img {
    padding-top: 15px; 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
  }

  /* switch */

  .switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 22px;
  }

  /* Hide default HTML checkbox */

  .switch input {
    display: none;
  }

  /* The slider */

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked+.slider {
    background-color: #2196F3;
  }

  input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>