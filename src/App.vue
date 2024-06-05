<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <MainContent />

    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent
  }
}
</script>

<style>
#app {
  display: flex;
  background: #EEE4B1;
}

.content {
  margin-left: 250px;
  padding: 20px;
  flex-grow: 1;
  /* background: #836FFF; Cor de fundo da área de conteúdo principal */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Garante que a altura seja 100% da viewport */
  width: 100vh;
}

h1 {
  color: #836FFF; /* Cor da fonte do título */
}

p {
  color: #836FFF; /* Cor da fonte do parágrafo */
}
</style>
