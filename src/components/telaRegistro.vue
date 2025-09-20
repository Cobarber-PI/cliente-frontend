<script setup>
import { ref } from 'vue'
import TelaRegistroDois from './telaRegistroDois.vue'
import AuthService from '@/services/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()

// Dados do primeiro stage
const senha = ref('')
const senhaConfirmada = ref('')
const email = ref('')
const nome = ref('')

// Dados do segundo stage (definidos aqui para acessibilidade global)
const cpf = ref('')
const dataNascimento = ref('')
const celular = ref('')

// Estados
const stage = ref(true)
const isLoading = ref(false)
const errorMessage = ref('')

const showStage = () => {
  // Validação do primeiro stage
  if (!nome.value || !email.value || !senha.value || !senhaConfirmada.value) {
    errorMessage.value = 'Todos os campos são obrigatórios'
    return
  }

  if (senha.value !== senhaConfirmada.value) {
    errorMessage.value = 'As senhas não coincidem'
    return
  }

  if (senha.value.length < 8) {
    errorMessage.value = 'A senha deve ter pelo menos 8 caracteres'
    return
  }

  errorMessage.value = ''
  stage.value = !stage.value
  console.log(stage.value)
}

const cadastrar = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''

    // Validação do segundo stage
    if (!cpf.value || !dataNascimento.value || !celular.value) {
      errorMessage.value = 'Todos os campos são obrigatórios'
      return
    }

    // Preparar dados para envio
    const userData = {
      nome: nome.value,
      email: email.value,
      password: senha.value,
      confirm_password: senhaConfirmada.value,
      cpf: cpf.value,
      dataNascimento: dataNascimento.value,
      celular: celular.value
    }

    console.log('Enviando dados para o backend:', userData)

    // Enviar para o backend
    const response = await AuthService.register(userData)

    console.log('Registro realizado com sucesso:', response)

    // Redirecionar para login ou home após sucesso
    router.push('/home')

  } catch (error) {

    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.message || 'Erro no cadastro'
    } else {
      errorMessage.value = 'Erro de conexão com o servidor'
    }
  } finally {
    isLoading.value = false
  }
}

// Expor as refs para o componente filho
const updateChildData = (childData) => {
  cpf.value = childData.cpf
  dataNascimento.value = childData.dataNascimento
  celular.value = childData.celular
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

      <!-- Exibir mensagens de erro -->
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <div class="stage" v-if="stage">

        <form @submit.prevent="showStage">
          <input type="text" v-model="nome" placeholder="Nome completo" maxlength="100" inputmode="latin-name" />
          <input type="email" v-model="email" placeholder="Email" maxlength="50" />
          <input type="password" v-model="senha" placeholder="Senha" maxlength="30" />
          <input type="password" v-model="senhaConfirmada" placeholder="Confirme sua senha" maxlength="30" />
        </form>
      </div>
      <TelaRegistroDois v-if="!stage" @update-data="updateChildData" />
    </div>
    <br>
    <div class="buttons">
    <button type="submit" class="btn" @click="showStage" v-if="stage" :disabled="isLoading">
      Continuar
    </button>
    <button type="submit" class="btn" @click="cadastrar" v-if="!stage" :disabled="isLoading">
      {{ isLoading ? 'Cadastrando...' : 'Cadastrar' }}
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
  margin-top: -50px;
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
  height: 60vh;
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

.error-message {
  background-color: #ff4444;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
  font-size: 14px;
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

.btn:disabled {
  background: #666;
  cursor: not-allowed;
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
