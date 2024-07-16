<template>
    <div class="service-card">
      <img :src="image" alt="Service Image">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: String,
    title: String,
    description: String
  })
  </script>
  
  <style scoped>
  .service-card {
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
  }
  
  .service-card img {
    max-width: 100%;
    border-radius: 5px;
  }
  
  .service-card h3 {
    color: #D4AF37;
    margin-top: 15px;
  }
  </style>
  