<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
import mdiMapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
import mdiPhoneOutline from 'vue-material-design-icons/PhoneOutline.vue';
import { useBarbeariaStore } from '@/stores/barbearia';


const router = useRouter();
const route = useRoute();
const avaliacaoClientes = ref(0)
const barbeariaStore = useBarbeariaStore()
const id = route.params.barbearia_id
const infos = {
  Image: "/InfoBarbearias/barbearia.png",
  nome: "",
  endereco: "Rua das Flores, 123 - Centro",
  telefone: "",
  avaliacao: 4.5,
  descricao: ""
}

onMounted(async () => {
  await barbeariaStore.fetchById(id)
  console.log("BARBEARIA CARREGADA:", barbeariaStore.state.currentBarbearia)
})

const barbearia = computed(() => barbeariaStore.state.currentBarbearia)

function voltar() {
  router.push('/home')
}
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img :src="infos.Image" :alt="infos.nome" class="barbearia-image" />
    </div>
    <div class="buttomVoltar">
      <button @click="voltar()">
        <ArrowLeftIcon class="arrow-icon" />Voltar
      </button>
    </div>
    <div class="informations">
      <h1>{{ barbearia?.nome }}</h1>
      <div class="teste">
        <p><strong></strong>
          <mdiMapMarkerOutline class="Info-icon" />{{ infos.endereco }}
        </p>
        <p><strong></strong>
          <mdiPhoneOutline class="Info-icon" />{{ barbearia?.telefone }}
        </p>
        <p>⭐ <strong>{{ infos.avaliacao }}</strong> ( {{ avaliacaoClientes }} avaliações )</p>
      </div>
      <div class="obs">
        <p><strong></strong> {{ barbearia?.descricao }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p,
h1 {
  color: white;
}

.buttomVoltar {
  margin: 2rem 5rem;
  position: absolute;
}

.buttomVoltar button {
  width: 100px;
  height: 40px;
  background-color: #080808f8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}


.informations {
  margin: 11rem 5rem;
  position: absolute;
}

.informations h1 {
  color: white;
  font-size: 40px;
  margin-bottom: 15px;
}

.image-container img {
  width: 100%;
  height: 50vh;
  position: absolute;
  filter: brightness(55%);
}

.teste {
  display: flex;
  gap: 35px;
  font-size: 18px;
  margin-bottom: 18px;
}

.obs {
  font-size: 18px;
  width: 60%;
}

.arrow-icon {
  width: 20px;
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
}


.Info-icon {
  width: 25px;
  vertical-align: middle;
  margin-right: 5px;
}

@media (max-width: 768px) {
  .buttomVoltar {
    margin: 1rem 1rem;
  }

  .informations {
    margin: 8rem 1rem;
  }

  .obs {
    width: 100%;
  }

  .teste {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
