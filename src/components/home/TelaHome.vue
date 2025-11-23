<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const authStore = useAuthStore();
const showMenu = ref(false);

const toggleMenu = () => {
        showMenu.value = !showMenu.value;
};

onMounted(() => {
        authStore.me();
});

// aceitar v-model:search do componente pai
const props = defineProps({
    search: { type: String, default: '' }
});
const emit = defineEmits(['update:search']);

function updateSearch(value) {
    emit('update:search', value);
}
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="/home/logo1.svg" alt="">
                <h1>CoBarber</h1>
            </div>
            <div class="nav">
                <ul>
                    <router-link to="/">Início</router-link>
                    <router-link to="/barbearias">Barbearias</router-link>
                    <router-link to="/agendamentos">Agendamentos</router-link>
                </ul>
            </div>
            <div class="login" v-if="!authStore.state.user">
                <button @click="router.push('/login')" class="entrar">
                    <img src="/home/user.svg" alt="">
                    <p>Login</p>
                </button>
                <button @click="router.push('/telaRegistro')" class="cadastrar">
                    {{ authStore.state.user?.is_owner }}
                    Cadastrar
                </button>
            </div>
            <div class="logado" v-else>
                <div class="avatar" @click="toggleMenu">
                    <img src="/public/home/user.svg" alt="user" />
                </div>

                <div class="menu-user" v-show="showMenu">
                    <div class="perfil-topo">
                        <div class="avatar grande">
                            <img src="/public/home/user.svg" alt="">
                        </div>
                        <div class="dados">
                            <p class="nome">{{ authStore.state.user?.name }}</p>
                            <p class="email">{{ authStore.state.user?.email }}</p>
                            <span class="tag">Cliente</span>
                        </div>
                    </div>

                    <hr class="divisor" />

                    <div class="conta-item criar">
                        <div class="icone-add">+</div>
                        <p>Criar barbearia</p>
                    </div>

                    <hr class="divisor" />

                    <button class="item-menu">Favoritos</button>
                    <button class="item-menu">Histórico</button>
                    <button class="item-menu">Endereços</button>
                    <button class="item-menu">Configurações da conta</button>

                    <button @click="authStore.logout" class="logout">Sair de todas as contas</button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <h1 class="homeTitulo">Encontre a <span>barbearia perfeita</span></h1>
        <p>Agende um horário com os melhores barbeiros de sua região. Simples, rápido e sem complicação</p>
        <div class="busca">
            <div class="inputs">
                <input :value="props.search" @input="e => updateSearch(e.target.value)" @keyup.enter="e => updateSearch(e.target.value)" type="text" placeholder="Digite seu bairro ou cidade">
                <button class="buscarBarberias" @click="() => updateSearch(props.search)">
                    <img src="/home/lupa.svg" alt="">
                    <p>Buscar barbearias</p>
                </button>
            </div>
        </div>
        <div class="textoInfo">
            <p class="paragrafoInfo"><img src="/home/tesoura.svg" alt=""> +150 Barbearias</p>
            <p class="paragrafoInfo"><img src="/home/localizacao.svg" alt="">Toda a região</p>
        </div>
    </main>
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
    border-bottom: 1px solid #222;
}


.login,
.logado {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
}
.container {
    width: 100%;
    padding: 0 55px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr auto 1fr; /* 3 colunas */
    align-items: center;
}
.nav ul {
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;
}

.nav a {
    text-decoration: none;
    color: #B0B0B0;
    font-size: 16px;
}

.nav a:hover {
    color: #F1C23C;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    margin-top: 15px;
    width: 100px;
}

.logo h1 {
    font-size: 24px;
    font-family: "Cinzel", serif;
    font-weight: bold;

}

ul {
    display: flex;
    gap: 20px;
}

a {
    text-decoration: none;
    color: #B0B0B0;
}

.entrar {
    display: flex;
    background-color: #0F0F0E;
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
    height: 100vh;
    background-image: url('/public/home/fundoHome.svg');
    background-size: cover;
}

.homeTitulo {
    color: white;
    font-size: 65px;
    text-align: center;
    padding-top: 9rem;
    font-family: 'monteserrat', sans-serif;
}

.homeTitulo span {
    color: #F1C23C;
    font-weight: bold;
}

main>p {
    color: #A1A1AA;
    font-size: 22px;
    text-align: center;
    width: 700px;
    margin: auto;
    margin-top: 25px;
}

