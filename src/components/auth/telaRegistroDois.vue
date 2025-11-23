<script setup>
import { ref, watch } from 'vue'

const props = defineProps(
  {
    'data': Object
  }
)
const cpf = ref(props.data.cpf)
const dataNascimento = ref(props.data.dataNascimento)
const celular = ref(props.data.celular)
const dateFocused = ref(false)


// Emitir dados para o componente pai
const emit = defineEmits(['update-data', 'voltar'])



// Observar mudanças nos dados e emitir para o pai
watch([cpf, dataNascimento, celular], () => {
  emit('update-data', {
    cpf: cpf.value,
    dataNascimento: dataNascimento.value,
    celular: celular.value
  })
}, { immediate: true })
</script>

<template>
  <img @click="emit('voltar')" class="iconeVoltar" src="/imgsRegistro/Vector.svg" alt="Voltar para primeira etapa">
  <div class="form-box2">
    <form @submit.prevent="() => { }">
      <input type="text" v-model="cpf" placeholder="CPF" maxlength="11" inputmode="numeric" />
      <div class="input-group">
        <input type="date" v-model="dataNascimento" class="date-input" :class="{ 'has-value': !!dataNascimento }"
          @focus="dateFocused = true" @blur="dateFocused = false" />
        <span class="date-placeholder" v-if="!dataNascimento && !dateFocused">
          Data de nascimento
        </span>
      </div>
      <input type="text" v-model="celular" placeholder="Celular" maxlength="11" inputmode="numeric" />
    </form>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
}

.container {
  --field-w: 500px;
  --field-h: 6.6vh;

  background: #0F0F0E;
  color: #fff;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 160px;
  margin-top: -50px;
}

.form-box2 {
  width: var(--field-w);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: auto;
}

.titulo {
  font-size: 45px;
  margin: 0 0 -4px 0;
  font-weight: 300;
}

.subtitle {
  font-size: 20px;
  margin: 0 0 30px 0;
  color: #cfcfcf;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
.btn {
  width: var(--field-w);
  height: var(--field-h);
  box-sizing: border-box;

  border-radius: 8px;
  border: 1px solid #4D4025;
  background: transparent;
  color: #fff;
  padding: 0 16px;
  font-size: 14px;
}

input::placeholder {
  color: #aaa;
}

.input-group {
  position: relative;
  width: 100%;
}

.date-input {
  position: relative;
  z-index: 0;
}

.date-input::-webkit-datetime-edit {
  color: transparent;
}

.date-input.has-value::-webkit-datetime-edit,
.date-input:focus::-webkit-datetime-edit {
  color: #fff;
}

.date-placeholder {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 14px;
  pointer-events: none;
  z-index: 1;
}


.btn {
  background: #c7a464;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1px;
}

.btn:hover {
  background: #b18f52;
}

.link {
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
}

.link a {
  color: #c7a464;
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}
.iconeVoltar {
  cursor: pointer;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
}

.iconeVoltar:hover {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}
@media screen and (max-width: 768px) {
  .form-box2 {
    height: auto;
  }

  input,
  .btn {
    justify-content: center;
    align-items: center;
  }

  .iconeVoltar {
    left: 2rem;
    top: 2rem;
  }
}
</style>
