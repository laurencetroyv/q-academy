<template>
  <div class="grid lg:grid-cols-4 gap-6 mb-16">
    <div
      v-for="(phase, index) in phaseOverview"
      :key="phase"
      class="relative hover:scale-105 transition-transform duration-300"
    >
      <div :class="['bg-gradient-to-br rounded-2xl p-6 border-2', phase.gradient_color]">
        <div
          :class="[
            'px-3 py-1 rounded-full text-xs font-medium mb-4',
            getStatusStyles(phase.status)
          ]"
        >
          {{ getStatusText(phase.status) }}
        </div>

        <div class="flex items-center justify-between mb-4">
          <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4', phase.bg_color]">
            <span class="text-white font-bold">{{ phase.number }}</span>
          </div>
          <div :class="['px-3 py-1 rounded-full text-xs font-medium', phase.pill_color]">
            {{ phase.quarter }}
          </div>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ phase.title }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ phase.description }}</p>
        <div :class="['text-sm font-medium', phase.text_color]">{{ phase.duration }}</div>

      </div>
      <div v-if="index === 0" class="absolute -top-1 -right-1">
        <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

const getStatusStyles = (status) => {
  const styles = {
    current: 'bg-blue-100 text-blue-700',
    upcoming: 'bg-yellow-100 text-yellow-700',
    planned: 'bg-gray-100 text-gray-700',
    completed: 'bg-green-100 text-green-700'
  }
  return styles[status] || styles.planned
}

const getStatusText = (status) => {
  const texts = {
    current: 'In Progress',
    upcoming: 'Next Phase',
    planned: 'Planned',
    completed: 'Completed'
  }
  return texts[status] || 'Planned'
}

const phaseOverview = [
  {
    number: '01',
    title: 'Foundation & Core LMS',
    duration: '8 months development',
    status: 'current',
    bg_color: 'bg-blue-500',
    gradient_color: 'from-green-50 to-emerald-50 border-green-200',
    text_color: 'text-blue-600',
    pill_color: 'bg-blue-100 text-blue-800',
    quarter: "Q3 2025",
    description: 'Essential learning management and basic platform infrastructure.'
  },
  {
    number: '02',
    title: 'Enhanced Features',
    duration: '8 months development',
    status: 'upcoming',
    bg_color: 'bg-green-500',
    gradient_color: 'from-blue-50 to-indigo-50 border-blue-200',
    text_color: 'text-green-600',
    pill_color: 'bg-green-100 text-green-800',
    quarter: "Q3 2026",
    description: 'Analytics, communication, and enhanced user experience.'
  },
  {
    number: '03',
    title: 'Telemedicine & EHR',
    duration: '8 months development',
    status: 'planned',
    bg_color: 'bg-purple-500',
    gradient_color: 'from-purple-50 to-pink-50 border-purple-200',
    text_color: 'text-purple-600',
    pill_color: 'bg-purple-100 text-purple-800',
    quarter: "Q3 2027",
    description: 'Medical professional integration and electronic health records.'
  },
  {
    number: '04',
    title: 'AI & Analytics',
    duration: '8 months development',
    status: 'planned',
    bg_color: 'bg-orange-500',
    gradient_color: 'from-orange-50 to-red-50 border-orange-200',
    text_color: 'text-orange-600',
    pill_color: 'bg-orange-100 text-orange-800',
    quarter: "Q3 2028",
    description: 'Intelligent features, advanced reporting, and API integrations.'
  }
];
</script>
