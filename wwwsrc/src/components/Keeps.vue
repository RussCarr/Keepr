<template>
  <div class="row keeps">
    <div class="col-sm-12 col-md-6 col-lg-3 ml-3 mr-3 ">
      <div class="card" @mouseenter="keepButtons = true" @mouseleave="keepButtons = false" style="width: 18rem;">
        <img class="card-img-top img" :src="imgLink" alt="Card image cap">
        <div class="card-body">
          <hr>
          <div class="row">
            <div class="col text-center">
              <span>Keep {{keep.countKeep}}</span>
              <span>Share {{keep.countShare}}</span>
              <span>View {{keep.countView}}</span>
            </div>
          </div>
          <hr>
          <h5 class="card-title">{{keep.title}}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          <div v-if="loggedIn = false">
            <div class="row">
              <div v-if="keepButtons = keepButtons ? true: false" class="col-12 text-center ">
                <Button @click="keepToVault = keepToVault ? false : true">K</Button>
                <Button @click="shareBox = shareBox ? false : true">S</Button>
                <Button>asdf</Button>

                <Button>V</Button>
                <!-- //To me removed later -->
                <Button @click="removeKeep">delete</Button>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="">
                    <label class="switch">
                      <input type="checkbox" v-model="shared">
                      <span class="slider round"></span>
                    </label>
                    <p class="text-center">
                      <span v-if="!shared">Private</span>
                      <span v-if="shared">Shared</span>
                    </p>
                  </div>
                </div>
              </div>
              <hr>
              <div class="col">
                <div v-if="shareBox" class="shareButton">
                  <p>
                    <!-- <a :href='facebook' class="share-icon" @click='updateShareCount' target="_blank" title="Share on Facebook"> -->
                    <i class="fab fa-facebook"></i>
                    <!-- </a> -->
                  </p>
                  <p>
                    <!-- <a class="share-icon" @click='updateShareCount' :href="twitter" target="_blank"> -->
                    <i class="fab fa-twitter"></i>
                    <!-- </a> -->
                  </p>

                </div>
              </div>
            </div>
            <!-- <div v-if="mailBox" class="mail">
                <mail v-on:mailBox="mailBox=false" :loggedInUser="loggedInUser" :sharedProject="sharedProject"></mail>
              </div> -->
            <div class="col">
              <div v-if="keepToVault" @mouseleave="keepToVault = false" class="text-center keepButton mt-3">
                <select v-model="selectedVault" @click="addToVault">
                  <option disabled value="">Please select one</option>
                  <option v-for="vault in vaults" :key="vault.id" :value="vault.id">{{vault.name}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Keeps',
    data() {
      return {
        shareBox: false,
        keepButtons: false,
        keepToVault: false,
        selectedVault: "",
        shared: false,
        loggedIn: false
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
    },
    mounted() {
      this.loggedIn = this.$store.state.userStatus
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
  .keeps{
    height: 100%;
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

  .menu:hover {
    color: red;
  }

  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
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