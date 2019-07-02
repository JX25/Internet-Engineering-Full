<template>
  <div id="login-box">
    <h1>Login Page</h1>
    <form class="form-inline" @submit.prevent>
      <fieldset>
      <div class="form-group">
        <label class="col-md-4 control-label" for="textinput">Login:</label>
        <div class="col-md-4">
          <input id="textinput" name="textinput" type="text" placeholder="" class="form-control input-md" required=""
                 v-model="login">
        </div>
      </div>
      <br/>
      <!-- Password input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="passwordinput">Haslo:</label>
        <div class="col-md-4">
          <input id="passwordinput" name="passwordinput" type="password" placeholder="" class="form-control input-md"
                 required="" v-model="password">
        </div>
      </div>
      <br/>
      <div class="form-group">
        <label class="col-md-4 control-label" for="singlebutton"></label>
        <div class="col-md-4">
          <button id="singlebutton" name="singlebutton" class="btn btn-primary" @click="signin">Zaloguj sie
          </button>
        </div>
      </div>
      </fieldset>
    </form>
    <p>{{result}}</p>
  </div>
</template>

<script>
import userService from '../services/userService'
export default {
  name: 'Login',
  data: function () {
    return {
      login: '',
      password: '',
      result: '',
      type: ''
    }
  },
  methods: {
    signin () {
      let user = {
        email: this.login,
        password: this.password
      }
      userService.signInUser(user)
      this.result = userService.loginResponse
      console.log(this.result)

    }
  },
  watch: {
    result: function () {
      this.result = userService.loginResponse.message
      localStorage.setItem('token', userService.loginResponse.token)
      localStorage.setItem('type', userService.loginResponse.type)
      this.type = localStorage.getItem('type')
      if(userService.loginResponse.status === 200) this.$route.push(this.$route.query.redirect || '/user/home')
    }
  }
}
</script>

<style scoped>

</style>
