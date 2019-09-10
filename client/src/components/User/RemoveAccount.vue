<template>
<h1>RemAcc</h1>
</template>
<script>
import userService from "../Services/userService";

export default {
  name: "RemoveAccount",
  data() {
    return {
      id: this.$route.params.id,
      model: {}
    };
  },
  methods: {
    loadUser: function() {
      userService.findById(this.id).then(data => {
        this.model = data;
      });
    },
    getTickets : function(email){
        ticketService.allUserTicketsByEmail(email).then
    }
  },
  created() {
    this.loadUser();
    this.getTickets();
    console.log(this.user);
  }
};
</script>
<style scoped>
</style>
