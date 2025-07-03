<template>
  <div class="space-y-6">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Account Details</h2>
      <p class="text-gray-600">Create your secure login credentials</p>
    </div>

    <div class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span class="text-red-500">*</span>
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          autocomplete="email"
          required
          placeholder="Enter your email address"
          class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
          Password <span class="text-red-500">*</span>
        </label>
          <input
            id="password"
            v-model="formData.password"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="new-password"
            required
            placeholder="Create a strong password"
            class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
      </div>

      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password <span class="text-red-500">*</span>
        </label>
          <input
            id="confirmPassword"
            v-model="formData.confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            autocomplete="new-password"
            required
            placeholder="Confirm your password"
            class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
      </div>
    </div>

    <!-- Password Validation Message -->
    <div v-if="formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword"
         class="flex items-center space-x-2 text-red-600 text-sm">
      <Icon name="i-heroicons-exclamation-circle" class="w-4 h-4" />
      <span>Passwords do not match</span>
    </div>

    <!-- Password Strength Indicator -->
    <div v-if="formData.password" class="space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-600">Password strength:</span>
        <span class="text-sm font-medium" :class="passwordStrengthColor">
          {{ passwordStrengthText }}
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div
          class="h-2 rounded-full transition-all duration-300"
          :class="passwordStrengthBarColor"
          :style="{ width: `${passwordStrengthPercentage}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  formData: {
    email: string
    password: string
    confirmPassword: string
  }
  showPassword?: boolean
  showConfirmPassword?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPassword: false,
  showConfirmPassword: false
})

defineEmits(['update:formData', 'update:showPassword', 'update:showConfirmPassword'])

// Password strength calculation
const passwordStrength = computed(() => {
  const password = props.formData.password
  if (!password) return 0

  let strength = 0

  // Length check
  if (password.length >= 8) strength += 1
  if (password.length >= 12) strength += 1

  // Character variety checks
  if (/[a-z]/.test(password)) strength += 1
  if (/[A-Z]/.test(password)) strength += 1
  if (/[0-9]/.test(password)) strength += 1
  if (/[^A-Za-z0-9]/.test(password)) strength += 1

  return strength
})

const passwordStrengthText = computed(() => {
  switch (passwordStrength.value) {
    case 0:
    case 1:
    case 2: return 'Weak'
    case 3:
    case 4: return 'Medium'
    case 5:
    case 6: return 'Strong'
    default: return 'Weak'
  }
})

const passwordStrengthColor = computed(() => {
  switch (passwordStrength.value) {
    case 0:
    case 1:
    case 2: return 'text-red-600'
    case 3:
    case 4: return 'text-yellow-600'
    case 5:
    case 6: return 'text-green-600'
    default: return 'text-red-600'
  }
})

const passwordStrengthBarColor = computed(() => {
  switch (passwordStrength.value) {
    case 0:
    case 1:
    case 2: return 'bg-red-500'
    case 3:
    case 4: return 'bg-yellow-500'
    case 5:
    case 6: return 'bg-green-500'
    default: return 'bg-red-500'
  }
})

const passwordStrengthPercentage = computed(() => {
  return (passwordStrength.value / 6) * 100
})
</script>
