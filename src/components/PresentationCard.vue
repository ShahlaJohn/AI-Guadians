<template>
  <div class="presentation-card">
    <div class="message-box">
      <h1>{{message}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    delay: {
      type: Number,
      default: 5000,
    }
  },

  computed: {
  
  },

  methods: {
    proceed() {
      this.$emit("proceed");     
    },
  },

  mounted() {
    setTimeout(this.proceed, this.delay);
  },
};
</script>

<style scoped>
.presentation-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.message-box {
  display: flex;
  align-items: center;
}

h1 {
  font-family: "Poppins";
  font-size: 100px;
  color: #000;
}
</style>
