<template>
  <div class="hello">
    <h1 v-if="type==2">Strona startowa administrator</h1>
    <h1 v-else-if="type==1">Strona startowa user</h1>
    <h1 v-else>Strona startowa gość</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    type: String,
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
