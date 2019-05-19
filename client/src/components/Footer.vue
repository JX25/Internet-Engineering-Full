<template>
  <footer>
    <div v-if="type === 'admin'" class="fixed-bottom">
      <p> {{ footer }}</p>
    </div>

    <div v-else-if="type === 'user'" class="fixed-bottom">
      <p> {{ footer }}</p>
    </div>

    <div v-else class="fixed-bottom">
      <p> {{ footer }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  footer: 'Projekt bilety autobusowe online </br> MEVN: MongoDB, Express.js, VueJS, Node.js',
  data: function () {
    return {
      type: 'admin'
    }
  }
}
</script>

<style scoped>
  .fixed-bottom{
    height: 400px;
  }
  p{
    text-align: center;
    vertical-align: middle;
  }
</style>
