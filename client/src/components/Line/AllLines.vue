<template>
  <div>
    <div id="response">{{ response.message }}</div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Code</th>
          <th scope="col">Start</th>
          <th scope="col">Stop</th>
          <th scope="col">Price</th>
          <th scope="col">Seats</th>
          <th scope="col">Travel time</th>
          <th scope="col">Departures</th>
          <th scope="col">Show</th>          
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(line, index) in lines">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ line.name }} </td>
          <td>{{ line.code }} </td>
          <td>{{ line.city_start }} </td>
          <td>{{ line.city_destination }} </td>
          <td>{{ line.price }} </td>
          <td>{{ line.seats }} </td>
          <td>{{ line.travel_time }} </td>
          <td><span v-for="time in line.departures">{{time}},&nbsp;</span></td>
            <td><button class="btn btn-success disabled">Show</button></td>        
          <td><button class="btn btn-danger" @click="removeLine(line._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
//import userService from "../Services/userService";
//import adminService from "../Services/adminService";
import lineService from "../Services/lineService";
//import ticketService from "../Services/ticketService";

export default {
  name: "AllLines",
  props: ["type"],
  mixins: [lineService],
  data() {
    return {
      lines: [],
      response: ""
    };
  },
  methods: {
    allLines: function() {
      console.log("XZZC");
      lineService.allLines(localStorage.token).then(data => {
        for (let i in data) {
          this.lines.push(data[i]);
        }
      });
    },
    removeLine: function(id) {
      if (confirm("Czy na pewno chcesz usunąć tą linię z bazy?")) {
        lineService.removeLine(localStorage.token, id).then(data => {
          console.log(data);
          this.response = data;
            this.lines = [];
            this.allLines();
        });
      }
    }
  },
  created() {
    this.allLines();
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
