<template>
    <div class="border-2  ">
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" class=" p-2 border rounded-md  block w-full" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String,
      placeholder: String,
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  