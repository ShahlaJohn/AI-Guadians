<script> 
  import PresentationCard from '../components/PresentationCard.vue'
  export default {
    components: {
      PresentationCard,
    },
    data() {
      return {
        currentIndex: 0,
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

      goToEnd() {
        this.$router.push({ name: 'End'});
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
        <PresentationCard style="z-index: 30;" v-if="currentIndex==0" 
                          message="Now you see how dangerous AI can be!"
                          @proceed="proceed"/>
      </transition>

      <transition name="slide">
        <PresentationCard style="z-index: 29;" v-if="currentIndex==1" 
                          message="Make sure to always pay attention and stay safe!"
                          @proceed="proceed"/>
      </transition>
      <transition name="slide">
        <PresentationCard style="z-index: 28;" v-if="currentIndex==2" 
                          message="Here you'll find a summary of what to pay attention to!"
                          @proceed="goToEnd"/>
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
    z-index: 30;
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
