<template>
  <section class="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Transform your Child's Learning Experience with Q-Academy
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the transformative impact of Q-Academy on families and educational communities across the Philippines.
        </p>
      </div>

      <!-- Main Testimonial -->
      <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-12">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Testimonial Content -->
          <div>
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <Icon v-for="index in 5" :key="index" name="i-heroicons-star-solid" class="w-5 h-5" />
              </div>
              <span class="ml-2 text-sm text-gray-600">5.0 out of 5</span>
            </div>

            <blockquote class="text-xl lg:text-2xl text-gray-900 font-medium leading-relaxed mb-6">
              "Q-Academy has completely changed the way my child learns and receives healthcare. The integrated platform allows seamless communication between teachers and doctors, ensuring comprehensive support for my child's unique needs."
            </blockquote>

            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">JC</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">Josefino Cardino</p>
                <p class="text-sm text-gray-600">Dedicated Parent</p>
              </div>
            </div>
          </div>

          <!-- Testimonial Image/Illustration -->
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 text-center">
              <div class="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <NuxtImg src="/q-logo.png" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Empowering Families</h3>
              <p class="text-gray-600 text-sm">
                Supporting over 500+ families in their special needs journey
              </p>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-blue-500" />
            </div>
            <div class="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <Icon name="i-heroicons-heart" class="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.initials"
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <Icon v-for="index in testimonial.rating" :key="index" name="i-heroicons-star-solid" class="w-4 h-4" />
            </div>
          </div>
          <p class="text-gray-700 mb-4 leading-relaxed">
            {{ testimonial.content }}
          </p>
          <div class="flex items-center">
            <div :class="['w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center mr-3', testimonial.color]">
              <span class="text-white font-bold text-sm">{{ testimonial.initials }}</span>
            </div>
            <div>
              <p class="font-semibold text-gray-900 text-sm">{{ testimonial.name }}</p>
              <p class="text-xs text-gray-600">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <div class="bg-white rounded-2xl p-8 shadow-lg inline-block">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Child's Learning Journey?</h3>
          <p class="text-gray-600 mb-6 max-w-2xl">
            Join hundreds of families who have already experienced the benefits of integrated special needs education and healthcare.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtButton size="lg" class="px-8 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white" @click="navigateTo('/solutions')">
              Explore Our Solutions
            </NuxtButton>
            <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4 cursor-pointer" @click="navigateTo('/demo')">
              Schedule a Demo
            </NuxtButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Maria Santos",
    role: "Special Education Teacher",
    content: "The desktop application makes it incredibly easy to create personalized learning activities and tracking. The integration with healthcare providers has revolutionized our approach to special education.",
    rating: 5,
    initials: "MS",
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: "Dr. Rosa Martinez",
    role: "Pediatric Specialist",
    content: "The web platform provides seamless access to student records and enables effective telemedicine consultations. It's transformed how we deliver healthcare to students with special needs.",
    rating: 5,
    initials: "DR",
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: "Anna Lopez",
    role: "Parent & Advocate",
    content: "My daughter loves using the mobile app for her learning activities. As a parent, I can monitor her progress and communicate easily with both teachers and healthcare providers.",
    rating: 5,
    initials: "AL",
    color: 'from-orange-500 to-red-500'
  }
]
</script>
