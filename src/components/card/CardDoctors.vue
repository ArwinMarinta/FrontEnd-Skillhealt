<script lang="ts" setup>
import { defineProps } from "vue";
import { DoctorType } from "../../types/Doctor";
import Doctor from "../../assets/Dokter/dokter1.svg";

const props = defineProps<{
  item: DoctorType;
}>();
</script>

<template>
  <RouterLink
    :to="`/detail/doctor/${item.id}`"
    class="flex flex-row bg-GRAY01 rounded-md py-4 px-4 gap-6 cursor-pointer"
  >
    <div>
      <img :src="Doctor" alt="Dokter" />
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row items-center gap-2">
        <div
          :class="{
            'bg-GREEN01  h-3 w-3 rounded-full ': item.status === true,
            'bg-RED02 h-3 w-3 rounded-full': item.status === false,
          }"
        ></div>
        <span class="font-medium">
          {{ props.item.status ? "Sedang berada di rumah sakit" : "Sedang Libur" }}
        </span>
      </div>
      <span class="font-bold text-2xl">{{ props.item.nama }}</span>
      <span class="font-medium">{{ props.item.Spesiali.nama }}</span>
      <span>{{ props.item.Instansi.nama }}</span>
    </div>
  </RouterLink>
</template>
