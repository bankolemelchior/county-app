<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl">Step 3</h2>
      <Input  placeholder="Address" />
      <Input  placeholder="City" />
      <Input  placeholder="Zip Code" />
      <Button @click="nextStep">Next</Button>
    </div>
  </template>
  
  <script setup>
 
  import Input from '../partager/Input.vue';
  import Button from '../partager/Button.vue';
  
 
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  