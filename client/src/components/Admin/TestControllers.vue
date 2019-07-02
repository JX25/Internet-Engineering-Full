<template>
  <div>
    <div class="buttons">
      <table class="table table-striped">
        <tbody>
          <tr>
            <td>User Controller</td>
            <td>
              <button class="btn btn-primary" @click="user">Check</button>
            </td>
            <td class="response">{{userCheck}}</td>
          </tr>
          <tr>
            <td>Admin Controller</td>
            <td>
              <button class="btn btn-primary" @click="admin">Check</button>
            </td>
            <td class="response">{{adminCheck}}</td>
          </tr>
          <tr>
            <td>Line Controller</td>
            <td>
              <button class="btn btn-primary" @click="line">Check</button>
            </td>
            <td class="response">{{lineCheck}}</td>
          </tr>
          <tr>
            <td>Ticket Controller</td>
            <td>
              <button class="btn btn-primary" @click="ticket">Check</button>
            </td>
            <td class="response">{{ticketCheck}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import userService from "../Services/userService";
import adminService from "../Services/adminService";
import lineService from "../Services/lineService";
import ticketService from "../Services/ticketService";

export default {
  name: "TestControllers",
  props: ["type"],
  //  mixins: [userService],
  data() {
    return {
      userCheck : '',
      adminCheck : '',
      lineCheck : '',
      ticketCheck : ''
    };
  },
  methods: {
    user: function() {
      userService.testController().then(data => (this.userCheck = data));
    },
    admin: function() {
      adminService.testController().then(data => (this.adminCheck = data));
    },
    line: function() {
      lineService.testController().then(data => (this.lineCheck = data));
    },
    ticket: function() {
      ticketService.testController().then(data => (this.ticketCheck = data));
    }
  }
};
</script>
<style scoped>
.response {
  color: #0a6b2a;
}
</style>
