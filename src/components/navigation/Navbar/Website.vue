<script lang="ts" setup>
import Logo from "../../../assets/logo.svg";
import { NavItem } from "./type.ts";
</script>

<template>
  <div class="justify-center w-full bg-RED01 py-2 sticky top-0 hidden lg:flex">
    <div class="container flex flex-row justify-between">
      <div class="flex flex-row items-center gap-4">
        <img :src="Logo" alt="logo" class="w-10" />
        <span class="font-bold text-2xl text-white">Skillhealth</span>
      </div>
      <div class="flex items-center flex-row gap-4 text-white font-bold">
        <div v-for="(item, index) in NavItem" :key="item">
          <span class="cursor-pointer">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
