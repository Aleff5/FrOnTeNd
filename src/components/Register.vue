<template>
    <div class="wrapper">
      <form @submit.prevent="handleSubmit">
        <h1>Register</h1>
        <div class="input-box">
          <input v-model="email" type="email" placeholder="Email" required>
          <i class='bx bxs-envelope'></i>
        </div>
        <div class="input-box">
          <input v-model="username" type="text" placeholder="Username" required>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
          <input v-model="password" type="password" placeholder="Password" required>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <button type="submit" class="btn">Register</button>
        <div class="login-link">
          <p>Already have an account? <router-link to="/login">Login</router-link></p>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        email: '',
        username: '',
        password: ''
      };
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      },
      async handleSubmit() {
        if (!this.validateEmail(this.email)) {
          alert("Please enter a valid email.");
          return;
        }
        if (this.password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return;
        }
  
        try {
          const response = await axios.post('http://localhost:8080/signup', {
            email: this.email,
            username: this.username,
            password: this.password
          });
  
          if (response.status === 200) {
            this.router.push('/login');
          } else {
            alert("Registration failed.");
          }
        } catch (error) {
          alert("Error connecting to the server. Please try again later.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono", sans-serif;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
  }
  .wrapper {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(9px);
    color: #fff;
    border-radius: 12px;
    padding: 30px 40px;
  }
  .wrapper h1 {
    font-size: 36px;
    text-align: center;
  }
  .wrapper .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
  }
  .input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
  }
  .input-box input::placeholder {
    color: #fff;
  }
  .input-box i {
    position: absolute;
    right: 20px;
    top: 30%;
    transform: translate(-50%);
    font-size: 20px;
  }
  .wrapper .btn {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
  }
  .wrapper .login-link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
  }
  .login-link p a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }
  .login-link p a:hover {
    text-decoration: underline;
  }
  </style>
  