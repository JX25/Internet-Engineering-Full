<template>
  <footer>
    <div v-if="this.type == 'true'" class="fixed-bottom bg-danger">
      <p> {{ this.footer1 }} <br/> {{ this.footer2 }} </p>
    </div>

    <div v-else-if="this.type == 'false'" class="fixed-bottom bg-dark">
      <p> {{ this.footer1 }} <br/> {{ this.footer2 }} </p>
    </div>

    <div v-else class="fixed-bottom bg-light">
      <p class="text-dark"> {{ this.footer1 }} <br/> {{ this.footer2 }} </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: function () {
    return {
      type: '',
      footer1: `Projekt bilety autobusowe online.`,
      footer2:  `MEVN: MongoDB, Express.js, VueJS, Node.js`
    }
  },
  mounted(){
      if(localStorage.getItem('type')){
        console.log("DDDDDD")
        this.type = localStorage.getItem('type')
        console.log((this.type === 'false'))
      }
  },
  watch: {
    type: function () {
      console.log("XDXDXsD")
      this.type = localStorage.getItem('type')
    }
  }
}

</script>

<style scoped>
  .fixed-bottom{
    height: 100px;
  }
  p{
    padding: 20px;
    text-align: center;
    vertical-align: middle;
    font-family: Tahoma;
    font-size: 18pt;
    color: #fff;
  }
</style>
