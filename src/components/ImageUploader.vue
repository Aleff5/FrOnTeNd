<template>
  <div class="container">
    <h2>Formulário de Envio de Imagem</h2>
    <div v-if="imageInfo" id="preview">
      <h3>Pré-visualização da Imagem:</h3>
      <div class="image-container">
        <img :src="imageInfo.url" :alt="imageInfo.nome" />
      </div>
      <div class="image-info">
        <p>Nome do Arquivo: {{ imageInfo.nome }}</p>
        <p>Descrição: {{ imageInfo.descricao }}</p>
      </div>
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
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      fileName: '',
      imageDescription: '',
      imageFile: null,
      imageInfo: null,
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageInfo = {
            nome: this.fileName,
            descricao: this.imageDescription,
            url: e.target.result,
          };
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
            'Authorization': `Bearer ${Cookies.get('token')}`,
          },
          withCredentials: true
        })
        .then((response) => {
          alert('Imagem enviada com sucesso!');
          console.log(response.data);
        })
        .catch((error) => {
          alert('Erro ao enviar a imagem.');
          console.error('Upload error:', error);
        });
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    },
    generateRandomImage() {
      axios.get('http://localhost:8080/teste', {
        withCredentials: true
      })
      .then((response) => {
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

.image-container {
  max-width: 300px;  /* Limite máximo de largura para a imagem */
  max-height: 300px; /* Limite máximo de altura para a imagem */
  overflow: hidden;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  margin: 0 auto; /* Centraliza o container na div pai */
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
}

.image-info {
  text-align: left; /* Alinha informações à esquerda */
}

.generate-button {
  margin-top: 20px;
}
</style>
