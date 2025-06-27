<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-indigo-600 to-blue-600 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"/>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            <Icon name="i-heroicons-code-bracket" class="w-4 h-4 mr-2"/>
            Enterprise Integration Solutions
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Seamless API Integration
          </h1>

          <p class="text-xl text-indigo-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect Q-Academy with your existing school systems, healthcare platforms, and third-party applications through our comprehensive API ecosystem.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtButton color="white" size="lg" class="px-8 py-4">
              View API Documentation
            </NuxtButton>
            <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
              Request API Access
            </NuxtButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Integration Features -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Integration Capabilities
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our RESTful APIs and webhook system enable seamless data flow between Q-Academy and your existing infrastructure.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- RESTful APIs -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">RESTful API Endpoints</h3>
            <p class="text-gray-600 mb-6">
              Comprehensive REST API with over 150+ endpoints covering student management, progress tracking, medical records, and communication.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Student CRUD operations</li>
              <li>• Progress data retrieval</li>
              <li>• Medical record access</li>
              <li>• Activity management</li>
              <li>• User authentication</li>
            </ul>
          </div>

          <!-- Real-time Webhooks -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-bolt" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Real-time Webhooks</h3>
            <p class="text-gray-600 mb-6">
              Stay updated with instant notifications for critical events like student progress updates, medical alerts, and system changes.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Progress milestone events</li>
              <li>• Medical alert notifications</li>
              <li>• User activity triggers</li>
              <li>• System status updates</li>
              <li>• Custom event handlers</li>
            </ul>
          </div>

          <!-- GraphQL Support -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-square-3-stack-3d" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">GraphQL Query Layer</h3>
            <p class="text-gray-600 mb-6">
              Flexible data querying with GraphQL support for efficient data fetching and reduced network overhead.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Flexible query structure</li>
              <li>• Reduced data transfer</li>
              <li>• Real-time subscriptions</li>
              <li>• Type-safe operations</li>
              <li>• Schema introspection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Examples -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular Integration Scenarios
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how Q-Academy seamlessly connects with existing systems to create a unified ecosystem.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- School Management Systems -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">School Management Systems</h3>
            </div>

            <p class="text-gray-600 mb-6">
              Integrate with existing Student Information Systems (SIS) for seamless data synchronization.
            </p>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 class="font-medium text-gray-900">Student Enrollment Sync</h4>
                  <p class="text-sm text-gray-600">Automatically sync student records and enrollment data</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 class="font-medium text-gray-900">Grade Book Integration</h4>
                  <p class="text-sm text-gray-600">Push progress data to existing grade book systems</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 class="font-medium text-gray-900">Attendance Tracking</h4>
                  <p class="text-sm text-gray-600">Sync attendance records across platforms</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Healthcare Systems -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-heart" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Healthcare Platforms</h3>
            </div>

            <p class="text-gray-600 mb-6">
              Connect with Electronic Health Record (EHR) systems and telemedicine platforms.
            </p>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 class="font-medium text-gray-900">EHR Data Exchange</h4>
                  <p class="text-sm text-gray-600">Secure medical record sharing with healthcare providers</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 class="font-medium text-gray-900">Appointment Scheduling</h4>
                  <p class="text-sm text-gray-600">Sync with existing calendar and scheduling systems</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 class="font-medium text-gray-900">Prescription Management</h4>
                  <p class="text-sm text-gray-600">Connect with pharmacy systems for medication tracking</p>
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
            Enterprise-grade API infrastructure built for scale, security, and reliability.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Authentication -->
          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-key" class="w-8 h-8 text-indigo-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Authentication</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>OAuth 2.0 / JWT</li>
              <li>API Key Management</li>
              <li>Rate Limiting</li>
              <li>IP Whitelisting</li>
            </ul>
          </div>

          <!-- Data Formats -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-document-text" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Data Formats</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>JSON / XML</li>
              <li>CSV Export</li>
              <li>PDF Reports</li>
              <li>HL7 FHIR</li>
            </ul>
          </div>

          <!-- Performance -->
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-rocket-launch" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>< 200ms Response</li>
              <li>99.9% Uptime SLA</li>
              <li>Auto Scaling</li>
              <li>CDN Distribution</li>
            </ul>
          </div>

          <!-- Security -->
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Security</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>HTTPS/TLS 1.3</li>
              <li>Data Encryption</li>
              <li>HIPAA Compliant</li>
              <li>Audit Logging</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SDK and Libraries -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            SDKs & Libraries
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Get started quickly with our comprehensive software development kits and libraries for popular programming languages.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- JavaScript/Node.js -->
          <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-yellow-600 font-bold text-sm">JS</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">JavaScript SDK</h3>
            </div>
            <p class="text-gray-600 text-sm mb-4">Full-featured SDK for Node.js and browser environments with TypeScript support.</p>
            <div class="flex items-center text-sm text-blue-600 hover:text-blue-500">
              <span>View Documentation</span>
              <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </div>

          <!-- Python -->
          <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-blue-600 font-bold text-sm">PY</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">Python SDK</h3>
            </div>
            <p class="text-gray-600 text-sm mb-4">Comprehensive Python package with async support and data science integrations.</p>
            <div class="flex items-center text-sm text-blue-600 hover:text-blue-500">
              <span>View Documentation</span>
              <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </div>

          <!-- PHP -->
          <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-purple-600 font-bold text-sm">PHP</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">PHP SDK</h3>
            </div>
            <p class="text-gray-600 text-sm mb-4">Laravel and Symfony compatible SDK with Composer support for easy integration.</p>
            <div class="flex items-center text-sm text-blue-600 hover:text-blue-500">
              <span>View Documentation</span>
              <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </div>

          <!-- C# -->
          <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-green-600 font-bold text-sm">C#</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">.NET SDK</h3>
            </div>
            <p class="text-gray-600 text-sm mb-4">.NET Standard library compatible with .NET Framework, .NET Core, and .NET 5+.</p>
            <div class="flex items-center text-sm text-blue-600 hover:text-blue-500">
              <span>View Documentation</span>
              <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </div>

          <!-- Java -->
          <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-red-600 font-bold text-sm">JV</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">Java SDK</h3>
            </div>
            <p class="text-gray-600 text-sm mb-4">Robust Java library with Spring Boot integration and Android support.</p>
            <div class="flex items-center text-sm text-blue-600 hover:text-blue-500">
              <span>View Documentation</span>
              <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </div>

          <!-- Ruby -->
          <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <span class="text-red-600 font-bold text-sm">RB</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900">Ruby Gem</h3>
            </div>
            <p class="text-gray-600 text-sm mb-4">Rails-friendly gem with ActiveRecord integration and comprehensive test coverage.</p>
            <div class="flex items-center text-sm text-blue-600 hover:text-blue-500">
              <span>View Documentation</span>
              <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Start Integrating?
        </h2>
        <p class="text-xl text-indigo-100 mb-8 leading-relaxed">
          Join hundreds of schools and healthcare providers who have successfully integrated Q-Academy into their existing workflows.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtButton color="white" size="lg" class="px-8 py-4">
            Get API Keys
          </NuxtButton>
          <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
            Schedule Integration Call
          </NuxtButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'API Integration - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Seamlessly integrate Q-Academy with your existing school systems, healthcare platforms, and third-party applications through our comprehensive API ecosystem.' }
  ]
})
</script>
