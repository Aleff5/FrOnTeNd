<template>
    <div class="center-container">
      <!-- Espaço para a imagem futura -->
      <div class="image-placeholder">Imagem aqui</div>
      <!-- Botões abaixo da imagem -->
      <div class="buttons">
        <button @click="gerar">Gerar</button>
        <button @click="upload">Upload</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainContent',
    methods: {
      gerar() {
        console.log('Botão Gerar clicado')
      },
      upload() {
        console.log('Botão Upload clicado')
      }
    }
  }
  </script>
  
  <style scoped>
  .center-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
    background: #ccc; /* Cor de fundo temporária para a área da imagem */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .buttons button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    background-color: #444; /* Cor de fundo dos botões */
    color: white; /* Cor da fonte dos botões */
    cursor: pointer;
  }
  
  .buttons button:hover {
    background-color: #555; /* Cor de fundo dos botões ao passar o mouse */
  }
  </style>
  