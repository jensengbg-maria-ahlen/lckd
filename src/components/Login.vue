<template>
  <section id="loginComponent">
      <div id="usernameInput">
          <label for="username">USERNAME</label>
          <input type="text" name="username" id="username">
      </div>
      <div id="passwordInput">
        <label for="password">PASSWORD</label>
        <input type="password" name="password" id="password">
      </div>
      <button id="letMeInBtn" @click="goTo('/all_pwd')">LET ME IN</button>
  </section>
</template>

<script>
export default {
    name: 'Logincomponent',
    methods: {
        goTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style>
    #loginComponent {
        margin-bottom: -8em;
        margin-top: 8em;
    }

    #usernameInput {
        margin-bottom: 1em;
    }

    input {
        width: 311px;
        height: 62px;
        left: 32px;
        top: 495px;
        border: 1px solid #FFBD21;
        box-sizing: border-box;
        border-radius: 0px 4px 4px 4px;
        background: #15085F;
        font-family: 'Open Sans', sans-serif;
        color: #FFBD21;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        text-align: center;
    }

    label {
        background: #FFBD21;
        width: 100px;
        border-radius: 8px 8px 0px 0px;
        color: #15085F;
        font-weight: bolder;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        align-items: flex-end;
        letter-spacing: 0.15em;
        padding-left: 0.5em;
    }

    #letMeInBtn {
        width: 311px;
        height: 62px;
        background: #FFFFFF;
        border-radius: 8px;
        font-family: 'Open Sans', sans-serif;
        color: #15085F;
        font-weight: bolder;
        font-size: 20px;
        margin-top: 3em;
    }
</style>