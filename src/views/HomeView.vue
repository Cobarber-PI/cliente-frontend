<script setup>
import { ref } from 'vue'
import TelaHome from '@/components/home/TelaHome.vue'
import Filtro from '@/components/layout/Filtro.vue'
import ListaBarbeiroView from './ListaBarbeiroView.vue'
import FooterView from './FooterView.vue'

const searchText = ref('')
</script>

<template>
  <TelaHome v-model:search="searchText" />
  <div class="teste">
    <div class="center">
      <Filtro />
    </div>
    <div class="lista-barbearias-wrapper">
      <div class="barbearias-header">
        <h2 class="titulo-barbearias">Barbearias <span>próximas</span> a você</h2>
      </div>
      <ListaBarbeiroView :search="searchText" />
    </div>
  </div>
  <FooterView />
</template>

<style scoped>

.teste {
  display: flex;
  margin-top: 20px;
}

.center {
  margin: 30px;
}


.titulo-barbearias {
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  padding: 30px 0 30px 30px;
}

.titulo-barbearias span {
  color: #f1c23c;
}
</style>
