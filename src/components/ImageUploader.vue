<template>
    <div class="container">
      <h2>Formulário de Envio de Imagem</h2>
      <div v-if="previewUrl" id="preview">
        <h3>Pré-visualização da Imagem:</h3>
        <img :src="previewUrl" alt="Pré-visualização da imagem" />
      </div>
      <form @submit.prevent="uploadImage">
        <div class="form-group">
          <label for="imageFile">Selecionar Imagem:</label>
          <input type="file" @change="previewImage" accept="image/*" required />
        </div>
        <div v-if="imageFile">
          <div class="form-group">
            <label for="fileName">Nome do Arquivo:</label>
            <input type="text" v-model="fileName" id="fileName" required />
          </div>
          <div class="form-group">
            <label for="imageDescription">Descrição da Imagem:</label>
            <input type="text" v-model="imageDescription" id="imageDescription" required />
          </div>
          <div class="form-group">
            <button type="submit">Enviar Imagem</button>
          </div>
        </div>
      </form>
      <button @click="generateRandomImage" class="generate-button">Gerar Imagem Aleatória</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        fileName: '',
        imageDescription: '',
        imageFile: null,
        previewUrl: null,
      };
    },
    methods: {
      previewImage(event) {
        const file = event.target.files[0];
        if (file) {
          this.imageFile = file;
          const reader = new FileReader();
          reader.onload = (e) => {
            this.previewUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      uploadImage() {
        if (this.fileName && this.imageDescription && this.imageFile) {
          const formData = new FormData();
          formData.append('fileName', this.fileName);
          formData.append('description', this.imageDescription);
          formData.append('imageFile', this.imageFile);
  
          axios.post('http://localhost:8080/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            alert('Imagem enviada com sucesso!');
            console.log(response.data);
          })
          .catch((error) => {
            alert('Erro ao enviar a imagem.');
            console.error(error);
          });
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      },
      generateRandomImage() {
        axios.get('http://localhost:8080/teste')
          .then((response) => {
            this.previewUrl = response.data;
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
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 20px;
    width: 100%;
  }
  
  input[type="text"], input[type="file"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin-top: 5px;
  }
  
  button {
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
  }
  
  #preview {
    margin-bottom: 20px;
  }
  
  #preview img {
    max-width: 300px;  /* Limite máximo de largura */
    max-height: 300px; /* Limite máximo de altura */
    width: auto;
    height: auto;
  }
  
  .generate-button {
    margin-top: 20px;
  }
  </style>
  