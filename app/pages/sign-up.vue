<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 flex flex-col lg:flex-row relative overflow-hidden">

    <!-- Background Patterns for Left Side -->
    <div class="absolute inset-0 lg:w-1/2 opacity-5">
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-950 rounded-full -translate-x-10 -translate-y-10"></div>
      <div class="absolute top-1/3 left-0 w-24 h-24 bg-indigo-950 rounded-full -translate-x-12"></div>
      <div class="absolute bottom-40 left-20 w-20 h-20 bg-cyan-950 rounded-full"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-teal-95 rounded-full"></div>
      <div class="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-950 rounded-full translate-y-10"></div>
    </div>

    <!-- Left Side - Sign Up Form -->
    <div class="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="mx-auto w-full max-w-lg">

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
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p class="text-gray-600">Step {{ currentStep }} of {{ totalSteps }} - {{ stepTitles[currentStep - 1] }}</p>
        </div>

        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-medium text-gray-600">Progress</span>
            <span class="text-xs font-medium text-gray-600">{{ Math.round((currentStep / totalSteps) * 100) }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300 ease-out"
              :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- Sign Up Form Card -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 min-h-[500px]">
          <NuxtForm @submit="handleSubmit" class="h-full flex flex-col">

            <!-- Step Components -->
            <div class="flex-1">
              <!-- Step 1: Role Selection -->
              <sign-up-role-selection-step
                v-if="currentStep === 1"
                v-model:selected-role="formData.role"
                :user-roles="userRoles"
              />

              <!-- Step 2: Account Details -->
              <sign-up-account-details-step
                v-if="currentStep === 2"
                v-model:form-data="formData"
                v-model:show-password="showPassword"
                v-model:show-confirm-password="showConfirmPassword"
              />

              <!-- Step 3: Personal Details -->
              <sign-up-personal-details-step
                v-if="currentStep === 3"
                v-model:form-data="formData"
                :selected-role="formData.role"
              />

              <!-- Step 4: Address Details -->
              <sign-up-address-details-step
                v-if="currentStep === 4"
                v-model:form-data="formData"
                :selected-role="formData.role"
              />

              <!-- Step 5: Professional Details -->
              <sign-up-professional-details-step
                v-if="currentStep === 5"
                v-model:form-data="formData"
                :selected-role="formData.role"
              />

              <!-- Step 6: Review & Terms -->
              <sign-up-review-terms-step
                v-if="currentStep === 6"
                v-model:form-data="formData"
                :user-roles="userRoles"
                :selected-role="formData.role"
              />
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between pt-6 border-t border-gray-200 mt-6">
              <NuxtButton
                v-if="currentStep > 1"
                type="button"
                variant="outline"
                size="lg"
                @click="previousStep"
                class="px-6"
                icon="i-heroicons-arrow-left"
                label="Back"
              />
              <div v-else></div>

              <NuxtButton
                v-if="currentStep < totalSteps"
                type="button"
                size="lg"
                @click="nextStep"
                :disabled="!isStepValid"
                class="px-6 bg-blue-400 hover:bg-blue-600 disabled:bg-blue-400"
                trailing-icon="i-heroicons-arrow-right"
                label="Next"
              />
              <NuxtButton
                v-else
                type="submit"
                color="primary"
                size="lg"
                :loading="isLoading"
                class="px-6"
                :label="isLoading ? 'Creating Account...' : 'Create Account'"
              />
            </div>
          </NuxtForm>
        </div>

        <!-- Sign In Link -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Already have an account?
            <NuxtLink
              to="/sign-up"
              class="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200 ml-1"
            >
              Sign in
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

        <!-- Dynamic Hero Content Based on Step -->
        <div v-if="currentStep === 1">
          <h2 class="text-3xl xl:text-4xl font-bold mb-6 leading-tight">Choose Your Role</h2>
          <p class="text-lg xl:text-xl text-blue-100 mb-8 leading-relaxed">
            Select your role to customize your Q-Academy experience for your specific needs.
          </p>
        </div>
        <div v-else-if="currentStep === 2">
          <h2 class="text-3xl xl:text-4xl font-bold mb-6 leading-tight">Secure Your Account</h2>
          <p class="text-lg xl:text-xl text-blue-100 mb-8 leading-relaxed">
            Create strong credentials to protect your sensitive educational and health data.
          </p>
        </div>
        <div v-else-if="currentStep === 3">
          <h2 class="text-3xl xl:text-4xl font-bold mb-6 leading-tight">Tell Us About Yourself</h2>
          <p class="text-lg xl:text-xl text-blue-100 mb-8 leading-relaxed">
            Help us personalize your experience with your basic information.
          </p>
        </div>
        <div v-else-if="currentStep === 4">
          <h2 class="text-3xl xl:text-4xl font-bold mb-6 leading-tight">Location Details</h2>
          <p class="text-lg xl:text-xl text-blue-100 mb-8 leading-relaxed">
            Your location helps us provide relevant local resources and support.
          </p>
        </div>
        <div v-else-if="currentStep === 5">
          <h2 class="text-3xl xl:text-4xl font-bold mb-6 leading-tight">Professional Information</h2>
          <p class="text-lg xl:text-xl text-blue-100 mb-8 leading-relaxed">
            Verify your credentials to ensure trust and compliance within our platform.
          </p>
        </div>
        <div v-else>
          <h2 class="text-3xl xl:text-4xl font-bold mb-6 leading-tight">Almost Done!</h2>
          <p class="text-lg xl:text-xl text-blue-100 mb-8 leading-relaxed">
            Review your information and agree to our terms to complete your registration.
          </p>
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
        <h2 class="text-xl font-bold mb-2">{{ stepTitles[currentStep - 1] }}</h2>
        <p class="text-blue-100 text-sm">
          Step {{ currentStep }} of {{ totalSteps }} in creating your account
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
  title: 'Sign Up - Q-Academy',
  meta: [
    {
      name: 'description',
      content: 'Create your Q-Academy account to access our integrated learning management, telemedicine, and healthcare platform for special needs education.'
    }
  ]
})

