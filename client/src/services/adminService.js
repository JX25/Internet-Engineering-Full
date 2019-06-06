import Conf from './conf'

const testapi = Conf.api + '/test'
const allUsers = Conf.api + '/all' // get & delete
const addAdmin = Conf.api + '/addadmin'
const accountOnOff = Conf.api + '/disableaccount' // userId/value

export default{
  adminTest () {
    return Conf.get(`${testapi}`)
  },
  getAllUsers () {
    return Conf.get(`${allUsers}`)
  },
  deleteAllUsers () {
    return Conf.delete(`${allUsers}`)
  },
  addAdmin () {
    return Conf.post(`${addAdmin}`)
  },
  accountOnOff (userId, value) {
    return Conf.patch(`${accountOnOff}/${userId}/${value}`)
  }
}
