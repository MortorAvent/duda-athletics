<template>
    <div class="newsletter-signup">
      <h2>Zapisz się na newsletter</h2>
      <form @submit.prevent="signup">
        <input type="email" v-model="email" placeholder="Twój e-mail" required />
        <button type="submit">Zapisz się</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const successMessage = ref('')
  
  const signup = () => {
    // Implementacja zapisu na newsletter
    // Możesz użyć serwisu takiego jak Mailchimp lub Sendinblue
    successMessage.value = 'Dziękujemy za zapisanie się na newsletter!'
    email.value = ''
  }
  </script>
  
  <style>
  .newsletter-signup {
    margin-top: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  
  .newsletter-signup input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .newsletter-signup button {
    padding: 10px 20px;
    background-color: #343a40;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .newsletter-signup button:hover {
    background-color: #555;
  }
  </style>
  