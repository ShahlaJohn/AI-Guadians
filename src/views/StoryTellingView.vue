<script> 
  import StoryCard from '../components/StoryCard.vue'
  export default {
    components: {
      StoryCard
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      next() {
        this.currentIndex++;
      },

      goToAfterStories() {
        this.$router.push({ name: 'AfterStories'});
      }
    },
  }
</script>

<template>
  <div class="card">
    <div class="content-container">
      <transition name="slide">
        <StoryCard style="z-index: 40;" v-if="currentIndex==0" 
                          :storyIndex="0"
                          @next="next"/>
      </transition>

      <transition name="slide">
        <StoryCard style="z-index: 39;" v-if="currentIndex==1" 
                          :storyIndex="1"
                          @next="next"/>
      </transition>

      <transition name="slide">
        <StoryCard style="z-index: 38;" v-if="currentIndex==2" 
                          :storyIndex="2"
                          @finish="goToAfterStories"/>
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
    z-index: 40;
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
