<script lang="ts" setup>
import CardCategori from "../../components/card/CardAmbulance.vue";
import { Ambulance } from "../../data/categori";
</script>

<template>
  <div class="w-full flex justify-center py-10">
    <div class="container flex flex-col lg:gap-10">
      <div class="flex justify-center font-bold text-2xl text-center">
        <h1>Anda Memanggil, Kami Merespon</h1>
      </div>
      <div class="flex flex-row justify-center items-center lg:gap-20 gap-6">
        <div v-for="(item, index) in Ambulance" :key="index">
          <CardCategori :item="item" />
        </div>
      </div>
      <div class="font-semibold text-xl"><h2>Rumah Sakit Terdekat</h2></div>
    </div>
  </div>
</template>
