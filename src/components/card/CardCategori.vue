<script lang="ts" setup>
import { defineProps } from "vue";
import { Category } from "../../data/categori";

const props = defineProps<{
  item: Category;
}>();
</script>

<template>
  <RouterLink :to="props.item.url" class="flex flex-col h-full cursor-pointer">
    <div class="bg-RED01 p-4 lg:py-8 h-full flex justify-center items-center rounded-lg">
      <img :src="props.item.image" alt="{{props.item.name}}" class="lg:w-28 lg:h-28" />
    </div>
    <span class="font-semibold lg:font-bold text-center lg:mt-2">{{
      props.item.name
    }}</span>
  </RouterLink>
</template>
