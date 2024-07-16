<template>
  <div>
    <h1>Blog</h1>
    <div v-for="article in articles" :key="article._path">
      <NuxtLink :to="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p>{{ article.date }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app'
const { data: articles } = await useAsyncData('content', () =>
  queryContent().find()
)
</script>
