<script> 
  import PresentationCard from '../components/PresentationCard.vue'
  import ResultsCard from '../components/ResultsCard.vue'
  export default {
    components: {
      PresentationCard,
      ResultsCard
    },
    data() {
      return {
        currentIndex: 0,
        userResult: localStorage.getItem('userResult') || 0,
        userAnswers: JSON.parse(localStorage.getItem('userAnswers')) || [], // Load answers from LocalStorage
      };
    },
    
    computed: {

      score() {
      },

    },
    methods: {
      proceed() {
        this.currentIndex++;
      },

      goToSummary() {
        this.$router.push({ name: 'Summary'});
      }
    },

    mounted() {
      console.log(this.userResult);
      console.log(this.userAnswers);
    }

  }
</script>

<template>
  <div class="card">
    <div class="content-container">
      <transition name="slide">
        <PresentationCard style="z-index: 70;" v-if="currentIndex==0" 
                          message="It seems that’s all!"
                          @proceed="proceed"/>
      </transition>

      <transition name="slide">
        <PresentationCard style="z-index: 69;" v-if="currentIndex==1" 
                          message="Let’s see how good you did!"
                          @proceed="proceed"/>
      </transition>

      <transition name="slide">
        <ResultsCard style="z-index: 68;" v-if="currentIndex==2" 
                          :score="userResult"
                          :questionsAmount="userAnswers.length"
                          @proceed="goToSummary"/>
      </transition>
    </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    z-index: 70;
  }

  /* Animations */
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
