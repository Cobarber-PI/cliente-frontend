<script setup>
import MdiClockOutline from 'vue-material-design-icons/ClockOutline.vue';
import api from '@/plugin/axios';
import { onMounted } from 'vue'
import { ref } from 'vue';

const horarios = ref([])
const traducaoDias = {
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado',
  0: 'Domingo'
}

onMounted(async () => {
  const { data } = await api.get("/horarios-funcionamento/")
  horarios.value = data.results.map(h => ({
    day: traducaoDias[h.dia_da_semana],
    time: `${h.horario_abertura} - ${h.horario_fechamento}`,
  }))
  console.log(horarios.value)
})
</script>

<template>
  <div class="container">
    <div class="funcionamento">
      <h1 class="title">
        <MdiClockOutline class="title-icon" />Horários de Funcionamento
      </h1>

      <!-- NOVA GRID DOS DIAS (substitui a tabela) -->
      <div class="dias-grid">
        <div class="dia-item" v-for="h in horarios" :key="h.day">
          <strong>{{ h.day }}</strong>
          <span :class="{ fechado: h.time === 'Fechado' }">
            {{ h.time }}
          </span>
        </div>
      </div>
    </div>

    <div class="comodidades">
      <h1>Comodidades</h1>
      <ul>
        <li>Wi-Fi gratuito</li>
        <li>Estacionamento</li>
        <li>Ar-condicionado</li>
        <li>Mesa de sinuca</li>
        <li>TV</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 30px;
  margin-left: 2rem;
  margin-top: 1rem;
}

.title-icon {
  margin-right: 8px;
}

.container {
  color: #fff;
  display: flex;
  justify-content: center;
}

.funcionamento {
  width: 50%;
  height: 30vh;
  margin: 2rem 2rem 2rem 0;
  background-color: #0F0F0F;
  border-radius: 8px;
  border: solid #262626 1px;
}

/* <-- NOVO GRID DOS DIAS --> */
.dias-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 22px 25px;
  gap: 10px 40px;
  width: 100%;
}

.dia-item {
  display: flex;
  justify-content: space-between;
}

.fechado {
  color: red;
  font-weight: bold;
}
/* -------------------------- */

.comodidades {
  width: 30%;
  height: 30vh;
  margin: 2rem 2rem 2rem 0;
  background-color: #0F0F0F;
  border-radius: 8px;
  border: solid #262626 1px;
}

.comodidades ul {
  padding: 10px 55px;
  list-style-type: disc;
}

.comodidades li {
  margin-bottom: 2px;
  font-size: 16px;
}

.comodidades li::marker {
  color: #F0C238;
  font-size: 25px;
}

.comodidades h1 {
  font-size: 30px;
  margin-left: 2rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .funcionamento,
  .comodidades {
    width: 80%;
    margin: 1rem 0;
  }

  .dias-grid {
    grid-template-columns: 1fr; /* mobile: 1 coluna */
  }
}
</style>
