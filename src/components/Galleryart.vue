<template>
    <!-- component -->
    <div class="min-h-screen w-full content-center justify-center p-5 bg-gray-200">
        <div class="flex justify-center items-center gap-5">
            <div class="flex justify-center items-center gap-5 ">
                <button @click="navigateTo('galleryart')" class="border border-green-500 rounded-md py-1 px-2">Voitures</button>
                <!-- <button @click="navigateTo('country')" class="border border-green-500 rounded-md py-1 px-2">Pays</button> -->
                <!-- <button @click="navigateTo('Motars')" class="border border-green-500 rounded-md py-1 px-2">Motars</button> -->
                <!-- <button @click="navigateTo('githubUsers')" class="border border-green-500 rounded-md py-1 px-2">Utilisateurs github</button> -->
            </div>

            <div>
                <input class="rounded-md text-center h-7" type="search" placeholder="Recherche..."
                v-model="searchVal">
            </div>
        </div>

        <!-- la valeur de recherche est envoyée par props au composant affiché par router-view -->
        <router-view :researchVal="searchVal"></router-view>
    </div>
 

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';


const router = useRouter();

//Valeur de l'input
const searchVal = ref('');

const navigateTo = (route) => {
  router.push(`/${route}`)
}



  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  </style>