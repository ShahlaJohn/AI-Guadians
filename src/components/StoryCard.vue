<script>
export default {
  props: {
    storyIndex: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      stories: [],
      fetched: false,
    };
  },

  computed: {
    currentStory() {
      return this.stories[this.storyIndex];
    },

    storyTellingFinished(){
      return this.storyIndex == this.stories.length - 1
    }
  },

  methods: {
    async fetchStories() {
      try {
        const response = await fetch("data/stories.json");
        const data = await response.json();
        this.stories = data.stories;
        this.fetched = true;
      } catch (error) {
        console.error("Error loading JSON:", error);
      }
    },
    next() {
      this.$emit("next");     
    },
    finish() {
      this.$emit("finish");     
    }
  },
  mounted() {
    this.fetchStories();
  }
};
</script>

<template>
  <div class="story-card">
    <div class="top-container">
      <div class="title-box">
        <h1 v-if="fetched" class="title">{{currentStory.title}}</h1>
      </div>
    </div>
    <div class="middle-container">
      <div class="middle-left-container">
        <div class="image-container">
          <img v-if="fetched" :src="currentStory.photo_src" alt="Image">
        </div>
      </div>
      <div v-if="fetched" class="middle-right-container">
        <p v-for="(paragraph, index) in currentStory.paragraphs" :key="index" v-html="paragraph"></p>
      </div>
    </div>
    <div class="bottom-container">
      <button v-if="fetched && !storyTellingFinished" class="rectangular-button" @click="next">Next Story</button>
      <button v-else class="rectangular-button" @click="finish">End</button>
    </div>
  </div>
  
</template>

<style scoped>
.story-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 10;
}

.top-container {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
}

.title-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFEE8C;
  padding: 0 50px;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
}

.middle-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
}

.middle-left-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 400px;
}

.middle-right-container {
  text-align: justify;
  width: 50%;
  padding: 50px;
  color: black;
  font-family: "Poppins";
  font-size: 26px;
  font-weight: 500;
}

button {
  background: #FFEE8C;
  color: #000;
  border: 2px solid #000;
  margin-bottom: 20px;
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
  font-size: 48px;
  color: #000;
}
</style>
