<template>
  <section id="newPassword">
    <div class="nav">
      <img src="@/assets/logo-small.png" alt="smallLogo" class="smallLogo" />
      <h4 class="navName">LCKD</h4>
    </div>
    <h2 class="newCredentialsH2">NEW SECURE <br />CREDENTIALS</h2>
    <CreatePassword />
  </section>
</template>

<script>
import CreatePassword from "./../components/CreatePassword";
export default {
  name: "Newpassword",
  components: {
    CreatePassword,
  },
};
</script>

<style>
#newPassword {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav {
  width: 100%;
  display: flex;
  margin: 1.5em;
  flex-direction: row;
}

.smallLogo {
  width: 32px;
  height: 32px;
  position: absolute;
}

.navName {
  margin-top: 0;
  margin-left: 2em;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #FFFFFF;
}

.newCredentialsH2 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.15em;
  color: #ffffff;
}
</style>