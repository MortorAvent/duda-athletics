<template>
  <div>
    <Header />
    <div class="container">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
@import '~/assets/styles.css';

.container {
  min-height: 80vh; /* Aby stopka zawsze była na dole */
}
</style>
