<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 flex flex-col lg:flex-row relative overflow-hidden">

    <!-- Background Patterns for Left Side -->
    <div class="absolute inset-0 lg:w-1/2 opacity-5">
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-950 rounded-full -translate-x-10 -translate-y-10"></div>
      <div class="absolute top-1/3 left-0 w-24 h-24 bg-indigo-950 rounded-full -translate-x-12"></div>
      <div class="absolute bottom-40 left-20 w-20 h-20 bg-cyan-950 rounded-full"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-teal-950 rounded-full"></div>
      <div class="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-950 rounded-full translate-y-10"></div>
    </div>

    <!-- Left Side - Login Form -->
    <div class="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="mx-auto w-full max-w-md">

        <!-- Logo and Header -->
        <div class="text-center mb-8">
          <div class="flex justify-center mb-6">
            <NuxtImg
              src="/logo.png"
              class="h-12 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
              @click="navigateTo('/')"
              alt="Q-Academy Logo"
            />
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p class="text-gray-600">Sign in to continue to Q-Academy</p>
        </div>

        <!-- Login Form Card -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <form class="space-y-6" @submit.prevent="handleLogin">



            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div class="relative">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email address"
                />
                <Icon name="i-heroicons-envelope" class="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  autocomplete="current-password"
                  required
                  class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-3.5 h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Icon :name="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" />
                </button>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="form.remember"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors duration-200"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <NuxtLink
                to="/forgot-password"
                class="text-sm text-blue-600 hover:text-blue-500 transition-colors duration-200 font-medium"
              >
                Forgot password?
              </NuxtLink>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              {{ isLoading ? 'Signing in...' : 'Sign In' }}
              <div v-if="isLoading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              <Icon v-else name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
            </button>
          </form>

          <!-- Divider -->
          <div class="mt-8 mb-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-gray-500">Or continue with QR</span>
              </div>
            </div>
          </div>

          <!-- QR Code Section -->
          <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center">
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="relative">
                <!-- QR Code Placeholder with animated border -->
                <div class="w-24 h-24 bg-white rounded-xl shadow-sm border-2 border-blue-200 flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10"></div>
                  <Icon name="i-heroicons-qr-code" class="w-12 h-12 text-blue-600" />
                  <!-- Animated scanning line -->
                  <div class="absolute inset-x-0 h-0.5 bg-blue-500 animate-pulse"></div>
                </div>
              </div>
              <div class="text-center sm:text-left">
                <p class="text-sm text-gray-700 font-medium mb-1">Quick Mobile Login</p>
                <p class="text-xs text-gray-600">
                  Scan with <span class="text-blue-600 font-semibold">Q-Academy</span> mobile app
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sign Up Link -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <NuxtLink
              to="/signup"
              class="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200 ml-1"
            >
              Create account
            </NuxtLink>
          </p>
        </div>

        <!-- Help Section -->
        <div class="mt-6 text-center">
          <p class="text-xs text-gray-500">
            Need help?
            <a href="/support" class="text-blue-600 hover:text-blue-500 transition-colors duration-200 font-medium">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-- Right Side - Hero Section -->
    <div class="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:items-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-12 xl:p-16 relative overflow-hidden">

      <!-- Background Pattern for Right Side -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div class="absolute top-1/4 right-0 w-32 h-32 bg-white rounded-full translate-x-16"></div>
        <div class="absolute bottom-0 left-1/4 w-24 h-24 bg-white rounded-full translate-y-12"></div>
        <div class="absolute top-1/2 right-1/4 w-20 h-20 bg-white rounded-full"></div>
        <div class="absolute bottom-1/3 right-10 w-28 h-28 bg-white rounded-full translate-x-14"></div>
        <div class="absolute top-10 left-1/3 w-16 h-16 bg-white rounded-full -translate-y-8"></div>
      </div>

      <div class="relative z-10 text-center max-w-lg">
        <!-- Hero Image -->
        <div class="mb-8">
          <div class="relative">
            <NuxtImg
              src="/log-in/autism-image.png"
              class="w-80 h-64 object-contain mx-auto drop-shadow-2xl"
              alt="Students with disabilities learning"
            />
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-bounce">
              <Icon name="i-heroicons-heart" class="w-6 h-6 text-pink-300" />
            </div>
            <div class="absolute -bottom-2 -left-2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse">
              <Icon name="i-heroicons-academic-cap" class="w-5 h-5 text-yellow-300" />
            </div>
          </div>
        </div>

        <!-- Hero Text -->
        <h2 class="text-3xl xl:text-4xl font-bold mb-6 leading-tight">
          Empowering Special Needs Education
        </h2>
        <p class="text-lg xl:text-xl text-blue-100 mb-8 leading-relaxed">
          Seamless integration of learning, progress tracking, and telemedicine support for students with disabilities across the Philippines.
        </p>

        <!-- Feature Highlights -->
        <div class="space-y-4 text-left">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Icon name="i-heroicons-device-tablet" class="w-4 h-4" />
            </div>
            <span class="text-blue-100">Multi-platform accessibility</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-4 h-4" />
            </div>
            <span class="text-blue-100">Integrated healthcare monitoring</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-4 h-4" />
            </div>
            <span class="text-blue-100">Collaborative care network</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Hero Section (visible on mobile only) -->
    <div class="lg:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
      <div class="max-w-md mx-auto">
        <NuxtImg
          src="/log-in/autism-image.png"
          class="w-32 h-24 object-contain mx-auto mb-4"
          alt="Students with disabilities learning"
        />
        <h2 class="text-xl font-bold mb-2">Empowering Special Needs Education</h2>
        <p class="text-blue-100 text-sm">
          Seamless learning, progress tracking, and telemedicine support for students with disabilities.
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
    {
      name: 'description',
      content: 'Sign in to Q-Academy to access your personalized learning and healthcare platform for special needs education.'
    }
  ]
})

// User types configuration (removed since no longer needed)

// Reactive data
const showPassword = ref(false)
const isLoading = ref(false)

const form = reactive({
  email: '',
  password: '',
  remember: false
})

// Methods
const handleLogin = async () => {
  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Single redirect path since we removed user type selection
    await navigateTo('/dashboard')
  } catch (error) {
    // Handle login error
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
}

// Auto-focus email field on mount
onMounted(() => {
  document.getElementById('email')?.focus()
})
</script>

<style scoped>
/* Custom animations for enhanced UX */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Smooth focus transitions */
input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Loading spinner animation */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Hover effects for better interactivity */
button:hover:not(:disabled) {
  transform: translateY(-1px);
}

button:active:not(:disabled) {
  transform: translateY(0);
}
</style>
