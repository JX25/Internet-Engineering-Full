import VueResource from "vue-resource";
import Vue from 'vue'

const api ='http://localhost:3000/api/line'
const lineService = {
    test : api + '/test',
    register : api + '/register',
    newLine : api + '/addline',
    getAllLines : api + '/lines',
    deleteLine : api + '/remove/',

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
    addLine : async function(token, line) {
        console.log(line)
        let result = await Vue.http.post(this.newLine,line, {headers:{'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'}})
            .then(response => response, error => error.json())
            .then(data =>{
                console.log('data', data)
                let value = data;
                return value
            })
        return result
    },
    allLines : async function(token) {
        let result = await Vue.http.get(this.getAllLines)
            .then(response => response.json(), error => error.json())
            .then(data =>{
                let value = data;
                return value
            })
        return result
    },
    removeLine : async function(token, id) {
        let result = await Vue.http.delete(this.deleteLine + id, {headers: {'Authorization': 'Bearer ' + token}})
        .then(response => response.json(), error => error.json())
        .then(data =>{
            let value = data;
            return value
        })
    return result      
    }
}

export default lineService