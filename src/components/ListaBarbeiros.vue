<script setup>
const infoBarbershop = [
    {
        id: 1,
        Image: '/ListaBarbearia/Barber_to_João.jpeg',
        name: 'Barbearia do João',
        address: 'Rua das Flores, 123 - Centro',
        assessment: '**** 4.8',
        clock: '08:00 - 18:00',
        services: 'corte masculino',
    },
    {
        id: 2,
        Image: '/barbershop/barbershop1.jpg',
        name: 'Barbearia do João',
        address: 'Rua das Flores, 123 - Centro',
        assessment: '**** 4.8',
        clock: '08:00 - 18:00',
        services: 'corte masculino',
    },
    {
        id: 3,
        Image: '/barbershop/barbershop1.jpg',
        name: 'Barbearia do João',
        address: 'Rua das Flores, 123 - Centro',
        assessment: '**** 4.8',
        clock: '08:00 - 18:00',
        services: 'corte masculino',
    },
]
</script>

<template>
    <div class="container">
        <ul>
            <li v-for="barbershop in infoBarbershop" :key="barbershop.id">
                <div class="barbershop">
                    <img :src="barbershop.Image" alt="Imagem da Barbearia" class="imageBarbershop">
                    <div class="informations">
                        <h3>{{ barbershop.name }}</h3>
                        <div class="address">
                            <p>Endereço: {{ barbershop.address }}</p>
                        </div>
                        <div class="assensementClock">
                            <p>Avaliação: {{ barbershop.assessment }}</p>
                            <p>Horário: {{ barbershop.clock }}</p>
                        </div>
                        <div class="services">
                            <p>Serviços: {{ barbershop.services }}</p>
                        </div>
                    </div>
                    <div class="centerButton">
                        <button>Agendar Horário</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* ---- CARD PRINCIPAL DA BARBEARIA ---- */

.barbershop {
    width: 300px;
    border: 1px solid #bebdbd;
    border-radius: 5px;
    margin-bottom: 16px;
    background-color: rgb(255, 0, 0);
}

/* ---- IMAGEM DA BARBEARIA ---- */

.imageBarbershop {
    width: 300px;
    border-radius: 5px;
}

/* ---- BOTÃO DE AGENDAR ---- */

.barbershop button {
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
}

/* ---- ALINHAMENTO DO BOTÃO ---- */

.centerButton {
    text-align: center;
    margin: 10px;
}

/* ---- INFORMAÇÕES DE DENTRO DO CARD ---- */

.informations {
    padding: 0 0 0 15px;
}
</style>
