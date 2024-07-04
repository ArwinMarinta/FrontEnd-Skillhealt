<script lang="ts" setup>
import Logo from "../../../assets/logo.svg";
import { Navbar } from "../../../data/Navbar.ts";
import { useCookies } from "vue3-cookies";
import { ref, onMounted } from "vue";

const { cookies } = useCookies();

const token = ref<string>("");

onMounted(() => {
  const tokens = cookies.get("token");

  if (tokens) {
    token.value = tokens;
  }
});
</script>

<template>
  <div class="justify-center w-full bg-RED01 py-2 z-[99999] sticky top-0 hidden lg:flex">
    <div class="container flex flex-row justify-between">
      <RouterLink to="/" class="flex flex-row items-center gap-4">
        <img :src="Logo" alt="logo" class="w-10" />
        <span class="font-bold text-2xl text-white">Skillhealth</span>
      </RouterLink>

      <div class="flex items-center flex-row gap-4 text-white font-bold">
        <div v-for="(item, index) in Navbar" :key="index">
          <RouterLink :to="item.url" class="cursor-pointer">{{ item.name }}</RouterLink>
        </div>
        <RouterLink to="/login" v-if="!token">
          <button
            class="py-[6px] px-3 bg-white text-RED01 rounded-md flex items-center justify-center"
          >
            Masuk
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
