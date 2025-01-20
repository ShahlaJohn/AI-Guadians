<script> 
  export default {
    methods: {
      goToSlides() {
        this.$router.push({ name: 'Presentation'});
      }
    },

  }
</script>

<template>
  <div class="card">
    <div class="content-container">
      <h1>CAN YOU TRUST YOUR EYES?</h1>
      <button class="start-btn" @click="goToSlides">START</button>
    </div>
  </div>
</template>

<style scoped>

  .card {
    margin: auto;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 50px;
    background-color: #fff;
    width: 80%;
    height: 80vh;
    z-index: 100;
  }


  h1 {
    font-size: 120px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    color: #000000;
  }

  button {
    background: #FFEE8C;
    margin-top: 50px;
    color: #000;
    border: 2px solid #000;
    padding: 20px 100px;
    font-family: "Poppins", sans-serif;
    font-size: 64px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  button:hover,
  button:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    background: #ffde4d;
  }
</style>
