import Vue from 'vue'
import Vuex from 'vuex'
import sha1 from 'js-sha1'
import ax from 'axios'
import generatePass from 'generate-password'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  mutations: {
    
  },

  actions: {
    async checkPassword(password) {
      const API_URL = 'https://api.pwnedpasswords.com/range';
      let hash = sha1(password)
      let prefix = hash.substr(0, 5)
      let suffix = hash.substr(5, hash.length)

      let resp = await ax(`${API_URL}/${prefix}`)
      let hashes = resp.data.split('\r\n')

      let msg = 'This password is good to use'

      for(let i=0; i<hashes.length; i++) {
        let h = hashes[i].split(':')

        if(h[0] === suffix.toUpperCase()) {
          msg = `The password has been used ${h[1]} times. Don't use!`
          console.log(msg)
          break
        }
      }
      console.log(msg)
    },
  },

  getters: {
    generatePassword() {
      let password = generatePass.generate({
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true,
        strict: true
      })

      return password
    }
  }
})
