<script setup>
  import {RouterView } from 'vue-router'
</script> 

<template>
  <div id="app">  
    <router-view v-slot="{Component}">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>

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
