<template>
  <div class="flex flex-col gap-6 pt-6">
    <h2 class="text-3xl text-gray-400 text-center font-bold">Formulaire</h2>
    <form action="" class=" flex flex-col items-center gap-4">
      <Step1  class="min-w-[60%] "/> 
      <Step2  class="min-w-[60%]"/> 
      <Step3  class="min-w-[60%]"/> 
      <Step4  class="min-w-[60%]"/>
      <Button class="min-w-[60%]" >Soumettre</Button>

    </form>
  </div>
</template>
  
<script setup>
import Step1 from "@/components/Formulaire/Step1.vue";
import Step2 from "@/components/Formulaire/Step2.vue";
import Step3 from "@/components/Formulaire/Step3.vue";
import Step4 from "@/components/Formulaire/Step4.vue";
import Button from "@/components/partager/Button.vue";
import { ref } from "vue";

const user = ref({
  firstName:"",
  lastName: ""
})
</script>
  

<style scoped>
/* Ajoutez vos styles ici */
</style>
  