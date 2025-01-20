<script>
  export default {
    data() {
      return {
        slides: [],
        currentIndex: 0,
        fetched: false,
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
      async fetchChecklist() {
        try {
          const response = await fetch("data/checklist.json");
          const data = await response.json();
          this.slides = data.slides;
          this.fetched = true;
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

      downloadPDF() {
        const link = document.createElement('a');
        link.href = "/documents/checklist.pdf";
        link.target = '_blank';
        link.download = "AI_Guardians_Checklist.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },

    mounted() {
      this.fetchChecklist();
    }
  }
</script>

<template>
  <div class="card">
    <div class="container">
      <div class="left-container">
        <button v-if="currentIndex!=0" class="btn" @click="previousSlide()"><i class="fa-solid fa-arrow-left"></i></button>
      </div>
      <div class="middle-left-container">
        <div class="image-container">
          <img :src="this.currentSlide.photo_src" alt="Image">
        </div>
      </div>
      <div class="middle-right-container">
        <div class="points-container">
          <p v-for="(point, index) in currentSlide.points" :key="index" v-html="point"></p>
        <button v-if="finished" class="rectangular-button" @click="downloadPDF">Download Checklist as PDF</button>
        </div>
      </div>
      <div class="right-container">
        <button v-if="!finished" class="btn" @click="nextSlide()"><i class="fa-solid fa-arrow-right"></i></button>
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
    overflow:hidden;
    z-index: 10;
  }

  .container {
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

  .middle-left-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .middle-right-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: justify;
  }

  .points-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    width: 100%;
    height: 100%;
  }

  p {
    font-family: "Poppins";
    font-size: 28px;
    font-weight: 500;
    color: #000;
  }
  img {
    width: 350px;
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

  .end-button {
    background-color: #FFEE8C;
    color: #000;
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    border-radius: 50%;
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .end-button:hover {
    background-color: #ffc107;
  }

  .rectangular-button { 
    margin: 30px auto 0 auto;
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

  .rectangular-button:hover,
  .rectangular-button:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    background: #ffde4d;
  }

  .fa-circle-check {
    font-size: 48px;
    margin-left: 15px;
    color: #39C670;
  }

  .fa-circle-xmark {
    font-size: 48px;
    margin-left: 15px;
    color: #D14249;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
  
</style>
