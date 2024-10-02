<template>
    <div>
      <h1>Liste des Voitures</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in cars" :key="car.id">
            <td>{{ car.id }}</td>
            <td>{{ car.nom }}</td>
            <td>{{ car.categorie }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Définir les données pour les voitures
  const cars = ref([
    { id: 1, nom: 'Tesla Model S', categorie: 'Electrique' },
    { id: 2, nom: 'BMW M3', categorie: 'Sport' },
    { id: 3, nom: 'Audi A4', categorie: 'Berline' },
    { id: 4, nom: 'Ford F-150', categorie: 'Camion' },
    { id: 5, nom: 'Chevrolet Corvette', categorie: 'Sport' },
    { id: 6, nom: 'Toyota Prius', categorie: 'Hybride' },
    { id: 7, nom: 'Honda Civic', categorie: 'Compact' },
    { id: 8, nom: 'Jeep Wrangler', categorie: 'SUV' },
    { id: 9, nom: 'Mercedes-Benz C-Class', categorie: 'Berline' },
    { id: 10, nom: 'Lexus RX', categorie: 'SUV' },
    { id: 11, nom: 'Nissan Leaf', categorie: 'Electrique' },
    { id: 12, nom: 'Porsche 911', categorie: 'Sport' },
    { id: 13, nom: 'Subaru Outback', categorie: 'Wagon' },
    { id: 14, nom: 'Volkswagen Golf', categorie: 'Compact' },
    { id: 15, nom: 'Volvo XC90', categorie: 'SUV' },
    { id: 16, nom: 'Hyundai Elantra', categorie: 'Compact' },
    { id: 17, nom: 'Mazda CX-5', categorie: 'SUV' },
    { id: 18, nom: 'Chevrolet Bolt', categorie: 'Electrique' },
    { id: 19, nom: 'Ford Mustang', categorie: 'Sport' },
    { id: 20, nom: 'Kia Sorento', categorie: 'SUV' }
  ]);
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
  