<template>
    <div>
      <!-- Outros elementos do seu template -->
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      async handleLogout() {
        try {
          const response = await axios.post('http://localhost:8080/logout', {}, {
            withCredentials: true  // Certifique-se de que os cookies sejam enviados
          });
  
          if (response.status === 200) {
            this.router.push('/login');
          } else {
            alert("Logout failed.");
          }
        } catch (error) {
          alert("Error connecting to the server. Please try again later.");
        }
      }
    }
  };
  </script>
  