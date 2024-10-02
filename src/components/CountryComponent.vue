<template>
    <div class="profile-container">
      <header class="header">
          <div class="flag-container">
              <img :src="country[index]?.flags.png" :alt="country[index]?.flags.alt" class="profile-picture">
          </div>
        <h1>{{ country[index]?.name.official }}</h1>
      </header>
      
      <div class="profile-content">
        <div class="profile-sidebar h-[90vh] overflow-y-scroll mt-[150px]">
            <h2>Liste des pays</h2>
            <ul>
              <li v-for="(pays, index) in country" :key="index">
                <button @click="getSpecificCountry(index)" class="p-1 font-bold">{{ pays.name.common }}</button>
              </li>
            </ul>
        </div>
        
        <div class="profile-main">
          <div class="flex justify-between gap-10 p-2">
              <section class="formation w-[50%]">
                <div>
                  <p><strong>Capitale: </strong><span>{{ country[index]?.capital[0] }}</span></p>
                  <p><strong>Population: </strong><span>{{ country[index]?.population }}</span></p>
                </div>
              </section>
              
              <section class="competences w-[50%]">
                <h3>Competences</h3>
                <div v-for="skill in profile.skills" :key="skill.name" class="skill-bar">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div class="skill-progress">
                    <div class="skill-progress-bar" :style="{ width: `${skill.level}%` }"></div>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
              </section>
          </div>
          
          <section class="a-propos">
            <h3>A propos</h3>
            <p>{{ profile.about }}</p>
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
    //Fonction de filtrage
    const filteredItems = computed(() => {
      const query = searchVal.value.toLowerCase();
      console.log(query);
      return cars.value.filter(item =>
        item.nom.toLowerCase().includes(query)
      );
    });

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

    function getSpecificCountry(i) {
        index.value = i;
        console.log(index.value);
    }
    let arrayPopulation = country.value.map(el => el.population -1);
    let sumPopulation = country.value.reduce((acc, curr) => acc + curr, 0);

    console.log(sumPopulation);
    console.log(arrayPopulation);
    onMounted(() => {
      fetchCountyData();
    })

  const profile = reactive({
    name: 'MESSIBATOR Anatol Bertrand',
    title: 'Développeur fullStack',
    image: 'path/to/profile-image.jpg',
    email: 'messi.anatol@gmail.com',
    phone: '+229 66739946',
    location: 'Abomey-Calavi',
    socialMedia: ['facebook', 'instagram', 'youtube'],
    education: [
      'Obtention du bac en 1974',
      'Obtention du Bepc en 1970',
      'Obtention du cep en 1965',
      'Obtention du bac en 1974',
      'Obtention du Bepc en 1970',
      'Obtention du cep en 1965'
    ],
    skills: [
      { name: 'Laravel', level: 86 },
      { name: 'VueJS', level: 69 },
      { name: 'Python', level: 56 },
      { name: 'Angular', level: 45 }
    ],
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus esse in, ex tempore quasi eveniet quo? Tempora, explicabo. Aliquam voluptatem praesentium quaerat fugit rerum? Repellat, ut ex molestiae illum reiciendis sint ea vel delectus perspiciatis quod, consectetur tempore voluptatum dolor qui ullam dolorum? Ratione rerum quisquam, inventore perferendis cumque eos tenetur veritatis doloremque provident optio voluptatibus delectus incidunt est non officia corrupti sit dolorem autem rem? Similique, nostrum enim saepe hic, voluptatibus reprehenderit obcaecati laborurn nihil sed possimus repellendus vero ab consectetur perferendis veniam esse delectus voluptatum dolore nesciunt. Quae nam impedit molestiae dolor, eaque ad asperiores iusto fugiat laboriosam dolore praesentium beatae, cupiditate optio soluta, perspiciatis non alias nemo dolores! Voluptas ut error libero mollitia omnis consectetur voluptates ex, saepe sed officia impedit excepturi!'
  })
  
  const handleNext = () => {
    console.log('Next button clicked')
    // Add your logic for the next action here
  }
  </script>
  
  <style scoped>
  .profile-container {
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
  
  .profile-content {
    display: flex;
    padding: 20px;
  }
  
  .profile-sidebar {
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
  
  .profile-main {
    flex: 2;
  }
  
  .formation, .competences, .a-propos {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  .skill-bar {
    margin-bottom: 10px;
  }
  
  .skill-progress {
    background-color: #e0e0e0;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .skill-progress-bar {
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
  
  @media screen and () {
    
  }
  </style>