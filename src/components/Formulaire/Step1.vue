<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl">Step 1</h2>
      <Input v-model="nom" placeholder="First Name" />
      <Input v-model="prenom" placeholder="Last Name" />
      <Button @click="nextStep">Next</Button>
    </div>
  </template>
  
<script setup>
  import { ref, watch } from "vue";
  import Button from "@/components/partager/Button.vue";
  import Input from "@/components/partager/Input.vue";
const nom = ref("")
const prenom = ref("")

watch(nom , (newNom)=>{
  console.log(nom.value);
})
</script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  