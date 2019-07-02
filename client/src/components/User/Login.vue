<template>
  <div id="login-box">
    <h1>Login Page {{type}}</h1>
    <form class="form-inline" @submit.prevent="signIn">
      <fieldset>
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Login:</label>
          <div class="col-md-4">
            <input
              id="textinput"
              name="textinput"
              type="text"
              placeholder
              class="form-control input-md"
              required
              v-model="login"
            >
          </div>
        </div>
        <br>
        <!-- Password input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="passwordinput">Haslo:</label>
          <div class="col-md-4">
            <input
              id="passwordinput"
              name="passwordinput"
              type="password"
              placeholder
              class="form-control input-md"
              required
              v-model="password"
            >
          </div>
        </div>
        <br>
        <div class="form-group">
          <label class="col-md-4 control-label" for="singlebutton"></label>
          <div class="col-md-4">
            <button
              id="singlebutton"
              name="singlebutton"
              class="btn btn-primary"
              @click="signIn"
            >Zaloguj się</button>
          </div>
        </div>
      </fieldset>
    </form>
    <br>
    <div v-show="loginTry">
      <div v-if="!result" class="alert alert-danger">Nie ma takiego użytkownika</div>
      <div v-else class="alert alert-success">Zalogowano</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["type"],
  data: function() {
    return {
      login: "",
      password: "",
      result: false,
      loginTry: false
    };
  },
  methods: {
    signIn() {
      this.loginTry = false;
      let linkApi = "http://localhost:3000/api/user/login";
      let user = {
        email: this.login,
        password: this.password
      };
      this.$http
        .post(linkApi, user)
        .then(response => response.json(), error => error.json())
        .then(data => {
          console.log(data);
          if (data.message != "Auth failed") {
            this.result = true;
            localStorage.setItem("token", data.token);
            if (data.type == false) localStorage.setItem("type", "1");
            else localStorage.setItem("type", "2");
          } else {
            this.result = false;
            localStorage.seItem("type", "999");
          }
          console.log(this.result);
          this.type = localStorage.type;
          console.log("FF", this.type);
          this.$emit("changeType", localStorage.type);

          if (localStorage.type != "999") this.$router.push("/");
        });
                  this.loginTry = true;
      console.log("AD");
    }
  },
  watch: {
    result: function() {}
  }
};
</script>

<style scoped>
#singlebutton {
  width: 150px;
}

.alert {
  padding: 10px;
}
</style>
