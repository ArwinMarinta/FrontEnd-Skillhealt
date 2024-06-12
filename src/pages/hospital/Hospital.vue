<script lang="ts" setup>
import SearchIcon from "../../assets/search.svg";
import axios from "axios";
import { ref, onMounted } from "vue";
import CardHospital from "../../components/card/CardHospital.vue";

const hospital = ref([]);

// const data = ref([]);
console.log(hospital);

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/instansi");
    hospital.value = response.data;
  } catch (error) {
    console.error("Failed to load data:", error);
  }
};

onMounted(() => {
  fetchData();
});

// const fethData =
</script>

<template>
  <div class="w-full flex justify-center py-10">
    <div class="container flex flex-col gap-8">
      <form class="w-full">
        <img :src="SearchIcon" class="absolute" />
        <div class="relative w-full flex">
          <input
            name="search"
            className="  text-black w-full md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-600 focus:ring-YELLOW05 duration-200"
            type="text"
            placeholder="Cari Rumah Sakit..."
          />
        </div>
      </form>
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
        <div v-for="(item, index) in hospital" :key="index">
          <CardHospital :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
