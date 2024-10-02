<template>
    <div>
        <p>{{ filterData[0].nom }}</p>
    </div>
</template>

<script setup lang='ts'>
import data from '../service/data.js';

import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.carId);
console.log(data);

const filterData = computed(() => {
    return data.filter((el) => el.id === route.params.carId)
})


console.log(filterData.value);



</script>

<style scoped></style>