import Vue from 'vue'
import Vuex from 'vuex'
import sha1 from 'js-sha1'
import axios from 'axios'
import generatePass from 'generate-password'
import router from './../router'
import CryptoJS from 'crypto-js'

Vue.use(Vuex)
const API = 'http://localhost:8000'

export default new Vuex.Store({
  state: {
    plainView: Object,
    passwords: []
  },

  mutations: {
    hideCookie(state) {
      state.show.showCookie = !state.show.showCookie
    },
    setTokenAndKey(state, tokenAndKey){
      state.token = tokenAndKey.token;
      state.userkey = tokenAndKey.userkey;
    },
    setLckd(state, passwords){
      state.passwords = passwords;
    },
    setPlainView(state, plainView){
      state.plainView = plainView;
    }
  },

  actions: {
    async login(ctx, cred) {
      let resp = await axios.post(`${API}/auth/login`, {
        username: cred.username,
        password: cred.password
      });

      sessionStorage.setItem('lckdToken', resp.data.token);
      sessionStorage.setItem('lckdUserkey', resp.data.userkey);
      router.push('/passwords')
    },
    
    async getLckd({ commit }){
      let resp = await axios.get(`${API}/lckd`, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('lckdToken')}`
        }
      });
      commit('setLckd', resp.data)
    },

    async viewPassword({ commit }, lckd){
      const password = CryptoJS.AES.decrypt(lckd.password, sessionStorage.getItem('lckdUserkey')).toString(CryptoJS.enc.Utf8)
      commit('setPlainView', {
        id: lckd.id,
        domain: lckd.domain,
        username: lckd.username,
        password: password
      });
    },

    async newLckd(ctx, newLckd){
      let resp = await axios.post(`${API}/lckd`, newLckd, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('lckdToken')}`
        }
      });

      console.log(resp) 
      ctx.dispatch('getLckd')
      router.push('/passwords')
    },

    async checkPassword(password) {
      const API_URL = 'https://api.pwnedpasswords.com/range';
      let hash = sha1(password)
      let prefix = hash.substr(0, 5)
      let suffix = hash.substr(5, hash.length)

      let resp = await axios.get(`${API_URL}/${prefix}`)
      let hashes = resp.data.split('\r\n')

      let msg = 'This password is good to use'

      for (let i = 0; i < hashes.length; i++) {
        let h = hashes[i].split(':')

        if (h[0] === suffix.toUpperCase()) {
          msg = `The password has been used ${h[1]} times. Don't use!`
          console.log(msg)
          break
        }
      }
      console.log(msg)
      return msg
    },
  },

  getters: {
    generatePassword() {
      let newPassword = generatePass.generate({
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true,
        strict: true
      })

      return newPassword
    },
  }
})


/*

console.log(ctx)
      const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*('")_+{}:?><;.,`
      let password = ''

      for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        let newCharacter = characters[randomIndex]
        password += newCharacter
      }
      return password
      if (ctx.hasCapitalLetters(password) && ctx.hasLowerLetters(password) && ctx.hasNumbers(password) && ctx.hasSymbols(password)) {
        return password
      }
      return generatePassword()



      hasCharacters(string, character) {
      let password = string.password
      let array = password.split("");
      return array.some((c) => character.includes(c));
    },

    hasCapitalLetters(string) {
      const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return this.hasCharacters(string, capitalLetters);
    },

    hasLowerLetters(string) {
      const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
      return this.hasCharacters(string.password, lowerLetters);
    },

    hasNumbers(string) {
      const numbers = "0123456789";
      return this.hasCharacters(string.password, numbers);
    },

    hasSymbols(string) {
      const symbols = `~!@#$%^&*('")_+{}:?><;.,`;
      return this.hasCharacters(string.password, symbols);
    },
    */
