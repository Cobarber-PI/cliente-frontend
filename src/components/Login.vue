<script setup>
import { ref } from 'vue'

const cpf = ref('')
const celular = ref('')
</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="/public/login/cobarber.png" alt="Logo" />
    </div>

    <div class="form-box">
      <p class="titulo">Olá!</p>
      <p class="subtitle">Para continuar, digite seus dados</p>

      <form @submit.prevent="() => {}">
        <input
          type="text"
          v-model="cpf"
          placeholder="CPF"
          maxlength="11"
          inputmode="numeric"
        />

        <div class="input-group">
          <input
            type="date"
            placeholder="Data de nascimento"
          />
        </div>

        <input
          type="text"
          v-model="celular"
          placeholder="Celular"
          maxlength="11"
          inputmode="numeric"
        />

        <button type="submit" class="btn">
          Cadastrar-se
        </button>
      </form>

      <p class="link">Não tem uma conta? <a href="#">Cadastre-se</a></p>
    </div>
  </div>
</template>

<style scoped>
.container {
  --field-w: 29.5vw;
  --field-h: 6.6vh;

  background: #0F0F0E;
  color: #fff;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;        
  justify-content: center;
}

.logo img {
  width: 180px;
  margin-bottom: 20px;
}

.form-box {
  width: var(--field-w);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.titulo {
  font-size: 50px;
  margin: 0 0 4px 0;
  line-height: 1.1;
  font-weight: 100;
}

.subtitle {
  font-size: 20px;
  margin: 0 0 20px 0;
  color: #cfcfcf;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
.btn {
  width: var(--field-w);
  height: var(--field-h);
  box-sizing: border-box;

  border-radius: 8px;
  border: 1px solid #444;
  background: transparent;
  color: #fff;
  padding: 0 16px;
  font-size: 14px;
}

input::placeholder {
  color: #aaa;
}

input[type="date"] {
  appearance: none;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0.8;
  cursor: pointer;
}

.input-group {
  position: relative;
  width: 100%;
}

.btn {
  background: #c7a464;
  border: none;
  font-weight: 700;
  cursor: pointer;
}
.btn:hover {
  background: #b18f52;
}

.link {
  margin-top: 15px;
  font-size: 13px;
}
.link a {
  color: #c7a464;
  text-decoration: none;
}
.link a:hover {
  text-decoration: underline;
}
</style>
