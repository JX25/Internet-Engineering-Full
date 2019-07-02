import axios from 'axios'

const api = 'http://localhost:3000/api/user'
const test = api + '/test'
const register = api + '/register'
const login = api + '/login'
const updateUser = api + '/updateAccount'
const deleteUser = api + '/deleteAccount'
const resetPassword = api + '/resetPass'

export default{
  userTest () {
    return axios.get(`${test}`)
  },
  data: function () {
    return {
      msg: '',
      registerResponse: '',
      loginResponse: ''
    }
  },
  async registerUser (user) {
    // console.log(register);
    axios.post(register, user, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        this.generateRegisterResponse(res.data)
      }, err => {
        this.generateRegisterResponse(err.data)
      })
  },
  async signInUser (user) {
    axios.post(login,
      user,
      {headers: {
        'Content-Type': 'application/json'
      }}).then(res => {
        console.log(res)
        this.loginResponse = res.data
    }, err => {
      this.generateLoginResponse(err.data)
    })
  },
  async generateRegisterResponse (data) {
    console.log(data)
    this.registerResponse = data
  },
  async generateLoginResponse (data) {
    console.log('aaa',data)
    this.loginResponse = {message: 'ddd'}
  }
}
