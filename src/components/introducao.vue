<script setup></script>

<template>
  <div class="container">
    <div class="imageFundo"></div>
    <div class="content">
      <h1>opa</h1>
    </div>
  </div>
  <div class="teste">
    <h1>teste</h1>
    <p>opaaaa</p>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.imageFundo {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/introdução/nathon-oski-EW_rqoSdDes-unsplash-scaled.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(0.5px) brightness(0.2);
}

.content {
  position: relative;
  color: white;
}

.teste {
  background-color: red;
  width: 200px;
  height: 200px;
}
</style>