<template>
  <footer>
    <div class="footer-container">
      <div class="first-colum">
        <h2>CoBarber</h2>
        <span
          >A plataforma mais completa para agendamento em barbearias. Conectando clientes e
          profissionais de forma simples e eficiente.</span
        >
        <div class="infos">
          <span><img src="/Footer/localizacao.png" class="loc" /> São Paulo (SP) - Brasil</span>
          <span><img src="/Footer/telefone.png" class="tel" />(11) 9999-9999</span>
          <span><img src="/Footer/o-email.png" class="email" />contato@cobarber.com</span>
        </div>
        <p></p>
      </div>
      <div class="colum">
        <h3>Links Rápidos</h3>
        <ul>
          <li><a href="#">Como Funciona</a></li>
          <li><a href="#">Encontrar Barbearias</a></li>
          <li><a href="#">Meus Agendamentos</a></li>
          <li><a href="#">Avaliações</a></li>
        </ul>
      </div>
      <div class="colum">
        <h3>Suporte</h3>
        <ul>
          <li><a href="#">Central de Ajuda</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Suporte Técnico</a></li>
          <li><a href="#">Reportar Problema</a></li>
        </ul>
      </div>
      <div class="colum">
        <h3>Para Negócios</h3>
        <ul>
          <li><a href="#">Cadastre sua Barbearia</a></li>
          <li><a href="#">Planos para Barbeiros</a></li>
          <li><a href="#">Dashboard Profissional</a></li>
          <li><a href="#">API para Desenvolvedores</a></li>
        </ul>
      </div>
      <div class="colum">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Termos de Uso</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">LGPD</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 70vh;
  background-color: #212124;
  position: fixed;
  bottom: 0;
  color: white;
  display: flex;
  align-items: flex-end;
}

.footer-container {
  width: 100%;
  padding: 50px 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}

.first-colum {
  min-width: 220px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.first-colum h2 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.first-colum span {
  font-size: 16px;
  color: #a1a1aa;
  margin-bottom: 10px;
}

.infos {
  display: flex;
  flex-direction: column;
  gap: 8px; /* espaço entre as linhas (local, tel, email) */
}

.infos span {
  display: flex;
  align-items: center;
  gap: 10px; /* espaço entre ícone e texto */
  font-size: 15px;
  color: #a1a1aa;
}

/* todos os ícones terão a mesma largura, garantindo alinhamento */

.infos h3 {
  margin-top: 12px;
  font-size: 15px;
}

.colum h3 {
  font-size: 19px;
  margin-bottom: 22px;
  font-weight: 500;
}

.colum ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.colum li a {
  color: #a1a1aa;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}

.colum li a:hover {
  color: #f0c238;
}

.infos span img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0; /* evita encolher */
}
</style>
