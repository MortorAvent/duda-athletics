<template>
  <div>
    <h1>Kalkulator PPM i CPM</h1>
    <form @submit.prevent="calculate">
      <div>
        <label for="weight">Waga (kg):</label>
        <input type="number" id="weight" v-model="weight" required>
      </div>
      <div>
        <label for="height">Wzrost (cm):</label>
        <input type="number" id="height" v-model="height" required>
      </div>
      <div>
        <label for="age">Wiek:</label>
        <input type="number" id="age" v-model="age" required>
      </div>
      <div>
        <label for="gender">Płeć:</label>
        <select id="gender" v-model="gender" required>
          <option value="male">Mężczyzna</option>
          <option value="female">Kobieta</option>
        </select>
      </div>
      <button type="submit">Oblicz</button>
    </form>
    <div v-if="ppm && cpm">
      <p>PPM: {{ ppm }} kcal</p>
      <p>CPM: {{ cpm }} kcal</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const weight = ref(0)
const height = ref(0)
const age = ref(0)
const gender = ref('male')
const ppm = ref(null)
const cpm = ref(null)

const calculate = () => {
  // Wzór Harrisa-Benedicta
  if (gender.value === 'male') {
    ppm.value = 88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value)
  } else {
    ppm.value = 447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.330 * age.value)
  }

  // Przykładowy współczynnik aktywności fizycznej
  const activityFactor = 1.55
  cpm.value = ppm.value * activityFactor
}
</script>
