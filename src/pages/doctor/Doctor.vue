<script lang="ts" setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CardDoctor from "../../components/card/CardDoctors.vue";

const doctors = ref([]);

// console.log(doctors);

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/doctors");
    doctors.value = response.data.data;
  } catch (error) {
    console.error("Failed to load data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="flex justify-center w-full py-10">
    <div class="container grid grid-cols-3 gap-6">
      <div v-for="(item, index) in doctors" :key="index">
        <CardDoctor :item="item" />
      </div>
    </div>
  </div>
</template>
