<template>
  <section id="newPassword">
    <div class="nav">
      <img src="@/assets/logo-small.png" alt="smallLogo" class="smallLogo" />
      <h4 class="navName">LCKD</h4>
    </div>
    <h2>
      NEW SECURE <br />
      CREDENTIALS
    </h2>
    <button class="buttons" @click="goTo('/all_pwd')">NEW LCKD</button>
  </section>
</template>

<script>
export default {
  name: "Newpassword",
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
</style>