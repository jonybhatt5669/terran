<script setup lang="ts">
import LoginForm from '@/components/form/LoginForm.vue'
</script>

<template>
  <div class="min-h-svh flex items-center justify-center bg-accent px-4">
    <div class="w-full max-w-sm bg-white shadow-lg rounded-2xl p-8">
      <h1 class="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome Back 👋</h1>
      <LoginForm />
    </div>
  </div>
</template>
