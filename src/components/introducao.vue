<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const passos = [
  {
    icone: "📍", 
    titulo: "Encontre sua barbearia",
    descricao: "Use nossos filtros para encontrar a barbearia perfeita perto de você."
  },
  {
    icone: "📅",
    titulo: "Escolha data e horário",
    descricao: "Selecione o dia e horário que melhor se adequa à sua agenda."
  },
  {
    icone: "✂️",
    titulo: "Confirme seu agendamento",
    descricao: "Finalize o agendamento e receba confirmação por email."
  },
  {
    icone: "⭐",
    titulo: "Avalie o atendimento",
    descricao: "Após o serviço, deixe sua avaliação para ajudar outros clientes."
  }
]
</script>

<template>
  <!-- Header -->
  <header>
    <div class="logo">
      <div class="marcaC">
        <img src="/public/introdução/logoBarber.png" alt="" />
        <span>|</span>
        <h3>CoBarber</h3>
        <p>A sua barbearia online</p>
      </div>
    </div>
    <nav>
      <button class="login" @click="router.push('/login')">Login</button>
      <button @click="router.push('/telaRegistro')">Sign up</button>
    </nav>
  </header>

  <!-- Hero -->
  <div class="container">
    <div class="imageFundo"></div>
    <div class="content">
      <h1>
        Encontre a <span class="highlight">barbearia perfeita</span>
      </h1>
      <p>
        Agende seu horário com os melhores barbeiros da sua região. <br />
        Simples, rápido e sem complicação.
      </p>
    </div>
  </div>

<!-- Cards principais -->
<div class="flexibility">
  <div class="title-subt">
    <h1>Como <span class="highlight">funciona</span></h1>
    <p class="subtitulo">
      Agendar seu horário nunca foi tão simples. Siga estes passos e tenha uma <br> experiência incrível.
    </p>
  </div>

  <div class="cards-wrapper">
    <div class="cards-container">
      <div
        v-for="(passo, index) in passos"
        :key="index"
        class="cartao-passo"
      >
        <div class="numero-passo">{{ index + 1 }}</div>
        <div class="icone">{{ passo.icone }}</div>
        <h3>{{ passo.titulo }}</h3>
        <p>{{ passo.descricao }}</p>
      </div>
    </div>
  </div>

  <div class="botao">
    <button>Começar agora</button>
    <p>Agendamentos online, rápido e gratuito</p>
  </div>
</div>
</template>

<style scoped>
/* ---------- Header ---------- */
header {
  position: absolute;
  top: 1.5rem;
  left: 5rem;
  right: 5rem;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 6vh;
}

nav {
  display: flex;
  gap: 5rem;
}

header button {
  font-size: 15px;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid #f5e1b9;
  color: #f5e1b9;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  transition: 0.3s;
}

.login {
  background-color: transparent;
  border: none;
  color: #f5e1b9;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  transition: 0.3s;
}

header button:hover {
  background-color: #f5e1b9;
  color: black;
}

.marcaC {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.marcaC img {
  width: 50px;
  height: 50px;
}

.marcaC span {
  margin-bottom: 10px;
  font-size: 25px;
  color: #f5e1b9;
}

.marcaC h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}

.marcaC p {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  opacity: 0.8;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fafafa;
}

/* ---------- Hero ---------- */
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #121212;
}

.imageFundo {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/introdução/nathon-oski-EW_rqoSdDes-unsplash-scaled.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(0.5px) brightness(0.09);
}

.content {
  position: relative;
  color: white;
  text-align: center;
  top: 40%;
  padding: 0 1rem;
}

.content h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 70px;
  line-height: 1.3;
  margin-bottom: 1.2rem;
}

.content h1 .highlight {
  color: #f5b93a;
}

.title-subt h1 .highlight{
    color: #f5b93a;
}

.content p {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: #dcdcdc;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* ---------- Cards principais ---------- */
.flexibility {
  background-color: #080808;
  color: #ffffff;
  padding-bottom: 3rem;
}

.title-subt {
  text-align: center;
  padding: 3rem 0 5rem 0;
  font-size: 20px;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 5rem;
}

.card {
  background-color: #111;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 2rem;
  text-align: center;
  color: white;
  box-shadow: 0 0 12px #7b79791b;
  transition: 0.3s;
  flex: 1;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px #00000080;
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.icon img {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
  color: #c89d00;
}

.card p {
  padding-top: 1.5rem;
}

.botao {
  margin-top: 5rem;
  text-align: center;
}

.botao button {
  font-size: 20px;
  border: none;
  border-radius: 5px;
  padding: 0.9rem 4rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 450;
  background: linear-gradient(270deg, #cdcccc, #c7bfbf, #ffffff);
  background-size: 600% 600%;
  color: #000000;
  transition: 0.5s;
}

.botao button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  color: #121212;
  background: linear-gradient(300deg, #cdcccc, #626060, #ffffff, #c89d00, #f5e1b9, #c89d00);
  background-size: 600% 600%;
  animation: gradienteSuave 10s ease infinite;
}

@keyframes gradienteSuave {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.botao p {
  margin-top: 1rem;
  font-size: 20px;
  color: #ccc;
}

/* ---------- Como funciona ---------- */



.cartao-passo {
  background: #111;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 2.2rem;
  width: 275px;
  position: relative;
  transition: 0.3s;
  text-align: center;
}

.cartao-passo:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

.numero-passo {
  position: absolute;
  top: -15px;
  right: -15px;
  background: #0a0a0a;
  border: 2px solid #f5b93a;
  color: #f5b93a;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.6rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icone {
  font-size: 2.5rem;
  color: #f5b93a;
  margin-bottom: 1rem;
}

.cartao-passo h3 {
  font-size: 1.2rem;
  font-weight: 600;
}

.cartao-passo p {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #bbb;
}

.subtitulo {
  font-size: 1.3rem;
  color: #ccc;
  padding: 20px;
}

</style>