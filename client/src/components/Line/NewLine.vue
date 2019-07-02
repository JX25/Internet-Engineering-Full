<template>
  <div>
    <div class="response">{{ response.message }}</div>

    <div class="register-box">
      <form class="form-inline" @submit.prevent>
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Nazwa</label>
          <div class="col-md-4">
            <input
              id="name"
              name="name"
              type="text"
              placeholder
              class="form-control input-md"
              required
              v-model="name"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Kod</label>
          <div class="col-md-4">
            <input
              id="Code"
              name="Code"
              type="text"
              placeholder
              class="form-control input-md"
              required
              v-model="code"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Start</label>
          <div class="col-md-4">
            <input
              id="cityStart"
              name="cityStart"
              type="text"
              placeholder
              class="form-control input-md"
              required
              v-model="cityStart"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" for="passwordinput">End</label>
          <div class="col-md-4">
            <input
              id="cityEnd"
              name="cityEnd"
              type="text"
              placeholder
              class="form-control input-md"
              required
              v-model="cityEnd"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" for="passwordinput">Odjazdy [;]</label>
          <div class="col-md-4">
            <input
              id="departures"
              name="departures"
              type="text"
              placeholder
              class="form-control input-md"
              required
              v-model="departuresString"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Cena</label>
          <div class="col-md-4">
            <input
              id="price"
              name="price"
              type="number"
              placeholder
              class="form-control input-md"
              required
              v-model="price"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Ilość miejsc</label>
          <div class="col-md-4">
            <input
              id="seats"
              name="seats"
              type="number"
              placeholder
              class="form-control input-md"
              required
              v-model="seats"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Czas podróży [XhYm]</label>
          <div class="col-md-4">
            <input
              id="travelTime"
              name="travelTime"
              type="text"
              placeholder
              class="form-control input-md"
              required
              v-model="travelTime"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-4 control-label" for="singlebutton"></label>
          <div class="col-md-4">
            <button
              id="singlebutton"
              name="singlebutton"
              class="btn btn-primary"
              @click="addNewLine"
            >Dodaj nową linię</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import lineService from "../Services/lineService"

export default {
  name: "NewLine",
  props: ["type"],
  data() {
    return {
      name: '',
      code: '',
      cityStart: '',
      cityEnd: '',
      departuresString: '',
      departures: [],
      price: 0,
      seats: 0,
      travelTime: '',
      response: ""
    };
  },
  methods: {
      addNewLine(){
          this.departures = this.departuresString.split(";")
          let line = {
              name: this.name,
              code: this.code,
              start: this.cityStart,
              stop: this.cityEnd,
              departures: this.departures,
              price: this.price,
              seats: this.seats,
              time: this.travelTime 
          }
        lineService.addLine(localStorage.token, line).then(data =>{
            this.response = data
        })
      }
  },
  created() {}
};
</script>
<style scoped>
.register-box {
  width: 100%;
  margin: auto;
  padding: 15px;
  text-align: left;
  display: block;
}

.result-box {
}
.form-group {
  margin-top: 15px;
  padding: 3px;
}

#singlebutton {
  width: 220px;
}

label {
  width: 220px;
}
</style>
