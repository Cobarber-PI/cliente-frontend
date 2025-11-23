<script setup>
import { ref, computed } from 'vue'
import mdiContentCut from 'vue-material-design-icons/ContentCut.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'

// Lista de serviços
const servicos_cortes = [
  { nome: 'Corte Simples', duracao: '30 min', preco: 25 },
  { nome: 'Corte + Barba', duracao: '45 min', preco: 40 },
  { nome: 'Corte Premium', duracao: '60 min', preco: 50 },
  { nome: 'Apenas Barba', duracao: '20 min', preco: 20 },
  { nome: 'Sobrancelha', duracao: '15 min', preco: 15 }
]

// Lista de barbeiros
const barbeiros = [
  {
    nome: 'João Silva',
    telefone: '(11) 98765-4321',
    especialidades: ['Corte Clássico', 'Barba'],
    imagem: '/ListaBarbearia/Barber_to_João.jpeg'
  },
  {
    nome: 'Pedro Santos',
    telefone: '(11) 97654-3210',
    especialidades: ['Corte Moderno', 'Degradê'],
    imagem: '/ListaBarbearia/Barber_to_João.jpeg'
  },
  {
    nome: 'Carlos Oliveira',
    telefone: '(11) 96543-2109',
    especialidades: ['Corte Infantil', 'Barba'],
    imagem: '/ListaBarbearia/Barber_to_João.jpeg'
  }
]

const barbeiroSelecionado = ref(null)
const servicoSelecionado = ref(null)
const dataSelecionada = ref(null)
const horarioSelecionado = ref(null)

// Computed que garante valor booleano
const mostraCalendario = computed(() => {
  return servicoSelecionado.value !== null && barbeiroSelecionado.value !== null
})

// Funções
function selecionarBarbeiro(index) {
  barbeiroSelecionado.value = barbeiroSelecionado.value === index ? null : index
}

function selecionarServico(index) {
  servicoSelecionado.value = servicoSelecionado.value === index ? null : index
}

function selecionarHorario(horario) {
  horarioSelecionado.value = horarioSelecionado.value === horario ? null : horario
}
</script>

