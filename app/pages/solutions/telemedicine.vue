<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-green-600 to-emerald-600 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"/>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-video-camera" class="w-4 h-4 mr-2"/>
              Remote Healthcare Solutions
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
              Telemedicine Platform
            </h1>

            <p class="text-xl text-green-100 mb-8 leading-relaxed">
              Bringing specialized healthcare directly to students with special needs through secure video consultations, remote therapy sessions, and integrated medical record management.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton size="lg" class="px-8 py-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                Book Consultation
              </NuxtButton>
              <NuxtButton size="lg" class="px-8 py-4 cursor-pointer">
                Learn More
              </NuxtButton>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <!-- Mock Video Call Interface -->
              <div class="bg-gray-900 rounded-xl p-4 mb-4">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"/>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"/>
                    <div class="w-3 h-3 bg-green-500 rounded-full"/>
                  </div>
                  <span class="text-white text-sm">Dr. Santos - Consultation</span>
                </div>

                <div class="grid grid-cols-2 gap-2 mb-4">
                  <div class="bg-gray-700 rounded-lg p-4 text-center">
                    <div class="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"/>
                    <span class="text-white text-xs">Dr. Santos</span>
                  </div>
                  <div class="bg-gray-700 rounded-lg p-4 text-center">
                    <div class="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"/>
                    <span class="text-white text-xs">Alex (Student)</span>
                  </div>
                </div>

                <div class="flex justify-center space-x-4">
                  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-microphone" class="w-4 h-4 text-white" />
                  </div>
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-video-camera" class="w-4 h-4 text-white" />
                  </div>
                  <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Icon name="i-heroicons-phone-x-mark" class="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div class="text-center text-white">
                <p class="text-sm mb-2">Secure HIPAA-compliant video consultation</p>
                <div class="flex items-center justify-center space-x-2 text-xs text-green-200">
                  <Icon name="i-heroicons-shield-check" class="w-4 h-4" />
                  <span>End-to-end encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Telemedicine Features -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Remote Healthcare
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our telemedicine platform is specifically designed for special needs healthcare, providing specialized consultations and therapy sessions from anywhere in the Philippines.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Video Consultations -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-video-camera" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">HD Video Consultations</h3>
            <p class="text-gray-600 mb-6">
              High-definition, secure video calls with specialized healthcare providers, optimized for low-bandwidth environments common in rural Philippines.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• HIPAA-compliant video platform</li>
              <li>• Multi-participant sessions</li>
              <li>• Screen sharing capabilities</li>
              <li>• Session recording (with consent)</li>
            </ul>
          </div>

          <!-- Remote Therapy -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Remote Therapy Sessions</h3>
            <p class="text-gray-600 mb-6">
              Specialized therapy sessions delivered remotely by licensed therapists, including occupational, speech, and behavioral therapy.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Occupational therapy sessions</li>
              <li>• Speech and language therapy</li>
              <li>• Behavioral intervention support</li>
              <li>• Physical therapy guidance</li>
            </ul>
          </div>

          <!-- Appointment Management -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-calendar-days" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Smart Scheduling</h3>
            <p class="text-gray-600 mb-6">
              Intelligent appointment scheduling system that coordinates between healthcare providers, families, and educational schedules.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Automated scheduling coordination</li>
              <li>• Reminder notifications</li>
              <li>• Time zone optimization</li>
              <li>• Emergency appointment booking</li>
            </ul>
          </div>

          <!-- Digital Prescriptions -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-document-text" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Digital Prescriptions</h3>
            <p class="text-gray-600 mb-6">
              Secure electronic prescription management with integration to local pharmacies and medication tracking capabilities.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Electronic prescription delivery</li>
              <li>• Medication adherence tracking</li>
              <li>• Pharmacy network integration</li>
              <li>• Dosage adjustment alerts</li>
            </ul>
          </div>

          <!-- Remote Monitoring -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-teal-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar-square" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Health Monitoring</h3>
            <p class="text-gray-600 mb-6">
              Continuous monitoring of student health metrics and educational progress to identify patterns and intervention needs.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Behavioral pattern tracking</li>
              <li>• Progress milestone monitoring</li>
              <li>• Alert system for concerns</li>
              <li>• Trend analysis reporting</li>
            </ul>
          </div>

          <!-- Family Support -->
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-indigo-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Family Guidance</h3>
            <p class="text-gray-600 mb-6">
              Comprehensive support and education for families, including training sessions and resource sharing for at-home care.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Parent education sessions</li>
              <li>• Home therapy guidance</li>
              <li>• Resource library access</li>
              <li>• Support group connections</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialist Network -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Network of Specialists
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Access to a comprehensive network of healthcare professionals specializing in various aspects of special needs care and development.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Developmental Pediatricians -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-user-plus" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Developmental Pediatricians</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Specialists in child development and developmental disabilities, providing comprehensive assessments and treatment plans.
            </p>
            <div class="text-sm text-blue-600 font-medium">15+ Specialists Available</div>
          </div>

          <!-- Occupational Therapists -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-hand-raised" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Occupational Therapists</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Licensed OTs specializing in sensory integration, fine motor skills, and activities of daily living for special needs students.
            </p>
            <div class="text-sm text-green-600 font-medium">25+ Therapists Available</div>
          </div>

          <!-- Speech-Language Pathologists -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-microphone" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Speech-Language Pathologists</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Expert SLPs providing communication assessments, therapy, and augmentative communication support.
            </p>
            <div class="text-sm text-purple-600 font-medium">20+ Pathologists Available</div>
          </div>

          <!-- Behavioral Analysts -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Behavioral Analysts</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Board-certified behavior analysts (BCBAs) specializing in Applied Behavior Analysis for autism and behavioral challenges.
            </p>
            <div class="text-sm text-orange-600 font-medium">12+ Analysts Available</div>
          </div>
        </div>

        <!-- Specialist Availability -->
        <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">24/7 Emergency Support</h3>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Our platform provides round-the-clock access to emergency consultations and crisis intervention support for urgent situations.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-12 h-12 bg-red-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-red-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Crisis Intervention</h4>
              <p class="text-gray-600 text-sm">Immediate support for behavioral crises and medical emergencies</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-phone" class="w-6 h-6 text-blue-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">On-Call Specialists</h4>
              <p class="text-gray-600 text-sm">24/7 access to on-call healthcare professionals and specialists</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-clock" class="w-6 h-6 text-green-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Rapid Response</h4>
              <p class="text-gray-600 text-sm">Average response time of under 15 minutes for urgent consultations</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology & Security -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Advanced Technology & Security
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our telemedicine platform uses cutting-edge technology to ensure secure, reliable, and high-quality healthcare delivery.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Enterprise-Grade Security</h3>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-shield-check" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">HIPAA Compliance</h4>
                  <p class="text-gray-600 text-sm">Full compliance with healthcare privacy regulations including data encryption, access controls, and audit trails.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-lock-closed" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">End-to-End Encryption</h4>
                  <p class="text-gray-600 text-sm">AES-256 encryption for all video calls, messages, and file transfers to ensure complete privacy and security.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-server" class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Secure Cloud Infrastructure</h4>
                  <p class="text-gray-600 text-sm">Multi-region cloud deployment with redundancy and automatic failover for maximum reliability.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-eye-slash" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Privacy Controls</h4>
                  <p class="text-gray-600 text-sm">Granular privacy settings allowing families to control who can access their child's information and sessions.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Platform Capabilities</h3>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-blue-600 mb-1">HD</div>
                <div class="text-sm text-gray-600">Video Quality</div>
              </div>

              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-green-600 mb-1">50+</div>
                <div class="text-sm text-gray-600">Participants</div>
              </div>

              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                <div class="text-sm text-gray-600">Availability</div>
              </div>

              <div class="bg-white rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-orange-600 mb-1">99.9%</div>
                <div class="text-sm text-gray-600">Uptime</div>
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Mobile Compatibility</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Low Bandwidth Optimization</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Session Recording</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Multi-language Support</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Impact Stories
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our telemedicine platform is transforming healthcare access for families across the Philippines.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Success Story 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="mb-6">
              <div class="flex items-center space-x-1 mb-4">
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
              </div>
              <blockquote class="text-gray-600 italic">
                "Q-Academy's telemedicine platform brought specialized therapy to our rural community. My son now receives regular occupational therapy sessions that were previously impossible to access."
              </blockquote>
            </div>
            <div class="border-t border-gray-200 pt-6">
              <div class="font-semibold text-gray-900">Maria Santos</div>
              <div class="text-sm text-gray-600">Parent, Bohol Province</div>
              <div class="text-sm text-green-600 mt-1">80% improvement in motor skills</div>
            </div>
          </div>

          <!-- Success Story 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="mb-6">
              <div class="flex items-center space-x-1 mb-4">
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
              </div>
              <blockquote class="text-gray-600 italic">
                "The behavioral analyst sessions through Q-Academy have been life-changing. We've learned effective strategies to support our daughter at home and school."
              </blockquote>
            </div>
            <div class="border-t border-gray-200 pt-6">
              <div class="font-semibold text-gray-900">Dr. Elena Cruz</div>
              <div class="text-sm text-gray-600">Special Education Teacher, Cebu</div>
              <div class="text-sm text-blue-600 mt-1">95% reduction in behavioral incidents</div>
            </div>
          </div>

          <!-- Success Story 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="mb-6">
              <div class="flex items-center space-x-1 mb-4">
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
                <Icon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" />
              </div>
              <blockquote class="text-gray-600 italic">
                "As a speech therapist, Q-Academy allows me to reach students across multiple provinces. The integrated progress tracking helps me provide more effective therapy."
              </blockquote>
            </div>
            <div class="border-t border-gray-200 pt-6">
              <div class="font-semibold text-gray-900">Lisa Rodriguez, SLP</div>
              <div class="text-sm text-gray-600">Speech-Language Pathologist</div>
              <div class="text-sm text-purple-600 mt-1">120+ students served remotely</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-call-to-action
      title="Connect with Specialists Today"
      description="Don't let distance limit access to quality healthcare. Book your first consultation and experience the future of special needs care."
      color="bg-gradient-to-r from-green-600 to-emerald-600"
      first-button-color="bg-blue-500 hover:bg-blue-600 text-white"
      text-color="text-white"
    /></div>
</template>

<script setup>
useHead({
  title: 'Telemedicine Platform - Q-Academy Solutions',
  meta: [
    { name: 'description', content: 'Access specialized healthcare for students with special needs through secure video consultations, remote therapy sessions, and integrated medical record management.' }
  ]
})
</script>
