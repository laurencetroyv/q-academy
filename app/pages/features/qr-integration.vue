<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><span class="text-indigo-600 font-medium">QR Integration</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-qr-code" class="w-4 h-4 mr-2" />
              Quick & Secure Access Technology
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              QR Code Integration
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline student identification, activity access, and data management with secure QR code technology. Enable quick enrollment, instant activity launches, and seamless platform navigation for all users.
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Instant Student Identification</h3>
                  <p class="text-gray-600">Quick and secure student authentication with personalized QR codes</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Activity Quick Launch</h3>
                  <p class="text-gray-600">Scan to immediately access learning activities and assignments</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Attendance Tracking</h3>
                  <p class="text-gray-600">Automated attendance and participation logging</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton size="lg" class="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white">
                Generate QR Code
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                Scan Demo
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <!-- QR Code Display -->
              <div class="text-center mb-6">
                <h3 class="font-semibold text-gray-900 mb-4">Student QR Code</h3>

                <!-- QR Code Visual -->
                <div class="w-32 h-32 bg-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div class="grid grid-cols-8 gap-px">
                    <!-- QR Code Pattern Simulation -->
                    <div class="w-2 h-2 bg-white"/>
                    <div class="w-2 h-2 bg-gray-900"/>
                    <div class="w-2 h-2 bg-white"/>
                    <div class="w-2 h-2 bg-gray-900"/>
                    <div class="w-2 h-2 bg-white"/>
                    <div class="w-2 h-2 bg-gray-900"/>
                    <div class="w-2 h-2 bg-white"/>
                    <div class="w-2 h-2 bg-gray-900"/>
                    <!-- Additional pattern rows -->
                    <div class="w-2 h-2 bg-gray-900"/>
                    <div class="w-2 h-2 bg-white"/>
                    <div class="w-2 h-2 bg-gray-900"/>
                    <div class="w-2 h-2 bg-white"/>
                    <div class="w-2 h-2 bg-gray-900"/>
                    <div class="w-2 h-2 bg-white"/>
                    <div class="w-2 h-2 bg-gray-900"/>
                    <div class="w-2 h-2 bg-white"/>
                  </div>
                </div>

                <!-- Student Info -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-center justify-center space-x-3 mb-3">
                    <div class="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                      <span class="text-white font-bold text-sm">AM</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Alex Martinez</p>
                      <p class="text-sm text-gray-600">Grade 3 • ID: QA-2024-001</p>
                    </div>
                  </div>

                  <div class="text-xs text-gray-500">
                    <p>Valid until: Dec 31, 2024</p>
                    <p>Last scanned: 2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-bolt" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Instant Access</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-shield-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Versatile QR Code Applications
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the many ways QR codes streamline interactions across our platform for students, teachers, and healthcare providers.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Student Login -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-user-circle" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Student Authentication</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Students can quickly log into their accounts by scanning their personalized QR code, eliminating password difficulties.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Passwordless login
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Age-appropriate access
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Automatic session logging
              </li>
            </ul>
          </div>

          <!-- Activity Access -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-play" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Activity Quick Launch</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Teachers can generate QR codes for specific activities, allowing students to instantly access assignments and learning materials.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                One-scan activity access
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Adaptive content delivery
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Progress auto-tracking
              </li>
            </ul>
          </div>

          <!-- Attendance Tracking -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-clipboard-document-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Attendance & Check-in</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Automated attendance tracking when students scan QR codes, providing real-time participation data to teachers and parents.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Real-time attendance
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Parent notifications
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Participation analytics
              </li>
            </ul>
          </div>

          <!-- Medical Access -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Medical Information Access</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Healthcare providers can quickly access student medical information and history by scanning secure medical QR codes.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Emergency medical info
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Treatment history
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                HIPAA-compliant access
              </li>
            </ul>
          </div>

          <!-- Parent Enrollment -->
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-indigo-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Easy Student Enrollment</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Parents can generate QR codes for their children, making it easy for teachers and doctors to add students to their systems.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Quick enrollment process
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Secure data transfer
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Permission management
              </li>
            </ul>
          </div>

          <!-- Resource Sharing -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-teal-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-share" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Resource & Report Sharing</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Share educational resources, progress reports, and therapy materials with families through secure QR code links.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Instant resource access
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Time-limited links
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Download tracking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Features -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Advanced QR Security Features
            </h2>

            <div class="space-y-6">
              <!-- Security Feature 1 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-key" class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Encrypted QR Codes</h3>
                    <p class="text-gray-600 leading-relaxed">
                      All QR codes are encrypted with advanced cryptographic algorithms, ensuring that sensitive information cannot be accessed by unauthorized scanners.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Security Feature 2 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-clock" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Time-Limited Access</h3>
                    <p class="text-gray-600 leading-relaxed">
                      QR codes automatically expire after set time periods, preventing unauthorized access to outdated or compromised codes.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Security Feature 3 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-eye" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Access Monitoring</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Real-time monitoring and logging of all QR code scans, providing complete audit trails for security and compliance purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Security Features -->
          <div class="relative">
            <div class="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">QR Security Dashboard</h3>
                <p class="text-gray-600">Real-time security monitoring</p>
              </div>

              <!-- Security Dashboard -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="bg-green-50 rounded-lg p-3 text-center">
                    <div class="text-lg font-bold text-green-600">256-bit</div>
                    <div class="text-xs text-gray-600">Encryption</div>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-3 text-center">
                    <div class="text-lg font-bold text-blue-600">24h</div>
                    <div class="text-xs text-gray-600">Max Validity</div>
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="text-sm font-medium text-gray-900">Security Events</div>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div class="flex items-center space-x-2">
                        <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500" />
                        <span class="text-sm text-gray-700">QR Code Generated</span>
                      </div>
                      <span class="text-xs text-gray-500">2m ago</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div class="flex items-center space-x-2">
                        <Icon name="i-heroicons-eye" class="w-4 h-4 text-blue-500" />
                        <span class="text-sm text-gray-700">Successful Scan</span>
                      </div>
                      <span class="text-xs text-gray-500">5m ago</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div class="flex items-center space-x-2">
                        <Icon name="i-heroicons-clock" class="w-4 h-4 text-yellow-500" />
                        <span class="text-sm text-gray-700">Code Expired</span>
                      </div>
                      <span class="text-xs text-gray-500">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementation Guide -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How QR Integration Works
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple three-step process to implement and use QR codes across all Q-Academy platforms.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Step 1: Generation -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-plus" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">1</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Generate QR Codes</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Teachers, doctors, and parents can easily generate secure QR codes for students, activities, or resources with just a few clicks.
            </p>
            <div class="bg-blue-50 rounded-lg p-4">
              <ul class="text-sm text-gray-700 space-y-2">
                <li>• Select QR code type</li>
                <li>• Choose security settings</li>
                <li>• Set expiration time</li>
                <li>• Generate instantly</li>
              </ul>
            </div>
          </div>

          <!-- Step 2: Distribution -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-share" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">2</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Share & Distribute</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              QR codes can be printed, displayed digitally, or shared via email. Multiple distribution methods ensure accessibility for all users.
            </p>
            <div class="bg-green-50 rounded-lg p-4">
              <ul class="text-sm text-gray-700 space-y-2">
                <li>• Print physical copies</li>
                <li>• Display on screens</li>
                <li>• Email to families</li>
                <li>• Embed in documents</li>
              </ul>
            </div>
          </div>

          <!-- Step 3: Scanning -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center relative">
              <Icon name="i-heroicons-qr-code" class="w-10 h-10 text-white" />
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">3</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Scan & Access</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Users simply scan QR codes with any smartphone or tablet camera to instantly access content, login, or complete actions.
            </p>
            <div class="bg-purple-50 rounded-lg p-4">
              <ul class="text-sm text-gray-700 space-y-2">
                <li>• Open camera app</li>
                <li>• Point at QR code</li>
                <li>• Automatic recognition</li>
                <li>• Instant access granted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits & ROI -->
    <section class="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Measurable QR Integration Benefits
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how QR code integration has improved efficiency and user experience across Q-Academy platforms.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Benefit 1 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">90%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Faster Login</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Reduction in time needed for student authentication and platform access compared to traditional login methods.
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">95%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">User Satisfaction</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Students, teachers, and parents report high satisfaction with QR code convenience and ease of use.
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">80%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Reduced Support</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Decrease in password-related support requests and login assistance needs.
            </p>
          </div>

          <!-- Benefit 4 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">100%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Attendance Accuracy</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Perfect attendance tracking accuracy with automated QR code scanning and verification.
            </p>
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
            Built on industry-standard QR technology with enhanced security and accessibility features.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- QR Standards -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="i-heroicons-cog-6-tooth" class="w-6 h-6 text-indigo-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">QR Code Standards</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• ISO/IEC 18004 compliant</li>
              <li>• Version 1-40 support</li>
              <li>• Error correction levels L, M, Q, H</li>
              <li>• UTF-8 character encoding</li>
              <li>• Dynamic data capacity up to 7,089 characters</li>
            </ul>
          </div>

          <!-- Security Features -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="i-heroicons-shield-check" class="w-6 h-6 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Security Features</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• AES-256 encryption</li>
              <li>• Digital signatures</li>
              <li>• Time-based expiration</li>
              <li>• Device fingerprinting</li>
              <li>• Anti-tamper protection</li>
            </ul>
          </div>

          <!-- Compatibility -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="i-heroicons-device-phone-mobile" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Device Compatibility</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• iOS 11+ native camera</li>
              <li>• Android 8+ built-in scanner</li>
              <li>• Windows/macOS webcam support</li>
              <li>• Third-party QR apps</li>
              <li>• Accessibility screen readers</li>
            </ul>
          </div>

          <!-- Performance -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="i-heroicons-bolt" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• &lessdot; 1 second scan time</li>
              <li>• 99.9% recognition accuracy</li>
              <li>• Works in low light conditions</li>
              <li>• 50cm to 3m scanning distance</li>
              <li>• Damaged code recovery up to 30%</li>
            </ul>
          </div>

          <!-- Integration APIs -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="i-heroicons-code-bracket" class="w-6 h-6 text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">API Integration</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• RESTful API endpoints</li>
              <li>• Real-time webhooks</li>
              <li>• SDKs for major platforms</li>
              <li>• GraphQL support</li>
              <li>• Rate limiting protection</li>
            </ul>
          </div>

          <!-- Accessibility -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="i-heroicons-heart" class="w-6 h-6 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Accessibility Features</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• High contrast QR codes</li>
              <li>• Large print options</li>
              <li>• Audio feedback support</li>
              <li>• Voice-guided scanning</li>
              <li>• WCAG 2.1 AA compliant</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <app-call-to-action
      title="Ready to Simplify Access with QR Codes?"
      description="Transform how your students, teachers, and healthcare providers interact with Q-Academy through secure, instant QR code access."
      color="bg-indigo-50"
      first-button-color="bg-indigo-500 hover:bg-indigo-600 text-white"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'QR Code Integration - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Streamline access and interactions with Q-Academy\'s secure QR code integration. Enable instant login, activity access, and data sharing for special needs education.' }
  ]
})
</script>
