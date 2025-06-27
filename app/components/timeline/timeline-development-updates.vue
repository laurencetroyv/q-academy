<template>
  <section class="py-16 bg-gray-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">
        Stay Updated on Our Progress
      </h2>
      <p class="text-gray-600 mb-8">
        Get monthly development updates, feature previews, and early access opportunities delivered to your inbox.
      </p>

      <div class="max-w-md mx-auto">
        <div class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email for updates"
            class="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
          <NuxtButton color="primary" size="lg" class="px-8 py-3 whitespace-nowrap">
            Subscribe
          </NuxtButton>
        </div>
        <p class="text-gray-500 text-sm mt-4">
          No spam, unsubscribe anytime. Read our
          <NuxtLink to="/privacy" class="text-blue-600 hover:text-blue-500">Privacy Policy</NuxtLink>
          .
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
