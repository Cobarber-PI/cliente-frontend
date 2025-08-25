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
                <button>
                    <img src="/public/home/user.svg" alt="">
                    <p>Login</p>
                </button>
                <button>
                    Cadastrar   
                </button>
            </div>
        </div>
    </header>
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

.login{
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

.logo{
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo img{
    margin-top: 15px;
    width: 50%;
}   

.logo h1{
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

a{
    text-decoration: none;
    color: #B0B0B0;
}
button{
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
}
</style>