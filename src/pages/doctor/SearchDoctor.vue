<script lang="ts" setup>
import { Days } from "../../data/FormSearchDocter";
</script>

<template>
  <div class="flex justify-center w-full py-10">
    <div class="container flex flex-col gap-4 lg:w-[50%]">
      <div>
        <input
          name="search"
          className="  text-black w-full md:w-full py-2 pr-12 px-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-600 focus:ring-YELLOW05 duration-200"
          type="text"
          placeholder="Cari Dokter ..."
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-Poppins text-lg font-bold ">Hari</label>
        <div className=" w-full">
          <div className=" inset-y-0 right-0 flex items-center  w-full ">
            <div className="relative w-full border rounded-md ">
              <select
                className=" h-full w-full rounded-md px-2 bg-transparent  py-2 ring-2  ring-gray-600 focus:ring-YELLOW05"
              >
                <option value="" hidden>Pilih Hari</option>
                <option v-for="(item, index) in Days" :key="index" value="{true}">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-Poppins text-lg font-bold ">Area</label>
        <div className=" w-full">
          <div className=" inset-y-0 right-0 flex items-center  w-full">
            <div className="relative w-full border rounded-md">
              <select
                className=" h-full w-full rounded-md bg-transparent  py-2 px-2 ring-2  ring-gray-600 focus:ring-YELLOW05"
              >
                <option value="" hidden>Pilih Area</option>
                <option value="{true}">Senin</option>
                <option value="{false}">Selasa</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-Poppins text-lg font-bold ">Rumah Sakit</label>
        <div className=" w-full">
          <div className=" inset-y-0 right-0 flex items-center  w-full">
            <div className="relative w-full border rounded-md">
              <select
                className=" h-full w-full rounded-md bg-transparent  py-2 px-2 ring-2  ring-gray-600 focus:ring-YELLOW05"
              >
                <option value="" hidden>Pilih Rumah Sakit</option>
                <option value="{true}">Senin</option>
                <option value="{false}">Selasa</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-Poppins text-lg font-bold ">Spesialist</label>
        <div className=" w-full">
          <div className=" inset-y-0 right-0 flex items-center  w-full">
            <div className="relative w-full border rounded-md">
              <select
                className=" h-full w-full rounded-md bg-transparent  py-2 px-2 ring-2  ring-gray-600 focus:ring-YELLOW05"
              >
                <option value="" disabled hidden>Pilih Spesialist</option>
                <option value="{true}">Senin</option>
                <option value="{false}">Selasa</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-Poppins text-lg font-bold ">Metode Pertemuan</label>
        <div className=" w-full">
          <div className=" inset-y-0 right-0 flex items-center  w-full">
            <div className="relative w-full border rounded-md">
              <select
                className=" h-full w-full rounded-md bg-transparent  py-2 px-2 ring-2  ring-gray-600 focus:ring-YELLOW05"
              >
                <option value="" disabled hidden>Pilih Metode</option>
                <option value="{true}">Senin</option>
                <option value="{false}">Selasa</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:flex lg:justify-center">
        <button class="bg-RED01 py-2 text-white font-semibold rounded-md mt-4 w-full">
          Konfirmasi
        </button>
      </div>
    </div>
  </div>
</template>
