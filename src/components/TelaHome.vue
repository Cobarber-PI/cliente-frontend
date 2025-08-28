<script setup>
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="/public/home/logo1.svg" alt="">
                <h1>CoBarber</h1>
            </div>
            <div class="nav">
                <ul>
                    <router-link to="/">Início</router-link>
                    <router-link to="/barbearias">Barbearias</router-link>
                    <router-link to="/agendamentos">Agendamentos</router-link>
                </ul>
            </div>
            <div class="login">
                <button class="entrar">
                    <img src="/public/home/user.svg" alt="">
                    <p>Login</p>
                </button>
                <button class="cadastrar">
                    Cadastrar
                </button>
            </div>
        </div>
    </header>

    <main>
        <h1>Encontre a <span>barbearia perfeita</span></h1>
        <p>Agende um horário com os melhores barbeiros de sua região. Simples, rápido e sem complicação</p>
        <div class="busca">
            <div class="inputs">
                <input type="text" placeholder="Digite seu bairro ou cidade">
                <button class="buscarBarberias">
                    <img src="/public/home/lupa.svg" alt="">
                    <p>Buscar barbearias</p>
                </button>
            </div>
        </div>
    </main>
    <!--  calc(100vh - 80px)-->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

header {
    width: 100%;
    height: 80px;
    background-color: #09090B;
    color: white;
    display: flex;
    align-items: center;
}

.login {
    display: flex;
    gap: 10px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 0 auto;
    width: 90%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo img {
    margin-top: 15px;
    width: 50%;
}

.logo h1 {
    font-size: 24px;
    font-family: "Cinzel", serif;
    font-weight: bold;

}

ul {
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

a {
    text-decoration: none;
    color: #B0B0B0;
}

.entrar {
    display: flex;
    background-color: #09090B;
    color: white;
    border: 1px solid #B29457;
    border-radius: 10px;
    width: 95px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    gap: 11px;
    cursor: pointer;
}

.cadastrar {
    background-color: #5f5136;
    border: 1px solid #09090B;
    color: white;
    border-radius: 10px;
    width: 95px;
    height: 40px;
    font-size: 15px;
    cursor: pointer;
}

main {
    width: 100%;
    height: 699px;
    background-image: url('/public/home/fundoHome.svg');
    background-size: cover;
}

main>h1 {
    color: white;
    font-size: 75px;
    text-align: center;
    padding-top: 95px;
    font-family: 'monteserrat', sans-serif;
}

main>h1 span {
    color: #F1C23C;
    font-weight: bold;
}

main>p {
    color: #A1A1AA;
    font-size: 25px;
    text-align: center;
    width: 700px;
    margin: auto;
    margin-top: 25px;
}

.busca {
    width: 850px;
    height: 120px;
    background-color: #1F1F21;
    margin: auto;
    margin-top: 60px;
    border-radius: 15px;
    border: solid 1px #F1C23C;
    display: flex;
    align-items: center;
}
.inputs {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
}
.inputs > input{
    width: 510px;
    height: 65px;
    border-radius: 15px;
    border: solid 1px #F1C23C;
    padding-left: 15px;
    font-size: 15px;
    background-color: #131315;
    color: white;
    font-family: 'Inter', sans-serif;
}
.inputs > .buscarBarberias{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: #F1C23C;
    border: none;
    border-radius: 15px;
    width: 250px;
    height: 65px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}
</style>