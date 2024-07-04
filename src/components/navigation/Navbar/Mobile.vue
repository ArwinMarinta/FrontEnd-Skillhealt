<script setup>
import Logo from "../../../assets/logo.svg";
import Hamburger from "../../../assets/hamburger.svg";
</script>

<template>
  <div class="flex justify-center w-full z-[99999] bg-RED01 py-2 sticky top-0 lg:hidden">
    <div class="container flex flex-row justify-between">
      <RouterLink to="/">
        <img :src="Logo" alt="logo" class="w-10" />
      </RouterLink>
      <button>
        <img :src="Hamburger" alt="" class="h-8 w-8" />
      </button>
    </div>
  </div>
</template>
