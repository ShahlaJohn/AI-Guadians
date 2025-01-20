<template>
  <div class="feedback-card">

    <div class="message-box">
      <h1 v-if="correct" class="correct">{{message}}</h1>
      <h1 v-else class="incorrect">{{message}}</h1>
    </div>
    <div class="icon-box">
      <i v-if="correct" class="fa-solid fa-circle-check"></i>
      <i v-else class="fa-solid fa-circle-xmark"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    correct: {
      type: Boolean,
      required: true,
    },
  },

computed: {
    // Return a random message based on whether the answer is correct or not
    message() {
      const positiveMessages = [
        "Well Done!",
        "Great Job!",
        "Keep it up!",
      ];

      const negativeMessages = [
        "Oops, that's incorrect!",
        "Not quite right!",
        "The AI won this time!",
      ];

      if (this.correct) {
        return this.getRandomMessage(positiveMessages);
      } else {
        return this.getRandomMessage(negativeMessages);
      }
    },
  },

  methods: {
    // Helper method to select a random message from an array
    getRandomMessage(messages) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    },
    proceed() {
      this.$emit("proceed"); // Emit an event to the parent when the user clicks continue
    },
  },
};
</script>

<style scoped>
.feedback-card {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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

.feedback-card button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
}

.feedback-card button:hover {
  background: #0056b3;
}

.message-box {
  display: flex;
  align-items: center;
}

h1.correct {
  font-size: 100px;
  color: #39C670
}

h1.incorrect {
  font-size: 100px;
  color: #D14249;
}
.icon-box {
  display: flex;
  align-items: center;
}
.fa-circle-check {
  font-size: 300px;
  color: #39C670;
}
.fa-circle-xmark {
  font-size: 300px;
  color: #D14249;
}
</style>
