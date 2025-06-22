<template>
  <section class="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-16 pb-20 lg:pb-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div class="lg:pr-8">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <NuxtIcon name="i-heroicons-academic-cap" class="w-4 h-4 mr-2" />
            SPED Learning and Telemedicine Solutions
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transforming Lives Through
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Integrated Support
            </span>
          </h1>

          <!-- Description -->
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Experience a revolutionary platform designed for seamless collaboration between educators and healthcare professionals, supporting students with special needs.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <NuxtButton
                color="primary"
                size="lg"
                class="px-8 py-4 text-base font-semibold cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
                label="Get Started Today"
                @click="navigateTo('/get-started')"
            />
            <NuxtButton
                color="white"
                variant="outline"
                size="lg"
                class="px-8 py-4 text-base font-semibold cursor-pointer"
                trailing-icon="i-heroicons-play"
                label="Watch Demo"
                @click="modal = true"
            />
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div class="text-center sm:text-left">
              <div class="text-2xl font-bold text-gray-900">500+</div>
              <div class="text-sm text-gray-600">Students Supported</div>
            </div>
            <div class="text-center sm:text-left">
              <div class="text-2xl font-bold text-gray-900">50+</div>
              <div class="text-sm text-gray-600">Partner Schools</div>
            </div>
            <div class="text-center sm:text-left">
              <div class="text-2xl font-bold text-gray-900">24/7</div>
              <div class="text-sm text-gray-600">Medical Support</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Hero Image/Illustration -->
        <div class="mt-12 lg:mt-0 relative">
          <div class="relative">
            <!-- Main Image Container -->
            <div class="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <!-- Doctor Image -->
              <div class="flex items-center justify-center mb-6">
                <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-user-circle" class="w-20 h-20 text-white" />
                </div>
              </div>

              <!-- Platform Preview -->
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <div class="flex items-center space-x-2 mb-3">
                  <div class="w-3 h-3 bg-red-400 rounded-full"/>
                  <div class="w-3 h-3 bg-yellow-400 rounded-full"/>
                  <div class="w-3 h-3 bg-green-400 rounded-full"/>
                </div>
                <div class="space-y-2">
                  <div class="h-2 bg-blue-200 rounded w-3/4"/>
                  <div class="h-2 bg-gray-200 rounded w-1/2"/>
                  <div class="h-2 bg-cyan-200 rounded w-5/6"/>
                </div>
              </div>

              <!-- Platform Features -->
              <div class="text-center">
                <h3 class="font-semibold text-gray-900 mb-2">Integrated Platform</h3>
                <p class="text-sm text-gray-600">LMS + Telemedicine + EHR</p>
              </div>
            </div>

            <!-- Floating Cards -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">

              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Student Activity</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-heart" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Health Monitor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <NuxtModal v-model:open="modal">
    <template #content>
      <video controls class="w-full h-auto">
        <source src="https://videos.pexels.com/video-files/3195392/3195392-uhd_2560_1440_25fps.mp4" type="video/mp4">
      </video>
    </template>
  </NuxtModal>
</template>

<script setup lang="ts">
const modal = ref<boolean>(false)
</script>
