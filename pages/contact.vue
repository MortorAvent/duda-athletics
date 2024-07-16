<template>
  <div>
    <h1>Kontakt</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Imię:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message">Wiadomość:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Wyślij</button>
    </form>
    <div v-if="successMessage">
      <p>{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const successMessage = ref('')

const submitForm = async () => {
  if (!validateEmail(email.value)) {
    successMessage.value = 'Proszę podać prawidłowy adres email.'
    return
  }
  // Implementuj wysyłkę formularza
  successMessage.value = 'Wiadomość została wysłana!'
  name.value = ''
  email.value = ''
  message.value = ''
}

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
</script>


  