<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><span class="text-emerald-600 font-medium">Multi-Platform Access</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-device-phone-mobile" class="w-4 h-4 mr-2" />
              Universal Access Across All Devices
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Multi-Platform Access
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience seamless access to Q-Academy across desktop, web, and mobile platforms. Each platform is optimized for specific user roles while maintaining complete data synchronization and consistent user experience.
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Role-Optimized Interfaces</h3>
                  <p class="text-gray-600">Each platform tailored for teachers, doctors, students, and families</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Real-Time Synchronization</h3>
                  <p class="text-gray-600">Instant data sync across all devices and platforms</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Offline Capabilities</h3>
                  <p class="text-gray-600">Continue working even without internet connectivity</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton color="primary" size="lg" class="px-8 py-4">
                Download Apps
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                Platform Comparison
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <!-- Multi-Platform Visual -->
              <div class="text-center mb-6">
                <h3 class="font-semibold text-gray-900 mb-4">Access Anywhere, Anytime</h3>

                <!-- Device Stack -->
                <div class="relative">
                  <!-- Desktop -->
                  <div class="bg-gray-800 rounded-lg p-2 mb-4 transform rotate-2">
                    <div class="bg-white rounded aspect-video flex items-center justify-center">
                      <div class="text-center">
                        <Icon name="i-heroicons-computer-desktop" class="w-8 h-8 text-gray-600 mx-auto mb-2" />
                        <p class="text-xs font-medium">Desktop App</p>
                        <p class="text-xs text-gray-500">Teachers & Admins</p>
                      </div>
                    </div>
                  </div>

                  <!-- Tablet -->
                  <div class="bg-gray-700 rounded-lg p-2 mb-3 transform -rotate-1 absolute top-4 right-0 w-20">
                    <div class="bg-white rounded aspect-[3/4] flex items-center justify-center">
                      <div class="text-center">
                        <Icon name="i-heroicons-device-tablet" class="w-4 h-4 text-gray-600 mx-auto mb-1" />
                        <p class="text-xs font-medium">Web App</p>
                      </div>
                    </div>
                  </div>

                  <!-- Mobile -->
                  <div class="bg-gray-900 rounded-lg p-1 transform rotate-3 absolute bottom-0 left-4 w-12">
                    <div class="bg-white rounded aspect-[9/16] flex items-center justify-center">
                      <div class="text-center">
                        <Icon name="i-heroicons-device-phone-mobile" class="w-3 h-3 text-gray-600 mx-auto mb-1" />
                        <p class="text-xs font-medium">Mobile</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Sync Indicator -->
                <div class="mt-8 flex items-center justify-center space-x-2">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/>
                  <span class="text-xs text-gray-600">Real-time sync active</span>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-arrow-path" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Auto Sync</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-wifi" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Offline Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Three Platforms, One Unified Experience
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Each platform is specifically designed and optimized for different user roles while maintaining seamless integration and data consistency.
          </p>
        </div>

        <div class="space-y-20">
          <!-- Desktop Platform -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Icon name="i-heroicons-computer-desktop" class="w-4 h-4 mr-2" />
                Windows & macOS Compatible
              </div>

              <h3 class="text-3xl font-bold text-gray-900 mb-6">Desktop Application</h3>

              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Powerful desktop application built with .NET MAUI for teachers and administrators. Features comprehensive tools for student management, activity creation, and detailed reporting.
              </p>

              <!-- Desktop Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Advanced Activity Builder</h4>
                    <p class="text-gray-600">Create complex, interactive learning activities with multimedia support</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Comprehensive Reporting</h4>
                    <p class="text-gray-600">Generate detailed analytics and progress reports with export capabilities</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Offline Work Mode</h4>
                    <p class="text-gray-600">Continue creating content and reviewing data without internet connection</p>
                  </div>
                </div>
              </div>

              <div class="bg-blue-50 rounded-xl p-6">
                <h4 class="font-semibold text-gray-900 mb-3">Ideal for:</h4>
                <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>• Special Education Teachers</div>
                  <div>• School Administrators</div>
                  <div>• Curriculum Specialists</div>
                  <div>• Educational Coordinators</div>
                </div>
              </div>
            </div>

            <!-- Desktop Visual -->
            <div class="relative">
              <div class="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
                <div class="bg-gray-900 rounded-xl p-4 shadow-lg">
                  <div class="flex items-center space-x-2 mb-4">
                    <div class="w-3 h-3 bg-red-400 rounded-full"/>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"/>
                    <div class="w-3 h-3 bg-green-400 rounded-full"/>
                    <span class="text-white text-sm ml-auto">Q-Academy Desktop</span>
                  </div>

                  <div class="bg-white rounded-lg h-48 p-4">
                    <div class="grid grid-cols-4 gap-4 h-full">
                      <!-- Sidebar -->
                      <div class="bg-gray-100 rounded p-2">
                        <div class="space-y-2">
                          <div class="h-2 bg-blue-300 rounded"/>
                          <div class="h-2 bg-gray-300 rounded"/>
                          <div class="h-2 bg-gray-300 rounded"/>
                          <div class="h-2 bg-gray-300 rounded"/>
                        </div>
                      </div>

                      <!-- Main Content -->
                      <div class="col-span-3 space-y-3">
                        <div class="h-6 bg-gray-200 rounded w-3/4"/>
                        <div class="grid grid-cols-3 gap-2">
                          <div class="h-16 bg-blue-100 rounded"/>
                          <div class="h-16 bg-green-100 rounded"/>
                          <div class="h-16 bg-purple-100 rounded"/>
                        </div>
                        <div class="space-y-2">
                          <div class="h-2 bg-gray-200 rounded"/>
                          <div class="h-2 bg-gray-200 rounded w-5/6"/>
                          <div class="h-2 bg-gray-200 rounded w-4/6"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Web Platform -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Web Visual -->
            <div class="relative order-2 lg:order-1">
              <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
                <div class="bg-white rounded-xl shadow-lg p-4">
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                      <Icon name="i-heroicons-globe-alt" class="w-4 h-4 text-gray-500" />
                      <span class="text-sm text-gray-600">q-academy.com/doctors</span>
                    </div>
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-green-500 rounded-full"/>
                      <span class="text-xs text-green-600">Online</span>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <!-- Header -->
                    <div class="flex items-center justify-between">
                      <h4 class="font-medium text-gray-900">Doctor Dashboard</h4>
                      <div class="w-8 h-8 bg-green-500 rounded-full"/>
                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-3">
                      <div class="bg-blue-50 rounded p-2 text-center">
                        <div class="text-sm font-bold text-blue-600">12</div>
                        <div class="text-xs text-gray-600">Today</div>
                      </div>
                      <div class="bg-green-50 rounded p-2 text-center">
                        <div class="text-sm font-bold text-green-600">45</div>
                        <div class="text-xs text-gray-600">Patients</div>
                      </div>
                      <div class="bg-purple-50 rounded p-2 text-center">
                        <div class="text-sm font-bold text-purple-600">8</div>
                        <div class="text-xs text-gray-600">Urgent</div>
                      </div>
                    </div>

                    <!-- Patient List -->
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                        <div class="w-6 h-6 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">A</div>
                        <div class="flex-1 text-xs">
                          <div class="font-medium">Alex M.</div>
                          <div class="text-gray-500">Speech Therapy</div>
                        </div>
                        <div class="text-xs text-gray-500">2:00 PM</div>
                      </div>
                      <div class="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                        <div class="w-6 h-6 bg-green-500 rounded-full text-xs text-white flex items-center justify-center">S</div>
                        <div class="flex-1 text-xs">
                          <div class="font-medium">Sofia K.</div>
                          <div class="text-gray-500">Check-up</div>
                        </div>
                        <div class="text-xs text-gray-500">3:30 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Icon name="i-heroicons-globe-alt" class="w-4 h-4 mr-2" />
                Browser-Based Access
              </div>

              <h3 class="text-3xl font-bold text-gray-900 mb-6">Web Application</h3>

              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Secure web platform optimized for healthcare professionals. Access patient information, conduct telemedicine sessions, and manage treatment plans from any browser.
              </p>

              <!-- Web Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Telemedicine Integration</h4>
                    <p class="text-gray-600">Secure video consultations with integrated health records</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">HIPAA-Compliant Portal</h4>
                    <p class="text-gray-600">Enterprise security for patient data access and management</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Cross-Device Compatibility</h4>
                    <p class="text-gray-600">Works seamlessly on tablets, laptops, and desktop computers</p>
                  </div>
                </div>
              </div>

              <div class="bg-green-50 rounded-xl p-6">
                <h4 class="font-semibold text-gray-900 mb-3">Ideal for:</h4>
                <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>• Pediatric Specialists</div>
                  <div>• Speech Therapists</div>
                  <div>• Occupational Therapists</div>
                  <div>• Behavioral Therapists</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Platform -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <Icon name="i-heroicons-device-phone-mobile" class="w-4 h-4 mr-2" />
                iOS & Android Native Apps
              </div>

              <h3 class="text-3xl font-bold text-gray-900 mb-6">Mobile Application</h3>

              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Native mobile apps built with Flutter for students and families. Engaging interface for accessing learning activities, tracking progress, and staying connected with educators and healthcare providers.
              </p>

              <!-- Mobile Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Interactive Learning Activities</h4>
                    <p class="text-gray-600">Touch-friendly games and exercises designed for special needs</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">QR Code Integration</h4>
                    <p class="text-gray-600">Quick access through camera-based QR code scanning</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Parent Dashboard</h4>
                    <p class="text-gray-600">Real-time progress monitoring and communication tools</p>
                  </div>
                </div>
              </div>

              <div class="bg-purple-50 rounded-xl p-6">
                <h4 class="font-semibold text-gray-900 mb-3">Ideal for:</h4>
                <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>• Students (All Ages)</div>
                  <div>• Parents & Guardians</div>
                  <div>• Family Members</div>
                  <div>• Caregivers</div>
                </div>
              </div>
            </div>

            <!-- Mobile Visual -->
            <div class="relative">
              <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                <div class="bg-gray-900 rounded-2xl p-2 shadow-lg max-w-xs mx-auto">
                  <!-- Phone Frame -->
                  <div class="bg-white rounded-xl h-96 p-4 flex flex-col">
                    <!-- Status Bar -->
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-xs font-medium">9:41</span>
                      <div class="flex items-center space-x-1">
                        <div class="w-4 h-2 bg-green-500 rounded-sm"/>
                      </div>
                    </div>

                    <!-- App Header -->
                    <div class="flex items-center space-x-3 mb-6">
                      <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-xs">Q</span>
                      </div>
                      <div>
                        <p class="font-medium text-gray-900 text-sm">Welcome, Alex!</p>
                        <p class="text-xs text-gray-600">Today's Activities</p>
                      </div>
                    </div>

                    <!-- Activity Cards -->
                    <div class="space-y-3 flex-1">
                      <div class="bg-blue-50 rounded-lg p-3">
                        <div class="flex items-center space-x-2 mb-2">
                          <Icon name="i-heroicons-book-open" class="w-4 h-4 text-blue-500" />
                          <span class="text-sm font-medium">Reading Practice</span>
                        </div>
                        <div class="w-full bg-blue-200 rounded-full h-2">
                          <div class="bg-blue-500 h-2 rounded-full w-3/4"/>
                        </div>
                      </div>

                      <div class="bg-green-50 rounded-lg p-3">
                        <div class="flex items-center space-x-2 mb-2">
                          <Icon name="i-heroicons-puzzle-piece" class="w-4 h-4 text-green-500" />
                          <span class="text-sm font-medium">Math Games</span>
                        </div>
                        <div class="w-full bg-green-200 rounded-full h-2">
                          <div class="bg-green-500 h-2 rounded-full w-1/2"/>
                        </div>
                      </div>

                      <div class="bg-purple-50 rounded-lg p-3">
                        <div class="flex items-center space-x-2 mb-2">
                          <Icon name="i-heroicons-musical-note" class="w-4 h-4 text-purple-500" />
                          <span class="text-sm font-medium">Music Therapy</span>
                        </div>
                        <span class="text-xs text-gray-600">Starting at 2:00 PM</span>
                      </div>
                    </div>

                    <!-- Bottom Navigation -->
                    <div class="flex justify-around pt-4 border-t border-gray-200">
                      <Icon name="i-heroicons-home" class="w-5 h-5 text-purple-500" />
                      <Icon name="i-heroicons-academic-cap" class="w-5 h-5 text-gray-400" />
                      <Icon name="i-heroicons-chart-bar" class="w-5 h-5 text-gray-400" />
                      <Icon name="i-heroicons-user" class="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Synchronization Features -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Seamless Data Synchronization
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience real-time data synchronization across all platforms ensuring everyone has access to the most up-to-date information.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-8">
              Real-Time Data Synchronization
            </h3>

            <div class="space-y-6">
              <!-- Sync Feature 1 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-arrow-path" class="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Instant Updates</h4>
                    <p class="text-gray-600 leading-relaxed">
                      Changes made on any platform are instantly synchronized across all devices. Create an activity on desktop and see it immediately on mobile.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Sync Feature 2 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-cloud" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Cloud-Based Storage</h4>
                    <p class="text-gray-600 leading-relaxed">
                      All data is securely stored in the cloud with automatic backups, ensuring access from any device while maintaining data integrity.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Sync Feature 3 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-wifi" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Offline Sync</h4>
                    <p class="text-gray-600 leading-relaxed">
                      Work offline and automatically sync changes when connection is restored. Never lose progress or important updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sync Visualization -->
          <div class="relative">
            <div class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h4 class="text-xl font-semibold text-gray-900 mb-2">Data Flow Diagram</h4>
                <p class="text-gray-600">Real-time synchronization across platforms</p>
              </div>

              <!-- Sync Flow -->
              <div class="relative">
                <!-- Cloud Center -->
                <div class="flex justify-center mb-8">
                  <div class="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center">
                    <Icon name="i-heroicons-cloud" class="w-8 h-8 text-white" />
                  </div>
                </div>

                <!-- Platforms -->
                <div class="grid grid-cols-3 gap-6">
                  <!-- Desktop -->
                  <div class="text-center">
                    <div class="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon name="i-heroicons-computer-desktop" class="w-6 h-6 text-white" />
                    </div>
                    <p class="text-sm font-medium text-gray-900">Desktop</p>
                  </div>

                  <!-- Web -->
                  <div class="text-center">
                    <div class="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon name="i-heroicons-globe-alt" class="w-6 h-6 text-white" />
                    </div>
                    <p class="text-sm font-medium text-gray-900">Web</p>
                  </div>

                  <!-- Mobile -->
                  <div class="text-center">
                    <div class="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon name="i-heroicons-device-phone-mobile" class="w-6 h-6 text-white" />
                    </div>
                    <p class="text-sm font-medium text-gray-900">Mobile</p>
                  </div>
                </div>

                <!-- Animated Sync Lines -->
                <div class="absolute inset-0 pointer-events-none">
                  <svg class="w-full h-full" viewBox="0 0 200 150">
                    <!-- Lines from cloud to platforms -->
                    <line x1="100" y1="40" x2="40" y2="120" stroke="#10b981" stroke-width="2" opacity="0.6" class="animate-pulse" />
                    <line x1="100" y1="40" x2="100" y2="120" stroke="#10b981" stroke-width="2" opacity="0.6" class="animate-pulse" />
                    <line x1="100" y1="40" x2="160" y2="120" stroke="#10b981" stroke-width="2" opacity="0.6" class="animate-pulse" />
                  </svg>
                </div>
              </div>

              <!-- Sync Status -->
              <div class="mt-6 text-center">
                <div class="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-4 py-2">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/>
                  <span class="text-sm font-medium text-emerald-700">Live Sync Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specifications -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Built with modern technologies to ensure optimal performance, security, and compatibility across all platforms.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Desktop Specs -->
          <div class="bg-blue-50 rounded-2xl p-8">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-computer-desktop" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Desktop Application</h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-gray-900 mb-2">Technology Stack</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• .NET MAUI Framework</li>
                  <li>• C# Programming Language</li>
                  <li>• MVVM Architecture</li>
                  <li>• SQLite Local Database</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-gray-900 mb-2">System Requirements</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Windows 10 (1903+)</li>
                  <li>• macOS 11.0+</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 2GB available storage</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-gray-900 mb-2">Key Features</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Offline functionality</li>
                  <li>• Advanced reporting</li>
                  <li>• Bulk operations</li>
                  <li>• File management</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Web Specs -->
          <div class="bg-green-50 rounded-2xl p-8">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Web Application</h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-gray-900 mb-2">Technology Stack</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Nuxt.js 3 Framework</li>
                  <li>• Vue.js 3 & TypeScript</li>
                  <li>• Server-Side Rendering</li>
                  <li>• RESTful API Integration</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-gray-900 mb-2">Browser Support</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Chrome 90+</li>
                  <li>• Firefox 88+</li>
                  <li>• Safari 14+</li>
                  <li>• Edge 90+</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-gray-900 mb-2">Key Features</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Video conferencing</li>
                  <li>• Real-time messaging</li>
                  <li>• Document sharing</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Mobile Specs -->
          <div class="bg-purple-50 rounded-2xl p-8">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-device-phone-mobile" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Mobile Application</h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-gray-900 mb-2">Technology Stack</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Flutter Framework</li>
                  <li>• Dart Programming Language</li>
                  <li>• Native Performance</li>
                  <li>• Local Data Caching</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-gray-900 mb-2">Platform Support</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• iOS 11.0+</li>
                  <li>• Android 6.0+ (API 23)</li>
                  <li>• iPhone 6s and newer</li>
                  <li>• Android 6GB+ RAM recommended</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-gray-900 mb-2">Key Features</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Touch-optimized UI</li>
                  <li>• QR code scanning</li>
                  <li>• Push notifications</li>
                  <li>• Offline activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Comparison -->
    <section class="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Multi-Platform Benefits
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our multi-platform approach delivers superior outcomes compared to single-platform solutions.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Benefit 1 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">3x</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Higher Engagement</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Students using multiple platforms show 3x higher engagement rates compared to single-platform users.
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">50%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Better Accessibility</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              50% improvement in platform accessibility for users with different devices and preferences.
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">90%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">User Satisfaction</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              90% of users appreciate the flexibility of choosing their preferred platform for different tasks.
            </p>
          </div>

          <!-- Benefit 4 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">24/7</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Always Available</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Round-the-clock access from any device ensures continuous learning and healthcare support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Download & Access -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Started on Your Preferred Platform
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the platform that works best for your role and start experiencing the benefits of Q-Academy's integrated approach.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Desktop Download -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
            <div class="w-20 h-20 bg-blue-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-computer-desktop" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Desktop Application</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Full-featured desktop application for teachers and administrators with advanced tools and offline capabilities.
            </p>
            <div class="space-y-3">
              <NuxtButton color="primary" class="w-full">
                <Icon name="i-simple-icons-windows" class="w-4 h-4 mr-2" />
                Download for Windows
              </NuxtButton>
              <NuxtButton color="primary" variant="outline" class="w-full">
                <Icon name="i-simple-icons-apple" class="w-4 h-4 mr-2" />
                Download for macOS
              </NuxtButton>
            </div>
            <p class="text-xs text-gray-500 mt-4">System requirements: Windows 10+ or macOS 11+</p>
          </div>

          <!-- Web Access -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
            <div class="w-20 h-20 bg-green-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-globe-alt" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Web Application</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Browser-based platform for healthcare professionals with secure telemedicine and patient management features.
            </p>
            <div class="space-y-3">
              <NuxtButton color="primary" class="w-full">
                <Icon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                Access Web Portal
              </NuxtButton>
              <NuxtButton color="primary" variant="outline" class="w-full">
                <Icon name="i-heroicons-bookmark" class="w-4 h-4 mr-2" />
                Bookmark Portal
              </NuxtButton>
            </div>
            <p class="text-xs text-gray-500 mt-4">Works on Chrome, Firefox, Safari, and Edge</p>
          </div>

          <!-- Mobile Download -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
            <div class="w-20 h-20 bg-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-device-phone-mobile" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Mobile Application</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Native mobile apps for students and families with engaging activities and progress tracking features.
            </p>
            <div class="space-y-3">
              <NuxtButton color="primary" class="w-full">
                <Icon name="i-simple-icons-appstore" class="w-4 h-4 mr-2" />
                Download on App Store
              </NuxtButton>
              <NuxtButton color="primary" variant="outline" class="w-full">
                <Icon name="i-simple-icons-googleplay" class="w-4 h-4 mr-2" />
                Get it on Google Play
              </NuxtButton>
            </div>
            <p class="text-xs text-gray-500 mt-4">Requires iOS 11+ or Android 6.0+</p>
          </div>
        </div>

        <!-- Coming Soon Features -->
        <div class="mt-16 bg-gray-50 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p class="text-lg text-gray-600">Enhanced features and platform expansions in development</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Icon name="i-heroicons-tv" class="w-6 h-6 text-indigo-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Smart TV App</h4>
              <p class="text-sm text-gray-600">Large screen activities for group therapy sessions</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Icon name="i-heroicons-device-tablet" class="w-6 h-6 text-orange-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Tablet Optimization</h4>
              <p class="text-sm text-gray-600">Enhanced tablet interface for classroom use</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Icon name="i-heroicons-microphone" class="w-6 h-6 text-green-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Voice Assistant</h4>
              <p class="text-sm text-gray-600">Hands-free navigation and activity guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Experience the Power of Multi-Platform Integration
        </h2>
        <p class="text-xl text-emerald-100 mb-8 leading-relaxed">
          Start using Q-Academy on your preferred platform and discover how seamless integration transforms special needs education and healthcare.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtButton color="white" size="lg" class="px-8 py-4">
            Choose Your Platform
          </NuxtButton>
          <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
            Platform Comparison
          </NuxtButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Multi-Platform Access - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Access Q-Academy seamlessly across desktop, web, and mobile platforms. Role-optimized interfaces with real-time synchronization for special needs education and healthcare.' }
  ]
})
</script>
