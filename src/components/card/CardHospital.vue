<script lang="ts" setup>
import HospitalImage from "../../assets/hospital-search.svg";
import { defineProps } from "vue";
import { HospitalType } from "../../types/Hospital.ts";

const props = defineProps<{
  item: HospitalType;
}>();
</script>

<template>
  <div class="cursor-pointer bg-GRAY01 px-6 py-6 rounded-md">
    <div v-if="props.item" class="flex flex-row md:gap-6 gap-4">
      <img :src="HospitalImage" alt="{{ props.item.name }}" />
      <div class="flex flex-col gap-2">
        <div class="font-semibold">{{ props.item.area }}</div>
        <div class="font-bold md:text-xl">{{ props.item.nama }}</div>
        <div class="font-semibold">{{ props.item.no_tlp }}</div>
        <div class="text-justify">{{ props.item.alamat }}</div>
      </div>
    </div>
    <div v-else>
      <span>Rumah Sakit Tidak Ditemukan</span>
    </div>
  </div>
</template>
