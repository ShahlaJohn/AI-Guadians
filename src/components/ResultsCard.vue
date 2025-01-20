<template>
  <div class="results-card">
    <div class="content-container">
      <h1>Your score is</h1>
      <h1 class="score">{{this.score}}/{{this.questionsAmount}}!</h1>
    </div>
    <button @click="proceed">View Summary</button>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: [Number, String],
      required: true,
    },
    questionsAmount: {
      type: [Number, String],
      required: true,
    }
  },

  methods: {
    proceed() {
      this.$emit("proceed");     
    },
  },

};
</script>

<style scoped>
.results-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px;
  background-color: #fff;
  width: 100%;
  height: 80vh;
  transform-origin: bottom right;
  z-index: 20;
}

.contetnt-container {
  display: flex;
  align-items: center;
}

h1 {
  font-family: "Poppins";
  font-size: 120px;
  color: #000;
  margin: 50px auto;
}

h1.score{
  color: #39C670;
}

button {
  max-width: 50%;
  margin: 50px auto;
  background: #FFEE8C;
  color: #000;
  border: 2px solid #000;
  padding: 20px 100px;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover,
button:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  background: #ffde4d;
}
</style>
