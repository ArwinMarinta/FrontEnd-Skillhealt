<script setup>
import Logo from "../../assets/logo.svg";
</script>

<template>
  <div class="flex justify-center w-full items-center min-h-screen">
    <div class="container flex w-full items-center justify-center">
      <div
        class="flex flex-col w-full lg:border-2 lg:w-[40%] py-6 rounded-lg shadow-xl items-center justify-center gap-6"
      >
        <h1 class="flex flex-col font-bold text-xl">
          <span class="">Selamat datang di</span>

          <span class="text-center">Skillhealth!</span>
        </h1>
        <img :src="Logo" alt="Skillhealth" />
        <form class="flex flex-col gap-4">
          <div>
            <label>Username / Email</label>
            <input
              type="text"
              class="border-2 mt-2 w-full py-3 px-4 rounded-lg border-black"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              class="border-2 mt-2 w-full py-3 px-4 rounded-lg border-black"
            />
          </div>
          <div class="flex flex-row justify-between items-center">
            <section class="flex gap-2 items-center justify-center">
              <input type="checkbox" class="border-2 rounded-lg w-4 h-4" />
              <span>Ingat Saya</span>
            </section>
            <div>Lupa Password ?</div>
          </div>
          <button class="w-full py-3 px-2 bg-RED01 rounded-lg text-white font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
