<script setup>
import FuncionamentoBarbearia from '@/components/barbeiros/FuncionamentoBarbearia.vue';
import ServicosBarbeiros from '@/components/barbeiros/servicosBarbeiros.vue';
import InfoBarbearia from '@/components/layout/InfoBarbearia.vue';
</script>

<template>
  <div class="barbearia-page">
    <div class="hero-wrapper">
      <InfoBarbearia />
    </div>
    <div class="details">
        <FuncionamentoBarbearia />
    </div>
    <div class="services">
        <ServicosBarbeiros/>
    </div>
  </div>
</template>

<style scoped>

.barbearia-page {
  display: flex;
  flex-direction: column;
}

.hero-wrapper {
  min-height: 380px;
}

.details {
  position: relative;
}
@media (max-width: 768px) {
  .details {
    margin-top: 2rem;
  }
}
</style>
