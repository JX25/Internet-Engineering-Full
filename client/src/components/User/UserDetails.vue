<template>
  <div>
    <table class="table table-striped">
      <tbody>
        <tr>
          <th>First Name</th>
          <td>{{ model.user.name }}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{{ model.user.surname }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ model.user.email }}</td>
        </tr>
        <tr>
          <th>Phone number</th>
          <td>{{ model.user.phone_number }}</td>
        </tr>
        <tr>
          <th>Account created</th>
          <td>{{ model.user.created_date }}</td>
        </tr>
        <tr>
          <th>Active</th>
          <td><p v-if="model.user.active">+++</p><p v-else>---</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import userService from "../Services/userService";

export default {
  name: "UserDetails",
  data() {
    return {
      id: this.$route.params.id,
      model: {}
    };
  },
  methods: {
    loadUser: function() {
      userService.findById(this.id).then(data => {
        this.model = data;
      });
    },
    getTickets : function(email){
        ticketService.allUserTicketsByEmail(email).then
    }
  },
  created() {
    this.loadUser();
    this.getTickets();
    console.log(this.user);
  }
};
</script>
<style scoped>
</style>
