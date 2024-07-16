<template>
  <div>
    <h1>Metamorfozy</h1>
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image.src" :alt="image.alt">
        <p>{{ image.caption }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { src: '/images/transformations/transformation1.jpg', alt: 'Przemiana 1', caption: 'Przemiana klienta 1' },
  { src: '/images/transformations/transformation2.jpg', alt: 'Przemiana 2', caption: 'Przemiana klienta 2' },
  { src: '/images/transformations/transformation3.jpg', alt: 'Przemiana 3', caption: 'Przemiana klienta 3' },
  // Dodaj więcej zdjęć
])
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.gallery-item {
  flex: 1 1 calc(33% - 20px);
  background-color: #1a1a1a;
  padding: 10px;
  border-radius: 10px;
}

.gallery-item img {
  max-width: 100%;
  border-radius: 5px;
}

.gallery-item p {
  margin-top: 10px;
}
</style>
