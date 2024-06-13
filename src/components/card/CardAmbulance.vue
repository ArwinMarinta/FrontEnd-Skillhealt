<script lang="ts" setup>
import { defineProps } from "vue";
import { Category } from "../../data/categori";

const props = defineProps<{
  item: Category;
}>();
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full w-full gap-2">
    <div class="h-full w-full bg-RED01 p-4 rounded-md">
      <img :src="props.item.image" class="w-full rounded-md" />
    </div>
    <span class="font-bold text-xl">{{ props.item.name }}</span>
  </div>
</template>
