<script setup>
import { ref } from 'vue'

// Estados dos filtros
const localizacao = ref('')
const distancia = ref(0) // pode trocar para ref(1) se quiser evitar mostrar 0
const avaliacao = ref(0) // idem
const preco = ref('')
const funcionamento = ref('')
const servico = ref('')
const facilidade = ref('')
const ordenar = ref('relevancia')

// Funções de ação
const aplicarFiltros = () => {
  console.log('Filtros aplicados:', {
    localizacao: localizacao.value,
    distancia: distancia.value,
    avaliacao: avaliacao.value,
    preco: preco.value,
    funcionamento: funcionamento.value,
    servico: servico.value,
    facilidade: facilidade.value,
    ordenar: ordenar.value,
  })
}

const limparFiltros = () => {
  localizacao.value = ''
  distancia.value = 0
  avaliacao.value = 0
  preco.value = ''
  funcionamento.value = ''
  servico.value = ''
  facilidade.value = ''
  ordenar.value = 'relevancia'
}
</script>

<template>
  <aside class="filtros">
    <div class="center">
      <!-- Título -->
      <div class="title">
        <img src="/Filtro/filtro.png" alt="Filtro" class="imagem-filtro" />
        <h2>Filtros</h2>
      </div>

      <!-- Localização -->
      <div class="filtro-section">
        <label>Localização</label>
        <input class="input-loc" v-model="localizacao" placeholder="Digite o bairro..." />
      </div>

      <hr />

      <!-- Distância -->
      <div class="filtro-section">
        <label>Distância máxima: {{ distancia }} km</label>
        <input
          type="range"
          min="1"
          max="20"
          v-model="distancia"
          :style="{
            background: `linear-gradient(to right, #f0c238 ${((distancia - 1) / (20 - 1)) * 100}%, #444 ${((distancia - 1) / (20 - 1)) * 100}%)`,
          }"
        />
      </div>

      <hr />

      <!-- Avaliação -->
      <div class="filtro-section">
        <label>Avaliação mínima: {{ avaliacao }} ★</label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          v-model="avaliacao"
          :style="{
            background: `linear-gradient(to right, #f0c238 ${((avaliacao - 1) / (5 - 1)) * 100}%, #444 ${((avaliacao - 1) / (5 - 1)) * 100}%)`,
          }"
        />
      </div>

      <hr />

      <!-- Preço -->
      <div class="filtro-section">
        <label>$ Faixa de preço {{ preco }}</label>
        <select v-model="preco" class="select-ordenar">
          <option value="30">Até - R$ 30</option>
          <option value="50">R$ 30 - 50</option>
          <option value="100">R$ 50 - 100</option>
        </select>
      </div>

      <hr />

      <!-- Funcionamento -->
      <div class="filtro-section">
        <span>⏰ Funcionamento</span>
        <div class="radio-group">
          <label><input type="radio" value="agora" v-model="funcionamento" /> Aberto agora</label>
          <label
            ><input type="radio" value="dds" v-model="funcionamento" /> Aberto nos dias de
            semana</label
          >
          <label
            ><input type="radio" value="fds" v-model="funcionamento" /> Aberto nos finais de
            semana</label
          >
          <label><input type="radio" value="24h" v-model="funcionamento" /> Aberto 24h</label>
        </div>
      </div>

      <hr />

      <!-- Serviços -->
      <div class="filtro-section">
        <span>✂ Serviços principais</span>
        <div class="radio-group">
          <label><input type="radio" value="corte" v-model="servico" /> Corte Masculino</label>
          <label><input type="radio" value="barba" v-model="servico" /> Barba & Bigode</label>
          <label><input type="radio" value="sobrancelha" v-model="servico" /> Sobrancelha</label>
        </div>
        <span class="ver-mais">Ver mais</span>
      </div>

      <hr />

      <!-- Facilidades -->
      <div class="filtro-section">
        <span>📶 Facilidades</span>
        <div class="radio-group">
          <label><input type="radio" value="wifi" v-model="facilidade" /> Wi-Fi Gratuito</label>
          <label
            ><input type="radio" value="estacionamento" v-model="facilidade" />
            Estacionamento</label
          >
          <label><input type="radio" value="ar" v-model="facilidade" /> Ar Condicionado</label>
        </div>
        <span class="ver-mais">Ver mais</span>
      </div>

      <hr />

      <!-- Ordenar por -->
      <div class="filtro-section">
        <label>Ordenar por</label>
        <select v-model="ordenar" class="select-ordenar">
          <option value="relevancia">Relevância</option>
          <option value="avaliacao">Melhor Avaliação</option>
          <option value="distancia">Mais Próximo</option>
          <option value="preco">Menor Preço</option>
        </select>
      </div>

      <!-- Botões -->
      <div class="botoes">
        <button class="btn-aplicar" @click="aplicarFiltros">Aplicar Filtros</button>
        <button class="btn-limpar" @click="limparFiltros">Limpar Filtros</button>
      </div>
    </div>
  </aside>
</template>

<style scoped>

aside.filtros {
  width: 320px;
  background: #1e1e20;
  border-radius: 12px;
  border: solid #483f25 1px;
  padding: 16px;
}

.center {
  padding: 10px;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
}

.title h2 {
  font-size: 20px;
  color: #fafafa;
}

.title img {
  width: 25px;
  height: 25px;
}

.filtro-section {
  margin: 22px 0;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 15px;
  margin-bottom: 10px;
  color: #fafafa;
  font-weight: 600;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
}

.ver-mais {
  margin-top: 8px;
  font-size: 14px;
  color: #e1b12c;
  cursor: pointer;
}

.input-loc,
.select-ordenar {
  height: 42px;
  border: solid #342c15 1px;
  border-radius: 12px;
  background: #09090b;
  color: #fafafa;
  padding-left: 15px;
  font-size: 14px;
  font-weight: 600;
  outline: none;
}

.input-loc:focus,
.select-ordenar:focus {
  border: solid #f0c238 2px;
}


hr {
  border: solid #222225 1px;
}

input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 10px;
  outline: none;
}

/* Bolinha (thumb) */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #09090b;
  cursor: pointer;
  border: 2px solid #f0c238;
}

/* Botões */
.botoes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.btn-aplicar {
  background: #f0c238;
  border: none;
  border-radius: 9px;
  height: 42px;
  font-weight: 600;
  cursor: pointer;
}

.btn-limpar {
  background: transparent;
  border: 2px solid #444;
  border-radius: 9px;
  height: 42px;
  color: #fafafa;
  font-weight: 600;
  cursor: pointer;
}
</style>
