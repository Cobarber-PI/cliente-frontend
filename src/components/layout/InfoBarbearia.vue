<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
import mdiMapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
import mdiPhoneOutline from 'vue-material-design-icons/PhoneOutline.vue';

const avaliacaoClientes = ref(0)

const infos = {
  Image: "/InfoBarbearias/barbearia.png",
  nome: "Barbearia do Zé",
  endereco: "Rua das Flores, 123 - Centro",
  telefone: "(11) 98765-4321",
  avaliacao: 4.5,
  observacao: "Barbearia premium com mais de 10 anos de tradição, oferecendo serviços de alta qualidade em um ambiente sofisticado e acolhedor."
}

const router = useRouter();

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
      <button><ArrowLeftIcon class="arrow-icon" @click="voltar" />Voltar</button>
    </div>
    <div class="informations">
      <h1>{{ infos.nome }}</h1>
      <div class="teste">
        <p><strong></strong><mdiMapMarkerOutline class="Info-icon"/>{{ infos.endereco }}</p>
        <p><strong></strong><mdiPhoneOutline class="Info-icon"/>{{ infos.telefone }}</p>
        <p>⭐ <strong>{{ infos.avaliacao }}</strong> ( {{ avaliacaoClientes }} avaliações )</p>
      </div>
      <div class="obs">
        <p><strong></strong> {{ infos.observacao }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p,h1{
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


.Info-icon{
  width: 25px;
  vertical-align: middle;
  margin-right: 5px;
}

</style>
