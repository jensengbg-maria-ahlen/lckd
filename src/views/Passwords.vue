<template>
  <section id="allPasswords">
    <div class="nav">
      <img src="@/assets/logo-small.png" alt="smallLogo" class="smallLogo"/>
      <h4 class="navName">LCKD</h4>
    </div>
    <StoredPasswords />
    <div>
      <label for="">PLAIN SIGHT</label>
      <div>
        <h3>hkfu67%¤4H</h3>
      </div>
    </div>
    <button @click="goTo('/new_pwd')">NEW LCKD</button>
  </section>
</template>

<script>
import StoredPasswords from "./../components/StoredPasswords";
export default {
  name: "Allpasswords",
  components: {
    StoredPasswords,
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
label {
  width: 127px;
  height: 22px;
  background: #FFFFFF;
  border-radius: 8px 8px 0px 0px;
}

.nav {
  display: flex;
  margin: 1em;
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


</style>