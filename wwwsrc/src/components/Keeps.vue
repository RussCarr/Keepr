<template>
      <div class="col-sm-2 ml-3 mr-3 keep">
      <!-- <img class="text-center" src="{{allSharedKeeps.img}}"> -->
      <hr>
      <div class="row">
        <div class="col text-center">
          <span>{keep.keepCount}#</span>
          <span>{keep.shareCount}#</span>
          <span>{keep.viewCount}#</span>
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
        </div>
      </div>
    </div>
 </template>

<script>
  export default {
    name: 'Keeps',
    data() {
      return {
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
      // submit() {
      //   this.$store.dispatch('loginUser', this.user)
      // },
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