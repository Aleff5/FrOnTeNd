<template>
    <div class="title-container">
      <h1>IMAGENARATOR 2000</h1>
      <h2>
        the <span>{{ currentWord }}</span> generator
      </h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: ['best', 'funniest', 'coolest'],
        currentWordIndex: 0,
      };
    },
    computed: {
      currentWord() {
        return this.words[this.currentWordIndex];
      },
    },
    mounted() {
      this.startWordRotation();
    },
    methods: {
      startWordRotation() {
        setInterval(() => {
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        }, 1500);
      },
    },
  };
  </script>
  
  <style scoped>
  .title-container {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h2 span {
    color: #ff6347; /* You can change this color to whatever you prefer */
    font-weight: bold;
  }
  </style>
  