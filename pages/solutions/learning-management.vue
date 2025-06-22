<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"/>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-academic-cap" class="w-4 h-4 mr-2"/>
              Specialized Education Platform
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
              Learning Management System
            </h1>

            <p class="text-xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive educational platform specifically designed for students with special needs, featuring adaptive learning, progress tracking, and collaborative tools for teachers and families.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton color="white" size="lg" class="px-8 py-4">
                Explore LMS Features
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                Request Demo
              </NuxtButton>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <!-- Mock LMS Interface -->
              <div class="space-y-4">
                <div class="flex items-center space-x-3 mb-6">
                  <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-white font-semibold">Student Dashboard</h3>
                    <p class="text-blue-100 text-sm">Interactive Learning Environment</p>
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                    <span class="text-white text-sm">Math Activities</span>
                    <div class="w-16 h-2 bg-white/30 rounded-full">
                      <div class="w-12 h-2 bg-green-400 rounded-full"/>
                    </div>
                  </div>
                  <div class="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                    <span class="text-white text-sm">Reading Comprehension</span>
                    <div class="w-16 h-2 bg-white/30 rounded-full">
                      <div class="w-8 h-2 bg-yellow-400 rounded-full"/>
                    </div>
                  </div>
                  <div class="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                    <span class="text-white text-sm">Social Skills</span>
                    <div class="w-16 h-2 bg-white/30 rounded-full">
                      <div class="w-10 h-2 bg-blue-400 rounded-full"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core LMS Features -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Learning Management
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our LMS is built specifically for special education needs, offering adaptive learning paths, multi-sensory content, and comprehensive progress tracking.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Adaptive Learning -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-light-bulb" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Adaptive Learning Paths</h3>
            <p class="text-gray-600 mb-6">
              Personalized learning experiences that adapt to each student's unique needs, learning style, and pace of progress.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Individual Education Plan (IEP) integration</li>
              <li>• Difficulty level auto-adjustment</li>
              <li>• Multi-modal content delivery</li>
              <li>• Progress-based recommendations</li>
            </ul>
          </div>

          <!-- Interactive Activities -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-puzzle-piece" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Interactive Activities</h3>
            <p class="text-gray-600 mb-6">
              Engaging, multimedia-rich activities designed specifically for students with different learning abilities and sensory needs.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Visual, auditory, and tactile content</li>
              <li>• Gamified learning experiences</li>
              <li>• Real-time feedback mechanisms</li>
              <li>• Accessibility-first design</li>
            </ul>
          </div>

          <!-- Progress Tracking -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Advanced Progress Tracking</h3>
            <p class="text-gray-600 mb-6">
              Comprehensive analytics and reporting that help teachers, doctors, and families understand student development.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Real-time performance metrics</li>
              <li>• Behavioral pattern analysis</li>
              <li>• Goal achievement tracking</li>
              <li>• Custom report generation</li>
            </ul>
          </div>

          <!-- Collaborative Tools -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibent text-gray-900 mb-4">Collaborative Platform</h3>
            <p class="text-gray-600 mb-6">
              Seamless communication and collaboration between teachers, therapists, families, and healthcare providers.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Shared activity planning</li>
              <li>• Family engagement tools</li>
              <li>• Professional collaboration</li>
              <li>• Resource sharing platform</li>
            </ul>
          </div>

          <!-- Assessment Tools -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-teal-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-clipboard-document-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Assessment & Evaluation</h3>
            <p class="text-gray-600 mb-6">
              Comprehensive assessment tools that help measure learning outcomes and identify areas for improvement.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Formative and summative assessments</li>
              <li>• Skill-based evaluations</li>
              <li>• Portfolio management</li>
              <li>• Growth tracking over time</li>
            </ul>
          </div>

          <!-- Accessibility Features -->
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-indigo-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Accessibility & Inclusion</h3>
            <p class="text-gray-600 mb-6">
              Built-in accessibility features ensure every student can access and benefit from the learning platform.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Screen reader compatibility</li>
              <li>• High contrast and large text options</li>
              <li>• Voice commands and audio support</li>
              <li>• WCAG 2.1 AA compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Role-Based Dashboards -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tailored Experiences for Every User
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Each user role has a customized interface designed to support their specific needs and responsibilities.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Student Dashboard -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Icon name="i-heroicons-user" class="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold text-gray-900">Student Dashboard</h3>
                    <p class="text-sm text-blue-600 font-medium">Engaging Learning Environment</p>
                  </div>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  A fun, intuitive interface designed specifically for students with special needs, featuring large buttons, clear navigation, and immediate feedback.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Personalized Activity Feed</h4>
                      <p class="text-sm text-gray-600">Activities tailored to individual learning goals and preferences</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Progress Visualization</h4>
                      <p class="text-sm text-gray-600">Visual progress indicators and achievement badges</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">QR Code Access</h4>
                      <p class="text-sm text-gray-600">Simple QR code login for easy access</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <div class="text-center">
                  <h4 class="text-lg font-semibold text-gray-900 mb-4">Student Features</h4>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-puzzle-piece" class="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <span class="text-gray-700">Interactive Activities</span>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-star" class="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                      <span class="text-gray-700">Achievement System</span>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-chat-bubble-left" class="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <span class="text-gray-700">Communication</span>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-calendar" class="w-6 h-6 text-purple-500 mx-auto mb-2" />
                      <span class="text-gray-700">Schedule View</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Teacher Dashboard -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div class="order-2 lg:order-1">
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                  <div class="text-center">
                    <h4 class="text-lg font-semibold text-gray-900 mb-4">Teacher Tools</h4>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div class="bg-white rounded-lg p-3">
                        <Icon name="i-heroicons-document-plus" class="w-6 h-6 text-green-500 mx-auto mb-2" />
                        <span class="text-gray-700">Lesson Planning</span>
                      </div>
                      <div class="bg-white rounded-lg p-3">
                        <Icon name="i-heroicons-chart-bar" class="w-6 h-6 text-blue-500 mx-auto mb-2" />
                        <span class="text-gray-700">Progress Analytics</span>
                      </div>
                      <div class="bg-white rounded-lg p-3">
                        <Icon name="i-heroicons-user-group" class="w-6 h-6 text-purple-500 mx-auto mb-2" />
                        <span class="text-gray-700">Class Management</span>
                      </div>
                      <div class="bg-white rounded-lg p-3">
                        <Icon name="i-heroicons-document-text" class="w-6 h-6 text-orange-500 mx-auto mb-2" />
                        <span class="text-gray-700">Report Generation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="order-1 lg:order-2">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                    <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold text-gray-900">Teacher Dashboard</h3>
                    <p class="text-sm text-green-600 font-medium">Comprehensive Teaching Tools</p>
                  </div>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  A powerful suite of tools for creating, managing, and tracking individualized learning experiences for students with special needs.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Activity Creation Studio</h4>
                      <p class="text-sm text-gray-600">Drag-and-drop interface for creating custom learning activities</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">IEP Integration</h4>
                      <p class="text-sm text-gray-600">Align activities with Individual Education Plan goals</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Real-time Monitoring</h4>
                      <p class="text-sm text-gray-600">Live view of student progress and engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Parent Dashboard -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <Icon name="i-heroicons-heart" class="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold text-gray-900">Parent Portal</h3>
                    <p class="text-sm text-purple-600 font-medium">Family Engagement Platform</p>
                  </div>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  Keep families informed and engaged with their child's educational journey through comprehensive progress reports and communication tools.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Progress Overview</h4>
                      <p class="text-sm text-gray-600">Clear, visual summaries of child's learning progress</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Home Activities</h4>
                      <p class="text-sm text-gray-600">Suggested activities to reinforce learning at home</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Team Communication</h4>
                      <p class="text-sm text-gray-600">Direct messaging with teachers and therapists</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <div class="text-center">
                  <h4 class="text-lg font-semibold text-gray-900 mb-4">Parent Features</h4>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-chart-pie" class="w-6 h-6 text-purple-500 mx-auto mb-2" />
                      <span class="text-gray-700">Progress Reports</span>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-calendar-days" class="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <span class="text-gray-700">Schedule Access</span>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-bell" class="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <span class="text-gray-700">Notifications</span>
                    </div>
                    <div class="bg-white rounded-lg p-3">
                      <Icon name="i-heroicons-document-arrow-down" class="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <span class="text-gray-700">Resource Library</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Methodologies -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Evidence-Based Learning Methodologies
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform incorporates proven educational approaches specifically designed for students with special needs.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Applied Behavior Analysis -->
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar-square" class="w-10 h-10 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Applied Behavior Analysis (ABA)</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Systematic approach to understanding and changing behavior through data-driven interventions and reinforcement strategies.
            </p>
          </div>

          <!-- Structured Teaching -->
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-squares-2x2" class="w-10 h-10 text-green-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">TEACCH Method</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Structured teaching approach that uses visual supports and organized environments to support students with autism spectrum disorders.
            </p>
          </div>

          <!-- Multi-Sensory Learning -->
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-eye" class="w-10 h-10 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Multi-Sensory Learning</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Engaging multiple senses simultaneously to enhance learning retention and accommodate different learning styles and sensory preferences.
            </p>
          </div>

          <!-- Universal Design for Learning -->
          <div class="text-center">
            <div class="w-20 h-20 bg-orange-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-adjustments-horizontal" class="w-10 h-10 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Universal Design (UDL)</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Flexible learning environment design that accommodates individual learning differences and provides multiple means of engagement and representation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Benefits -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Integrated Healthcare & Education
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            The power of Q-Academy lies in seamlessly connecting educational progress with healthcare monitoring for holistic student support.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Data-Driven Insights -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chart-pie" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Data-Driven Insights</h3>
            <p class="text-gray-600 leading-relaxed">
              Comprehensive analytics combine educational and medical data to provide complete pictures of student development and identify intervention opportunities.
            </p>
          </div>

          <!-- Collaborative Care -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Collaborative Care</h3>
            <p class="text-gray-600 leading-relaxed">
              Teachers, therapists, doctors, and families work together through shared platforms, ensuring consistent support across all environments.
            </p>
          </div>

          <!-- Personalized Interventions -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Personalized Interventions</h3>
            <p class="text-gray-600 leading-relaxed">
              Real-time health and educational data enables immediate adjustments to learning plans and therapeutic interventions for optimal outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Transform Special Education with Q-Academy LMS
        </h2>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          Join schools across the Philippines in providing comprehensive, integrated support for students with special needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtButton color="white" size="lg" class="px-8 py-4">
            Start Free Trial
          </NuxtButton>
          <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
            Schedule Demo
          </NuxtButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Learning Management System - Q-Academy Solutions',
  meta: [
    { name: 'description', content: 'Comprehensive LMS designed for special education featuring adaptive learning, progress tracking, and integrated healthcare support for students with disabilities.' }
  ]
})
</script>
