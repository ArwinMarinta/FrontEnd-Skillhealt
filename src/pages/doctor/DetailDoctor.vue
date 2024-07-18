<script lang="ts" setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CardDetailDoctor from "../../components/card/CardDetailDoctor.vue";

const route = useRoute();
const id = Number(route.params.id);

const Doctor = ref();

// console.log(Doctor);

const fetchData = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:4000/doctors/${id}`);

    Doctor.value = response.data.data;
  } catch (error) {
    console.error("Failed to load data:", error);
  }
};

onMounted(() => {
  fetchData(id);
});
</script>

<template>
  <div class="w-full flex justify-center py-10">
    <div class="container">
      <div>
        <CardDetailDoctor :item="Doctor" />
      </div>
      <!-- <div>waktu</div> -->
      <div
        class="flex flex-row w-full justify-between gap-5 py-4 px-2 bg-GRAY01 rounded-md"
      >
        <div class="flex flex-col w-[70%] gap-2">
          <div className="flex flex-col gap-1">
            <label className="font-Poppins text-lg font-bold ">Area</label>
            <div className=" w-full">
              <div className=" inset-y-0 right-0 flex items-center  w-full">
                <div className="relative w-full border rounded-md">
                  <select
                    className=" h-full w-full rounded-md bg-transparent  py-2 px-2 ring-2  ring-gray-600 focus:ring-YELLOW05"
                  >
                    <option value="" hidden>Metode Pembayaran</option>
                    <option value="{true}">Senin</option>
                    <option value="{false}">Selasa</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold">RP.83.000</div>
            <span class="text-sm">Include Fax*</span>
          </div>
        </div>
        <div class="w-[30%]">
          <button
            class="bg-RED01 px-2 py-2 w-full h-full rounded-md text-white font-semibold"
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
