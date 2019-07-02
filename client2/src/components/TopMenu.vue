<template>
  <div class="menuBar">
    <div v-if="this.type == 'true'">
      <b-navbar toggleable="lg" type="dark" variant="danger">
        <b-navbar-brand href="#"><i>Bilety Online - Admin Panel</i></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="Testuj kontroler" type="dark" variant="dark">
              <b-dropdown-item href="#">Admin</b-dropdown-item>
              <b-dropdown-item href="#">User</b-dropdown-item>
              <b-dropdown-item href="#">Line</b-dropdown-item>
              <b-dropdown-item href="#">Ticket</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item right disabled><b style="color:#fff;">ZARZĄDZAJ:</b></b-nav-item>

            <b-nav-item-dropdown text="BILETAMI" type="dark" variant="dark">
              <b-dropdown-item href="#">Wszystkie bilety</b-dropdown-item>
              <b-dropdown-item href="#">Usun wszystkie bilety</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="LINIAMI" type="dark" variant="dark">
              <b-dropdown-item href="#">Nowa linia</b-dropdown-item>
              <b-nav-item href="#"><router-link to="/search/line">Znajdź linię autobusową</router-link></b-nav-item>
              <b-dropdown-item href="#">Wszystkie linie</b-dropdown-item>
              <b-dropdown-item href="#">Usun wszystkie linie</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="UZYTKOWNIKAMI" type="dark" variant="dark">
              <b-dropdown-item href="#">Wyswietl wszystkich uzytkownikow</b-dropdown-item>

              <b-dropdown-item href="#">Usun wszystkich uzytkownikow</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" right>Dodaj administratora</b-nav-item>
            <b-nav-item href="#" @click="logout" right>Wyloguj</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div v-else-if="this.type == 'false'">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><i>Bilety Online - Panel klienta</i></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Kup bilet</b-nav-item>
            <b-nav-item href="#"><router-link to="/search/line">Znajdź linię autobusową</router-link></b-nav-item>
            <b-nav-item href="#">Moje bilety</b-nav-item>
            <b-nav-item-dropdown text="Moje konto" type="dark" variant="dark">
              <b-dropdown-item href="#">Edycja danych</b-dropdown-item>
              <b-dropdown-item href="#">Resetuj hasło</b-dropdown-item>
              <b-dropdown-item href="#">Usuń konto</b-dropdown-item>
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
            <b-nav-item href="#"><router-link to="/Register">Zarejestruj się</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/Login">Zaloguj się</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/search/line">Znajdź linię autobusową</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data: function () {
    return {
      type: ''
    }
  },
  methods: {
    logout: function () {
      console.log('LOGOUT')
      localStorage.clear()
      window.location.reload()
    }
  },
  mounted () {
    if (localStorage.getItem('type')) {
      console.log('top')
      this.type = localStorage.getItem('type')
      console.log((this.type === 'false'))
    }
  },
  watch: {
    type: function () {
      console.log('top')
      this.type = localStorage.getItem('type')
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
</style>
