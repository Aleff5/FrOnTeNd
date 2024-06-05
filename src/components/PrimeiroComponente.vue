<template>
    <!-- <h1>Olá vue!</h1> -->
    <p>Meu nome é {{ nome }}</p>
</template>

<script setup>
import { ref } from 'vue';

const nome = ref("aleff")
</script>
