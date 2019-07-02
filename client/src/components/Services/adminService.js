import VueResource from "vue-resource";
import Vue from 'vue'

const api ='http://localhost:3000/api/admin'
const adminService = {
    test : api + '/test',
    getAll : api + '/all',
    getAllA: api + '/admins/all',
    turnOnOff: api + '/disableaccount/', //:id/trueOrfalse
    deleteAccount: 'http://localhost:3000/api/user/deleteAccount/', //:id

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

    allUsers : async function(token) {
        //console.log(token)
        let result = await Vue.http.get(this.getAll, {headers: {'Authorization': 'Bearer ' + token}})
            .then(response => response, error => error.json())
            .then(data => {
                let value = data.body
                return value
            })
        return result;
    },
    allAdmins : async function(token) {
        //console.log(token)
        let result = await Vue.http.get(this.getAllA, {headers: {'Authorization': 'Bearer ' + token}})
            .then(response => response, error => error.json())
            .then(data => {
                let value = data.body
                return value
            })
        return result;
    },

    changeAccountActivity : async function(token, id, val) {
        let result = await Vue.http.put(this.turnOnOff + id + '/' + val, {headers: {
            'Authorization': 'Bearer ' + token,
            "Accept": "application/json",
            "cache-control": "no-cache"
        }})
            .then(response => response.json(), error => error.json())
            .then(data => {
                let value = data.body
                return value
            })
        return result;
    },

    removeAccount : async function(token, id){ 
        let result = await Vue.http.delete(this.deleteAccount + id, {headers: {'Authorization': 'Bearer ' + token}})
        .then(response => response, error => error.json())
        .then(data => {
            let value = data.body
            return value
        })
    return result;
    },       

}

export default adminService