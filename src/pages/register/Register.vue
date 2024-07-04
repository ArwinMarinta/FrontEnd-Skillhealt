<script lang="ts" setup>
import Logo from "../../assets/logo.svg";
</script>

<template>
  <div class="flex justify-center w-full xl:min-h-screen items-center">
    <div class="container py-10 flex justify-center">
      <div class="flex flex-col w-full sm:w-[40%]">
        <div class="flex justify-center">
          <img :src="Logo" alt="SkillHealt " class="h-24" />
        </div>
        <div class="flex flex-col text-center font-bold text-2xl mt-2">
          <span>Selamat Datang di</span>
          <span>Skillhealth!</span>
        </div>
        <form>
          <div>
            <label>Nama</label>
            <input
              type="text"
              className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="mt-4">
            <label>Tanggal Lahir</label>
            <input
              type="date"
              className="  mt-2 sm:inline text-black  w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>

          <form class="w-full mt-4">
            <label>Jenis Kelamin </label>

            <select
              id="countries"
              class="border-2 right-2 border-GRAY02 text-gray-900 text-sm rounded-lg focus:ring-RED01 focus:border-RED01 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-RED01 dark:focus:border-RED01"
            >
              <option disabled selected>Pilih Jenis Kelamin</option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </form>
          <div class="mt-4">
            <label>NO. Telpon</label>
            <input
              type="text"
              className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="mt-4">
            <label>Email</label>
            <input
              type="text"
              className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="mt-4">
            <label>Password</label>
            <input
              type="password"
              className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="mt-4">
            <label>Konfirmasi Password</label>
            <input
              type="password"
              className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="w-full text-end mt-2">
            <RouterLink to="/login" class="hover:underline w-full"
              >Sudah punya akun?</RouterLink
            >
          </div>
          <div class="mt-7">
            <button
              type="submit"
              class="py-2 bg-RED01 px-6 w-full text-white font-semibold rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
