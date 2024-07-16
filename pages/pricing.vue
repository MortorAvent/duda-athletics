<template>
  <div>
    <h1>Cennik</h1>
    <div class="services">
      <ServiceCard 
        image="/images/service1.jpg"
        title="Trening Personalny"
        description="Indywidualne sesje treningowe dostosowane do Twoich potrzeb."
      />
      <ServiceCard 
        image="/images/service2.jpg"
        title="Plan Dietetyczny"
        description="Spersonalizowane plany dietetyczne wspierające Twoje cele fitness."
      />
      <ServiceCard 
        image="/images/service3.jpg"
        title="Konsultacje Online"
        description="Profesjonalne doradztwo online dla osób z całej Polski."
      />
    </div>
  </div>
</template>

<script setup>
import ServiceCard from '~/components/ServiceCard.vue'
</script>

<style scoped>
.services {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}
</style>


  