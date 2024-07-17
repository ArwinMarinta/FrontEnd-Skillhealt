<script lang="ts" setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { Days, Specialis, Metting } from "../../data/FormSearchDocter";
import CardDoctor from "../../components/card/CardDoctors.vue";
import IconSearch from "../../assets/search.svg";

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
    <div class="container flex flex-col">
      <div class="w-full shadow-lg border border-GRAY02 py-6 px-4 rounded-md flex-col">
        <div class="flex w-full md:flex-row flex-col">
          <div class="w-full">
            <input
              type="text"
              placeholder="Dokter..."
              className=" w-full h-full grow  sm:inline text-black   py-2 px-2 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-1  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="md:ml-4 lg:ml-6 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Lokasi.."
              className=" w-full h-full  sm:inline text-black  md:w-full py-2 px-2 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-1  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="hidden md:block md:ml-4 lg:ml-6">
            <button class="bg-RED01 px-3 h-full rounded-md">
              <img :src="IconSearch" alt="search" />
            </button>
          </div>
        </div>
        <div class="mt-5">
          <div class="flex md:flex-row flex-col gap-4">
            <div class="w-full">
              <input
                type="text"
                placeholder="Cari Rumah Sakit..."
                className=" w-full h-full grow  sm:inline text-black   py-2 px-2 border-0 outline-none rounded-md   focus:outline-none 
                                          ring-1  ring-gray-700/50 focus:ring-RED01 duration-200"
              />
            </div>
            <div className=" w-full">
              <div className=" inset-y-0 right-0 flex items-center  w-full ">
                <div className="relative w-full border rounded-md ">
                  <select
                    className=" h-full w-full rounded-md px-2 bg-transparent  py-2 ring-0  ring-gray-600 focus:ring-RED01 duration-200"
                  >
                    <option value="" hidden>Pilih Hari</option>
                    <option v-for="(item, index) in Days" :key="index" value="{true}">
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <div className=" inset-y-0 right-0 flex items-center  w-full">
                <div className="relative w-full border rounded-md">
                  <select
                    className=" h-full w-full rounded-md bg-transparent  py-2 px-2  ring-gray-600 focus:ring-RED01 duration-200"
                  >
                    <option value="" hidden>Dokter Spesialist</option>
                    <option
                      v-for="(item, index) in Specialis"
                      :key="index"
                      value="{true}"
                    >
                      {{ item.specialty }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <div className=" inset-y-0 right-0 flex items-center  w-full">
                <div className="relative w-full border rounded-md">
                  <select
                    className=" h-full w-full rounded-md  outline-none  py-2 px-2 focus:outline-none  ring-gray-600 focus:ring-RED01 duration-200 "
                  >
                    <option value="" hidden>Metode Pertemuan</option>
                    <option v-for="(item, index) in Metting" :key="index" value="{true}">
                      {{ item.meeting }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="md:hidden">
            <button class="py-2 w-full bg-RED01 mt-6 text-white font-semibold rounded-md">
              Cari Dokter
            </button>
          </div>
        </div>
      </div>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        <div v-for="(item, index) in doctors" :key="index">
          <CardDoctor :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
