<script lang="ts" setup>
import { defineProps } from "vue";
import { ForumItem } from "../../data/Forum.ts";

const props = defineProps<{
  item: ForumItem;
}>();
</script>

<template>
  <div class="flex flex-col bg-GRAY01 py-4 px-4 h-full rounded-lg">
    <span
      :class="{
        'text-green-500 font-semibold': item.status === 'Sudah Terjawab',
        'text-red-500 font-semibold': item.status == 'Belum Terjawab',
      }"
      >{{ props.item.status }}</span
    >
    <span class="font-bold text-lg">{{ props.item.title }}</span>
    <span class="mt-3">{{ props.item.from }}</span>
    <span>{{ props.item.answerFrom }}</span>
  </div>
</template>
