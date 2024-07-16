<template>
    <div>
      <h1>FAQ - Często Zadawane Pytania</h1>
      <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqItems = ref([
    { question: 'Jak długo trwają sesje treningowe?', answer: 'Standardowa sesja treningowa trwa 60 minut.' },
    { question: 'Czy oferujesz plany dietetyczne?', answer: 'Tak, oferuję spersonalizowane plany dietetyczne dostosowane do Twoich potrzeb.' },
    // Dodaj więcej pytań i odpowiedzi
  ])
  </script>
  
  <style>
  .faq-item {
    margin-bottom: 20px;
  }
  </style>
  