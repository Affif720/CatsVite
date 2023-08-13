<template >

<div class="bg-slate-900 w-full h-full">
  <Navbar />

  <router-view/>

</div>
            
</template>

<script lang="ts" setup>
import Navbar from "./components/navbar.vue";

</script>
