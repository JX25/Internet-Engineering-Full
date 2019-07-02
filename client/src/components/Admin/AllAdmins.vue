<template>
  <div>
      <table class="table table-bordered table-dark table-striped">
          <thead>
              <tr>
                  <th scope='col'># </th>
                  <th scope='col'>email </th>
                  <th scope='col'>Admin </th>
                  <th scope='col'>Active </th>
                  <th scope='col'>Phone </th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in admins">
                <th scope="row"> {{ index }} </th>
                <td> {{ user.email }} </td>
                <td> {{ user.is_admin }} </td>
                <td> {{ user.active }} </td>
                <td> {{ user.phone_number }} </td>
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
     admins: []
    };
  },
  methods: {
    allAdmins : function() {
        console.log("XZZC")
        adminService.allAdmins(localStorage.token).then(data => {
            for(let i in data){
                this.admins.push(data[i])
            }
                       
        });
    }
  },
  created() {
      this.allAdmins()
  },
};
</script>
<style scoped>
.response {
  color: aqua;
}
</style>
