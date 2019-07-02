import VueResource from "vue-resource";
import Vue from 'vue'

const api ='http://localhost:3000/api/ticket'
const ticketService = {
    test : api + '/test',
    userTickets: api + '/tickets/', //:email

    testController : async function() {
        let result = await Vue.http.get(this.test)
            .then(response => response, error => error.json())
            .then(data => {
                console.log(data)
                let value = data.body
                return value
            })
        return result;
    },
    allTicketsByEmail : async function(token, email) {
        let result = await Vue.http.get(this.userTickets + email, {headers: {'Authorization': 'Bearer ' + token}})
            .then(response => response, error => error.json())
            .then(data => {
                console.log(data)
                let value = data.body
                return value
            })
        return result;        
    }
}

export default ticketService