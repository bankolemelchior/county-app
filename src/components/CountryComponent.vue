<template>
    <div class="main-container">
      <header class="header">
          <div class="flag-container">
              <img :src="country[index]?.flags.png" :alt="country[index]?.flags.alt" class="profile-picture">
          </div>
        <h1>{{ country[index]?.name.official }}</h1>
      </header>
      
      <div class="list-country">
        <div class="list-sidebar h-[60vh]  mt-[150px] border-2 border-red-500 ">
          <div class="flex justify-center gap-5 bg-orange-200 sticky top-0">
            <h2 class="text-[1.2em]">Liste des pays</h2>
            <input class="border-2" type="text" name="" id="" v-model="searchVal" placeholder="Recherche">
          </div>
          <div class=" h-full">
              <ul class="h-full overflow-y-scroll">
                <li v-for="(pays, index) in filteredItems" :key="index">
                  <button @click="getSpecificCountry(index)" class="p-1 font-bold">{{ pays.name.common }}</button>
                </li>
              </ul>
            </div>
          </div>
        
        <div class="info-container">
          <div class="flex justify-between gap-10 p-2">
              <section class="block-info1 w-[50%]">
                <div>
                  <p><strong>Capitale: </strong><span>{{ country[index]?.capital[0] }}</span></p>
                  <p><strong>Langue: </strong><span>{{ country[index]?.languages.eng }}</span></p>
                  <p><strong>Monnaie: </strong><span>{{ country[index]?.currencies.BBD?.name  }} ({{ country[index]?.currencies.BBD?.symbol }})</span></p>
                  <p><strong>Continent: </strong><span>{{ country[index]?.continents[0] }}</span></p>
                  <p><strong>Sous-région: </strong><span>{{ country[index]?.subregion }}</span></p>
                  <p><strong>Emblème: </strong><span><img :src="country[index]?.coatOfArms.png" alt=""></span></p>
                </div>
              </section>
              
              <section class="block-info2 w-[50%]">
                <h3>Autres information</h3>
                <div class="population">
                    <p>...</p>
                  <!-- <span class="skill-name">{{ skill.name }}</span> -->
                  <div class="population-portion">
                    <p>Population: {{ country[index]?.population }} <strong>{{ countryPopulationPortion }} %</strong> </p>
                    <span>{{ countryPopulationPortion }} %</span>
                    <div class="population-bar" :style="{ width: `${countryPopulationPortion}%` }"></div>
                  </div>
                  <!-- <span class="skill-percentage">{{ skill.level }}%</span> -->
                </div>
              </section>
          </div>
          
          <section class="block-info3">
            <h3>A propos</h3>
            <p>...</p>
          </section>
          <section class="block-info3">
            <h3>Informations générales</h3>
            <p>Population totale: {{ countryPopulation }} d'habitant</p>
          </section>
        </div>
      </div>
      
    </div>
  </template>
  
  <script setup>
    import { reactive, watch } from 'vue'
    import { ref, computed, onMounted } from 'vue';
    import { DataService } from '@/service/DataService';


    const searchVal = ref('');
    let index = ref(0);
    let country = ref([]);
    let countryPopulation = ref([]);
    let countryPopulationPortion = ref(0);

    let x = ref('');
    //Fonction de filtrage
    const filteredItems = computed(() => {
      const query = searchVal.value.toLowerCase();
      console.log(query);
     return  x.value = country.value.filter(item =>
        item.name.official.toLowerCase().includes(query)
      );

      console.log(x.value);
    });
    
    watch(filteredItems, (newV, oldV) => {
      console.log(filteredItems);
    })


    //Utilisation de fetch avec async await
    async function fetchCountyData()  {
      try {
            const resp = await fetch('https://restcountries.com/v3.1/all')
            const data =   await resp.json()
            country.value = data;
            countryPopulation.value = country.value.map(element => element.population)
                                                    .reduce((acc, curr) => acc + curr, 0);
            console.log(countryPopulation.value);
      } catch (error) {
        console.log(error);
      }
    }

    //Utilisation de fetch 2
    function fetchData() {
         fetch('http://example.com/api/cats')
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error('Erreur:', error));
        }

    function getSpecificCountry(i) {
        index.value = i;
        console.log(index.value);
    }

    country.value.forEach(element => {
        console.log(element.population);
    });

    
    let populationPortion = computed((pays) =>{
      let a = country.value[pays];
      console.log(a);
    })
    
    watch(index, (newVal, oldVal) => {
      if (country.value.length > 0) {
        let element = country.value[index.value];
        console.log(newVal, oldVal);
        countryPopulationPortion.value = ((element.population / countryPopulation.value)*100).toFixed(2);
        console.log(element);
    }
        // populationPortion(newVal)
    })

    onMounted(() => {
      fetchCountyData();
    })

  
  const handleNext = () => {
    console.log('Next button clicked')
    // Add your logic for the next action here
  }
  </script>
  
  <style scoped>
  .main-container {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f0f0f0;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    height: 250px;
    background: linear-gradient(to right, #4CAF50, #044e08);
    color: white;
    font-weight: bolder;
    font-size: 3em;
  }
  .header h1 {
    margin-block: 2em;
    margin-inline:4em;
  }

  .flag-container {
    width: 300px;
    height: 250px;
  }
  .flag-container img {
    position: relative;
    top: 100px;
    left: 100px;
    border-radius: 5%;
  }
  
  .list-country {
    display: flex;
    padding: 20px;
  }
  
  .list-sidebar {
    flex: 1;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .profile-picture {
    width: 100%;
    height: 250px;
    /* border-radius: 50%; */
    /* object-fit: cover; */
  }
  
  .info-container {
    flex: 2;
  }
  
  .block-info1, .block-info2, .block-info3 {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  .population {
    margin-bottom: 10px;
  }
  
  .population-portion {
    padding-inline: 1em;
    background-color: #e0e0e0;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .population-bar {
    height: 100%;
    background-color: #4CAF50;
  }
  
  .suivant-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    float: right;
    margin-top: 20px;
  }
  
  </style>