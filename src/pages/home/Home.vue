<script lang="ts" setup>
// import { defineComponent } from "vue";
import DokterHome from "../../assets/dokter-home.svg";
import { category } from "../../data/categori";
import RumahSakitHome from "../../assets/hospital-home.svg";
import { TopicForum } from "../../data/Forum.ts";
import CardForum from "../../components/card/CardForum.vue";
import cardCategory from "../../components/card/CardCategori.vue";
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="container">
      <section
        class="flex mt-8 flex-row bg-gradient-to-r rounded-lg from-[#A41818] to-[#cb9c9c]"
      >
        <div
          class="flex flex-col h-full w-[50%] lg:w-[70%] p-4 lg:p-8 text-white gap-2 lg:gap-8"
        >
          <p class="lg:text-7xl">
            Bisa Atur Janji Temu Dokter Skilvul Hospital di SkilHealth
          </p>
          <RouterLink
            to="/search-doctor"
            class="py-2 px-3 lg:py-4 lg:px-6 lg:text-lg max-w-fit bg-white text-RED01 font-bold rounded-lg"
          >
            Cari Dokter
          </RouterLink>
        </div>
        <div class="w-[50%] lg:w-[30%]">
          <img :src="DokterHome" alt="" class="w-full" />
        </div>
      </section>

      <section class="flex flex-col mt-8 lg:mt-16">
        <h1 class="font-bold text-2xl lg:text-4xl">Apa yang kamu butuhkan?</h1>
        <div class="grid grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-10 mt-4 lg:mt-8">
          <div v-for="(item, index) in category" :key="index">
            <cardCategory :item="item" />
          </div>
        </div>
      </section>

      <section
        class="flex flex-row rounded-lg mt-8 lg:mt-12 gap-2 bg-RED01 p-5 justify-center items-center"
      >
        <div class="w-[50%] lg:w-[60%] flex flex-col gap-2 lg:gap-10">
          <p class="text-white font-semibold text-base lg:text-5xl lg:w-[80%]">
            Skilvul Hospital Tersebar diseluruh indonesia
          </p>
          <RouterLink to="/hospital">
            <button
              class="bg-white text-RED01 py-1 lg:py-3 lg:px-4 lg:font-bold px-2 max-w-fit rounded-lg font-semibold"
            >
              Cek Rumah Sakit
            </button>
          </RouterLink>
        </div>
        <div class="w-[50%] lg:w-[40%]">
          <img :src="RumahSakitHome" alt="" class="lg:w-full" />
        </div>
      </section>

      <section class="flex flex-col py-8">
        <h1 class="text-2xl font-bold">Hot Topic Forum</h1>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mt-8">
          <div v-for="(item, index) in TopicForum" :key="index">
            <CardForum :item="item" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
