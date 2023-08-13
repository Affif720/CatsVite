<template> 
  <div class="flex flex-col items-center justify-center h-screen">
    <img class="rounded-3xl h-44 w-64 mb-8" src="../assets/SF.jpg" alt="" />
    <form class="w-full max-w-sm mx-auto">
      <div class=" mb-6">
        <div>
          <label class="block text-gray-500 font-bold mb-1  pr-4" for="inline-full-name">
            Name
          </label>
        </div>
        <div>
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="British Shorthair">
        </div>
      </div>

      <div class=" mb-6">
        <div>
          <label class="block text-gray-500 font-bold  mb-1  pr-4" for="inline-password">
            Lifespan
          </label>
        </div>
        <div>
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" min="0" placeholder="Years">
        </div>
      </div>

      <div class=" mb-6">
        <div>
          <label class="block text-gray-500 font-bold mb-1  pr-4" for="inline-password">
            Origins
          </label>
        </div>
        <div>
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Origins">
        </div>
      </div>

      <div class=" mb-6">
        <div>
          <label class="block text-gray-500 font-bold mb-1 pr-4" for="inline-desc">
            Descriptions
          </label>
        </div>
        <div>
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="exp: Friendly">
        </div>
      </div>

      <div class="flex justify-center">
        <div >
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 mx-auto">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Save</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
</script>