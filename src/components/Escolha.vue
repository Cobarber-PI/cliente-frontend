<script setup></script>

<template>
    <h1 class="titulo">Bem vindo!</h1>
    <p class="p-titulo">Como você gostaria de usar nossa plataforma?</p>
    <div class="container">
        <div class="escolha">
            <div class="img">
                <img src="/public/login/cliente.svg" alt="">
            </div>
            <div class="textos">
                <h1>Entrar como Cliente</h1>
                <p>Encontre e agende serviços nas melhores barbearias da sua região</p>
                <p class="topicos"><span>•</span>Agende horários facilmente</p>
                <p class="topicos"><span>•</span>Avalie e comente sobre os serviços</p>
                <p class="topicos"><span>•</span>Histórico de agendamentos</p>
            </div>
            <div class="button"><button class="cliente">Continuar como Cliente</button></div>
        </div>
        <div class="escolha" id="proprietario">
            <div class="img">
                <img style="height: 37px; width: 35px;" src="/public/login/tesoura.svg" alt="">
            </div>
            <div class="textos">
                <h1>Proprietário de Barbearia</h1>
                <p>Gerencie sua barbearia e aumente sua clientela</p>
                <p class="topicos"><span>•</span>Gerencie agendamentos</p>
                <p class="topicos"><span>•</span>Controle financeiro completo</p>
                <p class="topicos"><span>•</span>Cadastre serviços e profissionais</p>
            </div>
            <div class="button"><button class="proprietário">Continuar como Proprietário</button>            
            </div>
        </div>
    </div>
    <p class="p-baixo">Você pode alterar essa opção a qualquer momento nas configurações</p>
</template>

<style scoped>
.titulo {
    margin-top: 70px;
    color: white;

}
p {
    gap: 10px;
    margin: 20px;
    color: #9e9e9e;
    font-size: 20px;
}
h1,
p {
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
    background-color: #232322 ;
    height: 100%;
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    border: 2px solid #4B432C;
    transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s, background-color 0.3s;
}

.escolha:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    border-color: #FFD966;
    transform: translateY(-8px) scale(1.03);
    background-color: #2c2c1e;
}
#proprietario:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    border-color: #a18c4a;
    transform: translateY(-8px) scale(1.03);
    background-color: #1a1a15;
}
.img {
    border-radius: 50%;
    border: #4B432C 1px solid;
    height: 75px;
    width: 75px;
    align-items: center;
    display: flex;
    background-color: #3F3A2A;
    margin: 25px;
}

img{
    height: 35px;
    width: 25px;
    margin: auto;
}
.textos > h1{
    font-size: 25px;
    color: white;
}
.textos > p{
    font-size: 17px;
    color: #9e9e9e;
    margin-top: 10px;
    padding: 0 20px;
}
.topicos{
    text-align: start;
    margin-left: 10px;
}

.topicos span{
    font-size: 20px;
    line-height: 0;
    color: #FFD966;
}
span{
    margin-right: 5px;
}
.button{
    margin-top: 10px;
}
button{
    height: 47px;
    width: 390px;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    font-weight: bold;
    background-color: #FFD966;
    cursor: pointer;
}
button:hover{
    background-color: #c0ab5d;
}
.p-baixo{
    font-size: 15px;
    margin-top: 30px;
}
.proprietário{
    color: white;
    background-color: #2E2E2E;
}
.proprietário:hover{
    background-color: #1f1f1f;
}
</style>