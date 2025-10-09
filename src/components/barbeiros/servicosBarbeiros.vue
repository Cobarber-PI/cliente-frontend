<script setup>
import { ref } from 'vue'
import mdiContentCut from 'vue-material-design-icons/ContentCut.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'

// Lista de serviços
const servicos_cortes = [
  { nome: "Corte Simples", duracao: "30 min", preco: 25 },
  { nome: "Corte + Barba", duracao: "45 min", preco: 40 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 },
]

// Lista de barbeiros
const barbeiros = [
  {
    nome: "João Silva",
    avaliacao: 4.9,
    reviews: 156,
    telefone: "(11) 98765-4321",
    especialidades: ["Corte Clássico", "Barba"],
    imagem: "/ListaBarbearia/Barber_to_João.jpeg"
  },
  {
    nome: "Pedro Santos",
    avaliacao: 4.7,
    reviews: 89,
    telefone: "(11) 97654-3210",
    especialidades: ["Corte Moderno", "Degradê"],
    imagem: "/ListaBarbearia/Barber_to_João.jpeg"
  },
  {
    nome: "Carlos Oliveira",
    avaliacao: 4.8,
    reviews: 203,
    telefone: "(11) 96543-2109",
    especialidades: ["Corte Infantil", "Barba"],
    imagem: "/ListaBarbearia/Barber_to_João.jpeg"
  },
  {
    nome: "Pedro Santos",
    avaliacao: 4.7,
    reviews: 89,
    telefone: "(11) 97654-3210",
    especialidades: ["Corte Moderno", "Degradê"],
    imagem: "/ListaBarbearia/Barber_to_João.jpeg"
  },
  {
    nome: "Pedro Santos",
    avaliacao: 4.7,
    reviews: 89,
    telefone: "(11) 97654-3210",
    especialidades: ["Corte Moderno", "Degradê"],
    imagem: "/ListaBarbearia/Barber_to_João.jpeg"
  },
  {
    nome: "Pedro Santos",
    avaliacao: 4.7,
    reviews: 89,
    telefone: "(11) 97654-3210",
    especialidades: ["Corte Moderno", "Degradê"],
    imagem: "/ListaBarbearia/Barber_to_João.jpeg"
  },
]

const barbeiroSelecionado = ref(null)
const servicoSelecionado = ref(null)

function selecionarBarbeiro(index) {
  barbeiroSelecionado.value = index
}

function selecionarServico(index) {
  servicoSelecionado.value = index
}
</script>

<template>
  <div class="container">
    <!-- Seção de Serviços -->
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

    <!-- Seção de Barbeiros -->
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
</style>
