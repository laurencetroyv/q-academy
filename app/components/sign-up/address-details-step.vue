<template>
  <div class="space-y-6">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">
        {{ addressTitle }}
      </h2>
      <p class="text-gray-600">
        {{ addressDescription }}
      </p>
    </div>

    <!-- Address Line 1 (Required) -->
    <div>
      <label for="addressLine1" class="block text-sm font-medium text-gray-700 mb-1">
        Address Line 1 <span class="text-red-500">*</span>
      </label>
      <input
        id="addressLine1"
        v-model="formData.addressLine1"
        type="text"
        required
        :placeholder="addressLine1Placeholder"
        class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
      />
    </div>

    <!-- Address Line 2 (Optional) -->
    <div>
      <label for="addressLine2" class="block text-sm font-medium text-gray-700 mb-1">
        Address Line 2 <span class="text-gray-400">(Optional)</span>
      </label>
      <input
        id="addressLine2"
        v-model="formData.addressLine2"
        type="text"
        placeholder="Apartment, suite, unit, building, floor, etc."
        class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
      />
    </div>

    <!-- City and State/Province -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="city" class="block text-sm font-medium text-gray-700 mb-1">
          City <span class="text-red-500">*</span>
        </label>
        <input
          id="city"
          v-model="formData.city"
          type="text"
          required
          placeholder="Enter city"
          class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>
      <div>
        <label for="stateProvince" class="block text-sm font-medium text-gray-700 mb-1">
          {{ stateProvinceLabel }} <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select
            v-if="hasStatesProvinces"
            id="stateProvince"
            v-model="formData.stateProvince"
            required
            class="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white appearance-none"
          >
            <option value="">{{ `Select ${stateProvinceLabel.toLowerCase()}` }}</option>
            <option v-for="state in statesProvinces" :key="state.code" :value="state.name">
              {{ state.name }}
            </option>
          </select>
          <input
            v-else
            id="stateProvince"
            v-model="formData.stateProvince"
            type="text"
            required
            :placeholder="`Enter ${stateProvinceLabel.toLowerCase()}`"
            class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
          <!-- Custom chevron down icon for select -->
          <div v-if="hasStatesProvinces" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Postal Code and Country -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1">
          {{ postalCodeLabel }} <span class="text-red-500">*</span>
        </label>
        <input
          id="postalCode"
          v-model="formData.postalCode"
          type="text"
          required
          :placeholder="postalCodePlaceholder"
          :pattern="postalCodePattern"
          :maxlength="postalCodeMaxLength"
          class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
        />
      </div>
      <div>
        <label for="country" class="block text-sm font-medium text-gray-700 mb-1">
          Country <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select
            id="country"
            v-model="formData.country"
            required
            disabled
            class="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white appearance-none"
          >
            <option value="">Select country</option>
            <option v-for="country in countries" :key="country.code" :value="country.name">
              {{ country.flag }} {{ country.name }}
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
    </div>

    <!-- Additional Address Fields for Professionals -->
    <div v-if="selectedRole !== 'parent'" class="border-t border-gray-200 pt-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">
        {{ selectedRole === 'teacher' ? 'School Contact Information' : 'Clinic Contact Information' }}
      </h3>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="workPhone" class="block text-sm font-medium text-gray-700 mb-1">
            {{ selectedRole === 'teacher' ? 'School Phone' : 'Clinic Phone' }}
          </label>
          <input
            id="workPhone"
            v-model="formData.workPhone"
            type="tel"
            :placeholder="selectedRole === 'teacher' ? 'School contact number' : 'Clinic contact number'"
            class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
        <div>
          <label for="workEmail" class="block text-sm font-medium text-gray-700 mb-1">
            {{ selectedRole === 'teacher' ? 'School Email' : 'Clinic Email' }}
          </label>
          <input
            id="workEmail"
            v-model="formData.workEmail"
            type="email"
            :placeholder="selectedRole === 'teacher' ? 'School email address' : 'Clinic email address'"
            class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  formData: {
    addressLine1: string
    addressLine2: string
    city: string
    stateProvince: string
    postalCode: string
    country: string
    workPhone: string
    workEmail: string
  }
  selectedRole: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:formData'])

