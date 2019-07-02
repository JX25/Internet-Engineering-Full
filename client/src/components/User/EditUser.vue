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
        <tr>
          <th>Active</th>
          <td>
            <div v-if="model.user.active">
              <select v-model="model.user.active">
                <option value="true">Active</option>
                <option value="false">Not active</option>
              </select>
            </div>
            <div v-else>
              <select  v-model="model.user.active">
                <option value="false">Not active</option>
                <option value="true">Active</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br/>
    <button class="btn btn-success" @click="updateUser">Zapisz zmiany</button>
    <br/>     <br/> 
    <hr>
    <h3>Bilety danego użytkownika</h3>
    <div v-if="userTickets.length>0">
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Linia</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in userTickets">
            <td>{{ticket.serial_number}}</td>
            <td>{{ticket.line}}</td>
            <td>{{ticket.travel_date}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h3>Użytkownik nie kupił jeszcze żadnych biletów</h3>
    </div>
  </div>
</template>
<script>
import userService from "../Services/userService";
import ticketService from "../Services/ticketService"

export default {
  name: "UserDetails",
  data() {
    return {
      id: this.$route.params.id,
      model: {},
      userTickets: []
    };
  },
  methods: {
    loadUser: function() {
      userService.findById(this.id).then(data => {
        this.model = data;
        ticketService.allTicketsByEmail(localStorage.token, this.model.user.email).then(data =>{
            this.userTickets = data;
        })
      });
    },
    updateUser: function() {
        userService.updateUserData(localStorage.token, this.model.user).then(data =>{
            console.log(data)
        })
    }
  },
  created() {
    this.loadUser();
    console.log(this.user);
  }
};
</script>
<style scoped>
</style>
