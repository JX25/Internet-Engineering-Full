<template>
  <div>
    <h1>Resetowanie hasła dla konta: {{this.email}}</h1>
    <div v-if="result">Twoje hasło zostało zresetowane wyloguj się i zaloguj z użyciem nowego hasła.</div>
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode'
import userService from "../Services/userService";

export default {
  name: "ResetPassword",
  data() {
    return {
      email: "",
      response: "",
      result: ""
    };
  },
  methods: {
    resetPassword: function(token, id) {
      userService.resetPass(token, id).then(data => {
        this.model = data;
      });
    },
  },
  created() {
    let decoded = jwt_decode(localStorage.token)
    this.email = decoded.email
    console.log(decoded)
    if(confirm("Czy chcesz zresetować swoje hasło?")){
        console.log(localStorage.token, decoded.userId)
        this.resetPassword(localStorage.token, decoded.userId)
    }
  }
};
</script>
<style scoped>
</style>
