<script setup>
import Navbar from '@/components/shared/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="min-h-svh flex flex-col">
    <Navbar />
    <section class="flex-1">
      <RouterView />
    </section>
    <p>Footer</p>
  </main>
</template>
