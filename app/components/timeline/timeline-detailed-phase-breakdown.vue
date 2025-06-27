<template>
  <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
    <!-- Phase Header -->
    <div class="p-8 border-b border-gray-100">
      <div class="flex items-center justify-between mb-4">
        <div
          :class="[
            'w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold',
            getColorClass(phase.color)
          ]"
        >
          {{ phase.number }}
        </div>
        <div class="text-right">
          <div class="text-sm text-gray-500 mb-1">Phase {{ phase.number }}</div>
          <div class="text-xs text-gray-400">{{ phase.subtitle }}</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mb-2">
        Phase {{ phase.number }}: {{ phase.title }}
      </h3>
      <p class="text-gray-600">{{ phase.subtitle }}</p>
    </div>

    <!-- User Roles Grid -->
    <div class="p-8">
      <div class="grid lg:grid-cols-4 gap-6 mb-8">
        <div
          v-for="(role, roleIndex) in phase.userRoles"
          :key="roleIndex"
          class="bg-gray-50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow hover:shadow-lg"
        >
          <!-- Role Header -->
          <div class="flex items-center mb-4">
            <div
              :class="[
                'w-10 h-10 rounded-xl flex items-center justify-center mr-3',
                getUserRoleColorClass(role.color)
              ]"
            >
              <Icon :name="role.icon" class="w-5 h-5 text-white" />
            </div>
            <h4 class="font-semibold text-gray-900 text-sm">{{ role.title }}</h4>
          </div>

          <!-- Features List -->
          <div class="space-y-2">
            <div
              v-for="(feature, featureIndex) in role.features"
              :key="featureIndex"
              class="flex items-start space-x-2"
            >
              <Icon
                name="i-heroicons-check"
                :class="['w-4 h-4 mt-0.5 flex-shrink-0', getUserRoleColorClass(role.color, 'text')]"
              />
              <span class="text-gray-700 text-xs leading-relaxed">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Metrics -->
      <div
        :class="[
          'rounded-2xl p-6',
          getColorClass(phase.color, 'light')
        ]"
      >
        <h4 :class="['text-lg font-semibold mb-4', getColorClass(phase.color, 'text')]">
          Phase {{ phase.number }} Success Metrics
        </h4>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(metric, metricIndex) in phase.metrics"
            :key="metricIndex"
            class="text-center"
          >
            <div :class="['text-3xl font-bold mb-1', metric.color]">
              {{ metric.value }}
            </div>
            <div class="text-sm text-gray-600">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  phase: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const getColorClass = (color, variant = 'bg') => {
  const colorMap = {
    green: {
      bg: 'bg-green-500',
      light: 'bg-green-50',
      text: 'text-green-600'
    },
    blue: {
      bg: 'bg-blue-500',
      light: 'bg-blue-50',
      text: 'text-blue-600'
    },
    purple: {
      bg: 'bg-purple-500',
      light: 'bg-purple-50',
      text: 'text-purple-600'
    },
    orange: {
      bg: 'bg-orange-500',
      light: 'bg-orange-50',
      text: 'text-orange-600'
    }
  }

  return colorMap[color]?.[variant] || colorMap.green[variant]
}

const getUserRoleColorClass = (color, variant = 'bg') => {
  const colorMap = {
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-500'
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-green-500'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-500'
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'text-orange-500'
    }
  }

  return colorMap[color]?.[variant] || colorMap.blue[variant]
}
</script>
