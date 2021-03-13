<template>
  <section id="storedPasswords">
    <div>
      <div class="allPasswordLabel">STORED PASSWORDS</div>
      <div class="allThePasswords">
        <div class="display on">
          <div class="www on">
            <h3>dhskhsakjsd</h3>
          </div>
          <div class="showHide on">
            <img src="@/assets/eye-outline.png" alt="eye show" class="eye" />
          </div>
        </div>
        <div class="display off">
          <div class="www off">
            <h3>fdfjlskdjfdlskj</h3>
          </div>
          <div class="showHide off">
            <img src="@/assets/eye-off-outline.png" alt="eye off" class="eye" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="plainSight">PLAIN SIGHT</div>
      <div id="shownPassword">
        <div id="passShow">
          <h3 class="password">dfgfdgfgfdg</h3>
        </div>
        <div class="copyPass">
          <img src="@/assets/copy.png" alt="copy" class="copy" />
        </div>
      </div>
    </div>
    <button id="addNewBtn" @click="goTo('/new_pwd')">NEW LCKD</button>
  </section>
</template>

<script>
export default {
  name: "StoredPasswords",
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
#storedPasswords {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  width: 100%;
}

.allPasswordLabel {
  width: 195px;
  height: 22px;
  background: #ffbd21;
  border-radius: 8px 8px 0px 0px;
  font-family: Open Sans;
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

.allThePasswords {
  width: 311px;
  border: 1px solid #ffbd21;
  box-sizing: border-box;
  border-radius: 0px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.display {
  margin: 0.5em;
  box-sizing: border-box;
  border-radius: 4px;
  width: 295px;
  height: 58.81px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.display.on {
  border: 1px solid #ffffff;
}

.display.off {
  border: 1px solid #ffbd21;
}

.eye {
  width: 40px;
  height: 40px;
}

.www {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.www.on {
  color: #ffffff;
}

.www.off {
  color: #ffbd21;
}

.showHide {
  width: 59.76px;
  height: 58.81px;
  box-sizing: border-box;
  border-radius: 0px 4px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.showHide.on {
  border-left: 1px solid #ffffff;
}

.showHide.off {
  border-left: 1px solid #ffbd21;
}

.plainSight {
  width: 127px;
  height: 22px;
  background: #ffffff;
  border-radius: 8px 8px 0px 0px;
  font-family: Open Sans;
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

#shownPassword {
  width: 311px;
  height: 62px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 0px 4px 4px 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#passShow {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#passShow h3 {
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.12em;
  color: #ffffff;
}

.copyPass {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 58.81px;
}

.copy {
  width: 30px;
  height: 30px;
}

#addNewBtn {
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