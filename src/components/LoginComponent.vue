<template>
  <section id="loginComponent">
    <div id="usernameInput">
      <div class="loginlabel">USERNAME</div>
      <input type="text" name="username" class="loginInput" />
    </div>
    <div id="passwordInput">
      <div class="loginlabel">PASSWORD</div>
      <input type="password" name="password" class="loginInput" />
    </div>
    <button id="letMeInBtn" @click="goTo('/all_pwd')">LET ME IN</button>
  </section>
</template>

<script>
export default {
  name: "Logincomponent",
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    login() {
      let cred = {
        username: String, 
        password: String
      }

      console.log(cred)
    }
  },
};
</script>

<style>
#loginComponent {
  margin-top: 8em;
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loginInput {
  width: 311px;
  height: 62px;
  left: 32px;
  top: 495px;
  border: 1px solid #ffbd21;
  box-sizing: border-box;
  border-radius: 0px 4px 4px 4px;
  background: #15085f;
  font-family: "Open Sans", sans-serif;
  color: #ffbd21;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 1.5em;
  display: flex;
  align-items: center;
}

.loginlabel {
  background: #ffbd21;
  width: 115px;
  height: 22px;
  border-radius: 8px 8px 0px 0px;
  color: #15085f;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
}

#letMeInBtn {
  width: 311px;
  height: 62px;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  color: #15085f;
  font-weight: bolder;
  font-size: 20px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
</style>