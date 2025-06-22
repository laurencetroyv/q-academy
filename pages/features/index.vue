<template>
  <div>
    <app-hero-section
      title="Platform Features"
      description="Discover the comprehensive features that make Q-Academy the leading platform for special needs education and healthcare integration."
      color="from-blue-50 via-cyan-50 to-teal-50"
    />

    <features-feature-overview />

    <app-call-to-action
      title="Ready to Experience These Features?"
      description="See how Q-Academy's comprehensive feature set can transform your special needs education and healthcare management."
      color="bg-gray-50"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Platform Features - Q-Academy',
  meta: [
    { name: 'description', content: 'Explore Q-Academy\'s comprehensive features including personalized learning, telemedicine, progress reports, and electronic health records for special needs education.' }
  ]
})
</script>
