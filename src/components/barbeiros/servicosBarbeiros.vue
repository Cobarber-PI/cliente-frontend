<script setup>
import mdiContentCut from 'vue-material-design-icons/ContentCut.vue';


const servicos_cortes = [
  { nome: "Corte Simples", duracao: "30 min", preco: 25 },
  { nome: "Corte + Barba", duracao: "45 min", preco: 40 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 },
  { nome: "Corte Premium", duracao: "60 min", preco: 50 }
];

const barbeiros = [
  { nome: "Barbeiro 1", duracao: "30 min", preco: 25 },
  { nome: "Barbeiro 2", duracao: "45 min", preco: 40 },
  { nome: "Barbeiro 3", duracao: "60 min", preco: 50 },
];
</script>

<template>
  <div class="container">
    <div class="Containerservicos">
  <h1 class="title"><mdi-content-cut class="title-icon" />Escolha o Serviço</h1>
      <div class="listaServicos">
        <div v-for="(servico, index) in servicos_cortes" :key="index" class="servicos">
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
    <div class="ContainerBarbeiro">
      <h1 class="title">Escolha o Barbeiro</h1>
      <div class="listaBarbeiros">
        <div v-for="(barbeiro, index) in barbeiros" :key="index" class="barbeiros">
          <h2>{{ barbeiro.nome }}</h2>
          <p>Duração: {{ barbeiro.duracao }}</p>
          <p>Preço: R$ {{ barbeiro.preco }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* USADO NOS SERVIÇOS */

.container {
  color: #EBEBEB;
  padding: 2rem;
  display: flex;
  gap: 40px;
  justify-content: center;
}

.title {
  font-size: 25px;
  padding: 20px 0 20px 30px;
}

.center {
  display: flex;
  justify-content: space-between;
  margin: 5px 0 0 10px;
}

.agrupamentoPD {
  margin: 13px 8px;
}

.preco {
  margin: 25px;
  color: #FAC938;
  font-weight: bold;
}

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
}

.servicos {
  width: 90%;
  height: 10vh;
  border: 1px solid #262626;
  border-radius: 5px;
  background-color: #0F0F0F;
}

.servicos h2 {
  font-size: 17px;
}


.title-icon {
  margin-right: 12px;
  vertical-align: middle;
}

/* USADO NOS BARBEIROS */

.ContainerBarbeiro {
  width: 45%;
  height: 80vh;
  border-radius: 5px;
  border: 1px solid #262626;
  background-color: #0F0F0F;
}

.listaBarbeiros {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.barbeiros {
  width: 90%;
  height: 16vh;
  border: 1px solid #262626;
  border-radius: 8px;
  background-color: #0F0F0F;
}
</style>
