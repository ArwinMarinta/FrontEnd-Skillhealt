<script lang="ts" setup>
import { defineProps } from "vue";
import { DetailDoctorType } from "../../types/Doctor";
import DoctorImage from "../../assets/Dokter/dokter1.svg";

const props = defineProps<{
  item: DetailDoctorType;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <div>
        <img :src="DoctorImage" alt="dokter" />
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
      </div>
    </div>
  </div>
</template>
