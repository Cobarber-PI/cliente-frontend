<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const data = reactive({
  email: '',
  password: ''
});

const voltarParaIntroducao = () => {
  router.push('/')
}

function onLogin() {
 authStore.login(data.email, data.password);
 if (authStore.state.user) {
  router.push('/home');
  } else {
  alert('Falha no login. Verifique suas credenciais.');
 }

}
</script>

<template>
  <div class="container">
    <!-- Botão voltar para introdução -->
    <img @click="voltarParaIntroducao" class="iconeVoltar" src="/imgsRegistro/Vector.svg" alt="Clique para voltar à introdução">

    <div class="form-box">
      <div class="logo">
        <img src="/login/cobarber.svg" alt="Logo" />
      </div>
      <p class="titulo">Olá!</p>
      <p class="subtitle">Para continuar, digite seus dados</p>

      <form @submit.prevent="onLogin">
        <input type="email" placeholder="Email" maxlength="100" autocomplete="email" v-model="data.email" />
        <input type="password" v-model="data.password" placeholder="Senha" maxlength="100" autocomplete="current-password" />
        <button type="submit" class="btn">Entrar</button>
      </form>

      <p class="link"><a>Esqueceu sua senha?</a></p>
    </div>

    <br />

    <div class="buttons">
      <button class="btngoogle">
        <img src="/login/googlesvg.svg" alt="Google" />
      </button>
    </div>

    <p class="link">
      Não tem uma conta? <router-link to="/telaRegistro">Cadastre-se</router-link>
    </p>
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
  margin-top: -50px;
}

.logo {
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
  cursor: pointer;
}

.link a:hover {
  text-decoration: underline;
}

.iconeVoltar {
  cursor: pointer;
  position: absolute;
  top: 83px;
  left: 83px;
  z-index: 10;
}

.iconeVoltar:hover {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.buttons {
  display: flex;
  flex-direction: column;
}

.btngoogle {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
