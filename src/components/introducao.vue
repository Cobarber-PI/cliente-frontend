<script setup>
</script>

<template>
  <header>
    <div class="logo">
      <div class="marcaC">
        <img src="/public/introdução/logoBarber.png" alt="">
        <span>|</span>
        <h3>CoBarber</h3>
        <p>A sua barbearia online</p>
      </div>
    </div>
    <nav>
      <button class="login">Login</button>
      <button>Sign up</button>
    </nav>
  </header>
  <div class="container">
    <div class="imageFundo"></div>

    <div class="content">
      <h1>
        Encontre seu barbeiro de confiança
        <span>e agende seu horário de forma prática.</span>
      </h1>
      <p>
        <strong>Escolha seu barbeiro favorito</strong> e cuide do seu estilo — tudo em um só lugar.
      </p>

      <div class="botao">
        <button>Começar agora</button>
        <p>Agendamentos online, rápido e gratuito</p>
      </div>
    </div>
  </div>

  <div class="teste">
    <h1>teste</h1>
    <p>opaaaa</p>
  </div>
</template>

<style scoped>
/* ---------------- HEADER ---------------- */
header {
  position: fixed;
  top: 1.5rem;
  left: 5rem;
  right: 5rem;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15vh;
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

/* ---------------- CONTAINER ---------------- */
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

/* ---------------- BACKGROUND IMAGE ---------------- */
.imageFundo {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/introdução/nathon-oski-EW_rqoSdDes-unsplash-scaled.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(0.5px) brightness(0.09);
}

/* ---------------- CONTENT ---------------- */
.content {
  position: relative;
  color: white;
  text-align: center;
  top: 30%;
}

.content h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 50px;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 1.2rem;
}

.content h1 span {
  display: block;
  font-family: 'Poppins', sans-serif;

}

.content p {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  line-height: 1.5;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 700px;
}

/* ---------------- BUTTON ---------------- */
.botao {
  margin-top: 3rem;
}

.botao button {
  font-size: 18px;
  border: none;
  border-radius: 5px;
  padding: 0.9rem 4rem;
  cursor: pointer;
  transition: 0.5s;
  font-family: 'Poppins', sans-serif;
  font-weight: 450;
  background: linear-gradient(270deg, #cdcccc, #c7bfbf, #ffffff);
  background-size: 600% 600%;
  color: #000000;
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
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.botao p {
  margin-top: 1rem;
  font-size: 18px;
  color: #ccc;
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
</style>