<template>
  <section id="createPassword">
    <div>
      <div>
        <label for="ww">WWW</label>
        <input type="text" name="www" id="www" />
      </div>
      <div>
        <label for="username">USERNAME</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label for="">SECURE PASSWORD</label>
        <h4></h4>
        <img src="@/assets/redo.png" alt="redo" />
      </div>
    </div>
    <button id="addPwdBtn" @click="goTo('/all_pwd')">NEW LCKD</button>
  </section>
</template>

<script>
export default {
  name: "CreatePassword",
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
#createPassword {
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
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