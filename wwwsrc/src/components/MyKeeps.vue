<template>
      <div class="col-sm-2 ml-3 mr-3 keep">
      <!-- <img class="text-center" src="{{allSharedKeeps.img}}"> -->
      <hr>
      <div class="row">
        <div class="col text-center">
          <span>Keep {{keep.countKeep}}</span>
          <span>Share {{keep.countShare}}</span>
          <span>View {{keep.countView}}</span>
        </div>
        <div class="col-sm-4">
            <div class="row share-icons-wrapper">
              <div class="col share-icons">
                <p class="createdBy">{sharedProject.playCount}</p>
                <!-- <player class="centerFlex" :project="sharedProject" :largeButtons="false" :allowPlayCountUpdate="true"></player> -->
              </div>
              <div class="col share-icons">
                <p class="createdBy">{sharedProject.forkCount}</p>
                <a href="#" class="text-light" @click.prevent="forkProject">
                  <i class="fas fa-code-branch"></i>
                </a>
              </div>
              <div class="col share-icons">
                <p class="createdBy">{sharedProject.shareCount}</p>
                <a href="#" class="text-light" @click.prevent="shareBox= shareBox ? false : true">
                  <i class="fas fa-share"></i>
                </a>
              </div>
              <div class="col-sm-12">
                <div v-if="shareBox" class="shareButton">
                  <p>
                      <a :href='facebook' class="share-icon" @click='updateShareCount' target="_blank" title="Share on Facebook">
                          <i class="fab fa-facebook"></i>
                        </a>
                  </p>
                  <p>
                    <a class="share-icon" @click='updateShareCount' :href="twitter" target="_blank" >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </p>
              
                </div>
                <!-- <div v-if="mailBox" class="mail"> -->
                  <!-- <mail v-on:mailBox="mailBox=false" :loggedInUser="loggedInUser" :sharedProject="sharedProject"></mail> -->
                </div>
              </div>
           </div>
      </div>
      <hr>
      <a href=''>{{keep.title}}</a>
      <hr>
      <div class="row">
        <div class="col text-center">
          <Button>keep</Button>
          <Button>Share</Button>
          <Button>View</Button>
          <!-- //To me removed later -->
          <!-- <Button @click="removeKeep">delete</Button> -->
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
        // user: {
        //   Password: '',
        //   Email: '',
        //   showModal: true,
        // },
      }
    },
    computed: {
      //   link() {

      // var string = "https://twitter.com/intent/tweet?url=https://beatlocker.herokuapp.com/" + this.sharedProject._id
      // return   string + "&text=BeatLocker&via=BeatLocker"

      //   }
    },
    props:['keep'],
    methods: {
      removeKeep() {
        this.$store.dispatch('deleteKeep', this.keep)
      },
      // showRegisterForm() {
      //   this.$emit('showRegisterForm')
      // },
      // close() {
      //   console.log('part 1')
      //   this.$emit('close')
      // },
    }
  }

</script>

<style>
  .keep {
    width: 80px;
    height: 400px;
    justify-content: center;
    outline: 1px solid black;
    margin: 0;
    /* outline-style: solid;
    outline-color: red; */
  }
</style>