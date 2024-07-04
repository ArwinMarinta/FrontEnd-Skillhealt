<script lang="ts" setup>
import Logo from "../../assets/logo.svg";
import { ref } from "vue";
import axios from "axios";
import { useCookies } from "vue3-cookies";
import { RouterLink, useRouter } from "vue-router";

const { cookies } = useCookies();
const router = useRouter();

const email = ref(null);
const password = ref(null);

const loading = ref(false);

const Login = async () => {
  loading.value = true;
  try {
    loading.value = true;
    const response = await axios.post("http://localhost:4000/auth/login", {
      email: email.value,
      password: password.value,
    });

    const { user, token } = response.data;

    cookies.set("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    loading.value = false;

    router.push("/");
  } catch (error: any) {
    console.log(error.data.response.message);
    loading.value = false;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex justify-center w-full items-center min-h-screen">
    <div class="container flex w-full items-center justify-center">
      <div
        class="flex flex-col w-full lg:border-2 lg:w-[40%] py-6 px-4 rounded-lg shadow-xl items-center justify-center gap-6"
      >
        <h1 class="flex flex-col font-bold text-xl">
          <span class="">Selamat datang di</span>

          <span class="text-center">Skillhealth!</span>
        </h1>
        <img :src="Logo" alt="Skillhealth" class="h-24" />
        <form @submit.prevent="Login" class="flex flex-col gap-4">
          <div>
            <label>Username / Email</label>
            <input
              v-model="email"
              type="text"
              className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              v-model="password"
              type="password"
              className=" w-full mt-2 sm:inline text-black  md:w-full py-1.5 pr-12 pl-4 border-0 outline-none rounded-md   focus:outline-none 
                                        ring-2  ring-gray-700/50 focus:ring-RED01 duration-200"
            />
          </div>
          <div class="flex flex-row justify-between items-center">
            <section class="flex gap-2 items-center justify-center">
              <input type="checkbox" class="border-2 rounded-lg w-4 h-4" />
              <span>Ingat Saya</span>
            </section>
            <div>Lupa Password ?</div>
          </div>
          <div class="mt-4">
            <button class="w-full py-2 px-2 bg-RED01 rounded-lg text-white font-bold">
              {{ loading ? "Loading..." : "Submit" }}
            </button>
          </div>
        </form>
        <div
          className="relative mt-6 flex w-full items-center justify-center border border-t px-4"
        >
          <div className="absolute bg-white px-5">or</div>
        </div>
        <div>
          <span class="font-semibold"
            >Belum Punya Akun?
            <RouterLink to="/register" class="text-RED01 hover:underline"
              >Daftar Sini</RouterLink
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
