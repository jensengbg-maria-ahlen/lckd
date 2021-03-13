<template>
  <section id="storedPasswords">
    <div>
      <div class="allPasswordLabel">STORED PASSWORDS</div>
      <div class="allThePasswords">
        <div>
          <h3></h3>
          <img src="@/assets/eye-outline.png" alt="eye show" />
        </div>
      </div>
    </div>

    <div>
      <div class="plainSight">PLAIN SIGHT</div>
      <div id="shownPassword">
        <h3></h3>
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
  justify-content: space-around;
  align-items: center;
  height: 100%;
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