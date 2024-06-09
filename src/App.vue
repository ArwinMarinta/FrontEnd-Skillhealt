<script setup>
import "./style.css";
import Navbar from "./components/navigation/Navbar/index.vue";
import Footer from "./components/navigation/Footer.vue";
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>
