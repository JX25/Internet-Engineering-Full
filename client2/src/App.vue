<template>
  <div id="app">
    <TopMenu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'
import Footer from './components/Footer'
import Register from './components/Register'
export default {
  name: 'App',
  components: {Footer, TopMenu, Register}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
