<script setup></script>
<template>
    <nav class="header">
        <div class="logo">
            <img src="/public/home/logo1.svg" alt="" class="imgLogo">
            <h4>CoBarber</h4>
        </div>
        <div class="links">
            <a href="">Início</a>
            <a href="">Barbearias</a>
            <a href="">Agendamentos</a>
        </div>
    </nav>
    <div></div>
</template>

<style scoped>

.header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 93px;
    background-color: #09090B;
    justify-content: space-between;
}

.logo {
    margin-left: 44px;
    display: flex;
    align-items: center;
}
.imgLogo {
    width: 70px;
    height: 70px;
    align-items: center;
}

h4 {
    font-size: 25px;
    font-weight: bold;
    color: white;
    font-family: "Cinzel", serif;
}

.links > a {
    margin: 39px;
    color: #B0B0B0;
    text-decoration: none;
}
</style>
