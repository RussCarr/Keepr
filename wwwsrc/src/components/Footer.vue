<template>
  <div class="col-sm-12 foot">
    <p class="text-center">Copywrite Research Driven Marketing 2018</p>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  .foot {
    height: 100px;
    background: teal;
    margin-top: 20px;
   padding-top: 20;
  }

  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
</style>