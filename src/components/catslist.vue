<template >
  <div class="text-primary py-12 text-center text-6xl sm:text-4xl">
    Cats List
  </div>

  <div class="lg:flex lg:justify-center p-12 ">
    <div class="flex flex-wrap justify-center text-center items-center">
      <div v-for="(catBreed, index) in catsBreed" :key="index" class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg sm:h-40 sm:w-full h-72 object-cover" :src="'src/assets/' + catBreed.img" alt="" />
          <div class="p-5 flex flex-col">
            <h5 class="mb-5 sm:text-base text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ catBreed.name }}
            </h5>
            <div class="text-center pt-5">
              <router-link :to="{ name: 'edit-cats-info' }">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 mx-auto">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Edit</span>
                </button>
              </router-link>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-black-300 group-hover:from-teal-300 group-hover:to-red-300 dark:text-white dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 mx-auto">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Delete</span>
              </button>
          </div>
          </div>
        </div>
      </div>

      <!-- <div class="text-center pl-12">
      <button class="relative inline-flex items-center w-56 h-56 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lime-500 to-lime-300 group-hover:from-teal-300 group-hover:to-red-300 dark:text-white dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-green-800">
        <span class="w-52 h-52 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl text-center flex items-center justify-center">
          <div>Add more cats</div>
        </span>
      </button>
      </div> -->

    </div>
  </div>

  <div class="flex items-start h-screen w-full justify-center py-8">
    <div class="w-1/2 sm:w-4/5 text-center bg-slate-200 rounded-3xl shadow-lg p-8 m-4">
      <h1 class="text-primary sm:text-2xl text-4xl py-3">{{ title }}</h1>
      <ul>
        <li v-for="cats in catsBreed" :key="cats.name" class="sm:text-sm">{{ cats.name }}</li>
      </ul>
      <form class="py-6">
        <input placeholder="Cats Breed" v-model="New" type="text" class="px-2 border border-black rounded"><br><br>
        <button @click.prevent="onClick" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Add
        </button>
      </form>
      <Counter :catsBreed="catsBreed" />
      <div v-if="modal === 'Add Successful'" class="bg-primary">
        <h4>{{ modal }}</h4>
      </div>
      <div v-else class="bg-red-500">
        <h4>{{ modal }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Counter from "./catslist-counter.vue";
import { CatBreed } from "../types/CatsBreed.ts";
import { ref } from 'vue';

const title = ref('Cats List');
const modal = ref('');
const New = ref('');
const { catsBreed } = defineProps<{
  catsBreed: CatBreed[];
}>();

const onClick = () => {
  const valueToAdd = New.value.trim();
  if (New.value !== '' && !catsBreed.some(cat => cat.name === valueToAdd)) {
    catsBreed.push({ name: valueToAdd, origin: 'Unknown', lifespan: 'Unknown', desc: 'Unknown', img: 'Unknown' });
    New.value = '';
    return modal.value = 'Add Successful';
  } else if (catsBreed.some(cat => cat.name === valueToAdd)) {
    return modal.value = 'Breed Already Exist! Please Enter Another the Breed';
  }
  return modal.value = 'Please Enter the Breed';
};
</script>


