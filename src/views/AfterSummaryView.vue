<script> 
  import PresentationCard from '../components/PresentationCard.vue'
  export default {
    components: {
      PresentationCard,
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

      goToStories() {
        this.$router.push({ name: 'StoryTelling'});
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
        <PresentationCard style="z-index: 50;" v-if="currentIndex==0" 
                          message="But why is it really that important?"
                          @proceed="proceed"/>
      </transition>

      <transition name="slide">
        <PresentationCard style="z-index: 49;" v-if="currentIndex==1" 
                          message="Let’s take a look at some real stories!"
                          @proceed="goToStories"/>
      </transition>
    </div>
  </div>
</template>

<style scoped>
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
    z-index: 50;
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
