<script setup>
import { ref } from 'vue'

// --- Estados dos filtros principais ---
const localizacao = ref('')
const distancia = ref(0)
const avaliacao = ref(0)
const preco = ref('')
const funcionamento = ref('')
const servico = ref([])
const facilidade = ref([])
const ordenar = ref('relevancia')

// --- Opções de cada filtro ---
const opcoesPreco = [
  { label: 'Até R$ 30', value: '30' },
  { label: 'R$ 30 - 50', value: '50' },
  { label: 'R$ 50 - 100', value: '100' },
]

const opcoesFuncionamento = [
  { label: 'Aberto agora', value: 'agora' },
  { label: 'Dias de semana', value: 'dds' },
  { label: 'Finais de semana', value: 'fds' },
  { label: 'Aberto 24h', value: '24h' },
]

// Controle do botão 'ver mais' dos serviços
const mostrarMaisServicos = ref(false)

// Alterna exibição dos serviços (ver mais/menos)
function alternarVerMais() {
  mostrarMaisServicos.value = !mostrarMaisServicos.value
}

const opcoesServico = [
  { label: 'Corte Masculino', value: 'corte' },
  { label: 'Barba & Bigode', value: 'barba' },
  { label: 'Sobrancelha', value: 'sobrancelha' },
  { label: 'Pintura de cabelo', value: 'pintura' },
  { label: 'Tratamento capilar', value: 'tratamento' },
]

const opcoesFacilidade = [
  { label: 'Wi-Fi Gratuito', value: 'wifi' },
  { label: 'Estacionamento', value: 'estacionamento' },
  { label: 'Ar Condicionado', value: 'ar' },
]

// --- Funções de ação dos botões ---
// Aplica os filtros selecionados
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

// Limpa todos os filtros
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

<!--
  Sidebar de filtros
-->
<template>
  <aside class="filtros">
    <div class="center">
      <!-- Título do filtro -->
      <div class="title">
        <img src="/Filtro/filtro.png" alt="Filtro" class="imagem-filtro" />
        <h2>Filtros</h2>
      </div>

      <!-- Campo de localização -->
      <div class="filtro-section">
        <label>Localização</label>
        <input class="input-loc" v-model="localizacao" placeholder="Digite o bairro..." />
      </div>

      <hr />

      <!-- Slider de distância -->
      <div class="filtro-section">
        <label>Distância máxima - {{ distancia }} km</label>
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

      <!-- Slider de avaliação mínima -->
      <div class="filtro-section">
        <label
          >Avaliação mínima - <span class="avaliacao">{{ avaliacao }}</span>
          <img src="/Filtro/estrela.png" alt="estrela" class="estrela" />
        </label>
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

      <!-- Faixa de preço (radio) -->
      <div class="filtro-section">
        <span><img src="/Filtro/cifrao.png" alt="" /> Faixa de preço</span>
        <div class="radio-group">
          <label v-for="op in opcoesPreco" :key="op.value">
            <input type="radio" v-model="preco" :value="op.value" />
            {{ op.label }}
          </label>
        </div>
      </div>

      <hr />

      <!-- Funcionamento (radio) -->
      <div class="filtro-section">
        <span><img src="/Filtro/relogio.png" alt="" /> Funcionamento</span>
        <div class="radio-group">
          <label v-for="op in opcoesFuncionamento" :key="op.value">
            <input type="radio" v-model="funcionamento" :value="op.value" />
            {{ op.label }}
          </label>
        </div>
      </div>

      <hr />

      <!-- Serviços principais (checkbox + ver mais) -->
      <div class="filtro-section">
        <span><img src="/Filtro/pente.png" alt="" /> Serviços principais</span>
        <div class="radio-group">
          <label
            v-for="op in mostrarMaisServicos ? opcoesServico : opcoesServico.slice(0, 3)"
            :key="op.value"
          >
            <input type="checkbox" v-model="servico" :value="op.value" />
            {{ op.label }}
          </label>
        </div>
        <span class="ver-mais" @click="alternarVerMais">
          <img
            src="/Filtro/seta.png"
            alt="seta"
            :class="{ rotated: mostrarMaisServicos }"
            class="seta"
          />
          {{ mostrarMaisServicos ? 'Ver menos' : 'Ver mais' }}
        </span>
      </div>

      <hr />

      <!-- Facilidades (checkbox) -->
      <div class="filtro-section">
        <span><img src="/Filtro/cliente.png" alt="" /> Facilidades</span>
        <div class="radio-group">
          <label v-for="op in opcoesFacilidade" :key="op.value">
            <input type="checkbox" v-model="facilidade" :value="op.value" />
            {{ op.label }}
          </label>
        </div>
      </div>

      <hr />

      <!-- Ordenação dos resultados -->
      <div class="filtro-section">
        <label>Ordenar por</label>
        <select v-model="ordenar" class="select-ordenar">
          <option value="relevancia">Relevância</option>
          <option value="avaliacao">Melhor Avaliação</option>
          <option value="distancia">Mais Próximo</option>
          <option value="preco">Menor Preço</option>
        </select>
      </div>

      <!-- Botões de ação -->
      <div class="botoes">
        <button class="btn-aplicar" @click="aplicarFiltros">Aplicar Filtros</button>
        <button class="btn-limpar" @click="limparFiltros">Limpar Filtros</button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* --- Container principal do filtro --- */
