<template>
  <div>
    <h1>Witaj na stronie Duda Athletics!</h1>
    <p>Jestem Duda, Mistrz Polski w Trójboju Siłowym i oferuję profesjonalne usługi trenera personalnego.</p>
    <p>Dowiedz się więcej o mojej historii, moich usługach i jak mogę Ci pomóc osiągnąć Twoje cele fitness.</p>
    <Achievements />
    <Testimonials />
    <NewsletterSignup />
  </div>
</template>

<script setup>
import Testimonials from '~/components/Testimonials.vue'
import NewsletterSignup from '~/components/NewsletterSignup.vue'
import Achievements from '~/components/Achievements.vue'
</script>
