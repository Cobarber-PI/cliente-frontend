<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

const registrar = () => {
    router.push("/registro");
};

</script>

<template>
    <div class="container">
        <div class="espacoEscura">
            <img src="/login/Barber.png" alt="Barbeiro">
        </div>
        <div class="parteClara">
            <h1 class="titulo">Bem Vindo de Volta!</h1>
            <button class="botao-google">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                <p>Continuar com Google</p>
            </button>
            <div class="divisor">
                <span></span>
                ou
                <span></span>
            </div>
            <input type="text" placeholder="Email" class="input" />
            <input type="password" placeholder="Senha" class="input" />
            <a href="#" class="link" @click="registrar">Esqueceu sua senha?</a>
            <button class="botao-entrar">ENTRAR</button>
            <a href="#" class="link baixo" @click="registrar">Não possui conta?</a>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    width: 100%;
}

.espacoEscura {
    width: 50%;
    background-color: #1C2227;
    display: flex;
    align-items: center;
    justify-content: center;
}

.espacoEscura img {
    width: 80%;
    max-width: 490px;
}

.parteClara {
    margin-left: 15%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.titulo {
    font-size: 28px;
    margin-bottom: 25px;
}

.botao-google {
    display: flex;
    gap: 60px;
    border: 1px solid #ccc;
    background-color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.botao-google img {
    width: 20px;
    height: 20px;
}

.divisor {
    display: flex;
    align-items: center;
    color: #888;
    margin: 15px 0 20px;
    gap: 12px;
}

.divisor span {
    height: 1px;
    background-color: #ccc;
    width: 110px;
}

.input {
    width: 100%;
    padding: 14px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: none;
    background-color: #e0e0e0;
    font-size: 16px;
}

.link {
    font-size: 14px;
    color: #444;
    text-decoration: none;
    margin: 10px 0;
    font-weight: 600;
}

.botao-entrar {
    width: 100%;
    max-width: 300px;
    padding: 12px;
    background-color: #1C2227;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
}
</style>