// Countries with their address formats
const countries = [
  { name: 'Philippines', flag: '🇵🇭', code: 'PH', stateLabel: 'Province', postalLabel: 'ZIP Code', postalPattern: '[0-9]{4}', postalMaxLength: 4, postalPlaceholder: '1234' },
  { name: 'United States', flag: '🇺🇸', code: 'US', stateLabel: 'State', postalLabel: 'ZIP Code', postalPattern: '[0-9]{5}(-[0-9]{4})?', postalMaxLength: 10, postalPlaceholder: '12345 or 12345-6789' },
  { name: 'Canada', flag: '🇨🇦', code: 'CA', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]', postalMaxLength: 7, postalPlaceholder: 'A1A 1A1' },
  { name: 'United Kingdom', flag: '🇬🇧', code: 'GB', stateLabel: 'County', postalLabel: 'Postcode', postalPattern: '[A-Za-z]{1,2}[0-9][A-Za-z0-9]? [0-9][A-Za-z]{2}', postalMaxLength: 8, postalPlaceholder: 'SW1A 1AA' },
  { name: 'Australia', flag: '🇦🇺', code: 'AU', stateLabel: 'State', postalLabel: 'Postcode', postalPattern: '[0-9]{4}', postalMaxLength: 4, postalPlaceholder: '2000' },
  { name: 'Singapore', flag: '🇸🇬', code: 'SG', stateLabel: 'District', postalLabel: 'Postal Code', postalPattern: '[0-9]{6}', postalMaxLength: 6, postalPlaceholder: '123456' },
  { name: 'Malaysia', flag: '🇲🇾', code: 'MY', stateLabel: 'State', postalLabel: 'Postcode', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Thailand', flag: '🇹🇭', code: 'TH', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Vietnam', flag: '🇻🇳', code: 'VN', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{6}', postalMaxLength: 6, postalPlaceholder: '123456' },
  { name: 'Indonesia', flag: '🇮🇩', code: 'ID', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Japan', flag: '🇯🇵', code: 'JP', stateLabel: 'Prefecture', postalLabel: 'Postal Code', postalPattern: '[0-9]{3}-[0-9]{4}', postalMaxLength: 8, postalPlaceholder: '123-4567' },
  { name: 'South Korea', flag: '🇰🇷', code: 'KR', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'China', flag: '🇨🇳', code: 'CN', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{6}', postalMaxLength: 6, postalPlaceholder: '123456' },
  { name: 'India', flag: '🇮🇳', code: 'IN', stateLabel: 'State', postalLabel: 'PIN Code', postalPattern: '[0-9]{6}', postalMaxLength: 6, postalPlaceholder: '123456' },
  { name: 'United Arab Emirates', flag: '🇦🇪', code: 'AE', stateLabel: 'Emirate', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Germany', flag: '🇩🇪', code: 'DE', stateLabel: 'State', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'France', flag: '🇫🇷', code: 'FR', stateLabel: 'Region', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Italy', flag: '🇮🇹', code: 'IT', stateLabel: 'Region', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Spain', flag: '🇪🇸', code: 'ES', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Brazil', flag: '🇧🇷', code: 'BR', stateLabel: 'State', postalLabel: 'CEP', postalPattern: '[0-9]{5}-[0-9]{3}', postalMaxLength: 9, postalPlaceholder: '12345-678' },
  { name: 'Mexico', flag: '🇲🇽', code: 'MX', stateLabel: 'State', postalLabel: 'Postal Code', postalPattern: '[0-9]{5}', postalMaxLength: 5, postalPlaceholder: '12345' },
  { name: 'Russia', flag: '🇷🇺', code: 'RU', stateLabel: 'Region', postalLabel: 'Postal Code', postalPattern: '[0-9]{6}', postalMaxLength: 6, postalPlaceholder: '123456' },
  { name: 'South Africa', flag: '🇿🇦', code: 'ZA', stateLabel: 'Province', postalLabel: 'Postal Code', postalPattern: '[0-9]{4}', postalMaxLength: 4, postalPlaceholder: '1234' }
]

// States/Provinces data - simplified for common countries
const statesProvincesData = {
  'United States': [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
  ],
  'Canada': [
    { code: 'AB', name: 'Alberta' }, { code: 'BC', name: 'British Columbia' }, { code: 'MB', name: 'Manitoba' },
    { code: 'NB', name: 'New Brunswick' }, { code: 'NL', name: 'Newfoundland and Labrador' }, { code: 'NS', name: 'Nova Scotia' },
    { code: 'ON', name: 'Ontario' }, { code: 'PE', name: 'Prince Edward Island' }, { code: 'QC', name: 'Quebec' },
    { code: 'SK', name: 'Saskatchewan' }, { code: 'NT', name: 'Northwest Territories' }, { code: 'NU', name: 'Nunavut' },
    { code: 'YT', name: 'Yukon' }
  ],
  'Australia': [
    { code: 'NSW', name: 'New South Wales' }, { code: 'VIC', name: 'Victoria' }, { code: 'QLD', name: 'Queensland' },
    { code: 'SA', name: 'South Australia' }, { code: 'WA', name: 'Western Australia' }, { code: 'TAS', name: 'Tasmania' },
    { code: 'NT', name: 'Northern Territory' }, { code: 'ACT', name: 'Australian Capital Territory' }
  ],
  'Philippines': [
    { code: 'ABR', name: 'Abra' }, { code: 'AGN', name: 'Agusan del Norte' }, { code: 'AGS', name: 'Agusan del Sur' },
    { code: 'AKL', name: 'Aklan' }, { code: 'ALB', name: 'Albay' }, { code: 'ANT', name: 'Antique' },
    { code: 'APA', name: 'Apayao' }, { code: 'AUR', name: 'Aurora' }, { code: 'BAS', name: 'Basilan' },
    { code: 'BAN', name: 'Bataan' }, { code: 'BTN', name: 'Batanes' }, { code: 'BTG', name: 'Batangas' },
    { code: 'BEN', name: 'Benguet' }, { code: 'BIL', name: 'Biliran' }, { code: 'BOH', name: 'Bohol' },
    { code: 'BUK', name: 'Bukidnon' }, { code: 'BUL', name: 'Bulacan' }, { code: 'CAG', name: 'Cagayan' },
    { code: 'CAN', name: 'Camarines Norte' }, { code: 'CAS', name: 'Camarines Sur' }, { code: 'CAM', name: 'Camiguin' },
    { code: 'CAP', name: 'Capiz' }, { code: 'CAT', name: 'Catanduanes' }, { code: 'CAV', name: 'Cavite' },
    { code: 'CEB', name: 'Cebu' }, { code: 'COM', name: 'Compostela Valley' }, { code: 'NCR', name: 'Metro Manila' },
    { code: 'MSR', name: 'Misamis Oriental' }, { code: 'MSC', name: 'Misamis Occidental' }
  ]
}

// Set default country if not already set
if (!props.formData.country) {
  emit('update:formData', { ...props.formData, country: 'Philippines' })
}

// Dynamic content based on role
const addressTitle = computed(() => {
  switch (props.selectedRole) {
    case 'parent': return 'Home Address'
    case 'teacher': return 'School Address'
    case 'doctor': return 'Clinic Address'
    default: return 'Address Information'
  }
})

const addressDescription = computed(() => {
  switch (props.selectedRole) {
    case 'parent': return 'Your home address information'
    case 'teacher': return 'Your primary school location'
    case 'doctor': return 'Your primary clinic location'
    default: return 'Your address information'
  }
})

const addressLine1Placeholder = computed(() => {
  switch (props.selectedRole) {
    case 'parent': return 'House number and street name'
    case 'teacher': return 'School building and street name'
    case 'doctor': return 'Clinic/Hospital building and street name'
    default: return 'Street address, P.O. box, company name, etc.'
  }
})

// Get current country data
const currentCountryData = computed(() => {
  return countries.find(c => c.name === props.formData.country) || countries[0]
})

// Dynamic labels and validation based on selected country
const stateProvinceLabel = computed(() => currentCountryData.value?.stateLabel || 'State/Province')
const postalCodeLabel = computed(() => currentCountryData.value?.postalLabel || 'Postal Code')
const postalCodePattern = computed(() => currentCountryData.value?.postalPattern || '')
const postalCodeMaxLength = computed(() => currentCountryData.value?.postalMaxLength || 10)
const postalCodePlaceholder = computed(() => currentCountryData.value?.postalPlaceholder || 'Enter postal code')

// Check if country has predefined states/provinces
const hasStatesProvinces = computed(() => {
  return statesProvincesData[props.formData.country] !== undefined
})

const statesProvinces = computed(() => {
  return statesProvincesData[props.formData.country] || []
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
