<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-cyan-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><span class="text-blue-600 font-medium">Personalized Learning</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <NuxtBadge
              class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
              icon="i-heroicons-academic-cap"
            >
              Adaptive Learning Technology
            </NuxtBadge>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Personalized Learning Modules
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform education for students with special needs through AI-powered adaptive learning that adjusts to each child's unique abilities, learning pace, and cognitive style.
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Adaptive Content Delivery</h3>
                  <p class="text-gray-600">Content automatically adjusts based on student performance and learning patterns</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Multi-Sensory Approaches</h3>
                  <p class="text-gray-600">Visual, auditory, and kinesthetic learning methods combined</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Real-Time Progress Tracking</h3>
                  <p class="text-gray-600">Continuous monitoring and adjustment of learning objectives</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton size="lg" class="px-8 py-4 bg-blue-500 text-white hover:bg-blue-400 transition-colors cursor-pointer" @click="navigateTo('/demo')">
                See Demo
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4 cursor-pointer">
                Download Brochure
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-white" />
                </div>
                <h3 class="font-semibold text-gray-900">Adaptive Learning Engine</h3>
              </div>

              <!-- Progress Bars -->
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span class="text-gray-600">Reading Comprehension</span>
                    <span class="text-blue-600 font-medium">85%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-500 h-2 rounded-full" style="width: 85%"/>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span class="text-gray-600">Mathematical Skills</span>
                    <span class="text-green-600 font-medium">72%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 72%"/>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span class="text-gray-600">Social Interaction</span>
                    <span class="text-purple-600 font-medium">90%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-purple-500 h-2 rounded-full" style="width: 90%"/>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-sparkles" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Personalized Learning Works
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our advanced system creates unique learning pathways for each student through intelligent adaptation and continuous assessment.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Step 1: Assessment -->
          <div class="text-center hover:scale-105 transition-transform">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-clipboard-document-check" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">1</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Initial Assessment</h3>
            <p class="text-gray-600 leading-relaxed">
              Comprehensive evaluation of student's current abilities, learning preferences, and special needs to establish baseline understanding.
            </p>
          </div>

          <!-- Step 2: Adaptation -->
          <div class="text-center hover:scale-105 transition-transform">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-cog-6-tooth" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">2</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">AI-Powered Adaptation</h3>
            <p class="text-gray-600 leading-relaxed">
              Our machine learning algorithms continuously analyze student responses and adjust content difficulty, presentation style, and pacing in real-time.
            </p>
          </div>

          <!-- Step 3: Optimization -->
          <div class="text-center hover:scale-105 transition-transform">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-chart-bar-square" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">3</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Continuous Optimization</h3>
            <p class="text-gray-600 leading-relaxed">
              System learns from each interaction, refining the learning path and providing increasingly personalized educational experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Detail -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Advanced Learning Adaptations
            </h2>

            <div class="space-y-6">
              <!-- Feature 1 -->
              <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-eye" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Visual Learning Support</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Interactive visual elements, infographics, and multimedia content designed specifically for visual learners with special needs.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 2 -->
              <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-speaker-wave" class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Auditory Integration</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Text-to-speech capabilities, audio instructions, and sound-based learning activities for auditory processing support.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 3 -->
              <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-hand-raised" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Kinesthetic Activities</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Touch-based interactions, gesture recognition, and movement-integrated learning for tactile and kinesthetic learners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Representation -->
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-100 via-green-50 to-purple-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Learning Adaptation Engine</h3>
                <p class="text-gray-600">Real-time content adjustment</p>
              </div>

              <!-- Adaptation Flow -->
              <div class="space-y-4">
                <div class="bg-white rounded-lg p-4 flex items-center space-x-3">
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-user" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Student Input</p>
                    <p class="text-sm text-gray-600">Response analysis</p>
                  </div>
                </div>

                <div class="flex justify-center">
                  <Icon name="i-heroicons-arrow-down" class="w-6 h-6 text-gray-400" />
                </div>

                <div class="bg-white rounded-lg p-4 flex items-center space-x-3">
                  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-cpu-chip" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">AI Processing</p>
                    <p class="text-sm text-gray-600">Pattern recognition</p>
                  </div>
                </div>

                <div class="flex justify-center">
                  <Icon name="i-heroicons-arrow-down" class="w-6 h-6 text-gray-400" />
                </div>

                <div class="bg-white rounded-lg p-4 flex items-center space-x-3">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-adjustments-horizontal" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Content Adaptation</p>
                    <p class="text-sm text-gray-600">Personalized delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how personalized learning has transformed educational outcomes for students with special needs.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Success Story 1 -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white font-bold text-xl">85%</span>
              </div>
              <h3 class="font-semibold text-gray-900">Improved Reading Skills</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              Students with dyslexia showed an average 85% improvement in reading comprehension after 6 months of personalized learning modules.
            </p>
          </div>

          <!-- Success Story 2 -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white font-bold text-xl">92%</span>
              </div>
              <h3 class="font-semibold text-gray-900">Enhanced Engagement</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              92% of students with ADHD demonstrated increased attention spans and task completion rates using adaptive content delivery.
            </p>
          </div>

          <!-- Success Story 3 -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="text-center mb-4">
              <div class="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white font-bold text-xl">78%</span>
              </div>
              <h3 class="font-semibold text-gray-900">Better Communication</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              Students on the autism spectrum achieved 78% improvement in communication skills through personalized social learning modules.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <app-call-to-action
      title="Ready to Transform Learning?"
      description="Discover how personalized learning can unlock your student's potential and create meaningful educational progress."
      color="bg-gradient-to-r from-blue-50 to-cyan-50"
      first-button-text="Schedule a Demo"
      first-button-link="/schedule-demo"
      first-button-color=" bg-blue-500 text-white hover:bg-blue-400 transition-colors"
      second-button-text="Contact Specialist"
      second-button-link="/contact-us"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Personalized Learning Modules - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Discover Q-Academy\'s AI-powered personalized learning modules designed specifically for students with special needs. Adaptive content, multi-sensory approaches, and real-time progress tracking.' }
  ]
})
</script>
