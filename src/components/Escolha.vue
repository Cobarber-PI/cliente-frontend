<script setup></script>

<template>
    <h1>Bem vindo!</h1>
    <p>Como você gostaria de usar nossa plataforma?</p>
    <div class="container">
        <div class="escolha">

        </div>
        <div class="escolha">

        </div>
    </div>
</template>

<style scoped>
.textos-cima {
    margin-top: 70px;
}
h1{
    margin-top: 70px;
}
p{
    gap: 10px;
    margin: 25px;
}
h1,
p {
    color: white;
    text-align: center;
}

.container {
    width: 60%;
    height: 430px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    gap: 15px;
    margin-top: 40px;
}

.escolha {
    background-color: #232322;
    height: 100%;
    width: 48%;
    display: flex;
    border-radius: 15px;
    border: 1px solid #F0C238;
}
</style>