import { createRouter, createWebHistory } from 'vue-router';
import UserPage from '../components/UserPage.vue'; // Ajuste o caminho conforme necessário
import Login from '../components/Login.vue'; // Ajuste o caminho conforme necessário
import ImageUploader from '../components/ImageUploader.vue'; // Se precisar de uma rota para ImageUploader
import HomePage from '../components/HomePage.vue'; // Ajuste o caminho conforme necessário
import Register from '../components/Register.vue'; // Ajuste o caminho conforme necessário
import AdminDashboard from '../components/AdminDashboard.vue';

const routes = [
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: UserPage
  },
  {
    path: '/admin/images',
    name: 'AdminImages',
    component: ImageUploader
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user',
    name: 'UserImageUploader',
    component: ImageUploader // Ou outro componente para upload de imagens de usuário
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
