<script setup>
import ListaBarbeiros from '@/components/barbeiros/ListaBarbeiros.vue';
const { search } = defineProps({ search: { type: String, default: '' } });
</script>

<template>
    <ListaBarbeiros :search="search" />
</template>
