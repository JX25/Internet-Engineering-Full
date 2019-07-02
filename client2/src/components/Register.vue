<template>
  <div id="register-box">
    <form class="form-inline" @submit.prevent >
      <fieldset :disabled="this.error[0] == 'User created'">

        <!-- Form Name -->
        <legend>Formularz rejestracyjny</legend>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Imię</label>
          <div class="col-md-4">
            <input id="textinput" name="textinput" type="text" placeholder="" class="form-control input-md" required=""
                   v-model="firstName">

          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Nazwisko</label>
          <div class="col-md-4">
            <input id="textinput" name="textinput" type="text" placeholder="" class="form-control input-md" required=""
                   v-model="lastName">

          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">email</label>
          <div class="col-md-4">
            <input id="textinput" name="textinput" type="email" placeholder="" class="form-control input-md" required=""
                   v-model="emailAdr">

          </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="passwordinput">hasło</label>
          <div class="col-md-4">
            <input id="passwordinput" name="passwordinput" type="password" placeholder="" class="form-control input-md"
                   required="" v-model="pass1">

          </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="passwordinput">Powtórz hasło</label>
          <div class="col-md-4">
            <input id="passwordinput2" name="passwordinput" type="password" placeholder="" class="form-control input-md"
                   required="" v-model="pass2">

          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Nr telefonu</label>
          <div class="col-md-4">
            <input id="textinput" name="textinput" type="number" placeholder="" class="form-control input-md"
                   required="" v-model="telNb">

          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="singlebutton"></label>
          <div class="col-md-4">
            <button id="singlebutton" name="singlebutton" class="btn btn-primary" @click="validateRegisterForm">Zarejestruj się
            </button>
          </div>
        </div>

      </fieldset>
    </form>
    <div id="registerResult" v-for="err in error">
      <p>{{ err }}</p>
      <span v-if="err == 'User created'">
        <router-link to="/login"><button class="btn btn-primary">Zaloguj się</button></router-link>
      </span>
    </div>
  </div>
</template>

<script>
import userService from '../services/userService'
export default {
  name: 'Register',
  data: function () {
    return {
      type: '',
      firstName: '',
      lastName: '',
      emailAdr: '',
      pass1: '',
      pass2: '',
      telNb: '',
      error: []
    }
  },
  methods: {
    async validateRegisterForm () {
      this.error = []
      let everythingOK = true
      let message = []
      // firstNameValidation
      console.log(this.firstName, this.lastName)
      if (this.firstName.length <= 1 || this.lastName.length <= 1) {
        message.push('Imię i nazwisko musza zawierac min. 2 znaki')
        everythingOK = false
      }
      if (this.pass1 !== this.pass2) {
        message.push('Hasla roznia sie!')
        everythingOK = false
      } else if (this.pass1.length < 8) {
        message.push('Haslo min 8 znakow!')
        everythingOK = false
      }
      if (this.telNb.length < 9 && this.telNb.length <= 13) {
        message.push('Zly format numeru telefonu!')
        everythingOK = false
      }
      if (everythingOK) {
        let user = {
          'email': this.emailAdr,
          'password': this.pass1,
          'name': this.firstName,
          'surname': this.lastName,
          'phone': this.telNb
        }
        userService.registerUser(user)
        this.error.push(userService.registerResponse)
        console.log(userService.registerResponse)
        console.log(this.error)
      } else {
        for (let i in message) {
          console.log(message)
          console.log(message[0])
          this.error.push(message[i])
        }
      }
    }
  },
  mounted () {
    if (localStorage.getItem('type')) {
        console.log('DDDDDD')
      this.type = localStorage.getItem('type')
      console.log((this.type === 'false'))
    }
  },
  watch: {
    type: function () {
      console.log('XDXDXsD')
      this.type = localStorage.getItem('type')
    }
  }
}
</script>

<style scoped>
  #register-box {
    width: 100%;
    margin: auto;
    margin-top: 15px;
    text-align: left;
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
