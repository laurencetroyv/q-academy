<template>
  <section id="features-preview" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Platform Features
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how Q-Academy integrates education and healthcare to support students with special needs.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="text-center group hover:scale-105 transition-transform duration-300"
        >
          <div
            :class="[
              'w-16 h-16 bg-gradient-to-r rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow',
              feature.color
            ]">
            <NuxtIcon :name="feature.icon" class="w-8 h-8 text-white"/>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ feature.description }}</p>
          <NuxtLink
            :to="feature.link"
            :class="['font-medium text-sm', feature.link_color]"
          >
            Learn More →
          </NuxtLink>
        </div>

      </div>

      <div class="text-center">
        <NuxtLink to="/features">
          <NuxtButton size="lg" class="px-8 py-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
            Explore All Features
          </NuxtButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const features = [
  {
    title: 'Personalized Learning',
    description: 'Adaptive learning modules tailored to each student\'s unique needs and capabilities.',
    icon: 'i-heroicons-academic-cap',
    link: '/features/personalized-learning',
    color: 'from-blue-500 to-cyan-500',
    link_color: 'text-blue-600 hover:text-blue-500'
  },
  {
    title: 'Telemedicine',
    description: 'Real-time medical consultations and healthcare monitoring through integrated technology.',
    icon: 'i-heroicons-video-camera',
    link: '/features/telemedicine',
    color: 'from-green-500 to-emerald-500',
    link_color: 'text-green-600 hover:text-green-500'
  },
  {
    title: 'Progress Reports',
    description: 'Comprehensive analytics and reporting for student development tracking and insights.',
    icon: 'i-heroicons-chart-bar-square',
    link: '/features/progress-reports',
    color: 'from-purple-500 to-pink-500',
    link_color: 'text-purple-600 hover:text-purple-500'
  },
  {
    title: 'Health Records',
    description: 'Secure electronic health record management with easy access for authorized personnel.',
    icon: 'i-heroicons-heart',
    link: '/features/health-records',
    color: 'from-orange-500 to-red-500',
    link_color: 'text-orange-600 hover:text-orange-500'
  }
]
</script>
