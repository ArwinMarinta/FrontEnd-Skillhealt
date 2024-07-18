<script lang="ts" setup>
import CardForum from "../../components/card/CardForum.vue";
import { TopicForum } from "../../data/Forum";
import { ref } from "vue";
import DiscussionModal from "../../components/modal/DiscussionModal.vue";

const isShowModal = ref(false);

function closeModal() {
  isShowModal.value = false;
}

function showModal() {
  isShowModal.value = true;
}
</script>

<template>
  <div class="w-full flex justify-center min-h-screen">
    <div class="container py-10 flex">
      <div
        class="lg:w-[30%] hidden lg:block self-start sticky top-[100px] right-0 left-0 z-[99999]"
      >
        <div class="flex flex-col">
          <div>
            <button
              @click="showModal"
              class="py-2 px-2 bg-RED01 w-full text-white font-semibold rounded-md"
            >
              Buat Diskusi
            </button>
          </div>
          <DiscussionModal :isShowModal="isShowModal" :closeModal="closeModal" />
          <div class="flex flex-col mt-2 border-2 border-GRAY02 px-4 py-4 rounded-md">
            <h2 class="font-bold text-lg">Filter Berdasarkan</h2>
            <div class="flex items-center mt-4">
              <input
                type="checkbox"
                class="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span class="ml-2">Diskusi Sudah Terjawab</span>
            </div>
            <div class="flex items-center mt-2">
              <input
                type="checkbox"
                class="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span class="ml-2">Diskusi Belum Terjawab</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-[70%] w-full flex flex-col lg:ml-10">
        <div class="w-full">
          <input
            name="search"
            className=" w-full sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            type="text"
            placeholder="Cari Diskusi ..."
          />
        </div>
        <div class="lg:hidden mt-4">
          <form class="max-w-sm mx-auto">
            <select
              id="countries"
              class="bg-gray-50 border-2 border-GRAY02 text-gray-900 text-sm rounded-lg focus:ring-RED01 focus:border-RED01 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-RED01 dark:focus:border-RED01"
            >
              <option selected>Filter Diskusi</option>
              <option value="US">Diskusi Sudah Terjawab</option>
              <option value="CA">Diskusi Belum Terjawab</option>
            </select>
          </form>
        </div>
        <div class="flex flex-col">
          <div class="grid grid-cols-1 lg:gap-8 gap-4 mt-8">
            <div v-for="(item, index) in TopicForum" :key="index">
              <CardForum :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