// User roles configuration
const userRoles = [
  {
    value: 'teacher',
    label: 'Teacher',
    description: 'Manage activities and track student progress',
    icon: 'i-heroicons-academic-cap',
    bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    value: 'doctor',
    label: 'Healthcare Provider',
    description: 'Provide medical care and monitor health',
    icon: 'i-heroicons-heart',
    bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    value: 'parent',
    label: 'Parent/Guardian',
    description: 'Support your child\'s learning journey',
    icon: 'i-heroicons-users',
    bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
  }
]

// Step management
const currentStep = ref(1)
const totalSteps = 6
const stepTitles = [
  'Choose Your Role',
  'Account Details',
  'Personal Information',
  'Address Information',
  'Professional Details',
  'Review & Terms'
]

// Form state
const isLoading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Centralized form data
// Centralized form data - UPDATED STRUCTURE
const formData = reactive({
  // Step 1: Role
  role: '',

  // Step 2: Account Details
  email: '',
  password: '',
  confirmPassword: '',

  // Step 3: Personal Details
  firstName: '',
  lastName: '',
  phone: '',
  country: 'Philippines', // Added country field
  dateOfBirth: '',
  gender: '',
  emergencyContactName: '',
  emergencyContactPhone: '',
  emergencyRelationship: '',

  // Step 4: Address Details - UPDATED FIELDS
  addressLine1: '',
  addressLine2: '',
  city: '',
  stateProvince: '',
  postalCode: '',
  workPhone: '',
  workEmail: '',

  // Step 5: Professional Details (role-specific)
  // Teacher
  school: '',
  licenseNumber: '',
  yearsExperience: '',
  subjects: '',
  educationLevel: '',

  // Doctor
  medicalLicense: '',
  specialization: '',
  hospital: '',
  medicalExperience: '',
  boardCertifications: '',
  professionalMemberships: '',

  // Parent
  childName: '',
  childAge: '',
  childDateOfBirth: '',
  relationship: '',
  emergencyContact: '',
  childSchool: '',
  specialNeedsInfo: '',

  // Step 6: Terms
  agreeTerms: false,
  agreeData: false,
  agreeMarketing: false
})

