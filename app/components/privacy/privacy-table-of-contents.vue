<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl p-8 shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Table of Contents</h2>
        <nav class="grid md:grid-cols-2 gap-4">
          <NuxtLink to="#information-collection" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-blue-600 font-semibold text-sm">1</span>
            </div>
            <span class="text-gray-700 hover:text-blue-600">Information We Collect</span>
          </NuxtLink>
          <NuxtLink to="#information-use" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span class="text-green-600 font-semibold text-sm">2</span>
            </div>
            <span class="text-gray-700 hover:text-green-600">How We Use Information</span>
          </NuxtLink>
          <NuxtLink to="#information-sharing" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <span class="text-purple-600 font-semibold text-sm">3</span>
            </div>
            <span class="text-gray-700 hover:text-purple-600">Information Sharing</span>
          </NuxtLink>
          <NuxtLink to="#data-security" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <span class="text-orange-600 font-semibold text-sm">4</span>
            </div>
            <span class="text-gray-700 hover:text-orange-600">Data Security</span>
          </NuxtLink>
          <NuxtLink to="#user-rights" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
              <span class="text-teal-600 font-semibold text-sm">5</span>
            </div>
            <span class="text-gray-700 hover:text-teal-600">Your Rights</span>
          </NuxtLink>
          <NuxtLink to="#contact-information" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <span class="text-red-600 font-semibold text-sm">6</span>
            </div>
            <span class="text-gray-700 hover:text-red-600">Contact Information</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </section>
</template>
