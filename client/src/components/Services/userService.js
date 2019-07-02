import VueResource from "vue-resource";
import Vue from 'vue'

const api ='http://localhost:3000/api/user'
const userService = {
    test : api + '/test',
    register : api + '/register',
    login : api + '/login',
    byEmail: api + '/get/email/' , // :email
    byId: api + '/get/id/', //:id
    updateUser : api + '/updateAccount/', //:id
    deleteUser : api + '/deleteAccount',
    resetPassword : api + '/resetPass',

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

    findById : async function(id) {
        let result = await Vue.http.get(this.byId + id)
            .then(response => response.json(), error => error.json())
            .then(data => {
                console.log(data)
                let value = data
                return value
            })
            return result
    },

    updateUserData : async function(token, user) {
        console.log('cc', user._id)
        console.log(user)
        let result = await Vue.http.patch(this.updateUser + user._id, JSON.stringify(user), {headers: {'Authorization': 'Bearer ' + token},
        'Content-type': 'application/json'})
            .then(response => response.json(), error => error.json())
            .then(data => {
                console.log('dd', data)
                let value = data
                return value
            })
            return result
    }
}

export default userService