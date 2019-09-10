<template>
  <div>
    <table class="table table-striped">
      <tbody>
        <tr>
          <th>First Name</th>
          <td>
            <input v-model="model.user.name" />
          </td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>
            <input v-model="model.user.surname" />
          </td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <input v-model="model.user.email" />
          </td>
        </tr>
        <tr>
          <th>Phone number</th>
          <td>
            <input v-model="model.user.phone_number" />
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <button class="btn btn-success" @click="updateUser">Zapisz zmiany</button>
    <br />
    <br />
    <div class="info alert-info" v-if="response.length>0"><br/>{{response}}<br/></div>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import userService from "../Services/userService";

export default {
  name: "UserEditAccount",
  data() {
    return {
      model: {},
      email: "",
      response: ''
    };
  },
  methods: {
    loadUser: function() {
      userService.findByEmail(this.email).then(data => {
        this.model = data;
      });
    },
    updateUser: function() {
      userService
        .updateUserData(localStorage.token, this.model.user)
        .then(data => {
          this.response = data.message
        });
    }
  },
  created() {
    let decode = jwt_decode(localStorage.token);
    this.email = decode.email;
    this.loadUser();
    console.log(this.user);
  }
};
</script>
<style scoped>
</style>
