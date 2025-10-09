<script setup></script>

<template>
  <div class="container">
    <div class="funcionamento">
      <h1 class="title">Horários de Funcionamento</h1>
      <table>
        <tr>
          <td><strong>Segunda-feira</strong></td>
          <td>08:00 - 18:00</td>
          <td><strong>Sexta-feira</strong></td>
          <td>08:00 - 19:00</td>
        </tr>
        <tr>
          <td><strong>Terça-feira</strong></td>
          <td>08:00 - 18:00</td>
          <td><strong>Sábado</strong></td>
          <td>08:00 - 19:00</td>
        </tr>
        <tr>
          <td><strong>Quarta-feira</strong></td>
          <td>08:00 - 18:00</td>
          <td><strong>Domingo</strong></td>
          <td>Fechado</td>
        </tr>
        <tr>
          <td><strong>Quinta-feira</strong></td>
          <td>08:00 - 18:00</td>
        </tr>
      </table>
    </div>
    <div class="comodidades">
      <h1>Comodidades</h1>
      <ul>
        <li>Wi-Fi gratuito</li>
        <li>Estacionamento</li>
        <li>Ar-condicionado</li>
        <li>Mesa de sinuca</li>
        <li>TV</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.title {
  margin-left: 2rem;
  margin-top: 1rem;
}

.container {
  color: #fff;
  display: flex;
  justify-content: center;
}

.funcionamento {
  width: 50%;
  height: 30vh;
  margin: 2rem 2rem 2rem 0;
  background-color: #0F0F0F;
  border-radius: 8px;
  border: solid #262626 1px;
}

.funcionamento table {
  width: 110%;
  padding: 10px 25px;
  border-spacing: 15px;
}

.comodidades {
  width: 30%;
  height: 30vh;
  margin: 2rem 2rem 2rem 0;
  background-color: #0F0F0F;
  border-radius: 8px;
  border: solid #262626 1px;
}
</style>
