<template>
    <div class="testimonials">
      <h2>Opinie klientów</h2>
      <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial">
        <blockquote>
          "{{ testimonial.quote }}"
        </blockquote>
        <p>- {{ testimonial.author }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const testimonials = ref([
    { quote: 'Duda pomógł mi osiągnąć moje cele w krótkim czasie. Polecam go każdemu!', author: 'Jan Kowalski' },
    { quote: 'Profesjonalne podejście i ogromna wiedza. Treningi z Dudą to czysta przyjemność!', author: 'Anna Nowak' },
    // Dodaj więcej opinii
  ])
  </script>
  
  <style>
  .testimonials {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .testimonial {
    margin-bottom: 20px;
  }
  
  blockquote {
    font-style: italic;
    color: #555;
  }
  </style>
  