<template>
  <section id="target" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Empowering Special Needs Education and Healthcare
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Our platform serves a diverse community of professionals and families dedicated to supporting students with special needs through integrated learning and healthcare solutions.
        </p>
      </div>

      <!-- User Roles Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <!-- Teachers/Educators -->
        <div
          v-for="role in roles"
          :key="role.name"
          :class="['flex flex-col justify-between bg-gradient-to-br rounded-2xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300', role.bg_color]">
          <div class="text-center">
            <div :class="['w-20 h-20 bg-gradient-to-r rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg', role.icon_color]">
              <Icon :name="role.icon" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ role.name }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ role.description }}</p>

            <!-- Key Features for Teachers -->
            <div v-if="role.name === 'Teachers & Educators'" class="space-y-3 text-left">
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Create and assign adaptive learning activities</span>
              </div>
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Track student progress in real-time</span>
              </div>
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Generate comprehensive reports</span>
              </div>
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Collaborate with healthcare professionals</span>
              </div>
            </div>

            <div v-else-if="role.name === 'Healthcare Professionals'" class="space-y-3 text-left mb-6">
              <div class="bg-white rounded-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"/>
                  <span class="text-sm font-medium text-gray-700">Occupational Therapists</span>
                </div>
              </div>
              <div class="bg-white rounded-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"/>
                  <span class="text-sm font-medium text-gray-700">Speech Therapists</span>
                </div>
              </div>
              <div class="bg-white rounded-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full"/>
                  <span class="text-sm font-medium text-gray-700">Behavioral Therapists</span>
                </div>
              </div>
              <div class="bg-white rounded-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"/>
                  <span class="text-sm font-medium text-gray-700">Developmental Specialists</span>
                </div>
              </div>
            </div>

            <div v-else class="space-y-3 text-left">
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Interactive learning activities for students</span>
              </div>
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Monitor progress and achievements</span>
              </div>
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Access healthcare consultations</span>
              </div>
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-600">Seamless communication with educators</span>
              </div>
            </div>
            <div class="mt-6 pt-6 border-t border-blue-200">
              <p :class="['text-xs font-medium', role.text_color]">Primary Platform: Desktop Application</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 rounded-2xl p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Multi-Platform Accessibility</h3>
          <p class="text-gray-600">
            Our solution is designed to work seamlessly across different platforms, ensuring optimal user experience for each role.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="platform in platforms"
            :key="platform.name"
            class="text-center"
          >
            <div :class="['w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center', platform.color]">
              <Icon :name="platform.icon" class="w-8 h-8 text-blue-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ platform.name }}</h4>
            <p class="text-sm text-gray-600 mb-4">{{ platform.description }}</p>
            <div class="bg-blue-50 rounded-lg p-3">
              <p :class="['text-xs font-medium', platform.text_color]">{{ platform.pill }}</p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-200">
          <div class="grid md:grid-cols-4 gap-6">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="text-center"
            >
              <Icon :name="benefit.icon" class="w-8 h-8 text-gray-500 mx-auto mb-2" />
              <p class="text-sm font-medium text-gray-700">{{ benefit.title }}</p>
              <p class="text-xs text-gray-500">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const roles = [
  {
    name: 'Teachers & Educators',
    description: 'Professionals who create personalized learning experiences for students with disabilities.',
    icon: 'i-heroicons-academic-cap',
    icon_color: 'from-blue-500 to-cyan-500',
    bg_color: 'from-blue-50 to-cyan-50',
    text_color: 'text-blue-600'
  },
  {
    name: 'Healthcare Professionals',
    description: 'Specialized doctors, therapists, and medical professionals providing comprehensive healthcare support.',
    icon: 'i-heroicons-heart',
    icon_color: 'from-green-500 to-emerald-500',
    bg_color: 'from-green-50 to-emerald-50',
    text_color: 'text-green-600'
  },
  {
    name: 'Students & Families',
    description: 'Students with special needs and their families who benefit from personalized learning and healthcare coordination.',
    icon: 'i-heroicons-users',
    icon_color: 'from-purple-500 to-pink-500',
    bg_color: 'from-purple-50 to-pink-50',
    text_color: 'text-purple-600'
  }
]

const platforms = [
  {
    name: 'Desktop Application',
    description: 'Powerful tools for educators to create activities, manage students, and generate detailed reports.',
    pill: 'Optimized for Parents, Educators & Administrators',
    icon: 'i-heroicons-computer-desktop',
    color: 'bg-blue-100',
    text_color: 'text-blue-600'
  },
  {
    name: 'Web Application',
    description: 'Secure portal for healthcare professionals to conduct consultations and access patient records.',
    pill: 'Optimized for Parents, and Professionals',
    icon: 'i-heroicons-globe-alt',
    color: 'bg-green-100',
    text_color: 'text-green-600'
  },
  {
    name: 'Mobile Application',
    description: 'Engaging interface for students to access activities and for parents to monitor progress.',
    pill: 'Optimized for Children, Parents, and Professionals',
    icon: 'i-heroicons-device-phone-mobile',
    color: 'bg-purple-100',
    text_color: 'text-purple-600'
  }
]

const benefits = [
  {
    icon: 'i-heroicons-arrow-path',
    title: 'Real-time Sync',
    description: 'Data synchronized across all platforms'
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Secure Access',
    description: 'Role-based permissions and encryption'
  },
  {
    icon: 'i-heroicons-bell',
    title: 'Notifications',
    description: 'Real-time alerts and updates'
  },
  {
    icon: 'i-heroicons-cloud',
    title: 'Cloud Storage',
    description: 'Secure cloud-based data management'
  }
]
</script>
