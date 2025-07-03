
<template>
  <div class="space-y-6">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Professional Information</h2>
      <p class="text-gray-600">
        {{ roleDescription }}
      </p>
    </div>

    <!-- Teacher Fields -->
    <div v-if="selectedRole === 'teacher'" class="space-y-6">
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div class="flex items-center space-x-3">
          <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-blue-600" />
          <h3 class="font-semibold text-blue-900">Teaching Credentials</h3>
        </div>
      </div>

      <div>
        <label for="school" class="block text-sm font-medium text-gray-700 mb-1">
          School/Institution Name <span class="text-red-500">*</span>
        </label>
        <input
          id="school"
          v-model="formData.school"
          type="text"
          required
          placeholder="Enter your school or institution name"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="licenseNumber" class="block text-sm font-medium text-gray-700 mb-1">
            Teaching License Number
          </label>
          <input
            id="licenseNumber"
            v-model="formData.licenseNumber"
            type="text"
            required
            placeholder="License number"
            class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
        <div>
          <label for="yearsExperience" class="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience
          </label>
          <input
            id="yearsExperience"
            v-model="formData.yearsExperience"
            type="number"
            min="0"
            max="50"
            placeholder="Years teaching"
            class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label for="subjects" class="block text-sm font-medium text-gray-700 mb-1">
          Subjects/Specialties
        </label>
        <input
          id="subjects"
          v-model="formData.subjects"
          type="text"
          placeholder="e.g., Special Education, Mathematics, Science"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>

      <div>
        <label for="educationLevel" class="block text-sm font-medium text-gray-700 mb-1">
          Education Level
        </label>
        <select
          id="educationLevel"
          v-model="formData.educationLevel"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        >
          <option value="">Select education level</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="doctorate">Doctorate Degree</option>
          <option value="diploma">Teaching Diploma</option>
          <option value="certificate">Teaching Certificate</option>
        </select>
      </div>
    </div>

    <!-- Doctor Fields -->
    <div v-if="selectedRole === 'doctor'" class="space-y-6">
      <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div class="flex items-center space-x-3">
          <Icon name="i-heroicons-heart" class="w-6 h-6 text-green-600" />
          <h3 class="font-semibold text-green-900">Medical Credentials</h3>
        </div>
      </div>

      <div>
        <label for="medicalLicense" class="block text-sm font-medium text-gray-700 mb-1">
          Medical License Number <span class="text-red-500">*</span>
        </label>
        <input
          id="medicalLicense"
          v-model="formData.medicalLicense"
          type="text"
          required
          placeholder="Enter your medical license number"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>

      <div>
        <label for="specialization" class="block text-sm font-medium text-gray-700 mb-1">
          Primary Specialization <span class="text-red-500">*</span>
        </label>
        <select
          id="specialization"
          v-model="formData.specialization"
          required
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        >
          <option value="">Select specialization</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="developmental-pediatrics">Developmental Pediatrics</option>
          <option value="neurology">Neurology</option>
          <option value="psychiatry">Psychiatry</option>
          <option value="child-psychiatry">Child Psychiatry</option>
          <option value="occupational-therapy">Occupational Therapy</option>
          <option value="physical-therapy">Physical Therapy</option>
          <option value="speech-therapy">Speech Therapy</option>
          <option value="behavioral-therapy">Behavioral Therapy</option>
          <option value="psychology">Psychology</option>
          <option value="special-education">Special Education Medicine</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="hospital" class="block text-sm font-medium text-gray-700 mb-1">
            Hospital/Clinic Name
          </label>
          <input
            id="hospital"
            v-model="formData.hospital"
            type="text"
            placeholder="Enter your workplace"
            class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
        <div>
          <label for="medicalExperience" class="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience
          </label>
          <input
            id="medicalExperience"
            v-model="formData.medicalExperience"
            type="number"
            min="0"
            max="50"
            placeholder="Years practicing"
            class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label for="boardCertifications" class="block text-sm font-medium text-gray-700 mb-1">
          Medical Board Certifications
        </label>
        <input
          id="boardCertifications"
          v-model="formData.boardCertifications"
          type="text"
          placeholder="List your board certifications (optional)"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>

      <div>
        <label for="professionalMemberships" class="block text-sm font-medium text-gray-700 mb-1">
          Professional Memberships
        </label>
        <input
          id="professionalMemberships"
          v-model="formData.professionalMemberships"
          type="text"
          placeholder="e.g., Philippine Medical Association (optional)"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>
    </div>

    <!-- Parent Fields -->
    <div v-if="selectedRole === 'parent'" class="space-y-6">
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
        <div class="flex items-center space-x-3">
          <Icon name="i-heroicons-users" class="w-6 h-6 text-purple-600" />
          <h3 class="font-semibold text-purple-900">Child Information</h3>
        </div>
      </div>

      <div>
        <label for="childName" class="block text-sm font-medium text-gray-700 mb-1">
          Child's Full Name <span class="text-red-500">*</span>
        </label>
        <input
          id="childName"
          v-model="formData.childName"
          type="text"
          required
          placeholder="Enter your child's full name"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="childAge" class="block text-sm font-medium text-gray-700 mb-1">
            Child's Age <span class="text-red-500">*</span>
          </label>
          <input
            id="childAge"
            v-model="formData.childAge"
            type="number"
            min="1"
            max="25"
            required
            placeholder="Child's age"
            class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
        <div>
          <label for="childDateOfBirth" class="block text-sm font-medium text-gray-700 mb-1">
            Child's Date of Birth
          </label>
          <input
            id="childDateOfBirth"
            v-model="formData.childDateOfBirth"
            type="date"
            :max="maxChildDate"
            class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label for="relationship" class="block text-sm font-medium text-gray-700 mb-1">
          Your Relationship to Child <span class="text-red-500">*</span>
        </label>
        <select
          id="relationship"
          v-model="formData.relationship"
          required
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        >
          <option value="">Select relationship</option>
          <option value="mother">Mother</option>
          <option value="father">Father</option>
          <option value="step-mother">Step Mother</option>
          <option value="step-father">Step Father</option>
          <option value="grandmother">Grandmother</option>
          <option value="grandfather">Grandfather</option>
          <option value="aunt">Aunt</option>
          <option value="uncle">Uncle</option>
          <option value="legal-guardian">Legal Guardian</option>
          <option value="foster-parent">Foster Parent</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label for="childSchool" class="block text-sm font-medium text-gray-700 mb-1">
          Child's School (if applicable)
        </label>
        <input
          id="childSchool"
          v-model="formData.childSchool"
          type="text"
          placeholder="Current school name (optional)"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>

      <div>
        <label for="specialNeedsInfo" class="block text-sm font-medium text-gray-700 mb-1">
          Special Needs Information
        </label>
        <textarea
          id="specialNeedsInfo"
          v-model="formData.specialNeedsInfo"
          class="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white min-h-28 resize-y"
          placeholder="Briefly describe your child's special needs, diagnoses, or areas where they need support (optional)"
        ></textarea>
        <p class="text-xs text-gray-500 mt-1">This information helps us provide better support and resources</p>
      </div>

      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div class="flex items-start space-x-3">
          <Icon name="i-heroicons-information-circle" class="w-5 h-5 text-yellow-600 mt-0.5" />
          <div class="text-sm">
            <p class="font-medium text-yellow-900 mb-1">Privacy Notice</p>
            <p class="text-yellow-700">
              All information about your child will be kept strictly confidential and will only be shared with authorized educators and healthcare providers involved in your child's care.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- File Upload Section for All Roles -->
    <div class="border-t border-gray-200 pt-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">
        {{ uploadSectionTitle }}
      </h3>
      <div
        class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
        @drop="handleDrop"
        @dragover.prevent
        @dragenter.prevent
      >
        <Icon name="i-heroicons-document-arrow-up" class="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p class="text-sm text-gray-600 mb-2">
          {{ uploadDescription }}
        </p>
        <button type="button" class="text-blue-600 hover:text-blue-500 text-sm font-medium" @click="triggerFileInput">
          Choose files or drag and drop
        </button>
        <p class="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB each</p>
      </div>

      <input type="file" accept="image/*,.pdf,file" class="hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  formData: {
    school: string,
    licenseNumber: string,
    yearsExperience: string,
    subjects: string,
    educationLevel: string,
    medicalLicense: string,
    specialization: string,
    hospital: string,
    medicalExperience: string,
    boardCertifications: string
    professionalMemberships: string
    childName: string,
    childAge: string,
    childDateOfBirth: string,
    relationship: string,
    emergencyContact: string,
    childSchool: string,
    specialNeedsInfo: string,
  }
  selectedRole: string
}

