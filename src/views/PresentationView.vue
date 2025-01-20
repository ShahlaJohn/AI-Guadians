<script> 
  export default {
    data() {
      return {
        slides: [],
        currentIndex: 0
      };
    },
    computed: {
      currentSlide() {
        if (this.slides.length > 0) {
          return this.slides[this.currentIndex];
        }
        return {};
      },

      finished() {
        return this.currentIndex >= this.slides.length-1;
      }
    },
    methods: {
      async fetchSlides() {
        try {
          const response = await fetch("data/01_slideDeck.json");
          const data = await response.json();
          this.slides = data.slides;
        } catch (error) {
          console.error("Error loading JSON:", error);
        }
      },

      nextSlide() {
        if (this.currentIndex < this.slides.length) {
          this.currentIndex++;
        }
      },

      previousSlide() {
        if (this.currentIndex > 0){
          this.currentIndex = this.currentIndex - 1;
        }
      },

      goToReady() {
        this.$router.push({ name: 'Ready'});
      }
    },

    mounted() {
      this.fetchSlides();
    }
  }
</script>

<template>
  <div class="card">
    <div class="top-container">
      <h1 id="slide-title">Seeing is beliving?</h1>
    </div>
    <div class="bottom-container">
      <div class="left-container">
        <button class="btn" @click="previousSlide()"><i class="fa-solid fa-arrow-left"></i></button>
      </div>
      <div class="middle-container">
        <div class="slide-content">   
          <p class="slide-paragraph" v-for="(paragraph, index) in this.currentSlide.paragraphs" :key="index" v-html="paragraph"></p>
        </div>
      </div>
      <div class="right-container">
        <button v-if="finished === false" class="btn" @click="nextSlide()"><i class="fa-solid fa-arrow-right"></i></button>
        <button v-else class="btn" @click="goToReady()"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    border: 2px solid #000;
    border-radius: 10px;
    background-color: #fff;
    width: 80%;
    height: 80vh;
    z-index: 90;
  }

  .top-container {
    background: #FFEE8C;
    width: 35%;
    padding: 0 20px;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    border-radius: 10px 0 0 0;
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .left-container {
    display: flex;
    align-items: center;
    padding: 0 50px;
  }

  .right-container {
    display: flex;
    align-items: center;
    padding: 0 50px;
  }

  .middle-container {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .slide-content {
    margin: auto;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .btn {
    background-color: #FFEE8C;
    color: #000;
    width: 100px;
    height: 100px;
    border: None;
    border-radius: 50%;
    font-size: 64px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #ffc107;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    color: #000000;
  }

  p {
    font-size: 32px;
    font-family: "Poppins", sans-serif;
    text-align: justify;
    color: #000000;
  }

</style>
