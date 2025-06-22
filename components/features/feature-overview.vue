<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Features Grid -->
      <div class="grid lg:grid-cols-2 gap-12 mb-20">
        <div
          v-for="feature in features"
          :key="feature.title"
          :class="[
            'bg-gradient-to-br rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300',
            feature.gradient
            ]">
          <div class="flex items-center mb-6">
            <div
              :class="[
                'w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mr-4',
                feature.gradient_icon
              ]">
              <Icon :name="feature.icon" class="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900">{{ feature.title }}</h2>
              <p :class="['font-medium', feature.color]">{{ feature.description }}</p>
            </div>
          </div>

          <p class="text-gray-700 mb-6 leading-relaxed">
            {{ feature.data.description }}
          </p>

          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div
              v-for="item in feature.data.features"
              :key="item.title"
              class="bg-white rounded-lg p-4"
            >
              <div class="flex items-center mb-2">
                <Icon :name="item.icon" :class="['w-5 h-5 mr-2', item.color]" />
                <span class="font-medium text-gray-900">{{ item.title }}</span>
              </div>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
            </div>
          </div>

          <NuxtLink :to="feature.link" :class="`hover:${feature.color}`">
            {{ feature.button_text }}
            <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </NuxtLink>
        </div>
      </div>

      <features-additional-platforms />
    </div>
  </section>
</template>
<script setup lang="ts">
const features = [
  {
    title: 'Personalized Learning Modules',
    description: 'Adaptive Educational Experience',
    icon: 'i-heroicons-academic-cap',
    color: "text-blue-600",
    gradient: 'from-blue-50 to-cyan-50',
    gradient_icon: 'from-blue-500 to-cyan-500',
    link: '/features/personalized-learning',
    button_text: 'Explore Personalized Learning',
    data: {
      description: 'Create customized learning experiences that adapt to each student\'s unique needs, learning pace, and cognitive abilities. Our AI-powered system adjusts content difficulty and presentation style in real-time.',
      features: [
        {
          title: 'AI-Powered Adaptation',
          description: 'Content adjusts based on student performance',
          icon: 'i-heroicons-sparkles',
          color: 'text-blue-500'
        },
        {
          title: 'Multi-Sensory Learning',
          description: 'Visual, auditory, and kinesthetic approaches',
          icon: 'i-heroicons-puzzle-piece',
          color: 'text-blue-500'
        }
      ]
    }
  },
  {
    title: 'Telemedicine Integration',
    description: 'Remote Healthcare Access',
    icon: 'i-heroicons-video-camera',
    color: "text-green-600",
    gradient: 'from-green-50 to-emerald-50',
    gradient_icon: 'from-green-500 to-emerald-500',
    link: '/features/telemedicine',
    button_text: 'Explore Telemedicine',
    data: {
      description: 'Connect students with specialized healthcare professionals through secure video consultations. Our platform supports various therapy types and medical specializations tailored for special needs care.',
      features: [
        {
          title: 'HIPAA Compliant',
          description: 'Secure, encrypted consultations',
          icon: 'i-heroicons-shield-check',
          color: 'text-green-500'
        },
        {
          title: '24/7 Availability',
          description: 'Round-the-clock medical support',
          icon: 'i-heroicons-clock',
          color: 'text-green-500'
        }
      ]
    }
  },
  {
    title: 'Progress Reports & Analytics',
    description: 'Data-Driven Insights',
    icon: 'i-heroicons-chart-bar-square',
    color: "text-purple-600",
    gradient: 'from-purple-50 to-pink-50',
    gradient_icon: 'from-purple-500 to-pink-500',
    link: '/features/progress-reports',
    button_text: 'Explore Progress Reports',
    data: {
      description: 'Generate comprehensive reports that track student progress across educational and medical domains. Our analytics help identify patterns and optimize learning strategies.',
      features: [
        {
          title: 'Visual Analytics',
          description: 'Interactive charts and graphs',
          icon: 'i-heroicons-chart-pie',
          color: 'text-purple-500'
        },
        {
          title: 'Custom Reports',
          description: 'Tailored report templates',
          icon: 'i-heroicons-document-arrow-down',
          color: 'text-purple-500'
        }
      ]
    }
  },
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive Medical Management',
    icon: 'i-heroicons-heart',
    color: "text-orange-600",
    gradient: 'from-orange-50 to-red-50',
    gradient_icon: 'from-orange-500 to-red-500',
    link: '/features/health-records',
    button_text: 'Explore Health Records',
    data: {
      description: 'Maintain complete electronic health records with secure access controls. Our EHR system ensures all medical information is organized, accessible, and properly secured.',
      features: [
        {
          title: 'Secure Storage',
          description: 'Encrypted cloud-based records',
          icon: 'i-heroicons-lock-closed',
          color: 'text-orange-500'
        },
        {
          title: 'Role-Based Access',
          description: 'Controlled information sharing',
          icon: 'i-heroicons-user-group',
          color: 'text-orange-500'
        }
      ]
    }
  }
]
</script>
