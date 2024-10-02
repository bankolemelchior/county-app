<template>
    <!-- component -->
    <div class="min-h-screen w-full content-center justify-center p-5 bg-gray-200">
        <div class="flex justify-center items-center gap-5">

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


</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { CarsService } from '@/service/Voitures'
import { DataService } from '@/service/DataService'
    const searchVal = ref('')

    
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