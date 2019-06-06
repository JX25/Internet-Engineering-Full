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
  async registerUser (user) {
    // console.log(register);
    await axios.post(register,
      user,
      {headers: {
        'Content-Type': 'application/json'
      }}
    ).then(response => {
      return response
    })
  },
  async signInUser (user) {
    await axios.post(login,
      user,
      {headers: {
        'Content-Type': 'application/json'
      }}).then(response => {
      console.log(response.data)
      localStorage.setItem('type', response.data.type)
      localStorage.setItem('token', response.data.token)
      return response.data
    })
  }
}
