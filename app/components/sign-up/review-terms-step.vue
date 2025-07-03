<template>
  <div class="space-y-6">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Review & Terms</h2>
      <p class="text-gray-600">Review your information and accept our terms</p>
    </div>

    <!-- Account Summary Card -->
    <div class="bg-gray-50 rounded-xl p-6 space-y-6">
      <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
        <Icon name="i-heroicons-user-circle" class="w-5 h-5 mr-2" />
        Account Summary
      </h3>

      <!-- Basic Info -->
      <div class="flex flex-col gap-1 text-sm text-gray-600">
        <span><strong>Role:</strong> {{ getRoleLabel(formData.role) }}</span>
        <span><strong>Email:</strong> {{ formData.email }}</span>
        <span><strong>Name:</strong> {{ formData.firstName }} {{ formData.lastName }}</span>
        <span><strong>Country:</strong> {{ formData.country }}</span>
        <span><strong>Phone:</strong> {{ getFormattedPhone(formData.phone, formData.country) }}</span>
        <span v-if="formData.dateOfBirth"><strong>Date of Birth:</strong> {{ formatDate(formData.dateOfBirth) }}</span>
        <span v-if="formData.gender"><strong>Gender:</strong> {{ formatGender(formData.gender) }}</span>
      </div>

      <!-- Emergency Contact (Parents only) -->
      <div v-if="formData.role === 'parent' && formData.emergencyContactName" class="border-t border-gray-200 pt-4">
        <h4 class="font-medium text-gray-900 mb-2">Emergency Contact</h4>
        <div class="text-sm text-gray-600 space-y-1">
          <p><strong>Name:</strong> {{ formData.emergencyContactName }}</p>
          <p v-if="formData.emergencyContactPhone"><strong>Phone:</strong> {{ getFormattedPhone(formData.emergencyContactPhone, formData.country) }}</p>
          <p v-if="formData.emergencyRelationship"><strong>Relationship:</strong> {{ formData.emergencyRelationship }}</p>
        </div>
      </div>

      <!-- Address Info -->
      <div class="border-t border-gray-200 pt-4">
        <h4 class="font-medium text-gray-900 mb-2">{{ getAddressTitle(formData.role) }}</h4>
        <div class="text-sm text-gray-600">
          <p>{{ formData.addressLine1 }}</p>
          <p v-if="formData.addressLine2">{{ formData.addressLine2 }}</p>
          <p>{{ formData.city }}, {{ formData.stateProvince }} {{ formData.postalCode }}</p>
          <p>{{ formData.country }}</p>
        </div>
      </div>

      <!-- Work Contact Info (Professionals only) -->
      <div v-if="formData.role !== 'parent' && (formData.workPhone || formData.workEmail)" class="border-t border-gray-200 pt-4">
        <h4 class="font-medium text-gray-900 mb-2">
          {{ formData.role === 'teacher' ? 'School Contact' : 'Clinic Contact' }}
        </h4>
        <div class="text-sm text-gray-600 space-y-1">
          <p v-if="formData.workPhone"><strong>Phone:</strong> {{ getFormattedPhone(formData.workPhone, formData.country) }}</p>
          <p v-if="formData.workEmail"><strong>Email:</strong> {{ formData.workEmail }}</p>
        </div>
      </div>

      <!-- Professional Details -->
      <div class="border-t border-gray-200 pt-4">
        <h4 class="font-medium text-gray-900 mb-2">{{ getProfessionalTitle(formData.role) }}</h4>

        <!-- Teacher Info -->
        <div v-if="formData.role === 'teacher'" class="text-sm text-gray-600 space-y-1">
          <p><strong>School:</strong> {{ formData.school || 'Not provided' }}</p>
          <p v-if="formData.licenseNumber"><strong>License Number:</strong> {{ formData.licenseNumber }}</p>
          <p v-if="formData.yearsExperience"><strong>Years of Experience:</strong> {{ formData.yearsExperience }}</p>
          <p v-if="formData.subjects"><strong>Subject Areas:</strong> {{ formData.subjects }}</p>
          <p v-if="formData.educationLevel"><strong>Education Level:</strong> {{ formData.educationLevel }}</p>
        </div>

        <!-- Doctor Info -->
        <div v-if="formData.role === 'doctor'" class="text-sm text-gray-600 space-y-1">
          <p><strong>Medical License:</strong> {{ formData.medicalLicense || 'Not provided' }}</p>
          <p><strong>Specialization:</strong> {{ formData.specialization || 'Not provided' }}</p>
          <p v-if="formData.hospital"><strong>Hospital/Clinic:</strong> {{ formData.hospital }}</p>
          <p v-if="formData.medicalExperience"><strong>Years of Experience:</strong> {{ formData.medicalExperience }}</p>
          <p v-if="formData.boardCertifications"><strong>Board Certifications:</strong> {{ formData.boardCertifications }}</p>
          <p v-if="formData.professionalMemberships"><strong>Professional Memberships:</strong> {{ formData.professionalMemberships }}</p>
        </div>

        <!-- Parent Info -->
        <div v-if="formData.role === 'parent'" class="text-sm text-gray-600 space-y-1">
          <p><strong>Child's Name:</strong> {{ formData.childName || 'Not provided' }}</p>
          <p v-if="formData.childAge"><strong>Child's Age:</strong> {{ formData.childAge }} years old</p>
          <p v-if="formData.childDateOfBirth"><strong>Child's Date of Birth:</strong> {{ formatDate(formData.childDateOfBirth) }}</p>
          <p><strong>Relationship:</strong> {{ formData.relationship || 'Not provided' }}</p>
          <p v-if="formData.childSchool"><strong>Child's School:</strong> {{ formData.childSchool }}</p>
          <p v-if="formData.specialNeedsInfo"><strong>Special Needs Information:</strong> {{ formData.specialNeedsInfo }}</p>
        </div>
      </div>
    </div>

    <!-- Terms and Conditions -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-900 flex items-center">
        <Icon name="i-heroicons-document-text" class="w-5 h-5 mr-2" />
        Terms and Agreements
      </h3>

      <!-- Required Agreements -->
      <div class="space-y-4">
        <div class="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
          <input
            id="agreeTerms"
            v-model="formData.agreeTerms"
            type="checkbox"
            required
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <div class="text-sm">
            <label for="agreeTerms" class="font-medium text-gray-900 mb-1 cursor-pointer">Terms of Service Agreement</label>
            <p class="text-gray-600 mb-2">
              I agree to the
              <a href="/terms" class="text-blue-600 hover:text-blue-500 font-medium" target="_blank">
                Terms of Service
              </a>
              and acknowledge that I understand my rights and responsibilities as a Q-Academy user.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
          <input
            id="agreeData"
            v-model="formData.agreeData"
            type="checkbox"
            required
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <div class="text-sm">
            <label for="agreeData" class="font-medium text-gray-900 mb-1 cursor-pointer">Privacy Policy & Data Processing</label>
            <p class="text-gray-600 mb-2">
              I consent to the collection and processing of my personal data as described in the
              <a href="/privacy" class="text-blue-600 hover:text-blue-500 font-medium" target="_blank">
                Privacy Policy
              </a>,
              including sensitive health and educational information as required for Q-Academy services.
            </p>
          </div>
        </div>

        <!-- Role-specific agreements -->
        <div v-if="formData.role === 'doctor'" class="flex items-start space-x-3 p-4 border border-blue-200 rounded-lg bg-blue-50">
          <input
            id="agreeHIPAA"
            v-model="formData.agreeHIPAA"
            type="checkbox"
            required
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <div class="text-sm">
            <label for="agreeHIPAA" class="font-medium text-blue-900 mb-1 cursor-pointer">HIPAA Compliance Agreement</label>
            <p class="text-blue-700">
              As a healthcare provider, I agree to comply with HIPAA regulations and maintain strict confidentiality of all patient health information accessed through Q-Academy.
            </p>
          </div>
        </div>

        <div v-if="formData.role === 'teacher'" class="flex items-start space-x-3 p-4 border border-green-200 rounded-lg bg-green-50">
          <input
            id="agreeFERPA"
            v-model="formData.agreeFERPA"
            type="checkbox"
            required
            class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
          />
          <div class="text-sm">
            <label for="agreeFERPA" class="font-medium text-green-900 mb-1 cursor-pointer">FERPA Compliance Agreement</label>
            <p class="text-green-700">
              As an educator, I agree to comply with FERPA regulations and protect the privacy of student educational records accessed through Q-Academy.
            </p>
          </div>
        </div>

        <div v-if="formData.role === 'parent'" class="flex items-start space-x-3 p-4 border border-purple-200 rounded-lg bg-purple-50">
          <input
            id="agreeChildData"
            v-model="formData.agreeChildData"
            type="checkbox"
            required
            class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
          />
          <div class="text-sm">
            <label for="agreeChildData" class="font-medium text-purple-900 mb-1 cursor-pointer">Child Data Consent</label>
            <p class="text-purple-700">
              I confirm that I have the legal authority to provide consent for my child's participation and data processing in Q-Academy services.
            </p>
          </div>
        </div>
      </div>

      <!-- Optional Agreements -->
      <div class="border-t border-gray-200 pt-4">
        <h4 class="font-medium text-gray-900 mb-3">Optional Preferences</h4>

        <div class="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
          <input
            id="agreeMarketing"
            v-model="formData.agreeMarketing"
            type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <div class="text-sm">
            <label for="agreeMarketing" class="font-medium text-gray-900 mb-1 cursor-pointer">Marketing Communications</label>
            <p class="text-gray-600">
              I would like to receive updates about Q-Academy features, educational resources, and platform improvements.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg mt-3">
          <input
            id="agreeResearch"
            v-model="formData.agreeResearch"
            type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <div class="text-sm">
            <label for="agreeResearch" class="font-medium text-gray-900 mb-1 cursor-pointer">Anonymous Research Participation</label>
            <p class="text-gray-600">
              I consent to the use of anonymized data for research purposes to improve special needs education and healthcare outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Security & Compliance Notice -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div class="flex items-start space-x-3">
        <Icon name="i-heroicons-shield-check" class="w-6 h-6 text-blue-600 mt-0.5" />
        <div class="text-sm">
          <p class="font-medium text-blue-900 mb-2">Your data is secure and compliant</p>
          <ul class="text-blue-700 space-y-1">
            <li>• Enterprise-grade AES-256 encryption</li>
            <li>• HIPAA compliant for medical data</li>
            <li>• FERPA compliant for educational records</li>
            <li>• Regular security audits and monitoring</li>
            <li>• Role-based access controls</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Account Verification Notice -->
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div class="flex items-start space-x-3">
        <Icon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600 mt-0.5" />
        <div class="text-sm">
          <p class="font-medium text-yellow-900 mb-1">Account Verification Process</p>
          <p class="text-yellow-700">
            {{ getVerificationMessage(formData.role) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  formData: {
    // Step 1: Role
    role: string

    // Step 2: Account Details
    email: string
    password: string
    confirmPassword: string

    // Step 3: Personal Details
    firstName: string
    lastName: string
    phone: string
    country: string
    dateOfBirth: string
    gender: string
    emergencyContactName: string
    emergencyContactPhone: string
    emergencyRelationship: string

    // Step 4: Address Details (Updated fields)
    addressLine1: string
    addressLine2: string
    city: string
    stateProvince: string
    postalCode: string
    workPhone: string
    workEmail: string

    // Step 5: Professional Details (role-specific)
    // Teacher
    school: string
    licenseNumber: string
    yearsExperience: string
    subjects: string
    educationLevel: string

    // Doctor
    medicalLicense: string
    specialization: string
    hospital: string
    medicalExperience: string
    boardCertifications: string
    professionalMemberships: string

    // Parent
    childName: string
    childAge: string
    childDateOfBirth: string
    relationship: string
    emergencyContact: string
    childSchool: string
    specialNeedsInfo: string

    // Step 6: Terms
    agreeTerms: boolean
    agreeData: boolean
    agreeMarketing: boolean
    agreeHIPAA: boolean
    agreeFERPA: boolean
    agreeChildData: boolean
    agreeResearch: boolean
  }
  selectedRole: string
  userRoles: any[]
}

defineProps<Props>()
defineEmits(['update:formData', 'editInformation'])

// Country codes for phone formatting
const countryCodes = {
  'Philippines': '+63',
  'United States': '+1',
  'Canada': '+1',
  'United Kingdom': '+44',
  'Australia': '+61',
  'Singapore': '+65',
  'Malaysia': '+60',
  'Thailand': '+66',
  'Vietnam': '+84',
  'Indonesia': '+62',
  'Japan': '+81',
  'South Korea': '+82',
  'China': '+86',
  'India': '+91',
  'United Arab Emirates': '+971',
  'Saudi Arabia': '+966',
  'Germany': '+49',
  'France': '+33',
  'Italy': '+39',
  'Spain': '+34',
  'Brazil': '+55',
  'Mexico': '+52',
  'Russia': '+7',
  'South Africa': '+27'
}

// Helper functions for display
const getRoleLabel = (role: string) => {
  const roles = {
    'teacher': 'Teacher',
    'doctor': 'Healthcare Provider',
    'parent': 'Parent/Guardian'
  }
  return roles[role] || role
}

const getAddressTitle = (role: string) => {
  const titles = {
    'teacher': 'School Address',
    'doctor': 'Clinic Address',
    'parent': 'Home Address'
  }
  return titles[role] || 'Address'
}

const getProfessionalTitle = (role: string) => {
  const titles = {
    'teacher': 'Teaching Information',
    'doctor': 'Medical Information',
    'parent': 'Child Information'
  }
  return titles[role] || 'Professional Information'
}

const getVerificationMessage = (role: string) => {
  const messages = {
    'teacher': 'Your teaching credentials will be verified within 2-3 business days. You\'ll receive an email once verification is complete.',
    'doctor': 'Your medical license and credentials will be verified within 1-2 business days. You\'ll have limited access until verification is complete.',
    'parent': 'Your account will be activated immediately. You can start connecting with your child\'s educational and healthcare team right away.'
  }
  return messages[role] || 'Your account will be reviewed and activated soon.'
}

const getFormattedPhone = (phone: string, country: string) => {
  const countryCode = countryCodes[country] || '+63'
  return `${countryCode} ${phone}`
}

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatGender = (gender: string) => {
  const genderLabels = {
    'male': 'Male',
    'female': 'Female',
    'other': 'Other',
    'prefer-not-to-say': 'Prefer not to say'
  }
  return genderLabels[gender] || gender
}
</script>

<style scoped>
/* Improved checkbox styling */
input[type="checkbox"]:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

input[type="checkbox"]:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Smooth hover transitions */
.group:hover .group-hover\:text-gray-900 {
  color: #111827;
}

/* Link styling */
a {
  transition: color 0.2s ease;
}

a:hover {
  text-decoration-thickness: 2px;
}
</style>
