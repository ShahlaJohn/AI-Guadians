<script>
export default {
  props: {
    questionIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      explanations: [],
      fetched: false,
    };
  },

  computed: {
    currentQuestion() {
      return this.explanations[this.questionIndex];
    }
  },
  methods: {
    async fetchExplanations() {
      try {
        const response = await fetch("data/explanations.json");
        const data = await response.json();
        this.explanations = data.explanations;
        this.fetched = true;
      } catch (error) {
        console.error("Error loading JSON:", error);
      }
    },

    exit() {
      this.$emit("exit");
    },
  },

  mounted() {
    this.fetchExplanations();
    console.log(this.explanations)
  }
};
</script>

<template>
  <div class="explanation-card">
    <div class="container">
      <div class="left-container">
        <div class="image-container">
          <img v-if="fetched" :src="currentQuestion.photo_src" alt="Image">
        </div>
      </div>
      <div v-if="fetched" class="right-container">
        <p v-for="(paragraph, index) in currentQuestion.explanation_paragraphs" :key="index" v-html="paragraph" ></p>
        <button class="rectangular-button" @click="this.exit()">Back to Summary</button>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.explanation-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px;
  background-color: #fff;
  width: 100%;
  height: 80vh;
  z-index: 10;
  transform-origin: bottom right;
}


.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-bottom: 70px;
}

.left-container {
  display: flex;
  justify-content: center;
  align-items: center;
}


img {
  width: 400px;
}

.right-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: justify;
  width: 50%;
  color: black;
  font-family: "Poppins";
  font-size: 28px;
  font-weight: 500;
}

button {
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

h1 {
  font-size: 100px;
  color: #000;
}

</style>
