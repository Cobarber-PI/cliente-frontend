<script setup>
import { ref } from 'vue'
import TelaRegistroDois from './telaRegistroDois.vue'

const senha = ref('')
const senhaConfirmada = ref('')
const email = ref('')
const nome = ref('')

const stage = ref(true)

const showStage = () => {
  stage.value = !stage.value
  console.log(stage.value)
}

const voltar = () => {
  stage.value = !stage.value
}
</script>

<template>
  <div class="container">
    <div class="form-box">
      <div class="logo">
        <img src="/public/login/cobarber.svg" alt="Logo" />
      </div>
      <p class="titulo">Olá!</p>
      <p class="subtitle">Para continuar, digite seus dados</p>
      <div class="stage" v-if="stage">

        <form @submit.prevent="() => { }">
          <input type="text" v-model="nome" placeholder="Nome completo" maxlength="100" inputmode="latin-name" />
          <input type="text" v-model="email" placeholder="Email" maxlength="30" inputmode="numeric" />
          <input type="text" v-model="senha" placeholder="Senha" maxlength="30" inputmode="numeric" />
          <input type="text" v-model="senhaConfirmada" placeholder="Confirme sua senha" maxlength="30"
            inputmode="numeric" />
        </form>
      </div>
      <TelaRegistroDois @voltar="voltar" v-if="!stage" />
    </div>
    <br>
    <div class="buttons">
    <button type="submit" class="btn" @click="showStage" @submit.prevent v-if="stage">
      Continuar
    </button>
    <button type="submit" class="btn" @click="cadastrar" @submit.prevent v-if="!stage">
      Cadastrar
    </button>
    <br>
    <button class="btngoogle">
      <img src="/public/login/googlesvg.svg" alt="">
    </button>
    </div>
    <p class="link">Já tem uma conta? <router-link to="/login">Faça o login</router-link></p>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
}

.container {
  --field-w: 25.5vw;
  --field-h: 6.6vh;

  background: #0F0F0E;
  color: #fff;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 160px;
}
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-box {
  width: var(--field-w);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo {
  font-size: 45px;
  margin: 0 0 -4px 0;
  font-weight: 300;
  text-align: start;
  width: 100%;
}

.subtitle {
  font-size: 20px;
  margin: 0 0 30px 0;
  color: #cfcfcf;
  width: 100%;
  text-align: start;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
button {
  width: var(--field-w);
  height: var(--field-h);
  box-sizing: border-box;

  border-radius: 8px;
  border: 1px solid #4D4025;
  background: transparent;
  color: #fff;
  padding: 0 16px;
  font-size: 14px;
}

input::placeholder {
  color: #aaa;
}

.input-group {
  position: relative;
  width: 100%;
}

.date-input {
  position: relative;
  z-index: 0;
}

.date-input::-webkit-datetime-edit {
  color: transparent;
}

.date-input.has-value::-webkit-datetime-edit,
.date-input:focus::-webkit-datetime-edit {
  color: #fff;
}

.date-placeholder {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 14px;
  pointer-events: none;
  z-index: 1;
}


.btn {
  background: #c7a464;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1px;
}

.btn:hover {
  background: #b18f52;
}

.link {
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
}

.link a {
  color: #c7a464;
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}
.buttons{
    display: flex;
    flex-direction: column;
    
}

.btngoogle{
    cursor: pointer;
}
</style>