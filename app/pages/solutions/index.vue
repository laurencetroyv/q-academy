<template>
  <div>
    <app-hero-section
      title="Integrated Solutions"
      description="Three powerful platforms working together to provide comprehensive support for special needs education and healthcare management."
      color="from-blue-50 via-indigo-50 to-purple-50"
    />

    <!-- Main Solutions -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Solutions Grid -->
        <div class="space-y-20">
          <!-- LMS Solution -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Icon name="i-heroicons-computer-desktop" class="w-4 h-4 mr-2"/>
                Desktop Platform for Educators
              </div>

              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Learning Management System
              </h2>

              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                A comprehensive educational platform designed specifically for special needs education. Create, manage,
                and track personalized learning experiences with powerful tools built for educators.
              </p>

              <!-- Key Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Adaptive Learning Engine</h3>
                    <p class="text-gray-600">AI-powered content that adjusts to each student's unique needs</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Progress Tracking & Analytics</h3>
                    <p class="text-gray-600">Comprehensive reporting and data visualization tools</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Collaborative Tools</h3>
                    <p class="text-gray-600">Seamless communication with healthcare providers and families</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtButton
                  size="lg"
                  class="px-8 py-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
                  trailing-icon="i-heroicons-arrow-right"
                  label="Explore LMS Solution"
                  @click="navigateTo('/solutions/learning-management')"
                />

                <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                  View Demo
                </NuxtButton>
              </div>
            </div>

            <!-- LMS Visual -->
            <div class="relative">
              <div class="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
                <NuxtImg src="/teacher-dashboard.png" alt="LMS Dashboard"/>

                <!-- Floating Badge -->
                <div class="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                  <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Icon name="i-heroicons-desktop-computer" class="w-4 h-4 text-white"/>
                    </div>
                    <span class="text-xs font-medium">Desktop App</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Telemedicine Solution -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Telemedicine Visual -->
            <div class="relative order-2 lg:order-1">
              <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
                <div class="bg-white rounded-xl shadow-lg p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-900">Video Consultation</h3>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                      <span class="text-xs text-green-600">Live</span>
                    </div>
                  </div>

                  <!-- Video Interface -->
                  <div class="space-y-4">
                    <div class="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                      <div class="text-center text-white">
                        <Icon name="i-heroicons-video-camera" class="w-12 h-12 mx-auto mb-2"/>
                        <p class="text-sm">Dr. Maria Santos</p>
                        <p class="text-xs text-gray-300">Pediatric Specialist</p>
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex space-x-2">
                        <button class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <Icon name="i-heroicons-phone" class="w-4 h-4 text-white rotate-[135deg]"/>
                        </button>
                        <button class="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <Icon name="i-heroicons-microphone-slash" class="w-4 h-4 text-white"/>
                        </button>
                        <button class="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <Icon name="i-heroicons-video-camera-slash" class="w-4 h-4 text-white"/>
                        </button>
                      </div>
                      <span class="text-xs text-gray-600">15:23</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Badge -->
              <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-globe-alt" class="w-4 h-4 text-white"/>
                  </div>
                  <span class="text-xs font-medium">Web Platform</span>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div
                class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Icon name="i-heroicons-video-camera" class="w-4 h-4 mr-2"/>
                Web Platform for Healthcare Professionals
              </div>

              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Telemedicine Platform
              </h2>

              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Secure, HIPAA-compliant telemedicine solution connecting students with specialized healthcare
                professionals. Provide remote consultations, therapy sessions, and medical monitoring.
              </p>

              <!-- Key Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <div
                    class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Specialized Care Access</h3>
                    <p class="text-gray-600">Connect with occupational, speech, and behavioral therapists</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div
                    class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Secure Video Consultations</h3>
                    <p class="text-gray-600">HIPAA-compliant platform with end-to-end encryption</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div
                    class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Integrated Health Records</h3>
                    <p class="text-gray-600">Real-time access to student medical history and progress</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtButton
                  size="lg"
                  class="px-8 py-4 cursor-pointer bg-green-500 hover:bg-green-600 text-white"
                  label="Explore Telemedicine"
                  trailing-icon="i-heroicons-arrow-right"
                  @click="navigateTo('/solutions/telemedicine')"
                />

                <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4 cursor-pointer">
                  View Demo
                </NuxtButton>
              </div>
            </div>
          </div>

          <!-- EHR Solution -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <Icon name="i-heroicons-document-text" class="w-4 h-4 mr-2"/>
                Comprehensive Health Data Management
              </div>

              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Electronic Health Records
              </h2>

              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Centralized, secure health record management system that ensures all student medical information is
                organized, accessible, and properly maintained across all platforms.
              </p>

              <!-- Key Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <div
                    class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Secure Cloud Storage</h3>
                    <p class="text-gray-600">Enterprise-grade security with automated backups</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div
                    class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Role-Based Access Control</h3>
                    <p class="text-gray-600">Granular permissions for teachers, doctors, and families</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div
                    class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Cross-Platform Integration</h3>
                    <p class="text-gray-600">Seamless data sharing between LMS and telemedicine</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtButton size="lg" class="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white" trailing-icon="i-heroicons-arrow-right" label="Explore EHR System" @click="navigateTo('/solutions/electronic-health-records')"/>

                <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                  View Demo
                </NuxtButton>
              </div>
            </div>

            <!-- EHR Visual -->
            <div class="relative">
              <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                <div class="bg-white rounded-xl shadow-lg p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-900">Health Records</h3>
                    <div class="flex items-center space-x-2">
                      <Icon name="i-heroicons-lock-closed" class="w-4 h-4 text-green-500"/>
                      <span class="text-xs text-green-600">Secure</span>
                    </div>
                  </div>

                  <!-- EHR Interface -->
                  <div class="space-y-4">
                    <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <span class="text-white font-bold text-sm">AM</span>
                      </div>
                      <div>
                        <p class="font-medium text-gray-900">Alex Martinez</p>
                        <p class="text-xs text-gray-600">Student ID: QA-2024-001</p>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-blue-50 rounded-lg p-3">
                        <div class="text-xs text-gray-600 mb-1">Last Consultation</div>
                        <div class="font-medium text-gray-900">Dec 15, 2024</div>
                      </div>
                      <div class="bg-green-50 rounded-lg p-3">
                        <div class="text-xs text-gray-600 mb-1">Next Appointment</div>
                        <div class="font-medium text-gray-900">Dec 22, 2024</div>
                      </div>
                    </div>

                    <div class="space-y-2">
                      <div class="text-xs text-gray-600">Recent Records</div>
                      <div class="space-y-1">
                        <div class="flex items-center justify-between text-sm">
                          <span class="text-gray-700">Speech Therapy Session</span>
                          <span class="text-xs text-gray-500">Dec 10</span>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                          <span class="text-gray-700">Progress Assessment</span>
                          <span class="text-xs text-gray-500">Dec 8</span>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                          <span class="text-gray-700">Medical Check-up</span>
                          <span class="text-xs text-gray-500">Dec 1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Badge -->
              <div class="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-shield-check" class="w-4 h-4 text-white"/>
                  </div>
                  <span class="text-xs font-medium">HIPAA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Benefits -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Power of Integration
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            When our three solutions work together, they create a comprehensive ecosystem that transforms special needs
            education and healthcare.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <!-- Integration Benefit 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-arrow-path" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Seamless Data Flow</h3>
            <p class="text-gray-600 leading-relaxed">
              Student progress from LMS automatically updates health records, while medical insights inform personalized
              learning plans.
            </p>
          </div>

          <!-- Integration Benefit 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Unified Communication</h3>
            <p class="text-gray-600 leading-relaxed">
              Teachers, doctors, and families stay connected through integrated messaging and shared progress updates
              across all platforms.
            </p>
          </div>

          <!-- Integration Benefit 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar-square" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Holistic Insights</h3>
            <p class="text-gray-600 leading-relaxed">
              Comprehensive analytics combine educational and medical data to provide complete pictures of student
              development and needs.
            </p>
          </div>
        </div>

        <!-- Integration Diagram -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">How Our Solutions Connect</h3>

          <div class="grid md:grid-cols-3 gap-8 items-center">
            <!-- LMS -->
            <div class="text-center">
              <div class="w-20 h-20 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-computer-desktop" class="w-10 h-10 text-white"/>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Learning Management</h4>
              <p class="text-sm text-gray-600">Educational activities and progress tracking</p>
            </div>

            <!-- Connection Arrows -->
            <div class="hidden md:flex items-center justify-center">
              <div class="flex items-center space-x-2">
                <Icon name="i-heroicons-arrow-right" class="w-10 h-10 text-gray-400"/>
                <Icon name="i-heroicons-arrow-down" class="w-10 h-10 text-gray-400"/>
                <Icon name="i-heroicons-arrow-left" class="w-10 h-10 text-gray-400"/>
              </div>
            </div>

            <!-- Telemedicine -->
            <div class="text-center">
              <div class="w-20 h-20 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-video-camera" class="w-10 h-10 text-white"/>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Telemedicine</h4>
              <p class="text-sm text-gray-600">Healthcare consultations and monitoring</p>
            </div>
          </div>

          <!-- Central EHR -->
          <div class="flex justify-center mt-8">
            <div class="text-center">
              <div class="w-24 h-24 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-document-text" class="w-12 h-12 text-white"/>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Electronic Health Records</h4>
              <p class="text-sm text-gray-600 max-w-xs">Central hub connecting all platforms with secure data
                management</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <app-call-to-action
      title="Ready to Transform Special Needs Education?"
      description="Discover how our integrated solutions can revolutionize the way you support students with special needs."
      color="bg-gradient-to-r from-blue-200 via-purple-200 to-green-200"
      first-button-color="bg-blue-500 hover:bg-blue-600 text-white"
    />
  </div>
</template>

<script setup>
import AppHeroSection from "~/components/app-hero-section.vue";

useHead({
  title: 'Integrated Solutions - Q-Academy',
  meta: [
    {
      name: 'description',
      content: 'Explore Q-Academy\'s integrated solutions: Learning Management System, Telemedicine Platform, and Electronic Health Records working together for comprehensive special needs support.'
    }
  ]
})
</script>
