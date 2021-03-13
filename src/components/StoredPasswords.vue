<template>
  <section id="storedPasswords">
      <div class="label">STORED PASSWORDS</div>
      <div class="allThePasswords">
          <div>
              <h3>www.google.com</h3>
              <img src="@/assets/eye-outline.png" alt="eye show">
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'StoredPasswords'
}
</script>

<style>
.label {
    width: 180px;
    height: 22px;
    background: #FFBD21;
    border-radius: 8px 8px 0px 0px;
}
.allThePasswords {
    border: 1px solid #FFBD21;
    box-sizing: border-box;
    border-radius: 0px 8px 8px 8px;
}
</style>