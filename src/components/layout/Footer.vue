<script setup>
import MapMarker from 'vue-material-design-icons/MapMarker.vue'
import Phone from 'vue-material-design-icons/Phone.vue'
import Email from 'vue-material-design-icons/Email.vue'
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="first-colum">
        <div class="logo-footer">
          <div class="image"><img src="/introdução/logoBarber.png" alt="Logo CoBarber" /></div>
          <h2>CoBarber</h2>
        </div>
        <span
          >A plataforma mais completa para agendamento em barbearias. Conectando clientes e
          profissionais de forma simples e eficiente.</span
        >
        <div class="infos">
          <span><MapMarker style="color: #efb402" /> São Paulo (SP) - Brasil</span>
          <span><Phone style="color: #efb402" /> (11) 9999-9999</span>
          <span><Email style="color: #efb402" /> contato@cobarber.com</span>
        </div>
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
          <li><a href="https://github.com/Henrique0330">Central de Ajuda</a></li>
          <li><a href="https://github.com/Henrique0330">Contato</a></li>
          <li><a href="https://github.com/Henrique0330">Suporte Técnico</a></li>
          <li><a href="https://github.com/Henrique0330">Reportar Problema</a></li>
        </ul>
      </div>
      <div class="colum">
        <h3>Para Negócios</h3>
        <ul>
          <li><a href="https://github.com/MarcoPeruzzocmd">Cadastre sua Barbearia</a></li>
          <li><a href="https://github.com/MarcoPeruzzocmd">Planos para Barbeiros</a></li>
          <li><a href="https://github.com/MarcoPeruzzocmd">Dashboard Profissional</a></li>
          <li><a href="https://github.com/MarcoPeruzzocmd">API para Desenvolvedores</a></li>
        </ul>
      </div>
      <div class="colum">
        <h3>Legal</h3>
        <ul>
          <li><a href="https://github.com/GoodSir6">Termos de Uso</a></li>
          <li><a href="https://github.com/GoodSir6">Política de Privacidade</a></li>
          <li><a href="https://github.com/GoodSir6">Cookies</a></li>
          <li><a href="https://github.com/GoodSir6">LGPD</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.image img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

footer {
  width: 100%;
  height: 70vh;
  background-color: #212124;
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
}

.infos span {
  display: flex;
  gap: 10px; /* espaço entre ícone e texto */
  font-size: 15px;
  color: #a1a1aa;
}

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

.logo-footer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-footer img {
  width: 40px;
  height: 40px;
  margin: 6px;
}

.image {
  width: 50px;
  height: 50px;
  background: #222225;
  border: solid 1px #f0c238;
  border-radius: 12px;
}
</style>
