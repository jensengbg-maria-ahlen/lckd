<template>
  <section id="createPassword">
    <div class="inputFields">
      <div>
        <div class="wwwLabel">WWW</div>
        <input type="text" name="www" id="www" />
      </div>
      <div>
        <div class="usernameLabel">USERNAME</div>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <div class="passwordLabel">SECURE PASSWORD</div>
        <div class="passwordDiv">
          <div class="divPassword">
            <h4>{{ password }}</h4>
          </div>
          <div class="redoDiv">
            <img
              src="@/assets/redo.png"
              alt="redo"
              @click="generatePassword()"
            />
          </div>
        </div>
      </div>
      <div class="checkPass">
        <h6 class="checkLength">#</h6>
        <h6 class="checkSymbol">@</h6>
        <h6 class="checkNumber">123</h6>
        <h6 class="checkUpperLower">Aa</h6>
        <h6 class="checkPwnd">pwnd</h6>
      </div>
    </div>
    <button id="addPwdBtn" @click="goTo('/all_pwd')">CREATE LCKD</button>
  </section>
</template>

<script>
export default {
  name: "CreatePassword",
  data: () => ({
    password: "",
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    generatePassword() {
      let newPassword = this.$store.getters.generatePassword;
      this.password = newPassword;
      this.checkPass(this.password)
    },
    checkPass(password) {
      let check = this.$store.dispatch("checkPassword", password);
      console.log('check: ', check)
    }
  },
};
</script>

<style>
#createPassword {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 65%;
  width: 100%;
}

.inputFields {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3em;
  height: 65%;
}

.wwwLabel {
  width: 63px;
  height: 22px;
  background: #ffbd21;
  border-radius: 8px 8px 0px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
  color: #15085f;
}

.usernameLabel {
  width: 110px;
  height: 22px;
  background: #ffbd21;
  border-radius: 8px 8px 0px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
  color: #15085f;
}

.passwordLabel {
  width: 182px;
  height: 22px;
  background: #ffbd21;
  border-radius: 8px 8px 0px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.15em;
  color: #15085f;
}

input {
  width: 311px;
  height: 62px;
  border: 1px solid #ffbd21;
  box-sizing: border-box;
  border-radius: 0px 4px 4px 4px;
  background: #15085f;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffbd21;
}

.passwordDiv {
  width: 311px;
  height: 62px;
  border: 1px solid #ffbd21;
  box-sizing: border-box;
  border-radius: 0px 4px 4px 4px;
  background: #15085f;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.divPassword {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.divPassword h4 {
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.12em;
  color: #ffffff;
}

.redoDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59.76px;
  height: 58.81px;
}

.checkPass {
  width: 150px;
  height: 19px;
  margin-top: -1em;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}

.checkPass h6 {
  margin: 0;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.15em;
  color: #ff2146;
}

#addPwdBtn {
  width: 311px;
  height: 62px;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  color: #15085f;
  font-weight: bolder;
  font-size: 20px;
}
</style>