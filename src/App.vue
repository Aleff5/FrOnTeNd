<script setup>
import ImageUploader from './components/ImageUploader.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <ImageUploader />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: 0;
}
</style>
