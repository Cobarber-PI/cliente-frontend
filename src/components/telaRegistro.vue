<script setup>
import { ref } from 'vue';

const dia = ref('');
const mes = ref('');
const ano = ref('');
</script>

<template>
    <div class="conteudo">
        <div>
            <img src="/imgsRegistro/imgRegistro.png" class="imagem" />
        </div>

        <div class="forms1">
            <h1 class="titulo">Sign up</h1>
            <input class="input-form" type="text" placeholder="User" />
            <input class="input-form" type="text" placeholder="Phone" />
            <input class="input-form" type="text" placeholder="CPF" />

            <div class="forms2">
                <label>Data de nascimento</label>
                <div class="data-nasc">
                    <select v-model="dia" required>
                        <option value="" disabled selected>Dia</option>
                        <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
                    </select>

                    <select v-model="mes" required>
                        <option value="" disabled selected>Mês</option>
                        <option v-for="(nome, i) in meses" :key="i" :value="i + 1">{{ nome }}</option>
                    </select>

                    <select v-model="ano" required>
                        <option value="" disabled selected>Ano</option>
                        <option v-for="y in 2025 - 1500 + 1" :key="y" :value="2025 - y + 1">{{ 2025 - y + 1 }}</option>
                    </select>
                </div>
            </div>

            <button class="botao">CONTINUAR</button>
        </div>
    </div>
</template>

<script>
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
</script>

<style scoped>
.conteudo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 60px;
}

.imagem {
    width: 500px;
    height: 500px;
    object-fit: contain;
}

.forms1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 320px;
}

.forms1 h1 {
    font-size: 60px;
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
}

.input-form {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #e0e0e0;
    font-size: 16px;
}

.forms2 label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
    opacity: 50%;
}

.data-nasc {
    display: flex;
    gap: 10px;
}

.data-nasc select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #e0e0e0;
    font-size: 14px;
    width: 100px;
    color: #333;
}

.data-nasc select:nth-child(2) {
    width: 100px;
}

.data-nasc select:nth-child(3) {
    width: 100px;
}

.botao {
    width: 100%;
    padding: 15px;
    background-color: #111;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

.botao:hover {
    background-color: #333;
}

</style>
