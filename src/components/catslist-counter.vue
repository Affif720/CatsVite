<template>
  <div>
    The number of Cat's Breed is: {{ count }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CatBreed } from "../types/CatsBreed.ts";

// Destructure the props with the specified generic type
const { catsBreed } = defineProps<{
  catsBreed: CatBreed[];
}>();

const count = computed(() => catsBreed.length);
</script>
