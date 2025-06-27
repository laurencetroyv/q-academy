<template>
  <section id="solutions-preview" class="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Integrated Solutions for Special Needs
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Three powerful platforms working together to provide comprehensive support.
        </p>
      </div>

      <!-- Solutions Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-12">
        <!-- LMS Solution -->
        <div
            v-for="solution in solutions"
            :key="solution.title"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl duration-300 hover:bg-slate-50 hover:scale-105 transition-all"
        >
          <div :class="['w-16 h-16 bg-gradient-to-r rounded-2xl mb-6 flex items-center justify-center', solution.color]">
            <Icon :name="solution.icon" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ solution.title }}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">{{ solution.description }}</p>
          <NuxtLink
              :to="solution.link"
              :class="['font-medium flex items-center', solution.link_color]"
          >
            {{ solution.button_text }}
            <NuxtIcon name="i-heroicons-arrow-right" class="ml-2 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>

      <!-- CTA to Solutions Page -->
      <div class="text-center">
        <NuxtLink to="/solutions">
          <NuxtButton color="primary" size="lg" class="px-8 py-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
            View All Solutions
          </NuxtButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const solutions = [
  {
    title: 'Learning Management System',
    description: 'Comprehensive educational platform designed specifically for special needs students with adaptive learning capabilities.',
    icon: 'i-heroicons-computer-desktop',
    link: '/solutions/learning-management',
    color: 'from-blue-500 to-cyan-500',
    link_color: 'text-blue-600 hover:text-blue-500',
    button_text: 'Explore LMS Solution'
  },
  {
    title: 'Telemedicine Platform',
    description: 'Secure video consultations, remote healthcare services connecting students with specialized medical professionals and giving them access to necessary care.',
    icon: 'i-heroicons-video-camera',
    link: '/solutions/telemedicine',
    color: 'from-green-500 to-emerald-500',
    link_color: 'text-green-600 hover:text-green-500',
    button_text: 'Explore Telemedicine'
  },
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive health record management system ensuring secure storage, seamless access to medical information and progress tracking for students with special needs.',
    icon: 'i-heroicons-document-text',
    link: '/solutions/electronic-health-records',
    color: 'from-purple-500 to-pink-500',
    link_color: 'text-purple-600 hover:text-purple-500',
    button_text: 'Explore EHR System'
  }
];
</script>
