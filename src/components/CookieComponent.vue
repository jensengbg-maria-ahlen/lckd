<template>
  <section id="cookie-consent" v-show="display">
    <div id="cookieDialog">
      <h1>Cookie Consent</h1>
      <div>
        <label> <input type="checkbox" /> Only neccessary cookies</label>
        <label> <input type="checkbox" /> Accept all cookies</label>
      </div>
      <button @click="accept(display = !display)">Accept</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CookieComponent",
  data: () => ({
      display: true
  }),
  methods: {
      accept() {
        console.log('data sparat')
      }
  },
};
</script>

<style>
#cookie-consent {
  border: 3px solid rgba(0, 0, 0, 0.329);
  background: #0000005b;
  padding: 1em;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#cookieDialog {
  background: #ffffff;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2em;
  border: 1px solid rgba(0, 0, 0, 0.329);
  box-shadow: 0 -1px 31px 5px rgba(0, 0, 0, 0.623);
  border-radius: 10px;
}

button {
  width: 150px;
  height: 62px;
  background: #15085f;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  font-weight: bolder;
  font-size: 20px;
}
</style>