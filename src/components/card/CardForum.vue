<script lang="ts" setup>
import { defineProps } from "vue";
// import { ForumItem } from "../../data/Forum.ts";

const props = defineProps<{
  item: any;
}>();
</script>

<template>
  <div class="w-full justify-center flex flex-col">
    <span>{{ props.item.status }}</span>
    <span>{{ item.title }}</span>
    <span>{{ item.from }}</span>
    <span>{{ item.answerFrom }}</span>
  </div>
</template>