<template>
  <div class="container">
    <!-- Serviços -->
    <div class="Containerservicos">
      <h1 class="title">
        <mdi-content-cut class="title-icon" />Escolha o Serviço
      </h1>
      <div class="listaServicos">
        <div v-for="(servico, index) in servicos_cortes" :key="index" class="servicos"
          :class="{ selecionado: servicoSelecionado === index }" @click="selecionarServico(index)">
          <div class="center">
            <div class="agrupamentoPD">
              <h2>{{ servico.nome }}</h2>
              <p>{{ servico.duracao }}</p>
            </div>
            <p class="preco">R$ {{ servico.preco }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Barbeiros -->
    <div class="ContainerBarbeiro">
      <h1 class="title">
        <mdi-content-cut class="title-icon" />Escolha o Barbeiro
      </h1>

      <div class="listaBarbeiros">
        <div v-for="(barbeiro, index) in barbeiros" :key="index" class="barbeiroCard"
          :class="{ selecionado: barbeiroSelecionado === index }" @click="selecionarBarbeiro(index)">
          <img :src="barbeiro.imagem" alt="Foto do barbeiro" class="fotoBarbeiro" />
          <div class="infoBarbeiro">
            <h2>{{ barbeiro.nome }}</h2>
            <p class="telefone">
              <PhoneIcon class="iconeTel" /> {{ barbeiro.telefone }}
            </p>
            <div class="especialidades">
              <button v-for="(esp, i) in barbeiro.especialidades" :key="i" class="tag">
                {{ esp }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Calendário + Horários -->
  <div v-if="mostraCalendario" class="ContainerDataHorario">
    <div class="containerCalendario">
      <h2>Escolha a Data</h2>
      <div class="calendario">
        <v-date-picker v-model="dataSelecionada" locale="pt-BR" :min-date="new Date()" is-dark />
      </div>
    </div>

    <div class="containerHorarios">
      <div class="horarios">
        <h3>Horários Disponíveis</h3>
        <p>
          Horário para este barbeiro em
          {{ dataSelecionada ? dataSelecionada.toLocaleDateString('pt-BR') : '—' }}
        </p>

        <div class="listaHorarios">
          <button v-for="hora in ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']" :key="hora"
            class="botaoHorario" :class="{ selecionado: horarioSelecionado === hora }" @click="selecionarHorario(hora)">
            {{ hora }}
          </button>
        </div>
      </div>
    </div>
    <div class="resumoAgendamento">

    </div>
  </div>
</template>

<style scoped>
/* ===== CONTAINER GERAL ===== */
.container {
  color: #EBEBEB;
  padding: 2rem;
  display: flex;
  gap: 40px;
  justify-content: center;
}

/* ===== TÍTULOS ===== */
.title {
  font-size: 25px;
  padding: 20px 0 20px 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-icon {
  vertical-align: middle;
}

/* ===== SEÇÃO DE SERVIÇOS ===== */
.Containerservicos {
  width: 45%;
  height: 70vh;
  border-radius: 8px;
  border: 1px solid #262626;
  background-color: #0F0F0F;
}

.listaServicos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-height: 55vh;
  overflow-y: auto;
}

.listaServicos::-webkit-scrollbar {
  width: 5px;
}

.listaServicos::-webkit-scrollbar-thumb {
  background-color: #444;
  border-radius: 10px;
}

.servicos {
  width: 90%;
  height: 10vh;
  border: 1px solid #262626;
  border-radius: 5px;
  background-color: #0F0F0F;
  transition: all 0.3s ease;
  cursor: pointer;
}

.servicos:hover {
  border-color: #FAC938;
}

.servicos.selecionado {
  border-color: #FAC938;
  box-shadow: 0 0 10px #fac93844;
}

.center {
  display: flex;
  justify-content: space-between;
  margin: 5px 0 0 10px;
}

.agrupamentoPD {
  margin: 13px 8px;
}

.servicos h2 {
  font-size: 17px;
}

.preco {
  margin: 25px;
  color: #FAC938;
  font-weight: bold;
}

/* ===== SEÇÃO DE BARBEIROS ===== */
.ContainerBarbeiro {
  width: 45%;
  height: 70vh;
  border-radius: 5px;
  border: 1px solid #262626;
  background-color: #0F0F0F;
  color: #EBEBEB;
}

.listaBarbeiros {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-height: 55vh;
  overflow-y: auto;
}

.listaBarbeiros::-webkit-scrollbar {
  width: 5px;
}

.listaBarbeiros::-webkit-scrollbar-thumb {
  background-color: #444;
  border-radius: 10px;
}

/* ===== CARD DE BARBEIRO ===== */
.barbeiroCard {
  width: 90%;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #262626;
  border-radius: 10px;
  background-color: #0F0F0F;
  padding: 15px;
  cursor: pointer;
}

.barbeiroCard:hover {
  border-color: #FAC938;
}

.barbeiroCard.selecionado {
  border-color: #FAC938;
  box-shadow: 0 0 10px #fac93844;
}

/* ===== INFORMAÇÕES DO BARBEIRO ===== */
.fotoBarbeiro {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

.infoBarbeiro h2 {
  font-size: 17px;
  font-weight: bold;
}

.telefone {
  color: #ccc;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 0;
}

.tag {
  background-color: #1a1a1a;
  border: none;
  padding: 5px 12px;
  margin-left: 5px;
  border-radius: 20px;
  color: #fff;
  font-size: 13px;
}

/* ===== DATA E HORÁRIOS ===== */
.ContainerDataHorario {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  gap: 42px;
}

.containerCalendario,
.containerHorarios {
  width: 43%;
  background-color: #0F0F0F;
  border: 1px solid #262626;
  border-radius: 10px;
  padding: 20px;
}

.containerCalendario h2 {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #EBEBEB;
}

.horarios {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.horarios h3 {
  color: #fff;
}

.horarios p {
  color: #A1A492;
  margin-top: 5px;
}

.listaHorarios {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.botaoHorario {
  background-color: #080808;
  border: 1px solid #262626;
  border-radius: 5px;
  color: #EBEBEB;
  padding: 10px 70px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.botaoHorario:hover {
  border-color: #FAC938;
  color: #FAC938;
}

.botaoHorario.selecionado {
  background-color: #FAC938;
  color: #000;
  font-weight: 600;
}

.calendario {
  width: 100%;
  height: 36.5vh;
  border: 1px solid #262626;
  border-radius: 8px;
}

.dataEscolhida {
  margin-top: 20px;
  font-size: 15px;
  color: #FAC938;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 1rem;
  }
  .Containerservicos,
  .ContainerBarbeiro {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .ContainerDataHorario {
    flex-direction: column;
    gap: 20px;
  }
  .containerCalendario,
  .containerHorarios {
    width: 100%;
  }
}
</style>
