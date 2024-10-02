    { "id": "1", "nom": "Tesla Model S", categorie: "Electrique", image:"../../public/img/Tesla_Model_S.webp"},
    { "id": "2", "nom": "BMW M3", categorie: "Sport", image:"../../public/img/BMW_M3.jpg" },
    { "id": "3", "nom": "Audi A4", categorie: "Berline", image:"../../public/img/Audi_A4.jfif" },
    { "id": "4", "nom": "Ford F-150", categorie: "Camion", image:"../../public/img/Ford_F-150.jpg" },
    { "id": "5", "nom": "Chevrolet Corvette", categorie: "Sport", image:"../../public/img/Chevrolet_Corvette.jfif" },
    { "id": "6", "nom": "Toyota Prius", categorie: "Hybride", image:"../../public/img/Toyota_Prius.jpg" },
    { "id": "7", "nom": "Honda Civic", categorie: "Compact", image:"../../public/img/Honda_Civic.jpg" },
    { "id": "8", "nom": "Jeep Wrangler", categorie: "SUV", image:"../../public/img/Jeep_Wrangler.jpg" },
    { "id": "9", "nom": "Mercedes-Benz C-Class", categorie: "Berline", image:"../../public/img/Mercedes-Benz_C-Class.jpg" },
    { "id": "10", "nom": "Lexus RX", categorie: "SUV", image:"../../public/img/Lexus_RX.jpeg" },
    { "id": "11", "nom": "Nissan Leaf", categorie: "Electrique", image:"../../public/img/Nissan_Leaf.jpg" },
    { "id": "12", "nom": "Porsche 911", categorie: "Sport", image:"../../public/img/Porsche_911.jpg" },
    { "id": "13", "nom": "Subaru Outback", categorie: "Wagon", image:"../../public/img/Subaru_Outback.webp" },
    { "id": "14", "nom": "Volkswagen Golf", categorie: "Compact", image:"../../public/img/Volkswagen_Golf.jpg" },
    { "id": "15", "nom": "Volvo XC90", categorie: "SUV", image:"../../public/img/Volvo_XC90.jpg" },
    { "id": "16", "nom": "Hyundai Elantra", categorie: "Compact", image:"../../public/img/Hyundai_Elantra.jpg" },
    { "id": "17", "nom": "Mazda CX-5", categorie: "SUV", image:"../../public/img/Mazda_CX-5.jpg" },
    { "id": "18", "nom": "Chevrolet Bolt", categorie: "Electrique", image:"../../public/img/Chevrolet_Bolt.jpg" },
    { "id": "19", "nom": "Ford Mustang", categorie: "Sport", image:"../../public/img/Ford_Mustang.jpg" },
    { "id": "20", "nom": "Kia Sorento", categorie: "SUV", image:"../../public/img/Kia_Sorento.jpg" }


## Quelle est la différence entre les directives v-show et v-if ?

v-if rend seulement l'élément dans le DOM si l'expression est vraie, tandis que v-show rend tous les éléments dans le DOM puis utilise la propriété d'affichage CSS pour montrer/cacher des éléments en fonction de l'expression.***********

v-if prend en charge les directives v-else et v-else-if tandis que v-show ne prend pas en charge les directives else.

v-if prend en charge l'onglet mais v-show ne prend pas en charge.

Tout ce qui précède


## Quelle commande utilise-t-on pour créer un nouveau projet Vue.js ?
A) npm create vue@latest nom_projet
B) npm start nom_projet
A) npm create vue@latest*********
C) npm install vue

## Considérons une todoList, comment utiliser les directives de Vue.js pour afficher conditionnellement les tâches complétées ?
A) v-if=“task.completed”
B) v-show=“task.completed”
C) Les deux, A et B, peuvent être utilisés*****
D) v-bind:completed=“task.completed”

## Comment les événements sont-ils gérés dans Vue.js ?
A) En utilisant l’attribut ‘event’
B) Avec la méthode .onEvent()
C) En utilisant v-on ou @ suivi du nom de l’événement *********
D) Par le biais de gestionnaires d’événements natifs JavaScript

## Quelle est la syntaxe correcte pour écouter un événement personnalisé dans un composant parent ?
A) <Enfant @nomEvenement=“handler” />*******
B) <Enfant on:nomEvenement=“handler” />
C) <Enfant click:nomEvenement=“handler” />
D) <Enfant :nomEvenement=“handler” />