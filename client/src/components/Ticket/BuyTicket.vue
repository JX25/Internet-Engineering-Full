<template>
  <div>
    <div class="response">{{ response }}</div>
    <h1>Buy Tickets</h1>
    <div>
      <table class="table table-striped" v-for="line in lines">
        <tbody>
          <tr>
            <th>Nazwa lini</th>
            <th>Skąd</th>
            <th>Dokąd</th>
            <th>Ilośc miejsc</th>
            <th>Czas trwania</th>
          </tr>
          <tr>
            <td>{{ line.name}}</td>
            <td>{{ line.city_start}}</td>
            <td>{{ line.city_destination}}</td>
            <td>{{ line.seats }}</td>
            <td>{{ line.travel_time }}</td>
          </tr>
          <tr>
            <th scope="row">Godzina odjazdu autobusu</th>
          </tr>
          <tr>
            <td>
              <input type="date" v-model="date" />
            </td>
            <td>
              <select v-model="currentDep">
                <option v-for="dep in line.departures">{{dep}}</option>
              </select>
            </td>
            <td>
              <button class="btn btn-primary" @click="buyTicket(line)">Kup bilet</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import userService from "../Services/userService";
import lineService from "../Services/lineService";
import ticketService from "../Services/ticketService";
import jwt_decode from 'jwt-decode'

export default {
  name: "BuyTicket",
  data() {
    return {
      email: '',
      lines: [],
      ticket: {},
      response: "",
      date: '',
      currentDep : ''
    };
  },
  methods: {
    getAllLines() {
      lineService.allLines(localStorage.token).then( data =>{
        this.lines = data;
      })
     },
    buyTicket(line) {
      let decoded = jwt_decode(localStorage.token)
      this.email = decoded.email
      this.ticket = {
        line: line.code,
        price: line.price,
        travel_date: this.date + ' ' + this.currentDep,
        owner_email: this.email
      }
      ticketService.buyTicket(localStorage.token, this.ticket).then(data =>{
        this.response = data
      })
    },
    setCurrentDep(dep) {
      this.currentDep = dep
    }
  },
  created() {
    this.getAllLines();
  }
};
</script>
<style scoped>
</style>
