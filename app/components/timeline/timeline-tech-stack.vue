<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Technology Foundation
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Built on modern, scalable technologies to ensure reliability and future-ready capabilities.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Icon name="i-heroicons-device-phone-mobile" class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Cross-Platform</h3>
          <div class="space-y-2 text-gray-600">
            <p class="font-medium">Mobile: Flutter (Dart)</p>
            <p class="font-medium">Desktop: .NET MAUI (C#)</p>
            <p class="font-medium">Web: Nuxt.js (TypeScript)</p>
          </div>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Icon name="i-heroicons-server" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Backend & Data</h3>
          <div class="space-y-2 text-gray-600">
            <p class="font-medium">API: Laravel (PHP)</p>
            <p class="font-medium">Database: MySQL</p>
            <p class="font-medium">Authentication: Laravel Sanctum</p>
          </div>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Icon name="i-heroicons-cloud" class="w-8 h-8 text-purple-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Infrastructure</h3>
          <div class="space-y-2 text-gray-600">
            <p class="font-medium">Hosting: AWS/DigitalOcean</p>
            <p class="font-medium">CI/CD: GitHub Actions</p>
            <p class="font-medium">Security: Enterprise-grade</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
