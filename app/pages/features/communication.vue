<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><span class="text-cyan-600 font-medium">Communication Hub</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4 mr-2" />
              Unified Communication Platform
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Communication Hub
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect all stakeholders in special needs education through our integrated messaging system. Facilitate seamless communication between teachers, healthcare providers, families, and support staff with secure, real-time messaging and collaboration tools.
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Multi-Stakeholder Messaging</h3>
                  <p class="text-gray-600">Connect teachers, doctors, parents, and therapists in one platform</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Real-Time Notifications</h3>
                  <p class="text-gray-600">Instant alerts for urgent messages and important updates</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Secure File Sharing</h3>
                  <p class="text-gray-600">HIPAA-compliant sharing of documents and media files</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton color="primary" size="lg" class="px-8 py-4">
                Start Messaging
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                View Demo
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <!-- Communication Interface -->
              <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-semibold text-gray-900">Team Communication</h3>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                    <span class="text-xs text-green-600 font-medium">Online</span>
                  </div>
                </div>

                <!-- Chat Interface -->
                <div class="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto space-y-3">
                  <!-- Message from Teacher -->
                  <div class="flex items-start space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="text-white text-xs font-bold">MT</span>
                    </div>
                    <div class="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                      <p class="text-sm text-gray-900">Alex completed the reading activity today with 85% accuracy!</p>
                      <span class="text-xs text-gray-500">Ms. Thompson • 2:30 PM</span>
                    </div>
                  </div>

                  <!-- Message from Doctor -->
                  <div class="flex items-start space-x-2">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="text-white text-xs font-bold">DS</span>
                    </div>
                    <div class="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                      <p class="text-sm text-gray-900">Great progress! Let's adjust his therapy schedule for next week.</p>
                      <span class="text-xs text-gray-500">Dr. Santos • 2:35 PM</span>
                    </div>
                  </div>

                  <!-- Message from Parent -->
                  <div class="flex items-end space-x-2 justify-end">
                    <div class="bg-cyan-500 rounded-lg p-3 max-w-xs text-white shadow-sm">
                      <p class="text-sm">Thank you both! Alex was so excited to tell me about his reading progress 📚</p>
                      <span class="text-xs text-cyan-200">Mom • 3:10 PM</span>
                    </div>
                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="text-white text-xs font-bold">SM</span>
                    </div>
                  </div>

                  <!-- Typing Indicator -->
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-xs font-bold">OT</span>
                    </div>
                    <div class="bg-gray-300 rounded-lg p-3">
                      <div class="flex space-x-1">
                        <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"/>
                        <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.1s"/>
                        <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.2s"/>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Message Input -->
                <div class="mt-4 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    class="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                  <button class="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon name="i-heroicons-paper-airplane" class="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-chat-bubble-left-ellipsis" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Real-time Chat</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-shield-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">HIPAA Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Communication Types -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Communication Tools
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Multiple communication channels designed to meet the diverse needs of special education teams and families.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Real-Time Messaging -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chat-bubble-left-right" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Real-Time Messaging</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Instant messaging between all team members with read receipts, typing indicators, and priority message flags for urgent communications.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Group and direct messaging
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Message reactions and replies
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Priority and urgent flags
              </li>
            </ul>
          </div>

          <!-- Video Calls -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-video-camera" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Video Conferencing</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Secure video calls for team meetings, parent conferences, and collaborative planning sessions with screen sharing and recording capabilities.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                HD video and audio quality
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Screen sharing and annotations
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Session recording and playback
              </li>
            </ul>
          </div>

          <!-- File Sharing -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-document-arrow-up" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Secure File Sharing</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Share documents, images, videos, and other educational materials securely with version control and access permissions.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Drag-and-drop file uploads
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Version control and history
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Access permissions management
              </li>
            </ul>
          </div>

          <!-- Voice Messages -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-microphone" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Voice Messages</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Send and receive voice messages for more personal communication, especially useful for detailed explanations and emotional support.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                High-quality audio recording
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Playback speed control
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Automatic transcription
              </li>
            </ul>
          </div>

          <!-- Announcements -->
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-indigo-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-megaphone" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Announcements & Updates</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Broadcast important information to specific groups or all team members with scheduled delivery and read confirmation tracking.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Targeted audience selection
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Scheduled message delivery
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Read receipt tracking
              </li>
            </ul>
          </div>

          <!-- Translation -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-teal-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-language" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Multi-Language Support</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Real-time translation services to support families who speak different languages, ensuring everyone can participate in communication.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                20+ language support
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Real-time message translation
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Cultural context awareness
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Collaboration -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Advanced Team Collaboration Features
            </h2>

            <div class="space-y-6">
              <!-- Feature 1 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-users" class="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Student-Centered Channels</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Dedicated communication channels for each student where all team members can collaborate, share updates, and coordinate care plans in one central location.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 2 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-calendar-days" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Integrated Scheduling</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Schedule meetings, therapy sessions, and parent conferences directly within the communication platform with automatic calendar integration and reminders.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 3 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-clipboard-document-list" class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Task Management</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Create, assign, and track tasks related to student care with due dates, progress updates, and automatic notifications to keep everyone accountable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Collaboration Interface -->
          <div class="relative">
            <div class="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Student Collaboration Channel</h3>
                <p class="text-gray-600">Alex Martinez - Team Coordination</p>
              </div>

              <!-- Channel Interface -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <!-- Channel Header -->
                <div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span class="text-white font-bold text-sm">AM</span>
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-900">Alex Martinez</h4>
                      <p class="text-xs text-gray-600">4 team members active</p>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <button class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                      <Icon name="i-heroicons-video-camera" class="w-4 h-4 text-gray-600" />
                    </button>
                    <button class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                      <Icon name="i-heroicons-calendar-days" class="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <!-- Tabs -->
                <div class="flex space-x-4 mb-4">
                  <button class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-md text-sm font-medium">Messages</button>
                  <button class="px-3 py-1 text-gray-600 text-sm">Files</button>
                  <button class="px-3 py-1 text-gray-600 text-sm">Tasks</button>
                  <button class="px-3 py-1 text-gray-600 text-sm">Schedule</button>
                </div>

                <!-- Recent Activity -->
                <div class="space-y-3">
                  <div class="text-sm font-medium text-gray-900">Recent Activity</div>
                  <div class="space-y-2">
                    <div class="flex items-start space-x-2 p-2 bg-blue-50 rounded">
                      <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="i-heroicons-clipboard-document-check" class="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p class="text-sm text-gray-900">IEP meeting scheduled for next Tuesday</p>
                        <p class="text-xs text-gray-600">Dr. Santos • 1 hour ago</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-2 p-2 bg-green-50 rounded">
                      <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="i-heroicons-document-text" class="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p class="text-sm text-gray-900">Weekly progress report shared</p>
                        <p class="text-xs text-gray-600">Ms. Thompson • 2 hours ago</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-2 p-2 bg-purple-50 rounded">
                      <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="i-heroicons-chat-bubble-left" class="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p class="text-sm text-gray-900">New message from Alex's mom</p>
                        <p class="text-xs text-gray-600">Sarah Martinez • 3 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy & Security -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Privacy & Security First
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            All communications are protected by enterprise-grade security and compliance with healthcare privacy regulations.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- HIPAA Compliance -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-shield-check" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliant</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              All messages and file transfers comply with HIPAA regulations for healthcare data protection and patient privacy.
            </p>
            <div class="text-sm text-green-600 font-medium">
              Fully Certified
            </div>
          </div>

          <!-- End-to-End Encryption -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-lock-closed" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">End-to-End Encryption</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              All messages, files, and video calls are encrypted with AES-256 encryption to ensure complete privacy and security.
            </p>
            <div class="text-sm text-blue-600 font-medium">
              Military-Grade Security
            </div>
          </div>

          <!-- Access Controls -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-user-group" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Role-Based Access</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Granular permissions ensure team members only access communications and information relevant to their role.
            </p>
            <div class="text-sm text-purple-600 font-medium">
              Controlled Access
            </div>
          </div>

          <!-- Audit Trails -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-document-text" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Complete Audit Trails</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Comprehensive logging of all communication activities for compliance, security monitoring, and accountability.
            </p>
            <div class="text-sm text-orange-600 font-medium">
              Full Transparency
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notification Management -->
    <section class="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Visual Notification Interface -->
          <div class="relative order-2 lg:order-1">
            <div class="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Smart Notification Center</h3>
                <p class="text-gray-600">Personalized alert management</p>
              </div>

              <!-- Notification Interface -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="space-y-4">
                  <!-- Notification Settings -->
                  <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Icon name="i-heroicons-bell" class="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Urgent Messages</p>
                        <p class="text-xs text-gray-600">Immediate push notifications</p>
                      </div>
                    </div>
                    <div class="w-10 h-6 bg-blue-500 rounded-full flex items-center justify-end px-1">
                      <div class="w-4 h-4 bg-white rounded-full"/>
                    </div>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="i-heroicons-calendar-days" class="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Meeting Reminders</p>
                        <p class="text-xs text-gray-600">15 minutes before meetings</p>
                      </div>
                    </div>
                    <div class="w-10 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div class="w-4 h-4 bg-white rounded-full"/>
                    </div>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <Icon name="i-heroicons-chat-bubble-left" class="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">General Messages</p>
                        <p class="text-xs text-gray-600">Daily digest at 6 PM</p>
                      </div>
                    </div>
                    <div class="w-10 h-6 bg-gray-300 rounded-full flex items-center justify-start px-1">
                      <div class="w-4 h-4 bg-white rounded-full"/>
                    </div>
                  </div>

                  <!-- Recent Notifications -->
                  <div class="pt-4 border-t border-gray-200">
                    <div class="text-sm font-medium text-gray-900 mb-3">Recent Notifications</div>
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2 p-2 bg-red-50 rounded border-l-4 border-red-500">
                        <Icon name="i-heroicons-exclamation-triangle" class="w-4 h-4 text-red-500" />
                        <span class="text-sm text-gray-700">Urgent: IEP meeting tomorrow</span>
                      </div>
                      <div class="flex items-center space-x-2 p-2 bg-blue-50 rounded border-l-4 border-blue-500">
                        <Icon name="i-heroicons-information-circle" class="w-4 h-4 text-blue-500" />
                        <span class="text-sm text-gray-700">New message from Dr. Santos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Smart Notification Management
            </h2>

            <div class="space-y-6">
              <!-- Notification Feature 1 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-adjustments-horizontal" class="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Customizable Preferences</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Set personalized notification preferences for different types of messages, with options for immediate alerts, daily summaries, or do-not-disturb modes.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Notification Feature 2 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-flag" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Priority Classification</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Automatic classification of message urgency with different notification styles for urgent medical alerts, routine updates, and casual communications.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Notification Feature 3 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-device-phone-mobile" class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Multi-Channel Delivery</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Receive notifications through push notifications, email, SMS, or in-app alerts based on your preferences and message importance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Benefits -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Seamless Platform Integration
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Communication Hub works seamlessly with all Q-Academy platforms, providing context-aware messaging and automatic updates.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- LMS Integration -->
          <div class="bg-blue-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-computer-desktop" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">LMS Integration</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Automatic notifications when students complete activities, with direct links to progress reports and the ability to discuss results in context.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Activity completion alerts</li>
              <li>• Progress discussion threads</li>
              <li>• Assignment collaboration</li>
              <li>• Grade sharing and feedback</li>
            </ul>
          </div>

          <!-- Telemedicine Integration -->
          <div class="bg-green-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-video-camera" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Telemedicine Sync</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Seamless transition from chat to video consultations with shared session notes and follow-up communication threading.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• One-click video calls</li>
              <li>• Session note sharing</li>
              <li>• Appointment reminders</li>
              <li>• Post-consultation follow-up</li>
            </ul>
          </div>

          <!-- EHR Integration -->
          <div class="bg-purple-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-document-text" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">EHR Connection</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Contextual access to health records during conversations with secure sharing of relevant medical information when needed.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Contextual record access</li>
              <li>• Secure medical data sharing</li>
              <li>• Treatment plan discussions</li>
              <li>• Medication management chat</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Metrics -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven Communication Impact
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our Communication Hub has improved collaboration and outcomes in special needs education teams.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Metric 1 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">75%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Faster Response Time</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Reduction in average response time to urgent messages and medical concerns through prioritized notifications.
            </p>
          </div>

          <!-- Metric 2 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">90%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Team Satisfaction</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Healthcare providers and educators report improved satisfaction with team communication and collaboration.
            </p>
          </div>

          <!-- Metric 3 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">60%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">More Parent Engagement</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Increase in active parent participation in their child's educational and medical care coordination.
            </p>
          </div>

          <!-- Metric 4 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">85%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Better Coordination</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Improvement in care coordination between educational and medical teams for student outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Start Communicating More Effectively
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple setup process to get your entire team connected and collaborating within minutes.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-user-plus" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">1</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Invite Your Team</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Add teachers, healthcare providers, and family members to your student's communication channels with role-based permissions.
            </p>
            <div class="bg-cyan-50 rounded-lg p-4">
              <ul class="text-sm text-gray-700 space-y-2">
                <li>• Send email invitations</li>
                <li>• Set role permissions</li>
                <li>• Configure notification preferences</li>
                <li>• Create student channels</li>
              </ul>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-cog-6-tooth" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">2</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Customize Settings</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Configure communication preferences, notification settings, and integration options to match your team's workflow.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="text-sm text-gray-700 space-y-2">
                <li>• Notification preferences</li>
                <li>• Communication channels</li>
                <li>• Integration settings</li>
                <li>• Security configurations</li>
              </ul>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-chat-bubble-left-right" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">3</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Start Collaborating</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Begin communicating with your team through secure messaging, video calls, and integrated collaboration tools.
            </p>
            <div class="bg-green-50 rounded-lg p-4">
              <ul class="text-sm text-gray-700 space-y-2">
                <li>• Send first messages</li>
                <li>• Schedule video calls</li>
                <li>• Share files and documents</li>
                <li>• Track team activities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Transform Team Communication Today
        </h2>
        <p class="text-xl text-cyan-100 mb-8 leading-relaxed">
          Connect your entire special needs education team through secure, efficient communication that puts student success at the center.
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
  title: 'Communication Hub - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Connect teachers, healthcare providers, and families through Q-Academy\'s secure Communication Hub with real-time messaging, video calls, and collaboration tools for special needs education.' }
  ]
})
</script>
