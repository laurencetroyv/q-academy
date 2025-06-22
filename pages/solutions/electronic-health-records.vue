<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"/>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-document-text" class="w-4 h-4 mr-2"/>
              Comprehensive Health Data Management
            </div>

            <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
              Electronic Health Records
            </h1>

            <p class="text-xl text-purple-100 mb-8 leading-relaxed">
              Centralized, secure health record management system specifically designed for students with special needs. Ensure all medical information is organized, accessible, and properly maintained across all platforms.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton size="lg" class="px-8 py-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                Explore EHR Features
              </NuxtButton>
              <NuxtLink size="lg" class="px-8 py-4 cursor-pointer text-white">
                View Demo
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <!-- Mock EHR Interface -->
              <div class="space-y-4">
                <div class="flex items-center space-x-3 mb-6">
                  <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Icon name="i-heroicons-document-text" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 class="text-white font-semibold">Patient: Alex Martinez</h3>
                    <p class="text-purple-100 text-sm">Student ID: QA-2024-001</p>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-white/20 rounded-lg p-3">
                    <div class="text-xs text-purple-200 mb-1">Last Visit</div>
                    <div class="text-white text-sm font-medium">Dec 15, 2024</div>
                  </div>
                  <div class="bg-white/20 rounded-lg p-3">
                    <div class="text-xs text-purple-200 mb-1">Diagnosis</div>
                    <div class="text-white text-sm font-medium">Autism Spectrum</div>
                  </div>
                </div>

                <div class="space-y-2">
                  <div class="bg-white/15 rounded-lg p-3 flex items-center justify-between">
                    <span class="text-white text-sm">Speech Therapy Progress</span>
                    <div class="w-16 h-2 bg-white/30 rounded-full">
                      <div class="w-12 h-2 bg-green-400 rounded-full"/>
                    </div>
                  </div>
                  <div class="bg-white/15 rounded-lg p-3 flex items-center justify-between">
                    <span class="text-white text-sm">Occupational Therapy</span>
                    <div class="w-16 h-2 bg-white/30 rounded-full">
                      <div class="w-10 h-2 bg-blue-400 rounded-full"/>
                    </div>
                  </div>
                  <div class="bg-white/15 rounded-lg p-3 flex items-center justify-between">
                    <span class="text-white text-sm">Behavioral Goals</span>
                    <div class="w-16 h-2 bg-white/30 rounded-full">
                      <div class="w-8 h-2 bg-yellow-400 rounded-full"/>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-center space-x-2 text-xs text-purple-200 mt-4">
                  <Icon name="i-heroicons-shield-check" class="w-4 h-4" />
                  <span>HIPAA Compliant • Encrypted Storage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core EHR Features -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health Record Management
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our EHR system is specifically designed for special education environments, integrating seamlessly with learning management and telemedicine platforms.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Secure Data Storage -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Secure Cloud Storage</h3>
            <p class="text-gray-600 mb-6">
              Enterprise-grade security with automated backups, ensuring all student health records are protected and accessible when needed.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• AES-256 encryption at rest and in transit</li>
              <li>• Automated daily backups</li>
              <li>• Multi-region data redundancy</li>
              <li>• 99.9% uptime guarantee</li>
            </ul>
          </div>

          <!-- Role-Based Access -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-user-group" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Role-Based Access Control</h3>
            <p class="text-gray-600 mb-6">
              Granular permissions ensure that teachers, doctors, and families only access information relevant to their role and responsibilities.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Doctor access to full medical records</li>
              <li>• Teacher access to educational health data</li>
              <li>• Parent access to child's complete records</li>
              <li>• Audit trails for all access attempts</li>
            </ul>
          </div>

          <!-- Progress Tracking -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Integrated Progress Tracking</h3>
            <p class="text-gray-600 mb-6">
              Seamlessly connect educational progress with health outcomes, providing comprehensive insights into student development.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Real-time therapy progress updates</li>
              <li>• IEP goal alignment tracking</li>
              <li>• Behavioral pattern analysis</li>
              <li>• Milestone achievement recording</li>
            </ul>
          </div>

          <!-- Custom Templates -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-document-plus" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Customizable Templates</h3>
            <p class="text-gray-600 mb-6">
              Create and manage custom report templates for different specialties, conditions, and documentation requirements.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Autism assessment templates</li>
              <li>• Therapy progress note formats</li>
              <li>• IEP integration templates</li>
              <li>• Custom evaluation forms</li>
            </ul>
          </div>

          <!-- Version Control -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-teal-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-clock" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Version History & Recovery</h3>
            <p class="text-gray-600 mb-6">
              Complete version history with soft deletion capabilities, ensuring data integrity and recovery options for all records.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Complete change history tracking</li>
              <li>• Soft deletion with recovery option</li>
              <li>• User attribution for all changes</li>
              <li>• Rollback to previous versions</li>
            </ul>
          </div>

          <!-- Integration Capabilities -->
          <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-indigo-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-link" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Seamless Integration</h3>
            <p class="text-gray-600 mb-6">
              Connect with existing hospital systems, laboratory networks, and pharmacy platforms for comprehensive care coordination.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Hospital information systems (HIS)</li>
              <li>• Laboratory data integration</li>
              <li>• Pharmacy management systems</li>
              <li>• Insurance claim processing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Types & Organization -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health Data Management
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our EHR system captures and organizes all aspects of student health and development information in one secure location.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Medical Information -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-heart" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Medical Information</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Primary Health Data</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Medical history & diagnoses</li>
                  <li>• Current medications & dosages</li>
                  <li>• Allergies & contraindications</li>
                  <li>• Vaccination records</li>
                  <li>• Emergency contact information</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Specialist Care</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Specialist consultations</li>
                  <li>• Therapy session notes</li>
                  <li>• Treatment plan updates</li>
                  <li>• Assessment results</li>
                  <li>• Progress evaluations</li>
                </ul>
              </div>
            </div>

            <div class="mt-6 p-4 bg-red-50 rounded-lg">
              <div class="flex items-center text-red-700">
                <Icon name="i-heroicons-exclamation-triangle" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm">Critical Alerts Integration</span>
              </div>
              <p class="text-red-600 text-sm mt-1">
                Real-time alerts for medication conflicts, emergency conditions, and critical health changes.
              </p>
            </div>
          </div>

          <!-- Educational Health Data -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Educational Health Data</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Learning Support</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Individual Education Plans (IEP)</li>
                  <li>• Behavioral intervention plans</li>
                  <li>• Accommodation requirements</li>
                  <li>• Sensory support needs</li>
                  <li>• Communication preferences</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Progress Monitoring</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Educational milestone tracking</li>
                  <li>• Behavioral pattern analysis</li>
                  <li>• Therapy progress reports</li>
                  <li>• Goal achievement metrics</li>
                  <li>• Teacher observations</li>
                </ul>
              </div>
            </div>

            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
              <div class="flex items-center text-blue-700">
                <Icon name="i-heroicons-chart-bar" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm">Integrated Analytics</span>
              </div>
              <p class="text-blue-600 text-sm mt-1">
                AI-powered insights connecting health data with educational outcomes for personalized interventions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance & Security -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Healthcare Compliance & Security
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our EHR system meets the highest standards for healthcare data protection and regulatory compliance.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- HIPAA Compliance -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-blue-100">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Full compliance with Health Insurance Portability and Accountability Act regulations for medical data protection and patient privacy.
            </p>
          </div>

          <!-- SOC 2 Type II -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-green-100">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-lock-closed" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Independently audited for security, availability, processing integrity, confidentiality, and privacy controls.
            </p>
          </div>

          <!-- FERPA Aligned -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-purple-100">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">FERPA Aligned</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Aligned with Family Educational Rights and Privacy Act requirements for student educational record protection.
            </p>
          </div>

          <!-- ISO 27001 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-orange-100">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              International standard for information security management systems ensuring systematic data protection.
            </p>
          </div>
        </div>

        <!-- Security Features -->
        <div class="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center">Advanced Security Features</h3>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-key" class="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">Multi-Factor Authentication</h4>
                <p class="text-gray-600 text-xs">Enhanced login security with multiple verification methods</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-eye-slash" class="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">Data Anonymization</h4>
                <p class="text-gray-600 text-xs">Automatic anonymization for research and analytics</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-document-magnifying-glass" class="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">Audit Logging</h4>
                <p class="text-gray-600 text-xs">Complete audit trails for all system access and changes</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-server" class="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">Encrypted Backups</h4>
                <p class="text-gray-600 text-xs">Automated encrypted backups with geographic redundancy</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-exclamation-triangle" class="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">Breach Detection</h4>
                <p class="text-gray-600 text-xs">Real-time monitoring and immediate breach notifications</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-clock" class="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">Session Management</h4>
                <p class="text-gray-600 text-xs">Automatic session timeout and activity monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reporting & Analytics -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Advanced Reporting & Analytics
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Generate comprehensive reports and gain insights from health data to improve student outcomes and care coordination.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Powerful Report Generation</h3>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-chart-pie" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Custom Report Builder</h4>
                  <p class="text-gray-600 text-sm">Drag-and-drop interface for creating personalized reports with specific data points and visualization preferences.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-document-arrow-down" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Multi-Format Export</h4>
                  <p class="text-gray-600 text-sm">Export reports in PDF, Excel, Word, and other formats for easy sharing with healthcare providers and educators.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-calendar" class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Automated Scheduling</h4>
                  <p class="text-gray-600 text-sm">Set up automated report generation and distribution to keep all stakeholders informed on a regular basis.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-chart-bar" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Trend Analysis</h4>
                  <p class="text-gray-600 text-sm">Advanced analytics to identify patterns in student health and development over time for proactive interventions.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Available Report Types</h3>

            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Progress Summary Reports</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Medical History Summaries</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Therapy Progress Reports</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">IEP Goal Tracking</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Behavioral Analysis Reports</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Medication Compliance Reports</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Educational Outcome Analysis</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Family Communication Logs</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500" />
              </div>
            </div>

            <div class="mt-6 p-4 bg-purple-50 rounded-lg">
              <div class="flex items-center text-purple-700 mb-2">
                <Icon name="i-heroicons-sparkles" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm">AI-Powered Insights</span>
              </div>
              <p class="text-purple-600 text-sm">
                Machine learning algorithms analyze patterns across all data points to provide predictive insights and intervention recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration with Q-Academy Ecosystem -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Seamless Ecosystem Integration
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our EHR system works seamlessly with Q-Academy's LMS and Telemedicine platforms, creating a unified environment for holistic student care.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- LMS Integration -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-blue-100">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Learning Management System</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Automatically sync educational progress data with health records to correlate learning outcomes with medical interventions and therapy progress.
            </p>
            <ul class="text-sm text-gray-600 space-y-2 text-left">
              <li>• IEP goal achievement tracking</li>
              <li>• Behavioral milestone correlation</li>
              <li>• Learning difficulty identification</li>
              <li>• Progress alert integration</li>
            </ul>
          </div>

          <!-- Telemedicine Integration -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-green-100">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-video-camera" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Telemedicine Platform</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Real-time integration with video consultations allows doctors to access complete health records during sessions and update information immediately.
            </p>
            <ul class="text-sm text-gray-600 space-y-2 text-left">
              <li>• Live record access during consultations</li>
              <li>• Instant prescription updates</li>
              <li>• Session note integration</li>
              <li>• Treatment plan modifications</li>
            </ul>
          </div>

          <!-- Unified Analytics -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-purple-100">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar-square" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Unified Analytics</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Comprehensive analytics combining educational, medical, and behavioral data to provide holistic insights into student development and care needs.
            </p>
            <ul class="text-sm text-gray-600 space-y-2 text-left">
              <li>• Cross-platform data correlation</li>
              <li>• Predictive health modeling</li>
              <li>• Intervention effectiveness analysis</li>
              <li>• Outcome optimization recommendations</li>
            </ul>
          </div>
        </div>

        <!-- Integration Benefits -->
        <div class="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Benefits of Integrated Care</h3>
            <p class="text-gray-600 max-w-2xl mx-auto">
              When health records, education data, and telemedicine work together, the result is more effective, personalized care for every student.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-bolt" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Faster Interventions</h4>
              <p class="text-gray-600 text-sm">Immediate access to complete student profiles enables quicker identification of issues and faster therapeutic responses.</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-target" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Personalized Care</h4>
              <p class="text-gray-600 text-sm">Complete data integration allows for highly personalized treatment plans that consider all aspects of student development.</p>
            </div>

            <div class="text-center">
              <div class="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Icon name="i-heroicons-chart-bar" class="w-6 h-6 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Better Outcomes</h4>
              <p class="text-gray-600 text-sm">Coordinated care across education and healthcare domains leads to improved student outcomes and family satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementation & Support -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Implementation & Ongoing Support
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support throughout the implementation process and ongoing maintenance to ensure your EHR system operates smoothly.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Implementation Process -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Implementation Process</h3>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Assessment & Planning</h4>
                  <p class="text-gray-600 text-sm">Comprehensive evaluation of current systems and development of customized implementation strategy.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Data Migration</h4>
                  <p class="text-gray-600 text-sm">Secure transfer of existing health records and educational data with zero downtime migration process.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Staff Training</h4>
                  <p class="text-gray-600 text-sm">Comprehensive training programs for all user roles including doctors, teachers, and administrative staff.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Go-Live Support</h4>
                  <p class="text-gray-600 text-sm">24/7 technical support during the initial launch period to ensure smooth transition and immediate issue resolution.</p>
                </div>
              </div>
            </div>

            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
              <div class="flex items-center text-blue-700">
                <Icon name="i-heroicons-clock" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm">Typical Implementation Timeline: 4-8 weeks</span>
              </div>
            </div>
          </div>

          <!-- Ongoing Support -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Ongoing Support Services</h3>

            <div class="space-y-4">
              <div class="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-green-500" />
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">24/7 Technical Support</h4>
                  <p class="text-gray-600 text-xs">Round-the-clock assistance for technical issues and system maintenance</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-blue-500" />
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">Regular System Updates</h4>
                  <p class="text-gray-600 text-xs">Automatic security patches and feature updates with minimal downtime</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-purple-500" />
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">Compliance Monitoring</h4>
                  <p class="text-gray-600 text-xs">Continuous monitoring to ensure ongoing HIPAA and regulatory compliance</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-orange-500" />
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">User Training Programs</h4>
                  <p class="text-gray-600 text-xs">Ongoing education and certification programs for new features and best practices</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-teal-500" />
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">Performance Optimization</h4>
                  <p class="text-gray-600 text-xs">Regular system performance reviews and optimization recommendations</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-pink-500" />
                <div>
                  <h4 class="font-medium text-gray-900 text-sm">Custom Development</h4>
                  <p class="text-gray-600 text-xs">Tailored feature development to meet specific organizational needs</p>
                </div>
              </div>
            </div>

            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                <div class="text-sm text-gray-600">System Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-call-to-action
      title="Transform Health Record Management Today"
      description="Join schools and healthcare providers across the Philippines who are using Q-Academy's EHR system to provide better coordinated care for students with special needs."
      color="bg-gradient-to-r from-purple-600 to-pink-600"
      first-button-color="bg-blue-500 hover:bg-blue-600 text-white"
      text-color="text-white"
    >
      <div class="mt-8 flex items-center justify-center space-x-8 text-purple-200 text-sm">
        <div class="flex items-center space-x-2">
          <Icon name="i-heroicons-shield-check" class="w-4 h-4" />
          <span>HIPAA Compliant</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="i-heroicons-clock" class="w-4 h-4" />
          <span>Setup in 4-8 weeks</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="i-heroicons-phone" class="w-4 h-4" />
          <span>24/7 Support</span>
        </div>
      </div>
    </app-call-to-action>
  </div>
</template>

<script setup>
useHead({
  title: 'Electronic Health Records - Q-Academy Solutions',
  meta: [
    { name: 'description', content: 'Secure, comprehensive EHR system designed for special education environments. Manage student health records with HIPAA compliance and seamless integration.' }
  ]
})
</script>
