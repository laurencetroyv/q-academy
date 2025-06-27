<template>
  <div class="border-t border-gray-200 pt-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Additional Platform Capabilities
      </h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Explore more features that enhance the Q-Academy experience.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- QR Code System -->
      <div
        v-for="feature in features"
        :key="feature.link"
        class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div
          :class="[
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
            `bg-${feature.color}-100`
          ]">
          <NuxtIcon :name="feature.icon" :class="['w-6 h-6', `bg-${feature.color}-100`]" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ feature.description }}</p>
        <NuxtLink
          :to="feature.to"
          :class="[
          'font-medium text-sm',
          `text-${feature.color}-600 hover:text-${feature.color}-500`
          ]"
        >
          Learn More →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const features = [
  {
    title: 'QR Code Integration',
    description: 'Quick and secure student identification and activity access through QR codes.',
    icon: 'i-heroicons-qr-code',
    to: '/features/qr-integration',
    color: 'blue'
  },
  {
    title: 'Multi-Platform Access',
    description: 'Seamless experience across desktop, web, and mobile applications.',
    icon: 'i-heroicons-device-phone-mobile',
    to: '/features/multi-platform',
    color: 'green'
  },
  {
    title: 'Communication Hub',
    description: 'Integrated messaging system connecting teachers, doctors, and families.',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/features/communication',
    color: 'purple'
  },
  {
    title: 'Advanced Security',
    description: 'Enterprise-grade security with HIPAA compliance and data encryption.',
    icon: 'i-heroicons-shield-check',
    to: '/features/security',
    color: 'red'
  },
  {
    title: 'API Integration',
    description: 'Connect with existing school systems and third-party healthcare platforms.',
    icon: 'i-heroicons-code-bracket',
    to: '/features/api-integration',
    color: 'indigo'
  },
  {
    title: 'Offline Capabilities',
    description: 'Continue learning and data collection even without internet connectivity.',
    icon: 'i-heroicons-cloud-arrow-down',
    to: '/features/offline-support',
    color: 'yellow'
  }
];
</script>
