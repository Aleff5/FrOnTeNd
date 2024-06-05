<template>
    <div class="sidebar">
      <h2>Menu</h2>
      <div class="login-buttons">
        <button href="/login" @click="login">Login</button>
        <button @click="register">Registrar</button>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    methods: {
      login() {
        console.log('Login button clicked');
      },
      register() {
        console.log('Register button clicked');
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  
  .sidebar {
    width: 250px;
    height: 100%;
    background: #1A2130;
    color: white;
    position: fixed;
    font-family: "Montserrat", sans-serif;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .sidebar h2 {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin-top: 375px;
  }
  
  .sidebar ul li {
    
    margin: 20px 0;

  }
  
  .sidebar ul li a {
    color: var(--cor_font);
    text-decoration: none;
  }
  
  .login-buttons {
    margin-top: 20px;
  }
  
  .login-buttons button {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 0;
    border-radius: 50px;
    background: #F3F7EC;
    color: var;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
  }
  
  .login-buttons button:hover {
    background: #5A72A0; /* Cor de fundo dos botões ao passar o mouse */
  }
  </style>
  