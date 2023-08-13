<template>
  <div class="text-primary py-12 text-center sm:text-3xl text-6xl">
    Cat's Breeds Informations
  </div>
  
  <div class="lg:flex lg:justify-center p-12 ">

    <div class="md:flex md:justify-center flex flex-row align-middle md:pb-8 sm:flex sm:justify-center sm:pb-8">
      <button @click="PrevButton" type="button" class=" text-white rounded-l-md py-2 hover:text-primary px-3 ">
        <div class="flex flex-row align-middle">
          <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd">
            </path>
          </svg>
          <p class="ml-2">Prev</p>
        </div>
      </button>
    </div>

    <div class="md:flex md:justify-center sm:flex sm:justify-center">
      <div class="max-w-sm mx-2 flex pb-8 ">
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <router-link :to="{ name: 'edit-cats-info' }">
            <img class="rounded-t-lg sm:h-40 sm:w-full h-72 object-cover" :src="'src/assets/' + catsBreed[index].img" alt="" />
          </router-link>
          <div class="p-5 flex flex-col">
            <h5 class="mb-5 sm:text-base text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ catsBreed[index].name }}
            </h5>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Normal Lifespan: {{ catsBreed[index].lifespan }}
            </p>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Origins: {{ catsBreed[index].origin }}
            </p>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Description and Behaviors: {{ catsBreed[index].desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex md:justify-center sm:flex sm:justify-center">
      <div class="max-w-sm mx-2 flex pb-8">
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <router-link :to="{ name: 'edit-cats-info' }">
            <img class="rounded-t-lg sm:h-40 sm:w-full h-72 object-cover" :src="'src/assets/' + catsBreed[index + 1].img" alt="" />
          </router-link>
          <div class="p-5 flex flex-col">
            <h5 class="mb-5 sm:text-base text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ catsBreed[index + 1].name }}
            </h5>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Normal Lifespan: {{ catsBreed[index + 1].lifespan }}
            </p>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Origins: {{ catsBreed[index + 1].origin}}
            </p>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Description and Behaviors: {{ catsBreed[index + 1].desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex md:justify-center sm:flex sm:justify-center">
      <div class="max-w-sm mx-2 flex md:pb-3">
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <router-link :to="{ name: 'edit-cats-info' }">
            <img class="rounded-t-lg sm:h-40 sm:w-full h-72 object-cover" :src="'src/assets/' + catsBreed[index + 2].img" alt="" />
          </router-link>
          <div class="p-5 flex flex-col">
            <h5 class="mb-5 sm:text-base text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ catsBreed[index + 2].name }}
            </h5>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Normal Lifespan: {{ catsBreed[index + 2].lifespan }}
            </p>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Origins: {{ catsBreed[index + 2].origin }}
            </p>
            <p class="mb-1 sm:text-xs font-normal text-gray-700 dark:text-gray-400">
              Description and Behaviors: {{ catsBreed[index + 2].desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex md:justify-center flex flex-row align-middle md:pt-8 sm:flex sm:justify-center sm:pt-8">
      <button @click="NextButton" type="button" class=" text-white rounded-r-md py-2 hover:text-primary px-3">
        <div class="flex flex-row align-middle">
          <span class="mr-2">Next</span>
          <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd">
            </path>
          </svg>
        </div>
      </button>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { CatBreed } from "../types/CatsBreed.ts";
import { ref } from 'vue';

// Destructure the props with the specified generic type
const { catsBreed } = defineProps<{
  catsBreed: CatBreed[];
}>();

let index = ref(0);

const NextButton = () => {
  index.value += 1;
};

const PrevButton = () => {
  index.value -= 1;
};
</script>