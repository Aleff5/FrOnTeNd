<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="#" class="navbar-item">BrandName</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="#" class="navbar-item">Home</a>
          <a href="#" class="navbar-item">About</a>
        </div>
        <div class="navbar-end">
          <a href="#" class="navbar-item">Login</a>
          <a href="#" class="navbar-item">Sign Up</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  
  .navbar-brand .navbar-item {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
  
  .navbar-menu {
    display: flex;
    align-items: center;
  }
  
  .navbar-start, .navbar-end {
    display: flex;
  }
  
  .navbar-item {
    margin: 0 0.5rem;
    color: #fff;
    text-decoration: none;
  }
  
  .navbar-item:hover {
    text-decoration: underline;
  }
  </style>
  