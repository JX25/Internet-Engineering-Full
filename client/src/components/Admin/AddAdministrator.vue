<template>
  <div class="register-box">
    <form class="form-inline" @submit.prevent>
      <div class="form-group">
        <label class="col-md-4 control-label" for="textinput">Imię</label>
        <div class="col-md-4">
          <input
            id="firstNameInput"
            name="firstNameInput"
            type="text"
            placeholder
            class="form-control input-md"
            required
            v-model="firstName"
          >
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="textinput">Nazwisko</label>
        <div class="col-md-4">
          <input
            id="lastNameInput"
            name="lastNameInput"
            type="text"
            placeholder
            class="form-control input-md"
            required
            v-model="lastName"
          >
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="textinput">email</label>
        <div class="col-md-4">
          <input
            id="emailInput"
            name="emailInput"
            type="email"
            placeholder
            class="form-control input-md"
            required
            v-model="emailAdr"
          >
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="passwordinput">hasło</label>
        <div class="col-md-4">
          <input
            id="passwordInput"
            name="passwordInput"
            type="password"
            placeholder
            class="form-control input-md"
            required
            v-model="pass1"
          >
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="passwordinput">Powtórz hasło</label>
        <div class="col-md-4">
          <input
            id="passwordinput2"
            name="passwordInput"
            type="password"
            placeholder
            class="form-control input-md"
            required
            v-model="pass2"
          >
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="textinput">Nr telefonu</label>
        <div class="col-md-4">
          <input
            id="textinput"
            name="telInput"
            type="number"
            placeholder
            class="form-control input-md"
            required
            v-model="telNb"
          >
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="singlebutton"></label>
        <div class="col-md-4">
          <button
            id="singlebutton"
            name="singlebutton"
            class="btn btn-primary"
            @click="validateRegisterForm"
          >Dodaj Administratora</button>
        </div>
      </div>
    </form>
    <div v-if="responses[0] === 'User created'">
      <div class="result-box alert alert-success">
        <p>Konto administratora zostało stworzone. Wyloguj się i zaloguj na nowe konto</p>
      </div>
    </div>
    <div v-else>
      <div class="result-box alert alert-danger" v-for="info in responses">
        <p>{{info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAdministrator",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      emailAdr: "",
      pass1: "",
      pass2: "",
      telNb: "",
      responses: []
    };
  },
  methods: {
    validateRegisterForm() {
      const apiLink = 'http://localhost:3000/api/admin/addadmin/';
      this.responses = [];
      let validForm = true;
      if (this.firstName.length < 2 || this.lastName.length < 2) {
        this.responses.push("Imie, nazwisko min 2 znaki");
        validForm = false;
      }
      if (this.pass1 !== this.pass2) {
        this.responses.push("Hasla nie zgadzaja sie");
        validForm = false;
      }
      if (this.pass1.length < 8) {
        this.responses.push("Haslo powinno zawierac minimum 8 znakow");
        validForm = false;
      }
      if (this.telNb.length < 9 && this.telNb.length <= 13) {
        this.responses.push("Zly format numeru telefonu!");
        validForm = false;
      }
     //console.log("XD", validForm);
      if (validForm) {
       // console.log("XD");
        let user = {
          name: this.firstName,
          surname: this.lastName,
          email: this.emailAdr,
          password: this.pass1,
          phone: this.telNb,
          is_admin: true
        };
        console.log("XDDD", apiLink);
        const result = this.$http
          .post(apiLink, user, {headers: {'Authorization': 'Bearer ' + localStorage.token}})
          .then(response => response.json(), error => response.json())
          .then(data => {
            console.log("xd", data);
            this.responses.push(data.message);
          });
      }
    },
    makeResponse(data) {
      for (let i in data) {
        this.responses.push(data[i]);
      }
    }
  },
  mounted() {},
  watch: {}
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