// Enhanced validation helpers
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

const validatePhone = (phone) => {
  // Basic phone validation - at least 10 digits
  const phoneRegex = /^\d{10,}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

const validatePostalCode = (postalCode, country) => {
  if (!postalCode) return false

  const postalPatterns = {
    'Philippines': /^\d{4}$/,
    'United States': /^\d{5}(-\d{4})?$/,
    'Canada': /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    'United Kingdom': /^[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}$/,
    'Australia': /^\d{4}$/,
    'Singapore': /^\d{6}$/,
    'Malaysia': /^\d{5}$/,
    'Thailand': /^\d{5}$/,
    'Vietnam': /^\d{6}$/,
    'Indonesia': /^\d{5}$/,
    'Japan': /^\d{3}-\d{4}$/,
    'South Korea': /^\d{5}$/,
    'China': /^\d{6}$/,
    'India': /^\d{6}$/,
    'Germany': /^\d{5}$/,
    'France': /^\d{5}$/,
    'Brazil': /^\d{5}-\d{3}$/
  }

  const pattern = postalPatterns[country]
  return pattern ? pattern.test(postalCode) : postalCode.length >= 3
}

const validateAge = (dateOfBirth) => {
  if (!dateOfBirth) return false
  const today = new Date()
  const birthDate = new Date(dateOfBirth)
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return false
  }

  return age >= 18 // Must be at least 18 years old
}

// UPDATED STEP VALIDATION
const isStepValid = computed(() => {
  switch (currentStep.value) {
    case 1: // Role Selection
      return formData.role !== ''

    case 2: // Account Details
      return (
        validateEmail(formData.email) &&
        validatePassword(formData.password) &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword
      )

    case 3: // Personal Details
      const personalFieldsValid = (
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.country &&
        validatePhone(formData.phone) &&
        formData.gender &&
        validateAge(formData.dateOfBirth)
      )

      // Additional validation for parents (emergency contact required)
      if (formData.role === 'parent') {
        return personalFieldsValid &&
          formData.emergencyContactName.trim() &&
          validatePhone(formData.emergencyContactPhone)
      }

      return personalFieldsValid

    case 4: // Address Details
      const addressFieldsValid = (
        formData.addressLine1.trim() &&
        formData.city.trim() &&
        formData.stateProvince.trim() &&
        validatePostalCode(formData.postalCode, formData.country)
      )

      // Additional validation for professionals (work contact info)
      if (formData.role !== 'parent') {
        return addressFieldsValid &&
          validatePhone(formData.workPhone) &&
          validateEmail(formData.workEmail)
      }

      return addressFieldsValid

    case 5: // Professional Details
      if (formData.role === 'teacher') {
        return (
          formData.school.trim() &&
          formData.licenseNumber.trim() &&
          formData.yearsExperience &&
          formData.subjects.trim() &&
          formData.educationLevel
        )
      } else if (formData.role === 'doctor') {
        return (
          formData.medicalLicense.trim() &&
          formData.specialization.trim() &&
          formData.hospital.trim() &&
          formData.medicalExperience
        )
      } else if (formData.role === 'parent') {
        return (
          formData.childName.trim() &&
          formData.childAge &&
          formData.relationship.trim() &&
          formData.childSchool.trim()
        )
      }
      return true

    case 6: // Review & Terms
      const requiredTerms = formData.agreeTerms && formData.agreeData

      // Additional terms based on role
      if (formData.role === 'doctor') {
        return requiredTerms && formData.agreeHIPAA
      } else if (formData.role === 'teacher') {
        return requiredTerms && formData.agreeFERPA
      } else if (formData.role === 'parent') {
        return requiredTerms && formData.agreeChildData
      }

      return requiredTerms

    default:
      return true
  }
})

