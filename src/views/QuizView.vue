<script> 
  import FeedbackCard from '../components/FeedbackCard.vue'
  import ExplanationCard from '../components/ExplanationCard.vue'
  export default {
    components: {
      FeedbackCard,
      ExplanationCard,
    },
    data() {
      return {
        questions: [],
        results: [],
        userAnswers: [],
        correctAnswers: 0,
        fetched: false,
        currentIndex: 0,
        feedbackVisible: false,
        explanationVisible: false,
        lastAnswerCorrect: false,
      };
    },
    computed: {
      currentQuestion() {
        if (this.questions.length > 0) {
          return this.questions[this.currentIndex];
        }
        return {};
      },

      finished() {
        return this.currentIndex >= this.questions.length-1;
      }
    },
    methods: {
      async fetchQuestions() {
        try {
          const response = await fetch("data/quiz.json");
          const data = await response.json();
          this.questions = data.questions;
          this.fetched = true;
        } catch (error) {
          console.error("Error loading JSON:", error);
        }
      },

      nextQuestion() {
        if (this.currentIndex < this.questions.length) {
          this.currentIndex++;
        }
        this.explanationVisible = false;
      },
      
      selectAnswer(answer) {
        const isCorrect = this.currentQuestion.answer === answer;
        if(isCorrect){
          this.correctAnswers++;
        }
        this.lastAnswerCorrect = isCorrect;
        this.results.push({
          category: this.currentQuestion.category,
          image: this.currentQuestion.photo,
          userAnswer: answer,
          correctAnswer: this.currentQuestion.answer,
          result: isCorrect ? 1 : 0
        });
        var answerObject = {text: answer ? "Real" : "Generated", is_correct: isCorrect}
        this.userAnswers.push(answerObject);
        this.feedbackVisible = true; // Show feedback card
        setTimeout(() => {
          this.explanationVisible = true;
        }, 800)
        setTimeout(() => {
          this.feedbackVisible = false;
        }, 3000)
      },

      goToResults(){
        localStorage.setItem('userAnswers', JSON.stringify(this.userAnswers));
        localStorage.setItem('userResult', this.correctAnswers);
        this.$router.push({ name:'Results'});
      }, 
     },

    mounted() {
      this.fetchQuestions();
    }
  }
</script>

<template>
 <div class="card">
    <div class="left-container">
      <button class="btn btn-false" @click="selectAnswer(false)"><i class="fa-solid fa-xmark"></i>Generated</button>
    </div>
    <div class="image-container">
      <img v-if="fetched" :src="this.currentQuestion.photo_src" alt="Test Image">
    </div>
    <div class="right-container">
      <button class="btn btn-true" @click="selectAnswer(true)"><i class="fa-solid fa-check"></i>Real</button>
    </div>
    <transition name="rotation">
      <FeedbackCard
        v-if="feedbackVisible"
        :correct="lastAnswerCorrect"
      />
    </transition>
    
    <transition name="slide">
      <ExplanationCard
          v-if="explanationVisible"
          :questionIndex="currentIndex"
          :quizFinished="finished"
          @next="nextQuestion"
          @finish="goToResults"
      />
    </transition>
  </div>
</template>

<style scoped>
  body {
    background: #FAF9F6;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: absolute;
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
    overflow: hidden;
    z-index: 80;
  }

  .left-container, .right-container {
    width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
  }

  img {
    width: 350px;
    object-fit: contain;
  }


  .btn {
    width: 300px; 
    padding: 20px;
    margin: 40px;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    border: none;
    transition: all 0.3s ease;
  }

  .btn i {
    margin-right: 20px;
  }

  .btn-false {
    color: #ffffff;
    background: #D14249;
  }

  .btn-false:hover {
    background: #DB7176;
    cursor: pointer;
  }

  .btn-true {
    color: #ffffff;
    background: #39C670;
  }

  .btn-true:hover {
    background: #63DF9A;
    cursor: pointer;
  }

  /* Animations */
  .rotation-enter-active,
  .rotation-leave-active {
    transition: all 1s ease-in-out;
  }

  /* Initial state when entering */
  .rotation-enter-from {
    transform: rotate(90deg);
  }

  /* Final state after entering */
  .rotation-enter-to {
    transform: rotate(0deg);
  }

  /* Initial state when leaving */
  .rotation-leave {
    transform: rotate(0deg);
  }

  /* Final state after leaving */
  .rotation-leave-to {
    transform: rotate(90deg);
  }

  .slide-enter-from{
    transform: translateX(0px);
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 1s ease-in-out;
  }

  .slide-leave-to{
    transform: translateX(100%)
  }
</style>
