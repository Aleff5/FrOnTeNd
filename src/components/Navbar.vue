<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">IMGEN2K</router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a href="https://github.com/Aleff5/Backend-projeto" class="navbar-item" target="_blank">About</a>
      </div>
      <div class="navbar-end">
        <router-link to="/login" class="navbar-item" v-if="!isUserRoute && !isAdminRoute">Login</router-link>
        <router-link to="/register" class="navbar-item" v-if="!isUserRoute && !isAdminRoute">Sign Up</router-link>
        <LogoutButton v-if="isUserRoute || isAdminRoute" />
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LogoutButton from './LogoutButton.vue';

export default {
  components: {
    LogoutButton
  },
  setup() {
    const route = useRoute();
    const isUserRoute = computed(() => route.path === '/user');
    const isAdminRoute = computed(() => route.path === '/admin');
    return { isUserRoute, isAdminRoute };
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #808080; /* Mudança na cor de fundo para cinza */
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand, .navbar-start, .navbar-end {
  display: flex;
  align-items: center;
}

.navbar-menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navbar-start {
  flex-grow: 1;
}

.navbar-item {
  padding: 0 1rem;
  color: white;
  text-decoration: none;
  border-radius: 5px; /* Bordas arredondadas nos botões */
}

.navbar-item:hover {
  background-color: hsla(0, 0%, 100%, 0.1);
}
</style>

