<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white font-bold text-2xl">Q</span>
          </div>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome to Q-Academy</h2>
        <p class="text-gray-600">Sign in to your account to continue</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- User Type Selection -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">I am a:</label>
            <div class="grid grid-cols-1 gap-3">
              <label
                  v-for="userType in userTypes"
                  :key="userType.value"
                  :class="[
                  'relative flex cursor-pointer rounded-lg border p-4 focus:outline-none transition-all',
                  selectedUserType === userType.value
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                ]"
              >
                <input
                    v-model="selectedUserType"
                    type="radio"
                    :value="userType.value"
                    class="sr-only"
                >
                <div class="flex items-center space-x-3 w-full">
                  <div
:class="[
                    'w-10 h-10 rounded-lg flex items-center justify-center',
                    userType.bgColor
                  ]">
                    <Icon :name="userType.icon" class="w-5 h-5 text-white" />
                  </div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">{{ userType.label }}</p>
                    <p class="text-xs text-gray-500">{{ userType.description }}</p>
                  </div>
                  <div v-if="selectedUserType === userType.value" class="text-blue-500">
                    <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5" />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email"
            >
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div class="relative">
              <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-12"
                  placeholder="Enter your password"
              >
              <button
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                  @click="showPassword = !showPassword"
              >
                <Icon
                    :name="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                    class="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                  v-model="form.remember"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              >
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="/forgot-password" class="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          <!-- Submit Button -->
          <UButton
              type="submit"
              color="primary"
              size="lg"
              :loading="isLoading"
              class="w-full"
          >
            {{ isLoading ? 'Signing in...' : 'Sign In' }}
          </UButton>
        </form>

        <!-- Divider -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Don't have an account?</span>
            </div>
          </div>
        </div>

        <!-- Sign Up Link -->
        <div class="mt-6 text-center">
          <NuxtLink
              to="/signup"
              class="text-blue-600 hover:text-blue-500 font-medium"
          >
            Create a new account
          </NuxtLink>
        </div>
      </div>

      <!-- Help Section -->
      <div class="text-center">
        <p class="text-sm text-gray-600">
          Need help? <a href="/support" class="text-blue-600 hover:text-blue-500">Contact Support</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: 'Sign In - Q-Academy',
  meta: [
    { name: 'description', content: 'Sign in to Q-Academy to access your personalized learning and healthcare management platform.' }
  ]
})

// Reactive data
const selectedUserType = ref('teacher')
const showPassword = ref(false)
const isLoading = ref(false)

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const userTypes = [
  {
    value: 'teacher',
    label: 'Teacher/Educator',
    description: 'Access desktop tools for student management',
    icon: 'i-heroicons-academic-cap',
    bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    value: 'doctor',
    label: 'Healthcare Professional',
    description: 'Access web portal for consultations',
    icon: 'i-heroicons-heart',
    bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    value: 'parent',
    label: 'Parent/Guardian',
    description: 'Monitor your child\'s progress',
    icon: 'i-heroicons-users',
    bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
  }
]

// Methods
const handleLogin = async () => {
  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Redirect based on user type
    const redirectPaths = {
      teacher: '/dashboard/teacher',
      doctor: '/dashboard/doctor',
      parent: '/dashboard/parent'
    }

    await navigateTo(redirectPaths[selectedUserType.value])
  } catch (error) {
    // Handle login error
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
}

// Auto-focus email field
onMounted(() => {
  document.getElementById('email')?.focus()
})
</script>