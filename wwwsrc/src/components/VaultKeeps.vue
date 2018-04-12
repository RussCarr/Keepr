<template>
  <div class="row keeps">
    <div class="col-sm-12 col-md-6 col-lg-3 ml-3 mr-3 ">
      <div class="card" @mouseenter="keepButtons = true" @mouseleave="keepButtons = false" style="width: 18rem;">
        <img class="card-img-top img" :src="imgLink" alt="Card image cap">
        <a class="text-center" :href="link" @click="addViewCount" target="_blank">{{keep.title}}</a>
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
          <div v-if="loggedIn">
            <div class="row">
              <div v-if="keepButtons = keepButtons ? true: false" class="col-12 text-center ">
                <Button class="btn btn-dark" @click="shareBox = shareBox ? false : true">
                  <i class="fas fa-share-alt"></i>
                </Button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-12 text-center">
                <div v-if="shareBox" class="shareButton">
                  <a :href='facebook' class="share-icon" @click='addShareCount' target="_blank" title="Share on Facebook">
                    <i class="fa-2x fab fa-facebook"></i>
                  </a>
                  <a class="share-icon" @click='addShareCount' :href="twitter" target="_blank">
                    <i class="fa-2x fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div v-if="keepToVault" @mouseleave="keepToVault = false" class="text-center keepButton mt-3">
                <select v-model="selectedVault" @change="addToVault">
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
    name: 'VaultKeeps',
    data() {
      return {
        shareBox: false,
        keepButtons: false,
        keepToVault: false,
        selectedVault: "",
        shared: this.keep.shared,

        link: this.keep.link
      }
    },
    watch: {
      shared: function (shared) {
        // console.log('switch keep', shared, this.keep)
        if (shared == true) {
          this.keep.shared = 1
          // console.log(this.keep, "payload")
          this.$store.dispatch('updateKeep', this.keep)
        } else {
          this.keep.shared = 0
          // console.log(this.keep, "payload")
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
      loggedIn() {
        return this.$store.state.userStatus
      },
      facebook() {
        var string = "https://www.facebook.com/sharer/sharer.php?u=https://localhost:5000/" + this.keep.id
        return string + "&t=Keepr"
      },
      twitter() {
        var string = "https://twitter.com/intent/tweet?url=https://localhost:5000/" + this.keep.id
        return string + "&text=Keepr&via=Keepr"
      }
    },
    props: ['keep', 'user'],
    methods: {
      removeKeep() {
        var payload = {
          userId: this.user.id,
          keepId: this.keep.id,
          vaultId: this.selectedVault,
        }
        // console.log('This is my delete Vaultkeep', payload)
        this.$store.dispatch('deleteVaultKeep', payload)
      },
      moveToOtherVault() {
        // console.log('Im a user id', this.user.id)
        // console.log('Im a keep id', this.keep.id)
        // console.log('Im a vault id', this.selectedVault)
        var payload = {
          userId: this.user.id,
          keepId: this.keep.id,
          vaultId: this.selectedVault,
        }
        // console.log('Im a payload', payload)
        this.$store.dispatch('moveToOtherVault', payload)
        this.selectedVault = ""
      },
      addViewCount() {
        var newKeep = this.keep
        var newCount = newKeep.countView + 1
        newKeep.countView = newCount
        // console.log('updateViewCount',newKeep)
        this.$store.dispatch('updateKeep', newKeep)
      },
      addShareCount() {
        var newKeep = this.keep
        var newCount = newKeep.countShare + 1
        newKeep.countShare = newCount
        // console.log('updateShareCount',newKeep)
        this.$store.dispatch('updateKeep', newKeep)
      }

    }
  }

</script>

<style>
  .keeps {
    height: 100%;
  }

  .keep {
    width: 200px;
    height: 400px;
    justify-content: center;
    margin: 0;
    border: 2px solid black;
  }

  .menu:hover {
    color: red;
  }

  .card {
    padding: 20px;
    margin-top: 20px;
  }

  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    padding-bottom: 15px;
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