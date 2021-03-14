<template>
  <section id="loginSection">
    <div id="logoDiv">
      <img src="@/assets/logo.png" alt="logo" class="bigLogo" />
      <h1 class="headerText">LCKD</h1>
      <h3 class="headerText2">
        KEEPING YOUR <br />
        PASSWORDS SAFE
      </h3>
    </div>
    <LoginComponent />
  </section>
</template>

<script>
import LoginComponent from "./../components/LoginComponent";
export default {
  name: "Login",
  components: {
    LoginComponent,
  },
};
</script>

<style>
#loginSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logoDiv {
  height: 100%;
  width: 100%;
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bigLogo {
  width: 76px;
  height: 76px;
}

.headerText {
  margin: 0.3em;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  color: #ffffff;
  letter-spacing: 0.15em;
  text-align: center;
}

.headerText2 {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.15em;
  text-align: center;
  color: #ffbd21;
}
</style>