.busca {
    width: 780px;
    height: 100px;
    background-color: #1F1F21;
    margin: auto;
    margin-top: 60px;
    border-radius: 15px;
    border: solid 1px #4A4126;
    display: flex;
    align-items: center;
}

.inputs {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.inputs>input {
    width: 490px;
    height: 55px;
    border-radius: 15px;
    border: solid 1px #4A4126;
    padding-left: 15px;
    font-size: 15px;
    background-color: #131315;
    color: white;
    font-family: 'Inter', sans-serif;
}

.inputs>.buscarBarberias {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: #F1C23C;
    border: none;
    border-radius: 15px;
    width: 215px;
    height: 55px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}
.buscarBarberias img {
    margin-left: 10px;
}

.textoInfo {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
}

.paragrafoInfo {
    color: #B0B0B0;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 14px;
}

.tituloTutotial {
    color: white;
    font-size: 55px;
    text-align: center;
    margin-top: 70px;
    font-family: 'monteserrat', sans-serif;
}

.tituloTutotial span {
    color: #F1C23C;
}

.textoTutorial {
    color: #A1A1AA;
    font-size: 22px;
    text-align: center;
    width: 800px;
    margin: auto;
    margin-top: 25px;
}

.wrapperTutorial {
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-top: 70px;
}

.cardsTutorial {
    background-color: #212124;
    width: 300px;
    height: 350px;
    border-radius: 15px;
    padding: 27px;
    text-align: center;
    color: white;
    border: solid 1px #F1C23C;
}

.cardsTutorial h2 {
    font-size: 17px;
    width: 122px;
    margin: auto;
    padding-top: 30px
}

.cardsTutorial p {
    font-size: 16px;
    margin-top: 20px;
    color: #A1A1AA;
    font-weight: bold;
    width: 180px;
    margin: auto;
    padding-top: 20px;
}

.tesouraTutorial {
    width: 35px;
    height: 35px;
}


.avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #F1C23C;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.avatar img {
    width: 22px;
    height: 26px;
}

.menu-user {
    position: absolute;
    right: 0;
    top: 65px;
    background: #0D0D0D;
    width: 310px;
    border-radius: 12px;
    border: 1px solid #3C3C3C;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    animation: fade .15s ease-in-out;
}

@keyframes fade {
    from { opacity: 0; transform: translateY(-5px);}
    to   { opacity: 1; transform: translateY(0);}
}

.perfil-topo {
    display: flex;
    gap: 12px;
    align-items: center;
}

.perfil-topo .grande {
    width: 50px;
    height: 50px;
}

.pequeno {
    width: 35px;
    height: 35px;
}

.dados .nome {
    font-size: 15px;
    font-weight: 600;
}

.dados .email {
    font-size: 13px;
    color: #8D8D8D;
}

.tag {
    font-size: 12px;
    margin-top: 4px;
    color: #F1C23C;
}

.divisor {
    border: 0;
    border-bottom: 1px solid #292929;
}

.titulo-secao {
    font-size: 12px;
    text-transform: uppercase;
    color: #6f6f6f;
    margin-bottom: -5px;
}

.conta-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 2px;
    cursor: pointer;
}

.conta-item.criar {
    color: #F1C23C;
}

.icone-add {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #F1C23C;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-menu {
    text-align: left;
    padding: 6px 0;
    background: none;
    border: none;
    color: #ddd;
    font-size: 14px;
    cursor: pointer;
}

.item-menu:hover {
    color: #F1C23C;
}

.logout {
    margin-top: 8px;
    background: none;
    border: none;
    color: #C74343;
    padding: 6px 0;
    cursor: pointer;
    text-align: left;
}

.img-user {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #F1C23C;
    cursor: pointer;
}

.img-user>img {
    width: 20px;
    height: 25px;
}

.user {
    position: absolute;
    top: 70px;
    right: 0px;
    background-color: #0f0f0f;
    border: 1px solid #F1C23C;
    border-radius: 10px;
    padding: 15px;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.name-email {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
}

.name-email img {
    width: 20px;
    height: 20px;
}
@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }
    main{
        height: auto;
        padding: 60px 0 40px 0;
    }

    .nav ul {
        display: none;
    }

    .homeTitulo {
        font-size: 40px;
        padding-top: 5rem;
    }

    main>p {
        width: 90%;
        font-size: 18px;
    }

    .busca {
        width: 90%;
        height: 80px;
    }

    .inputs>input {
        width: 60%;
        height: 45px;
        font-size: 14px;
    }

    .inputs>.buscarBarberias {
        width: 130px;
        height: 45px;
        font-size: 14px;
    }
}

</style>
