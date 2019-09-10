<template>
  <div class="menuBar">
    <div v-if="this.type == '2'">
      <b-navbar toggleable="lg" type="dark" variant="danger">
        <b-navbar-brand href="#"><router-link to="/"><i>Bilety Online - Admin Panel</i></router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item text="Testuj kontrolery" type="dark" variant="dark"><router-link to="test"><i>Test Kontrolerów</i></router-link></b-nav-item>
            <b-nav-item right disabled><b style="color:#fff;">ZARZĄDZAJ:</b></b-nav-item>

     <!--       <b-nav-item-dropdown text="BILETAMI" type="dark" variant="dark">
              <b-dropdown-item href="#">Wszystkie bilety</b-dropdown-item>
              <b-dropdown-item href="#">Usuń wszystkie bilety</b-dropdown-item>
            </b-nav-item-dropdown> -->
            <b-nav-item-dropdown text="LINIAMI" type="dark" variant="dark">
              <b-dropdown-item href="#"><router-link to="/line/new/">Nowa linia</router-link></b-dropdown-item>
            <!--  <b-dropdown-item href="#"><router-link to="/search/line">Znajdź linię autobusową</router-link></b-dropdown-item>-->
              <b-dropdown-item href="#"><router-link to="/line/all">Wszystkie linie</router-link></b-dropdown-item>
            <!--  <b-dropdown-item href="#">Usuń wszystkie linie</b-dropdown-item> -->
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="UŻYTKOWNIKAMI" type="dark" variant="dark">
              <b-dropdown-item href="#"><router-link to="allUsers">Wyświetl wszystkich użytkowników</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link to="allAdmins">Wyświetl wszystkich administratorów</router-link></b-dropdown-item>
              <!--<b-dropdown-item href="#">Usun wszystkich uzytkownikow</b-dropdown-item>-->
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" right><router-link to="/add/admin"><i>Dodaj administratora</i></router-link></b-nav-item>
            <b-nav-item href="#" @click="logout" right>Wyloguj</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div v-else-if="this.type == '1'">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><i>Bilety Online - Panel klienta</i></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/ticket/buy"><i>Kup bilet</i></router-link></b-nav-item>
            <!--<<b-nav-item href="#"><router-link to="/search/line">Znajdź linię autobusową</router-link></b-nav-item>-->
            <b-nav-item href="#"><router-link to="/mytickets/"><i>Moje bilety</i></router-link></b-nav-item>
            <b-nav-item-dropdown text="Moje konto" type="dark" variant="dark">
              <b-dropdown-item href="#"><router-link to="/edit/mydata/">Edycja danych</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link to="/reset/password/">Resetuj hasło</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link to="/remove/account/">Usuń konto</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" @click="logout" right>Wyloguj</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div v-else>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#"><i>Bilety Online</i></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/register">Zarejestruj się</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/login">Zaloguj się</router-link></b-nav-item>
            <!--<<b-nav-item href="#"><router-link to="/search/line">Znajdź linię autobusową</router-link></b-nav-item>-->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['type'],
  data: function () {
    return {
    }
  },
  methods: {
    logout: function () {
      //console.log('LOGOUT')
      localStorage.removeItem('type')
      localStorage.removeItem('token')
      this.type = '999'
      this.$emit('changeType', this.type)
      this.$router.push('/')
    },
    changeType: function(newType) {
      this.type = newType
    }
  },
  watch: {
    type : function () {
      //console.log('top')
      this.type = parseInt(localStorage.type) || 999
    }
  }
}

</script>

<style scoped>
  .menubar {
    margin-top: 0;
    width: 100%;
    padding: 5px;
    margin-bottom: 55px;

  }
i{
  color: white;
}
button href{
	text-decoration: none;
  color: white;
}
</style>
