<template >

    <div class="bg-slate-900 w-full h-full">
          
      <div id="cats-home" ></div>
      <Home />
        
      <div id="cats-card" class="py-6"></div>
      <Card :catsBreed="catsBreed"/>
    
      <div id="cats-about" class="py-8"></div>
      <About />
    
    </div>
                
    </template>
    
    <script lang="ts" setup>
    import Card from "../components/catsbreed-card.vue";
    import Home from "../components/home.vue";
    import About from "../components/about.vue";
    import { CatBreed } from "../types/CatsBreed";
    import { ref } from 'vue';
    
     const catsBreed = ref<CatBreed[]>([
       { name:'Persian',origin:'Iran',lifespan:'12 Years',desc:'Fluffy and Friendly', img: 'Persians.jpg'},
       { name:'British Short Hair',origin:'United Kingdom',lifespan:'10 Years',desc:'Friendly and Lazy', img: 'BSH.jpg'},
       { name:'Scottish Fold',origin:'Scotland',lifespan:'11 Years',desc:'Gentle and Sweet', img: 'SF.jpg'},
       { name:'MaineCoon',origin:'United States',lifespan:'15 Years',desc:'Large and Elegant', img: 'Mainecooncat.jpg'},
       { name:'Siamese',origin:'Thailand',lifespan:'8 Years',desc:'Playful and Active', img: 'Siamese.jpg'},
       { name:'Bengal',origin:'Asian',lifespan:'10 Years',desc:'Active and Elegant', img: 'Bengal.jpg'},
     ]);
    
    </script>