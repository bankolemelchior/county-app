<template>
    <!-- component -->
    <div class="min-h-screen w-full content-center justify-center p-5 bg-gray-200">
        <div class="flex justify-center items-center gap-5">
            <div class="flex justify-center items-center gap-5 ">
                <button class="border border-green-500 rounded-md py-1 px-2">Voitures</button>
                <button class="border border-green-500 rounded-md py-1 px-2">Motars</button>
                <button class="border border-green-500 rounded-md py-1 px-2">Animaux</button>
            </div>

            <div>
                <input class="rounded-md text-center h-7" type="search" placeholder="Recherche..."
                v-model="searchVal">
            </div>
        </div>
        <div class="grid grid-cols-4 gap-3">
            <div v-for="(pays, index) in country" :key="index" class="w-96 bg-white p-3">
                <img class="h-52 w-full object-cover" :src="pays.flags.png"/>
                <ul class="mt-3 flex flex-wrap">
                    <li class="mr-auto">
                        <a href="#" class="flex text-gray-400 hover:text-gray-600">
                            <svg class="mr-0.5" style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />
                            </svg>
                            1
                        </a>
                    </li>
                    <p> {{ pays.name.official  }}</p>
                    <li class="mr-2">
                        <a href="#" class="flex text-gray-400 hover:text-gray-600">
                            <svg class="mr-0.5" style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                            </svg>
                            24
                        </a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="flex text-gray-400 hover:text-gray-600">
                            <svg class="mr-0.5" style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
                            </svg>
                            3
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex text-gray-400 hover:text-gray-600">
                            <svg class="mr-0.5" style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                            </svg>
                            3
                        </a>
                    </li>
                </ul>
            </div>
 </div>
    </div>
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
          <tr v-for="car in filteredItems" :key="car.id">
            <td>{{ car.id }}</td>
            <td>{{ car.nom }}</td>
            <td>{{ car.categorie }}</td>
          </tr>
        </tbody>
      </table>
    </div>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { CarsService } from '@/service/Voitures'
import { DataService } from '@/service/DataService'
    const searchVal = ref('')

    
  // Définir les données pour les voitures
  const cars = ref([
    { id: 1, nom: 'Tesla Model S', categorie: 'Electrique', image:'../../public/img/Tesla_Model_S.webp'},
    { id: 2, nom: 'BMW M3', categorie: 'Sport', image:'../../public/img/BMW_M3.jpg' },
    { id: 3, nom: 'Audi A4', categorie: 'Berline', image:'../../public/img/Audi_A4.jfif' },
    { id: 4, nom: 'Ford F-150', categorie: 'Camion', image:'../../public/img/Ford_F-150.jpg' },
    { id: 5, nom: 'Chevrolet Corvette', categorie: 'Sport', image:'../../public/img/Chevrolet_Corvette.jfif' },
    { id: 6, nom: 'Toyota Prius', categorie: 'Hybride', image:'../../public/img/Toyota_Prius.jpg' },
    { id: 7, nom: 'Honda Civic', categorie: 'Compact', image:'../../public/img/Honda_Civic.jpg' },
    { id: 8, nom: 'Jeep Wrangler', categorie: 'SUV', image:'../../public/img/Jeep_Wrangler.jpg' },
    { id: 9, nom: 'Mercedes-Benz C-Class', categorie: 'Berline', image:'../../public/img/Mercedes-Benz_C-Class.jpg' },
    { id: 10, nom: 'Lexus RX', categorie: 'SUV', image:'../../public/img/Lexus_RX.jpeg' },
    { id: 11, nom: 'Nissan Leaf', categorie: 'Electrique', image:'../../public/img/Nissan_Leaf.jpg' },
    { id: 12, nom: 'Porsche 911', categorie: 'Sport', image:'../../public/img/Porsche_911.jpg' },
    { id: 13, nom: 'Subaru Outback', categorie: 'Wagon', image:'../../public/img/Subaru_Outback.webp' },
    { id: 14, nom: 'Volkswagen Golf', categorie: 'Compact', image:'../../public/img/Volkswagen_Golf.jpg' },
    { id: 15, nom: 'Volvo XC90', categorie: 'SUV', image:'../../public/img/Volvo_XC90.jpg' },
    { id: 16, nom: 'Hyundai Elantra', categorie: 'Compact', image:'../../public/img/Hyundai_Elantra.jpg' },
    { id: 17, nom: 'Mazda CX-5', categorie: 'SUV', image:'../../public/img/Mazda_CX-5.jpg' },
    { id: 18, nom: 'Chevrolet Bolt', categorie: 'Electrique', image:'../../public/img/Chevrolet_Bolt.jpg' },
    { id: 19, nom: 'Ford Mustang', categorie: 'Sport', image:'../../public/img/Ford_Mustang.jpg' },
    { id: 20, nom: 'Kia Sorento', categorie: 'SUV', image:'../../public/img/Kia_Sorento.jpg' }
  ]);

    //Fonction de filtrage
    const filteredItems = computed(() => {
      const query = searchVal.value.toLowerCase();
      console.log(query);
      return cars.value.filter(item =>
        item.nom.toLowerCase().includes(query)
      );
    });

    //juste un test
    const carsService = new CarsService();
    let country = ref([])
    const dataService = new DataService()

    const fetchCountyData = async () => {
      try {
          country.value = await dataService.getCountry();
          console.log(country.value);
      } catch (error) {
        console.log(error);
      }
    }

    onMounted(() => {
      const cars = carsService.getCars();
      fetchCountyData();
        // console.log(cars);
    })

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