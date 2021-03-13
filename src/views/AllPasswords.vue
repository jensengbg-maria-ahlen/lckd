<template>
  <section id="allPasswords">
    <div class="nav">
      <img src="@/assets/logo-small.png" alt="smallLogo" class="smallLogo"/>
      <h4 class="navName">LCKD</h4>
    </div>
    <StoredPasswords />
  </section>
</template>

<script>
import StoredPasswords from "./../components/StoredPasswords";
export default {
  name: "Allpasswords",
  components: {
    StoredPasswords,
  }
};
</script>

<style>
#allPasswords {
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

</style>