// Enhanced validation messaging
const getValidationMessage = computed(() => {
  if (isStepValid.value) return ''

  switch (currentStep.value) {
    case 1:
      return 'Please select your role to continue.'
    case 2:
      if (!validateEmail(formData.email)) return 'Please enter a valid email address.'
      if (!validatePassword(formData.password)) return 'Password must be at least 8 characters with uppercase, lowercase, and number.'
      if (formData.password !== formData.confirmPassword) return 'Passwords do not match.'
      return 'Please complete all account details.'
    case 3:
      if (!formData.firstName.trim()) return 'First name is required.'
      if (!formData.lastName.trim()) return 'Last name is required.'
      if (!formData.country) return 'Please select your country.'
      if (!validatePhone(formData.phone)) return 'Please enter a valid phone number.'
      if (!formData.gender) return 'Please select your gender.'
      if (!validateAge(formData.dateOfBirth)) return 'You must be at least 18 years old.'
      if (formData.role === 'parent' && !formData.emergencyContactName.trim()) return 'Emergency contact is required for parents.'
      return 'Please complete all personal information.'
    case 4:
      if (!formData.addressLine1.trim()) return 'Address line 1 is required.'
      if (!formData.city.trim()) return 'City is required.'
      if (!formData.stateProvince.trim()) return 'State/Province is required.'
      if (!validatePostalCode(formData.postalCode, formData.country)) return 'Please enter a valid postal code.'
      if (formData.role !== 'parent' && !validatePhone(formData.workPhone)) return 'Work phone number is required for professionals.'
      if (formData.role !== 'parent' && !validateEmail(formData.workEmail)) return 'Work email is required for professionals.'
      return 'Please complete all address information.'
    case 5:
      if (formData.role === 'teacher') return 'Please complete all teaching credentials.'
      if (formData.role === 'doctor') return 'Please complete all medical credentials.'
      if (formData.role === 'parent') return 'Please complete all child information.'
      return 'Please complete all professional details.'
    case 6:
      return 'Please accept the required terms and conditions.'
    default:
      return ''
  }
})

// Real-time validation indicators
const stepValidationStatus = computed(() => {
  const steps = []
  for (let i = 1; i <= totalSteps; i++) {
    const originalStep = currentStep.value
    currentStep.value = i
    const isValid = isStepValid.value
    currentStep.value = originalStep
    steps.push(isValid)
  }
  return steps
})

// Step navigation with improved validation
const nextStep = () => {
  if (currentStep.value < totalSteps && isStepValid.value) {
    currentStep.value++
  } else if (!isStepValid.value) {
    // Show validation error - you can implement toast notification here
    console.warn('Validation failed:', getValidationMessage.value)
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

// Enhanced form submission with validation
const handleSubmit = async () => {
  if (currentStep.value === totalSteps && isStepValid.value) {
    isLoading.value = true

    try {
      // Final validation before submission
      const isFormComplete = stepValidationStatus.value.every(status => status)

      if (!isFormComplete) {
        throw new Error('Please complete all required fields')
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000))

      console.log('Registration data:', {
        ...formData,
        // Remove sensitive data from logs
        password: '[REDACTED]',
        confirmPassword: '[REDACTED]'
      })

      // Redirect to dashboard
      await navigateTo('/dashboard')
    } catch (error) {
      console.error('Registration failed:', error)
      // You can implement error notification here
    } finally {
      isLoading.value = false
    }
  }
}
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
input:focus, select:focus {
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

/* Step transition animations */
.step-enter-active, .step-leave-active {
  transition: all 0.3s ease;
}

.step-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.step-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Progress bar animation */
.progress-bar {
  transition: width 0.3s ease-in-out;
}
</style>
