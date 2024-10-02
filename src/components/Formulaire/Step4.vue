<template>
    <div class="flex flex-col gap-4">
      <h2 class="text-center font-bold text-2xl" >Step 4</h2>
      <p>First Name: {{ formData.firstName }}</p>
      <p>Last Name: {{ formData.lastName }}</p>
      <p>Email: {{ formData.email }}</p>
      <p>Phone: {{ formData.phone }}</p>
      <p>Address: {{ formData.address }}</p>
      <p>City: {{ formData.city }}</p>
      <p>Zip: {{ formData.zip }}</p>
    </div>
  </template>
  
  <script>
  import { useForm } from '../../composables/useForm';
  import Button from '../partager/Button.vue';
  
  export default {
    components: { Button },
    setup() {
      const { formData, prevStep } = useForm();
  
      const submitForm = () => {
        // Logique pour soumettre le formulaire
        console.log('Form submitted:', formData);
        alert('Form submitted!');
      };
  
      return { formData, prevStep, submitForm };
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  