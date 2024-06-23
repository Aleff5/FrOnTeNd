<template>
  <div class="container">
    <h2>Gerador de Imagem Aleatória</h2>
    <div v-if="imageInfo" id="preview">
      <h3>Pré-visualização da Imagem:</h3>
      <div class="image-container">
        <img :src="imageInfo.url" :alt="imageInfo.nome" />
      </div>
      <p>Nome do Arquivo: {{ imageInfo.nome }}</p>
      <p>Descrição: {{ imageInfo.descricao }}</p>
    </div>
    <button @click="generateRandomImage" class="generate-button">Gerar Imagem Aleatória</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageInfo: null,
    };
  },
  methods: {
    generateRandomImage() {
      axios.get('http://localhost:8080/teste')
        .then((response) => {
          // Supondo que a resposta seja uma lista com [nome, descricao, url]
          const [nome, descricao, url] = response.data;
          this.imageInfo = { nome, descricao, url };
        })
        .catch((error) => {
          alert('Erro ao gerar a imagem aleatória.');
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

#preview {
  margin-bottom: 20px;
}

.image-container {
  max-width: 300px;  /* Limite máximo de largura */
  max-height: 300px; /* Limite máximo de altura */
  overflow: hidden;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
}

.generate-button {
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
