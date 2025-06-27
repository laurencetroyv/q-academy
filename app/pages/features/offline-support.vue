<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-yellow-500 to-orange-500 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"/>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <Icon name="i-heroicons-cloud-arrow-down" class="w-4 h-4 mr-2"/>
            Uninterrupted Learning Experience
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Offline-First Platform
          </h1>

          <p class="text-xl text-yellow-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ensure continuous learning and data collection even without internet connectivity. Q-Academy's offline capabilities keep education flowing in any environment.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtButton color="white" size="lg" class="px-8 py-4">
              Try Offline Mode
            </NuxtButton>
            <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
              Learn How It Works
            </NuxtButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Offline Matters -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Offline Capabilities Matter
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            In the Philippines, reliable internet connectivity can be challenging, especially in rural areas. Q-Academy ensures that learning never stops, regardless of connection status.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Rural Connectivity -->
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-map" class="w-10 h-10 text-green-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Rural Area Access</h3>
            <p class="text-gray-600 leading-relaxed">
              Students in remote areas can continue their learning activities without worrying about internet connectivity issues affecting their education progress.
            </p>
          </div>

          <!-- Cost Savings -->
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-currency-dollar" class="w-10 h-10 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Reduced Data Costs</h3>
            <p class="text-gray-600 leading-relaxed">
              Minimize data usage by syncing only when connected, helping families and schools reduce internet costs while maintaining full functionality.
            </p>
          </div>

          <!-- Reliability -->
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-shield-check" class="w-10 h-10 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">System Reliability</h3>
            <p class="text-gray-600 leading-relaxed">
              Ensure consistent user experience regardless of network conditions, with automatic data synchronization when connectivity is restored.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform-Specific Offline Features -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Offline Features by Platform
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Each platform is optimized for offline functionality, ensuring the best possible experience for every user role.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Mobile Application (Students) -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <Icon name="i-heroicons-device-phone-mobile" class="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold text-gray-900">Mobile Application</h3>
                    <p class="text-sm text-purple-600 font-medium">For Students with Disabilities</p>
                  </div>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  Students can access and complete their learning activities anytime, anywhere, without needing an internet connection.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Offline Activity Access</h4>
                      <p class="text-sm text-gray-600">Download and complete interactive learning activities without internet</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Progress Tracking</h4>
                      <p class="text-sm text-gray-600">Local storage of activity completion and performance data</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">QR Code Authentication</h4>
                      <p class="text-sm text-gray-600">Cached authentication for seamless offline login</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Auto-Sync</h4>
                      <p class="text-sm text-gray-600">Automatic data synchronization when connection is restored</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <div class="text-center">
                  <div class="w-24 h-24 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Icon name="i-heroicons-device-phone-mobile" class="w-12 h-12 text-purple-500" />
                  </div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Offline Storage Capacity</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">Learning Activities:</span>
                      <span class="font-medium">Up to 50 activities</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">Media Content:</span>
                      <span class="font-medium">500MB multimedia</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">Progress Data:</span>
                      <span class="font-medium">30 days history</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Desktop Application (Teachers) -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div class="order-2 lg:order-1">
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <div class="text-center">
                    <div class="w-24 h-24 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Icon name="i-heroicons-computer-desktop" class="w-12 h-12 text-blue-500" />
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Advanced Offline Features</h4>
                    <div class="space-y-2">
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Local Database:</span>
                        <span class="font-medium">SQLite storage</span>
                      </div>
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Bulk Operations:</span>
                        <span class="font-medium">1000+ records</span>
                      </div>
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Report Generation:</span>
                        <span class="font-medium">Offline PDF export</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="order-1 lg:order-2">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Icon name="i-heroicons-computer-desktop" class="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold text-gray-900">Desktop Application</h3>
                    <p class="text-sm text-blue-600 font-medium">For Teachers & Administrators</p>
                  </div>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  Teachers can create activities, manage student data, and generate reports even without internet connectivity.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Activity Creation</h4>
                      <p class="text-sm text-gray-600">Design and customize learning activities offline</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Student Management</h4>
                      <p class="text-sm text-gray-600">Access and update student profiles and progress data</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Report Generation</h4>
                      <p class="text-sm text-gray-600">Create comprehensive reports and export to PDF</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Bulk Data Operations</h4>
                      <p class="text-sm text-gray-600">Process large datasets and batch operations offline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Web Application (Doctors) -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                    <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold text-gray-900">Web Application</h3>
                    <p class="text-sm text-green-600 font-medium">For Healthcare Professionals</p>
                  </div>
                </div>

                <p class="text-gray-600 mb-6 leading-relaxed">
                  Doctors can review patient progress, create medical notes, and access critical information even during connectivity issues.
                </p>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Patient Data Cache</h4>
                      <p class="text-sm text-gray-600">Essential patient information stored locally for offline access</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Medical Notes</h4>
                      <p class="text-sm text-gray-600">Create and edit medical observations offline</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Progress Review</h4>
                      <p class="text-sm text-gray-600">Analyze student progress data and educational outcomes</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 class="font-medium text-gray-900">Service Worker Technology</h4>
                      <p class="text-sm text-gray-600">Progressive Web App functionality for native-like offline experience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <div class="text-center">
                  <div class="w-24 h-24 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Icon name="i-heroicons-globe-alt" class="w-12 h-12 text-green-500" />
                  </div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">PWA Capabilities</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">Cached Pages:</span>
                      <span class="font-medium">Core app pages</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">Patient Records:</span>
                      <span class="font-medium">Recent 100 records</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">Offline Forms:</span>
                      <span class="font-medium">Notes & assessments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Implementation -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Offline Sync Works
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our intelligent synchronization system ensures data integrity and seamless transitions between online and offline states.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Step 1: Data Detection -->
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-wifi" class="w-10 h-10 text-blue-600" />
            </div>
            <div class="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm">1</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Connection Detection</h3>
            <p class="text-gray-600 leading-relaxed">
              Automatic detection of network status with intelligent fallback to offline mode when connectivity is lost.
            </p>
          </div>

          <!-- Step 2: Local Storage -->
          <div class="text-center">
            <div class="w-20 h-20 bg-yellow-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-circle-stack" class="w-10 h-10 text-yellow-600" />
            </div>
            <div class="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm">2</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Local Data Storage</h3>
            <p class="text-gray-600 leading-relaxed">
              Secure local storage of user data, activity progress, and essential app functionality using encrypted databases.
            </p>
          </div>

          <!-- Step 3: Smart Sync -->
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-arrow-path" class="w-10 h-10 text-green-600" />
            </div>
            <div class="w-8 h-8 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm">3</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Intelligent Sync</h3>
            <p class="text-gray-600 leading-relaxed">
              Automatic synchronization when connection is restored, with conflict resolution and data integrity checks.
            </p>
          </div>
        </div>

        <!-- Sync Process Details -->
        <div class="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">Synchronization Process</h3>

          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Data Priority Levels</h4>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-red-500 rounded-full"/>
                  <span class="text-sm"><strong>Critical:</strong> Medical alerts, safety data</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-yellow-500 rounded-full"/>
                  <span class="text-sm"><strong>High:</strong> Student progress, activity completion</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-blue-500 rounded-full"/>
                  <span class="text-sm"><strong>Medium:</strong> Reports, analytics data</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-gray-500 rounded-full"/>
                  <span class="text-sm"><strong>Low:</strong> Preferences, cache updates</span>
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Conflict Resolution</h4>
              <div class="space-y-3 text-sm text-gray-600">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Timestamp-based resolution for non-conflicting data</span>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mt-0.5" />
                  <span>User notification for critical conflicts requiring input</span>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Automatic backup creation before sync operations</span>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Rollback capability for failed synchronizations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Offline-First Design
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of uninterrupted access to education and healthcare services.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Improved Performance -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-rocket-launch" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Faster Performance</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Local data access results in instant loading times and smooth user interactions without network delays.
            </p>
          </div>

          <!-- Better User Experience -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-face-smile" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Enhanced UX</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Consistent user experience regardless of network conditions, reducing frustration and improving adoption.
            </p>
          </div>

          <!-- Data Security -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Local encryption and secure sync protocols ensure data remains protected both offline and online.
            </p>
          </div>

          <!-- Cost Efficiency -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-currency-dollar" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Cost Savings</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Reduced data usage and bandwidth requirements lead to lower operational costs for schools and families.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Experience Uninterrupted Learning
        </h2>
        <p class="text-xl text-yellow-100 mb-8 leading-relaxed">
          Don't let connectivity issues disrupt education. Q-Academy's offline capabilities ensure learning continues everywhere, every time.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtButton color="white" size="lg" class="px-8 py-4">
            Start Free Trial
          </NuxtButton>
          <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
            Download Demo App
          </NuxtButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Offline Support - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Ensure continuous learning and data collection with Q-Academy\'s offline-first platform. Perfect for areas with limited internet connectivity in the Philippines.' }
  ]
})
</script>
