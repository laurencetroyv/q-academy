<template>
  <header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
    <app-development-banner v-if="!showBanner"/>
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtImg src="/logo.png" class="h-8 cursor-pointer" @click="navigateTo('/')" />

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors">Home</NuxtLink>

          <div class="relative group">
            <NuxtLink class="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              Features
              <NuxtIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
            </NuxtLink>

            <div class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="p-4">
                <div class="grid grid-cols-1 gap-3">
                  <NuxtLink
                    v-for="feature in features_menus"
                    :key="feature.name"
                    :to="feature.path"
                    class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon :name="feature.icon" :class="['w-4 h-4', feature.icon_color]" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ feature.name }}</p>
                      <p class="text-sm text-gray-600">{{ feature.description }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="relative group">
            <NuxtLink class="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              Solutions
              <NuxtIcon name="i-heroicons-chevron-down" class="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
            </NuxtLink>

            <div class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="p-4">
                <div class="grid grid-cols-1 gap-3">
                  <NuxtLink
                    v-for="feature in solutions_menus"
                    :key="feature.name"
                    :to="feature.path"
                    class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon :name="feature.icon" :class="['w-4 h-4', feature.icon_color]" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ feature.name }}</p>
                      <p class="text-sm text-gray-600">{{ feature.description }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>


<!--          <NuxtLink to="/blogs" class="text-gray-600 hover:text-blue-600 transition-colors">Blog</NuxtLink>-->
          <NuxtLink to="/timeline" class="text-gray-600 hover:text-blue-600 transition-colors">Timeline</NuxtLink>
          <NuxtLink to="/about-us" class="text-gray-600 hover:text-blue-600 transition-colors">About Us</NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="flex items-center space-x-4">
          <NuxtButton
              variant="solid"
              size="md"
              class="hidden sm:flex cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
          >
            Get Started
          </NuxtButton>

          <!-- Mobile menu button -->
          <NuxtButton
              variant="ghost"
              icon="i-heroicons-bars-3"
              class="md:hidden bg-blue-500 hover:bg-blue-600 text-white"
              @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors" @click="closeMobileMenu">
            Home
          </NuxtLink>

          <NuxtLink to="/about-us" class="text-gray-600 hover:text-blue-600 transition-colors" @click="closeMobileMenu">
            About Us
          </NuxtLink>

          <!-- Mobile Features Menu -->
          <div>
            <button
              class="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors"
              @click="mobileSubMenus.features = !mobileSubMenus.features"
            >
              Features
              <Icon
                name="i-heroicons-chevron-down"
                :class="['w-4 h-4 transition-transform', mobileSubMenus.features ? 'rotate-180' : '']"
              />
            </button>
            <div v-if="mobileSubMenus.features" class="mt-2 ml-4 space-y-2">
              <NuxtLink to="/features" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                All Features
              </NuxtLink>
              <NuxtLink to="/features/personalized-learning" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                Personalized Learning
              </NuxtLink>
              <NuxtLink to="/features/telemedicine" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                Telemedicine
              </NuxtLink>
              <NuxtLink to="/features/progress-reports" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                Progress Reports
              </NuxtLink>
              <NuxtLink to="/features/health-records" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                Health Records
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile Solutions Menu -->
          <div>
            <button
              class="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors"
              @click="mobileSubMenus.solutions = !mobileSubMenus.solutions"
            >
              Solutions
              <Icon
                name="i-heroicons-chevron-down"
                :class="['w-4 h-4 transition-transform', mobileSubMenus.solutions ? 'rotate-180' : '']"
              />
            </button>
            <div v-if="mobileSubMenus.solutions" class="mt-2 ml-4 space-y-2">
              <NuxtLink to="/solutions" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                All Solutions
              </NuxtLink>
              <NuxtLink to="/solutions/learning-management" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                Learning Management
              </NuxtLink>
              <NuxtLink to="/solutions/telemedicine" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                Telemedicine Platform
              </NuxtLink>
              <NuxtLink to="/solutions/electronic-health-records" class="block text-sm text-gray-600 hover:text-blue-600" @click="closeMobileMenu">
                Electronic Health Records
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/timeline" class="text-gray-600 hover:text-blue-600 transition-colors" @click="closeMobileMenu">
            Timeline
          </NuxtLink>


          <NuxtLink to="/contact-us" class="text-gray-600 hover:text-blue-600 transition-colors" @click="closeMobileMenu">
            Contact
          </NuxtLink>

          <!-- Mobile CTA Buttons -->
          <div class="pt-4 border-t border-gray-200 space-y-3">
            <NuxtButton
              class="bg-blue-500 hover:bg-blue-600 text-white"
              variant="solid"
              size="md"
            >
              Get Started
            </NuxtButton>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRouter()

const features_menus = [
  {
    name: 'All Features',
    description: 'Complete platform overview',
    path: '/features',
    icon: 'i-heroicons-squares-2x2',
    icon_color: 'text-indigo-600'
  },
  {
    name: 'Personalized Learning',
    description: 'AI-powered adaptive education',
    path: '/features/personalized-learning',
    icon: 'i-heroicons-academic-cap',
    icon_color: 'text-blue-600'
  },
  {
    name: 'Telemedicine',
    description: 'Remote healthcare access',
    path: '/features/telemedicine',
    icon: 'i-heroicons-video-camera',
    icon_color: 'text-green-600'
  },
  {
    name: 'Progress Reports',
    description: 'Data-driven insights',
    path: '/features/progress-reports',
    icon: 'i-heroicons-chart-bar-square',
    icon_color: 'text-purple-600'
  },
  {
    name: 'Health Records',
    description: 'Secure medical data',
    path: '/features/health-records',
    icon: 'i-heroicons-heart',
    icon_color: 'text-orange-600'
  }
]

const solutions_menus = [
  {
    name: 'All Solutions',
    description: 'Integrated platform overview',
    path: '/solutions',
    icon: 'i-heroicons-puzzle-piece',
    icon_color: 'text-indigo-600'
  },
  {
    name: 'Learning Management',
    description: 'Desktop platform for educators',
    path: '/solutions/learning-management',
    icon: 'i-heroicons-computer-desktop',
    icon_color: 'text-blue-600'
  },
  {
    name: 'Telemedicine Platform',
    description: 'Web-based healthcare portal',
    path: '/solutions/telemedicine',
    icon: 'i-heroicons-video-camera',
    icon_color: 'text-green-600'
  },
  {
    name: 'Electronic Health Records',
    description: 'Secure data management',
    path: '/solutions/electronic-health-records',
    icon: 'i-heroicons-document-text',
    icon_color: 'text-purple-600'
  }
]

const mobileMenuOpen = ref(false)
const mobileSubMenus = reactive({
  features: false,
  solutions: false
})

// Close mobile menu when clicking outside or on links
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileSubMenus.features = false
  mobileSubMenus.solutions = false
}

const showBanner = computed(() => {
  const pages = ['/privacy', '/terms']

  const path = route.currentRoute.value.path

  return pages.includes(path)
})

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

// Close dropdown menus when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e?.target.closest('.group')) {
      // Close desktop dropdowns by removing hover state
    }
  })
})

watch(() => useRoute().path, () => {
  closeMobileMenu()
})
</script>
