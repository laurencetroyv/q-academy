<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><span class="text-green-600 font-medium">Telemedicine</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-video-camera" class="w-4 h-4 mr-2" />
              HIPAA-Compliant Healthcare Platform
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Telemedicine Integration
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect students with specialized healthcare professionals through secure video consultations, remote therapy sessions, and real-time medical monitoring designed specifically for special needs care.
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Specialized Care Access</h3>
                  <p class="text-gray-600">Connect with occupational, speech, behavioral, and developmental therapists</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Secure Video Consultations</h3>
                  <p class="text-gray-600">HIPAA-compliant platform with end-to-end encryption</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">24/7 Emergency Support</h3>
                  <p class="text-gray-600">Round-the-clock access to medical professionals for urgent needs</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton color="primary" size="lg" class="px-8 py-4">
                Start Consultation
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                View Demo
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <!-- Video Interface Mockup -->
              <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-semibold text-gray-900">Video Consultation</h3>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                    <span class="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>

                <div class="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <div class="text-center text-white">
                    <div class="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Icon name="i-heroicons-user" class="w-8 h-8 text-white" />
                    </div>
                    <p class="text-sm font-medium">Dr. Maria Santos</p>
                    <p class="text-xs text-gray-300">Speech Therapist</p>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex space-x-2">
                    <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Icon name="i-heroicons-phone" class="w-4 h-4 text-white rotate-[135deg]" />
                    </div>
                    <div class="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                      <Icon name="i-heroicons-microphone-slash" class="w-4 h-4 text-white" />
                    </div>
                    <div class="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                      <Icon name="i-heroicons-video-camera" class="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span class="text-xs text-gray-600 font-mono">23:45</span>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-shield-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">HIPAA Secure</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Care Types -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Specialized Healthcare Professionals
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Access a comprehensive network of healthcare specialists trained in special needs care and therapy.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Occupational Therapist -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-hand-raised" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Occupational Therapists</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Help students develop daily living skills, fine motor abilities, and sensory processing techniques.
            </p>
            <div class="text-sm text-green-600 font-medium">
              Available 24/7
            </div>
          </div>

          <!-- Speech Therapist -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-speaker-wave" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Speech Therapists</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Support communication development, language skills, and speech articulation for better expression.
            </p>
            <div class="text-sm text-blue-600 font-medium">
              Specialized in AAC
            </div>
          </div>

          <!-- Behavioral Therapist -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-heart" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Behavioral Therapists</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Provide ABA therapy, social skills training, and behavioral intervention strategies.
            </p>
            <div class="text-sm text-purple-600 font-medium">
              ABA Certified
            </div>
          </div>

          <!-- Developmental Specialist -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-academic-cap" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Developmental Specialists</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Monitor developmental milestones and create personalized intervention plans.
            </p>
            <div class="text-sm text-orange-600 font-medium">
              Early Intervention
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Advanced Telemedicine Features
            </h2>

            <div class="space-y-6">
              <!-- Feature 1 -->
              <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-shield-check" class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">HIPAA-Compliant Security</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Enterprise-grade security with end-to-end encryption, secure data transmission, and compliance with healthcare privacy regulations.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 2 -->
              <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-calendar-days" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
                    <p class="text-gray-600 leading-relaxed">
                      AI-powered scheduling system that matches students with appropriate specialists based on needs, availability, and treatment history.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 3 -->
              <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-document-text" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Integrated Documentation</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Automatic session recording, treatment notes, and progress documentation that syncs with electronic health records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Representation -->
          <div class="relative">
            <div class="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Consultation Dashboard</h3>
                <p class="text-gray-600">Healthcare provider interface</p>
              </div>

              <!-- Dashboard Mockup -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="bg-green-50 rounded-lg p-4 text-center">
                    <div class="text-2xl font-bold text-green-600">12</div>
                    <div class="text-xs text-gray-600">Today's Sessions</div>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-4 text-center">
                    <div class="text-2xl font-bold text-blue-600">45</div>
                    <div class="text-xs text-gray-600">Active Patients</div>
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="text-sm font-medium text-gray-900">Upcoming Sessions</div>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span class="text-white text-xs font-bold">AM</span>
                        </div>
                        <div>
                          <p class="text-sm font-medium text-gray-900">Alex M.</p>
                          <p class="text-xs text-gray-600">Speech Therapy</p>
                        </div>
                      </div>
                      <span class="text-xs text-gray-500">2:00 PM</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span class="text-white text-xs font-bold">SK</span>
                        </div>
                        <div>
                          <p class="text-sm font-medium text-gray-900">Sofia K.</p>
                          <p class="text-xs text-gray-600">Occupational Therapy</p>
                        </div>
                      </div>
                      <span class="text-xs text-gray-500">3:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Metrics -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven Healthcare Outcomes
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our telemedicine platform has delivered measurable improvements in healthcare access and treatment outcomes.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Metric 1 -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">95%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Patient Satisfaction</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Families report high satisfaction with telemedicine consultations and care quality.
            </p>
          </div>

          <!-- Metric 2 -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">80%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Faster Access</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Reduction in wait times for specialist consultations and therapy sessions.
            </p>
          </div>

          <!-- Metric 3 -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">70%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Average cost savings compared to traditional in-person healthcare visits.
            </p>
          </div>

          <!-- Metric 4 -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">24/7</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Availability</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Round-the-clock access to emergency consultations and support services.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <app-call-to-action
      title="Transform Special Needs Healthcare"
      description="Join the Q-Academy telemedicine platform to provide your students with the specialized care they deserve."
      color="bg-gradient-to-r from-green-50 to-emerald-50"
      first-button-text="Schedule Consultation"
      first-button-link="/consultation"
      second-button-text="Learn More"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Telemedicine Integration - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Connect students with specialized healthcare professionals through Q-Academy\'s secure, HIPAA-compliant telemedicine platform designed for special needs care.' }
  ]
})
</script>
