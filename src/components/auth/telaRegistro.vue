<script setup>
import { ref } from 'vue'
import TelaRegistroDois from './telaRegistroDois.vue'
import AuthService from '@/services/auth.js'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import Escolha from '../Escolha.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore();

// Dados do primeiro stage
const senha = ref('')
const senhaConfirmada = ref('')
const email = ref('')
const nome = ref('')

// Dados do segundo stage
const cpf = ref('')
const dataNascimento = ref('')
const celular = ref('')

// Estados
const stage = ref(1)
const isLoading = ref(false)
const mostrarSenha = ref(false)
const mostrarSenhaConfirmada = ref(false)

// Funções para toggle das senhas
const toggleSenha = () => {
  mostrarSenha.value = !mostrarSenha.value
}

const toggleSenhaConfirmada = () => {
  mostrarSenhaConfirmada.value = !mostrarSenhaConfirmada.value
}

// Função para validar email
const validarEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}




const showStage = () => {
  // Validação do primeiro stage
  if (!nome.value || !email.value || !senha.value || !senhaConfirmada.value) {
    toast.error('Preencha todos os campos', { autoClose: 2000, theme: 'dark' })
    return
  }

  // Validação do email
  if (!validarEmail(email.value)) {
    toast.error('Por favor, insira um email válido (exemplo: usuario@email.com)', { autoClose: 3000, theme: 'dark' })
    return
  }

  if (senha.value !== senhaConfirmada.value) {
    toast.error('As senhas não coincidem', { autoClose: 2000, theme: 'dark' })
    return
  }

  if (senha.value.length < 8) {
    toast.warn('A senha deve ter pelo menos 8 caracteres', { autoClose: 2000, theme: 'dark' })
    return
  }

  stage.value = 2
  toast.info('Continue preenchendo seus dados!', { autoClose: 1500, theme: 'dark' })
}

const showChoices = () => {
  stage.value = 3
  toast.info('Escolha como deseja usar a plataforma!', { autoClose: 1500, theme: 'dark' })
}
const voltarParaLogin = () => {
  // Verifica se há histórico anterior para voltar
  if (window.history.length > 1) {
    router.go(-1) // Volta para a página anterior
  } else {
    router.push('/') // Se não há histórico, vai para a introdução
  }
}


const cadastrar = async (escolha) => {
  try {
    isLoading.value = true

    if (dataNascimento.value < 16) {
      toast.error('Você deve ser maior de 16 anos para se cadastrar', { autoClose: 2000, theme: 'dark' })
      return
    }

    // Validação do segundo stage
    if (!cpf.value || !dataNascimento.value || !celular.value) {
      toast.error('Todos os campos são obrigatórios', { autoClose: 2000 })
      return
    }


    // Preparar dados
    const userData = {
      name: nome.value,
      email: email.value,
      password: senha.value,
      confirm_password: senhaConfirmada.value,
      cpf: cpf.value,
      DOB: dataNascimento.value,
      cellphone: celular.value,
      is_owner: escolha
    }

    console.log('Enviando dados para o backend:', userData)

    const response = await AuthService.register(userData)

    const data = await auth.login(userData.email, userData.password)
    console.log('Registro realizado com sucesso:', response, data)
    toast.success('Cadastro realizado com sucesso!', { autoClose: 2000 })

    router.push('/home')

  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(error.response.data.message || 'Este usuário já está cadastrado! Tente fazer login ou use outro email.')
    } else {
      toast.error('Erro de conexão com o servidor')
    }
    stage.value = 2
  } finally {
    isLoading.value = false
  }
}

// Expor dados pro filho
const updateChildData = (childData) => {
  cpf.value = childData.cpf
  dataNascimento.value = childData.dataNascimento
  celular.value = childData.celular
}

// Função para voltar para o primeiro stage
const voltarParaPrimeiroStage = () => {
  stage.value = 1
}
</script>

<template>
  <div v-if="stage < 3" class="container">
    <!-- Botão voltar apenas na primeira tela -->
    <img v-if="stage === 1" @click="voltarParaLogin" class="iconeVoltar" src="/imgsRegistro/Vector.svg"
      alt="Voltar para página anterior">

    <div class="form-box">
      <div class="logo">
        <img src="/login/cobarber.svg" alt="Logo" />
      </div>
      <p class="titulo">Olá!</p>
      <p class="subtitle">Para continuar, digite seus dados</p>

      <div class="stage" v-if="stage === 1">
        <form @submit.prevent="showStage">
          <input type="text" v-model="nome" placeholder="Nome completo" maxlength="100" inputmode="latin-name" />
          <input type="email" v-model="email" placeholder="Email (ex: usuario@email.com)" maxlength="50"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autocomplete="email"
            title="Digite um email válido (ex: usuario@email.com)" />

          <!-- Campo de senha com olhinho -->
          <div class="password-container">
            <input :type="mostrarSenha ? 'text' : 'password'" v-model="senha" placeholder="Senha" maxlength="30" />
            <img class="eye-icon" @click="toggleSenha"
              :src="mostrarSenha ? '/imgsRegistro/ocultado.svg' : '/imgsRegistro/olho.svg'"
              :alt="mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'" />
          </div>

          <!-- Campo de confirmar senha com olhinho -->
          <div class="password-container">
            <input :type="mostrarSenhaConfirmada ? 'text' : 'password'" v-model="senhaConfirmada"
              placeholder="Confirme sua senha" maxlength="30" />
            <img class="eye-icon" @click="toggleSenhaConfirmada"
              :src="mostrarSenhaConfirmada ? '/imgsRegistro/ocultado.svg' : '/imgsRegistro/olho.svg'"
              :alt="mostrarSenhaConfirmada ? 'Ocultar senha' : 'Mostrar senha'" />
          </div>
        </form>
      </div>


      <TelaRegistroDois v-if="stage === 2" :data="{cpf, dataNascimento, celular}" @update-data="updateChildData" @voltar="voltarParaPrimeiroStage" />

    </div>

    <br>

    <div class="buttons">
      <button type="submit" class="btn" @click="showStage" v-if="stage === 1" :disabled="isLoading">
        Continuar
      </button>
      <button type="submit" class="btn" @click="showChoices" v-if="stage === 2" :disabled="isLoading">
        {{ isLoading ? 'Continuando...' : 'Continuar' }}
      </button>
      <br>
      <button class="btngoogle">
        <img src="/public/login/googlesvg.svg" alt="">
      </button>
    </div>

    <p class="link">Já tem uma conta? <router-link to="/login">Faça o login</router-link></p>
  </div>
  <Escolha v-if="stage === 3" @send="cadastrar" />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
}

.container {
  --field-w: 450px;
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

.password-container {
  position: relative;
  width: var(--field-w);
  height: var(--field-h);
}

.password-container input {
  width: 100%;
  height: 100%;
  padding-right: 45px;
}

.eye-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  filter: invert(1);
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

.buttons {
  display: flex;
  flex-direction: column;
}

.btngoogle {
  cursor: pointer;
}


.iconeVoltar {
  cursor: pointer;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
}

.iconeVoltar:hover {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.iconeVoltar:hover {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}
@media (max-width: 768px) {
  .container {
    --field-w: 80vw;
  }
}

</style>
