<script lang="ts" setup>
import Logo from "../../assets/logo.svg";
import FB from "../../assets/Sosmed/fb.svg";
import IG from "../../assets/Sosmed/ig.svg";
import X from "../../assets/Sosmed/x.svg";
</script>

<template>
  <div class="w-full bg-RED02 flex py-10 justify-center">
    <div class="container flex flex-row justify-between">
      <div class="w-[60%] h-full">
        <div class="flex flex-row gap-2 lg:gap-6 items-center h-full">
          <img :src="Logo" alt="Logo" class="w-12 lg:w-28" />

          <span class="text-white font-bold lg:text-4xl">SkillHealth</span>
        </div>
      </div>
      <div class="w-[40%] flex flex-col gap-4">
        <div class="flex flex-col text-white text-[14px] lg:text-xl">
          <div class="border-b-2 max-w-fit">Janji Temu Pasien</div>
          <div class="border-b-2 max-w-fit">Forum Konsultasi</div>
        </div>
        <div class="flex flex-col text-white lg:mt-6">
          <h3 class="font-medium lg:text-xl">Follow our Social Media:</h3>
          <div
            class="flex cursor-pointer flex-row justify-between lg:justify-start lg:gap-6 mt-2 lg:mt-4"
          >
            <img :src="FB" class="w-8 cursor-pointer" />
            <img :src="IG" class="w-8 cursor-pointer" />
            <img :src="X" class="w-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
