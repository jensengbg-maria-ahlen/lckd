<template>
  <section id="loginSection">
    <div id="logoDiv">
      <img src="@/assets/logo.png" alt="" />
      <h1>LCKD</h1>
      <h3>
        KEEPING YOUR <br />
        PASSWORDS SAFE
      </h3>
    </div>
    <LoginComponent />
  </section>
</template>

<script>
import LoginComponent from "./../components/Login";
export default {
  name: "Login",
  components: {
    LoginComponent,
  },
};
</script>

<style>
#loginSection {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logoDiv {
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 76px;
  height: 76px;
}

h1 {
  margin: 0.3em;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  color: #ffffff;
  letter-spacing: 0.15em;
  text-align: center;
}

h3 {
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