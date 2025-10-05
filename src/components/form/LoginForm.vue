<script setup lang="ts">
import { reactive, ref } from 'vue'

interface LoginForm {
  email: string
  password: string
}

const form = reactive<LoginForm>({
  email: '',
  password: '',
})

const errors = reactive<{ email?: string; password?: string }>({})
const loading = ref(false)

function validate() {
  errors.email = ''
  errors.password = ''

  let valid = true

  if (!form.email) {
    errors.email = 'Email filed required'
    valid = false
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
    errors.email = 'Enter a valid email.'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Passweord required!'
    valid = false
  } else if (form.password.length < 4) {
    errors.password = 'Passweord length must be 4 characters long!'
    valid = false
  }

  return valid
}

const onSubmit = async () => {
  if (!validate()) return
  loading.value = true

  try {
    // Simulate login API
    await new Promise((resolve) => setTimeout(resolve, 1200))
    alert(`Logged in as ${form.email}`)
  } catch (error) {
    console.log('Something Error: ', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-5">
    <!-- Email -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="email"> Email </label>
      <input
        v-model.trim="form.email"
        type="email"
        id="email"
        placeholder="you@example.com"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <p v-if="errors.email" class="text-sm text-red-500 mt-1">
        {{ errors.email }}
      </p>
    </div>

    <!-- Password -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="password"> Password </label>
      <input
        v-model.trim="form.password"
        type="password"
        id="password"
        placeholder="••••••••"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <p v-if="errors.password" class="text-sm text-red-500 mt-1">
        {{ errors.password }}
      </p>
    </div>

    <button
      type="submit"
      :disabled="loading"
      class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
    >
      <span v-if="!loading">Sign In</span>
      <span v-else>Loading...</span>
    </button>
  </form>

  <p class="text-sm text-gray-600 text-center mt-6">
    Don’t have an account?
    <a href="#" class="text-primary hover:underline">Sign up</a>
  </p>
</template>
