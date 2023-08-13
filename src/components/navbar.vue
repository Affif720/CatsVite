<template>
  <nav class="bg-white border-gray-200 dark:bg-slate-900 sticky top-0 md:py-4">
    <div class="sm:flex sm:justify-center">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a class="flex items-center">
          <img src="../assets/logo.png" class="sm:h-4 h-8 mr-3 pl-3" alt="Cats Logo" />
          <span class="self-center text-2xl sm:text-sm font-semibold whitespace-nowrap dark:text-white">Cats
            Website
          </span>
        </a>

        <div class="flex order-2">
          <div class="relative block lg:pr-4 sm:pb-3">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none sm:pb-3">
              <svg class="sm:w-2 sm:h-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar"
              class="sm:h-5 block w-full md:w-4/5 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search...">
          </div>
        </div>

        <div class="items-center justify-between flex w-auto order-1" id="navbar-search">
          <div class="relative mt-3 hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="search-navbar"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search...">
          </div>
          <ul class="flex p-5 sm:p-0 md:p-0 font-medium sm:text-xs border-gray-100 rounded-lg flex-row lg:space-x-8 space-x-2 mt-0 border-0 bg-white  dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#cats-home" @click="($event) => scrollToSection($event, 'cats-home')">
                <router-link :to="{ name: 'home' }" class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0 dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">
                  Home
                </router-link>
              </a>
            </li>
            <li>
              <a href="#cats-about" @click="($event) => scrollToSection($event, 'cats-about')">
                <router-link :to="{ name: 'home' }" class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0 dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">
                  About
                </router-link>
              </a>
            </li>
            <li>
              <a href="#cats-card" @click="($event) => scrollToSection($event, 'cats-card')">
                <router-link :to="{ name: 'home' }" class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0 dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">
                  Cats Breed
                </router-link>
              </a>
            </li>
            <li>
              <router-link :to="{ name: 'catslist' }" class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0 dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">
                Cats List
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'login' }" class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0 dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700">
                Login
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const scrollToSection = (event: Event, sectionId: string) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
</script>