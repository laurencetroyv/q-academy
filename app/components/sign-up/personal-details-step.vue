<template>
  <div class="space-y-6">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
      <p class="text-gray-600">Tell us about yourself</p>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
          First Name <span class="text-red-500">*</span>
        </label>
        <input
          id="firstName"
          v-model="formData.firstName"
          type="text"
          required
          placeholder="Enter first name"
          class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
          Last Name <span class="text-red-500">*</span>
        </label>
        <input
          id="lastName"
          v-model="formData.lastName"
          type="text"
          required
          placeholder="Enter last name"
          class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="country" class="block text-sm font-medium text-gray-700 mb-1">
          Country <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select
            id="country"
            v-model="formData.country"
            required
            class="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white appearance-none"
          >
            <option value="">Select country</option>
            <option v-for="country in countryCodes" :key="country.country" :value="country.country">
              {{ country.flag }} {{ country.country }}
            </option>
          </select>
          <!-- Custom chevron down icon -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            required
            placeholder="Enter your phone number"
            class="block w-full pl-16 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
          <div class="absolute left-3 top-0 bottom-0 flex items-center space-x-2">
            <span class="text-gray-600 text-sm">{{ getCountryCode(formData.country) }}</span>
            <span class="w-[1px] h-full border-r border-r-gray-300" />
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-1">{{ getPhoneFormat(formData.country) }}</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="dateOfBirth" class="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          id="dateOfBirth"
          v-model="formData.dateOfBirth"
          type="date"
          :max="maxDate"
          class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>
      <div>
        <label for="gender" class="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <div class="relative">
          <select
            id="gender"
            v-model="formData.gender"
            class="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white appearance-none"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          <!-- Custom chevron down icon -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Role-specific additional fields -->
    <div v-if="selectedRole === 'parent'" class="border-t border-gray-200 pt-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="emergencyContactName" class="block text-sm font-medium text-gray-700 mb-1">
            Emergency Contact Name
          </label>
          <input
            id="emergencyContactName"
            v-model="formData.emergencyContactName"
            type="text"
            placeholder="Full name"
            class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
        <div>
          <label for="emergencyContactPhone" class="block text-sm font-medium text-gray-700 mb-1">
            Emergency Contact Phone
          </label>
          <input
            id="emergencyContactPhone"
            v-model="formData.emergencyContactPhone"
            type="tel"
            placeholder="Phone number"
            class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {countryCodes, getCountryCode, getPhoneFormat} from "~~/utils/country-code";

interface Props {
  formData: {
    firstName: string
    lastName: string
    phone: string
    dateOfBirth: string
    gender: string
    country: string
    emergencyContactName: string
    emergencyContactPhone: string
    emergencyRelationship: string
  }
  selectedRole: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:formData'])

// Set default country if not already set
if (!props.formData.country) {
  emit('update:formData', { ...props.formData, country: 'Philippines' })
}

// Calculate max date (18 years ago) for date of birth
const maxDate = computed(() => {
  const today = new Date()
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
  return eighteenYearsAgo.toISOString().split('T')[0]
})
</script>

<style scoped>
/* Hide default select arrows */
select {
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Ensure proper positioning for custom chevron icons */
.relative {
  position: relative;
}
</style>
