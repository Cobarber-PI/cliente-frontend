<script setup></script>
<template>
    <nav class="header">
        <div class="logo">
        <img src="/public/home/Logo.png" alt="">
        <h4>CoBarber</h4>
        </div>
        <div class="links">
        <a href="">Início</a>
        <a href="">Barbearias</a>
        <a href="">Meus agendamentos</a>
        </div>
    </nav>
</template>

<style scoped>
.header{
    display: flex;
    align-items: center;
}
.logo{
    margin-left: 44px;
    display: flex;
    align-items: center;
}
.links{
    margin: auto;
}
.links > a{
    margin: 39px;
}
</style>
