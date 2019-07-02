<template>
  <div id="app">
    <TopMenu :type="type"  @changeType="changeType" />
    <router-view :type="type" @changeType="changeType" />
    <Footer/>
  </div>
</template>

<script>
import TopMenu from "./components/View/TopMenu";
import Footer from "./components/View/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: { Footer, TopMenu },
  data: function() {
    return {
      type: localStorage.type || '999'
    };
  },
  methods: {
    changeType: function(newType) {
      console.log("XKURWAD",localStorage.type, newType)
      this.type = newType;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
