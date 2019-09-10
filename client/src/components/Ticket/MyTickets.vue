<template>
  <div>
    <h2>Twoje bilety {{email}}</h2>
    <div v-if="myTickets.length === 0">
      <h3>Brak kupionych bilketów</h3>
    </div>
    <div>
      <table class="table table-striped">
        <tr>
          <th>SN</th>
          <th>Linia</th>
          <th>Data podróży</th>
          <th>Cena</th>
          <th>Data zakupu</th>
        </tr>
        <tr v-for="myTicket in myTickets">
          <td>{{ myTicket.serial_number }} </td>
          <td>{{ myTicket.line }} </td>
          <td>{{ myTicket.travel_date }} </td>
          <td>{{ myTicket.price }} </td>
          <td>{{ myTicket.purchase_date.slice(0, 25) }} </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import ticketService from "../Services/ticketService";
import userService from "../Services/userService";
import jwt_decode from "jwt-decode";
export default {
  name: "MyTickets",
  data() {
    return {
      myTickets: [],
      email: ""
    };
  },
  methods: {
    loadUser: function() {
      userService.findById(this.id).then(data => {
        this.model = data;
      });
    },
    getTickets: function(token, email) {
      ticketService.allTicketsByEmail(token, email).then(data => {
        this.myTickets = data;
      });
    }
  },
  created() {
    let decoded = jwt_decode(localStorage.token);
    this.email = decoded.email;
    this.getTickets(localStorage.token, this.email);
  }
};
</script>
<style scoped>
</style>
