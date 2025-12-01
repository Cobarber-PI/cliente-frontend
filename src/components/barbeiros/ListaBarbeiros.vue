<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useBarbeariaStore } from "@/stores/barbearia";


function goToBarbearias(id) {
  router.push(`/barbearia/${id}/`)
}

const router = useRouter();
const barbeariaStore = useBarbeariaStore();

const page = ref(1);
const perPage = ref(999);

const infoBarbershop = computed(() => barbeariaStore.state.barbearias);


onMounted(async () => {
  await barbeariaStore.fetchAll(page.value, perPage);
  window.barbeariaStore = barbeariaStore;

});
</script>

<template>
  <div class="container">
    <div v-for="barbershop in infoBarbershop" :key="barbershop.id" class="barbershop">
      <div class="image-container">
        <img :src="barbershop.Image" :alt="`Imagem da ${barbershop.name}`" class="imageBarbershop">
        <span class="distance">{{ barbershop.distance }}</span>
      </div>
      <div class="informations">
        <h3>{{ barbershop.nome }}</h3>
        <div class="address">
          <p><img src="/ListaBarbearia/localizacao.png" alt="localização">{{ barbershop.endereco }}</p>
        </div>
        <div class="ratingClock">
          <div class="rating"> <span class="stars">⭐⭐⭐⭐☆</span> <strong>{{ barbershop.rating }}</strong>
            <span>({{ barbershop.telefone }})</span>
          </div>
          <div class="clock">{{ barbershop.cep }}</div>
        </div>
        <p class="title-services">Serviços:</p>
        <div class="services"> <span v-for="(service, index) in barbershop.services" :key="index">{{ service
        }}</span> </div>
      </div>
      <div class="centerButton">
        <button @click="goToBarbearias(barbershop.id)"><img src="/ListaBarbearia/tesouras.png" alt="tesouras"
            class="imageButton">Agendar
          Horário</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
  max-height: 1250px;
  overflow-y: auto;
}

.barbershop {
  width: 300px;
  height: 70vh;
  border: 1px solid #2c2c2c;
  border-radius: 12px;
  margin-bottom: 16px;
  background-color: #09090B;
  color: #fff;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.barbershop:hover {
  transform: translateY(-10px);
}

/* ---- IMAGEM DA BARBEARIA ---- */
.image-container {
  position: relative;
  overflow: hidden;
}

.imageBarbershop {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.barbershop:hover .imageBarbershop {
  transform: scale(1.1);
}

/* ---- DISTÂNCIA IMAGEM ---- */
.distance {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #373636e7;
  color: #F0C238;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 10px;
  border: solid #404040 1px;
  font-weight: bold;
  pointer-events: none;
  z-index: 2;
}

/* ---- INFORMAÇÕES INTERNAS ---- */
.informations {
  padding: 0 20px 15px 20px;
}

.informations h3 {
  padding: 15px 0 5px 0;
  color: #fff;
}

/* ---- TÍTULO SERVIÇOS ---- */
.title-services {
  color: #F0C238;
  font-weight: 600;
  font-size: 14px;
  margin: 10px 0 5px 0;
}

/* ---- ENDEREÇO ---- */
.address img {
  width: 16px;
  height: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.address p {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  color: #ccc;
  font-size: 14px;
}

/* ---- AVALIAÇÃO + HORÁRIO ---- */
.ratingClock {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
}

.rating .stars {
  color: #ffbf00;
  /* cor das estrelas */
  font-size: 14px;
  margin: 18px 0;
}

.rating span {
  font-size: 13px;
  color: #8B8B93;
}

.clock {
  background: #1E1E20;
  color: #9999A2;
  border: solid #343437 1px;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
}

/* ---- SERVIÇOS ---- */
.services {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.services span {
  background: #0d0d0d;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 12px;
  color: #fff;
  border: solid #fffb003d 1px
}

/* ---- BOTÃO AGENDAR ---- */
.barbershop button {
  background-color: #F0C238;
  /* cor de fundo do botão */
  border: none;
  border-radius: 12px;
  padding: 15px;
  width: 85%;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imageButton {
  height: 22px;
  width: 22px;
  object-fit: contain;
  margin-right: 6px;
  vertical-align: middle;
  display: inline-block;
}

.centerButton {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.centerButton button:hover {
  background-color: #f9cd2d;
  box-shadow: 0 0 15px rgba(240, 194, 56, 0.5);
}

.titulo-barbearias {
  width: 100%;
  text-align: center;
  color: #F0C238;
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .barbershop {
    width: 90%;
    height: auto;
  }

  .centerButton button {
    width: 100%;
    border-radius: 0;
  }
}
</style>
