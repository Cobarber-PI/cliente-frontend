<script setup>
  import MdiClockOutline from 'vue-material-design-icons/ClockOutline.vue';
</script>

<template>
  <div class="container">
    <div class="funcionamento">
  <h1 class="title"><MdiClockOutline class="title-icon" />Horários de Funcionamento</h1>
      <table>
        <tbody>
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
            <td class="fechado" >Fechado</td>
          </tr>
          <tr>
            <td><strong>Quinta-feira</strong></td>
            <td>08:00 - 18:00</td>
          </tr>
        </tbody>
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
    font-size: 30px;
  margin-left: 2rem;
  margin-top: 1rem;
}

.title-icon {
  margin-right: 8px;
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

.comodidades ul {
  padding: 10px 55px;
  list-style-type: disc;
}

.comodidades li {
  margin-bottom: 2px;
  font-size: 16px;
}

.comodidades li::marker {
  color: #F0C238;
  font-size: 25px;
}

.comodidades h1 {
  font-size: 30px;
  margin-left: 2rem;
  margin-top: 1rem;
}

.fechado {
  color: red;
  font-weight: bold;
}
</style>
