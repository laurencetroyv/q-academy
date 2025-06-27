<!-- DevelopmentBanner.vue -->
<template>
  <div class="bg-gradient-to-r bg-transparent text-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between py-3">
        <div class="flex items-center space-x-3 mb-2 md:mb-0">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium">🚧 Platform in Development</span>
          </div>
        </div>

        <div class="flex items-center space-x-4 text-sm">
          <span class="text-gray-900">Expected Launch: Q3 2025</span>
          <NuxtLink
            to="/timeline"
            class="text-gray-900 hover:text-blue-200 font-medium underline decoration-dotted underline-offset-2 transition-colors"
          >
            View Timeline →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
