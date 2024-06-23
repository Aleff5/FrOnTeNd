<template>
    <div class="admin-dashboard">
      <div class="user-list">
        <h2>Lista de Usuários</h2>
        <div v-for="user in users" :key="user.email" class="user-item">
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.username }}</p> <!-- Exibe o username -->
          <!-- Outras informações do usuário, se necessário -->
        </div>
      </div>
      <div class="image-list">
        <h2>Lista de Imagens</h2>
        <div v-for="imageUrl in imageUrls" :key="imageUrl" class="image-item">
          <img :src="imageUrl" alt="Imagem" />
          <!-- Outras informações da imagem, se necessário -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        imageUrls: [],
      };
    },
    created() {
      axios.get('http://localhost:8080/admin')
        .then(response => {
          this.users = response.data.users || []; // Atribui os usuários vindos da API
          this.imageUrls = response.data.image_urls || []; // Atribui os URLs de imagens vindos da API
        })
        .catch(error => {
          console.error('Erro ao carregar dados:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .user-list, .image-list {
    flex: 1;
    max-width: 45%;
    margin: 10px;
  }
  
  .user-item, .image-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .image-item img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 5px;
    max-height: 200px; /* Define um tamanho máximo para a altura das imagens */
  }
  </style>
  