const props = defineProps<Props>()

defineEmits(['update:formData'])

const fileInput = ref<HTMLInputElement>()

// Dynamic content based on role
const roleDescription = computed(() => {
  switch (props.selectedRole) {
    case 'teacher': return 'Your teaching credentials and experience'
    case 'doctor': return 'Your medical credentials and specialization'
    case 'parent': return 'Information about your child and their needs'
    default: return 'Professional information'
  }
})

const uploadSectionTitle = computed(() => {
  switch (props.selectedRole) {
    case 'teacher': return 'Upload Teaching Documents (Optional)'
    case 'doctor': return 'Upload Medical Credentials (Optional)'
    case 'parent': return 'Upload Child\'s Documents (Optional)'
    default: return 'Upload Documents'
  }
})

const uploadDescription = computed(() => {
  switch (props.selectedRole) {
    case 'teacher': return 'Upload your teaching license, certificates, or transcripts'
    case 'doctor': return 'Upload your medical license, board certifications, or CV'
    case 'parent': return 'Upload medical reports, IEP documents, or school records'
    default: return 'Upload relevant documents'
  }
})

// Set max date for child's date of birth (today)
const maxChildDate = computed(() => {
  return new Date().toISOString().split('T')[0]
})

function triggerFileInput() {
  fileInput.value?.click()
}

function handleDrop(event: DragEvent) {
  event.preventDefault()

  const files = event.dataTransfer?.files
  if (files && files.length > 0) {
    // Process File
  }
}
</script>