aside.filtros {
  width: 320px;
  background: #1e1e20;
  border-radius: 12px;
  border: solid #483f25 1px;
  padding: 16px;
}

/* --- Centralização do conteúdo --- */
.center {
  padding: 10px;
}

/* --- Título do filtro --- */
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

/* --- Seções de cada filtro --- */
.filtro-section {
  margin: 22px 0;
  display: flex;
  flex-direction: column;
}

/* --- Labels dos filtros --- */
label {
  font-size: 15px;
  margin-bottom: 10px;
  color: #fafafa;
  font-weight: 600;
}

/* --- Grupo de opções (radio/checkbox) --- */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
}

/* --- Botão 'ver mais'/'ver menos' --- */
.filtro-section .ver-mais {
  font-size: 14px;
  color: #e1b12c;
  cursor: pointer;
}

.filtro-section .ver-mais img {
  width: 10px;
  height: 10px;
}

.ver-mais {
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #1e1e20;
  border-radius: 8px;
  border: solid #483f25 1px;
  text-align: center;
}

/* --- Inputs principais --- */
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

.select-ordenar option {
  background: #09090b;
  color: #fafafa;
  border: solid #342c15 1px;
}

hr {
  border: solid #222225 1px;
}

/* --- Slider de range --- */
input[type='range'] {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 10px;
  outline: none;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #09090b;
  cursor: pointer;
  border: 2px solid #f0c238;
}

/* --- Botões de ação --- */
.botoes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

/* --- Botão aplicar --- */
.btn-aplicar {
  background: #f0c238;
  border: none;
  border-radius: 9px;
  height: 42px;
  font-weight: 600;
  cursor: pointer;
}

/* --- Botão limpar --- */
.btn-limpar {
  background: transparent;
  border: 2px solid #444;
  border-radius: 9px;
  height: 42px;
  color: #fafafa;
  font-weight: 600;
  cursor: pointer;
}

/* --- Ícones das seções --- */
.filtro-section img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

/* --- Ícone estrela avaliação --- */
.filtro-section .estrela {
  width: 15px;
  height: 15px;
  margin: 0 6px;
}

/* --- Nota de avaliação --- */
label .avaliacao {
  font-size: 16px;
  margin-left: 5px;
}

.filtro-section span {
  color: #fafafa;
  font-weight: 600;
  padding: 10px 0;
}

.radio-group label {
  color: #c1c1c1;
  outline: none;
  font-size: 15px;
  font-weight: 400;
}

/* --- Seta animada do ver mais/menos --- */
.seta {
  transition: transform 0.2s;
}

/* --- Estado rotacionado da seta --- */
.rotated {
  transform: rotate(180deg);
}

/* --- Radio customizado --- */
input[type='radio'] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #b78900;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-right: 6px;
}

input[type='radio']:checked {
  border-color: #e57d2d;
  background: #e8b312;
}

input[type='radio']:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 11px;
  height: 11px;
  transform: translate(-50%, -50%);
  background-image: url('/Filtro/marca-de-verificacao.png');
  background-size: contain;
}

/* --- Checkbox customizado --- */
input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #b78900;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-right: 6px;
}

input[type='checkbox']:checked {
  border-color: #e5b72d;
  background: #c8990d;
}

input[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 11px;
  height: 11px;
  transform: translate(-50%, -50%);
  background-image: url('/Filtro/marca-de-verificacao.png');
  background-size: contain;
}
</style>
