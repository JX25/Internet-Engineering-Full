<template>
  <div>
    <div id="response">{{ response }}</div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">email</th>
          <th scope="col">Show Details</th>
          <th scope="col">Turn on/off</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-success">
              <router-link :to="{path: '/user/details/'+ user._id}">Show</router-link>
            </button>
          </td>
          <td>
            <button v-if="!user.active" class="btn btn-primary" @click="turnOn(user._id)">ON</button>
            <button v-else class="btn btn-warning" @click="turnOff(user._id)">OFF</button>
          </td>
          <td>
            <button class="btn btn-info">
              <router-link :to="{path: '/user/details/edit/'+ user._id}">Edit</router-link>
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="removeAccount(user._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
//import userService from "../Services/userService";
import adminService from "../Services/adminService";
//import lineService from "../Services/lineService";
//import ticketService from "../Services/ticketService";

export default {
  name: "AllUsers",
  props: ["type"],
  mixins: [adminService],
  data() {
    return {
      users: [],
      response: ""
    };
  },
  methods: {
    allUsers: function() {
      console.log("XZZC");
      adminService.allUsers(localStorage.token).then(data => {
        for (let i in data) {
          this.users.push(data[i]);
        }
      });
    },
    turnOn: function(id) {
      adminService
        .changeAccountActivity(localStorage.token, id, true)
        .then(data => {
          console.log(data);
          this.response = data;
          this.users = [];
          this.allUsers();
        });
    },
    turnOff: function(id) {
      adminService
        .changeAccountActivity(localStorage.token, id, false)
        .then(data => {
          console.log(data);
          this.response = data;
          this.users = [];
          this.allUsers();
        });
    },
    removeAccount: function(id) {
      if (confirm("Czy na pewno chcesz usunąć tego użytkownika z bazy?")) {
        adminService.removeAccount(localStorage.token, id).then(data => {
          console.log(data);
          this.response = data;
        });
        this.users = [];
        this.allUsers();
      }
    }
  },
  created() {
    this.allUsers();
  }
};
</script>
<style scoped>
.response {
  color: aqua;
}

button a {
  text-decoration: none;
  color: white;
}
</style>
