<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li>
              <NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink>
            </li>
            <li>
              <Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400"/>
            </li>
            <li>
              <NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink>
            </li>
            <li>
              <Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400"/>
            </li>
            <li><span class="text-orange-600 font-medium">Health Records</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div
              class="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-heart" class="w-4 h-4 mr-2"/>
              HIPAA-Compliant Medical Data Management
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Electronic Health Records
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive, secure electronic health record management system that ensures all student medical
              information is organized, accessible, and properly maintained across all platforms with enterprise-grade
              security.
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Secure Cloud Storage</h3>
                  <p class="text-gray-600">Enterprise-grade security with automated backups and disaster recovery</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Role-Based Access Control</h3>
                  <p class="text-gray-600">Granular permissions for teachers, doctors, and families</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white"/>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Cross-Platform Integration</h3>
                  <p class="text-gray-600">Seamless data sharing between LMS and telemedicine platforms</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton size="lg" class="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white">
                Access Records
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                Security Details
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div
              class="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <!-- EHR Interface Mockup -->
              <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-semibold text-gray-900">Patient Health Record</h3>
                  <div class="flex items-center space-x-2">
                    <Icon name="i-heroicons-lock-closed" class="w-4 h-4 text-green-500"/>
                    <span class="text-xs text-green-600 font-medium">Secure</span>
                  </div>
                </div>

                <!-- Patient Info -->
                <div class="bg-gray-50 rounded-lg p-4 mb-4">
                  <div class="flex items-center space-x-3 mb-3">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span class="text-white font-bold">AM</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Alex Martinez</p>
                      <p class="text-sm text-gray-600">DOB: 03/15/2010 • ID: QA-2024-001</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-white rounded p-2 text-center">
                      <div class="text-xs text-gray-600">Last Visit</div>
                      <div class="font-medium text-gray-900">Dec 15, 2024</div>
                    </div>
                    <div class="bg-white rounded p-2 text-center">
                      <div class="text-xs text-gray-600">Next Appt</div>
                      <div class="font-medium text-gray-900">Dec 22, 2024</div>
                    </div>
                  </div>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-3 gap-2 mb-4">
                  <div class="bg-blue-50 rounded p-2 text-center">
                    <div class="text-sm font-bold text-blue-600">12</div>
                    <div class="text-xs text-gray-600">Records</div>
                  </div>
                  <div class="bg-green-50 rounded p-2 text-center">
                    <div class="text-sm font-bold text-green-600">3</div>
                    <div class="text-xs text-gray-600">Providers</div>
                  </div>
                  <div class="bg-purple-50 rounded p-2 text-center">
                    <div class="text-sm font-bold text-purple-600">8</div>
                    <div class="text-xs text-gray-600">Goals</div>
                  </div>
                </div>

                <!-- Recent Activity -->
                <div class="space-y-2">
                  <div class="text-sm font-medium text-gray-900">Recent Activity</div>
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-gray-700">Speech Therapy Session</span>
                      <span class="text-gray-500">Dec 10</span>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-gray-700">IEP Progress Update</span>
                      <span class="text-gray-500">Dec 8</span>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-gray-700">Medical Assessment</span>
                      <span class="text-gray-500">Dec 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-shield-check" class="w-4 h-4 text-white"/>
                </div>
                <span class="text-xs font-medium">HIPAA Compliant</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-cloud" class="w-4 h-4 text-white"/>
                </div>
                <span class="text-xs font-medium">Cloud Backup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Features -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Your students' health information is protected by industry-leading security measures and compliance
            standards.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- HIPAA Compliance -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div
              class="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-shield-check" class="w-10 h-10 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliance</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Full compliance with HIPAA regulations ensuring the highest standards of medical data protection and
              privacy.
            </p>
            <div class="text-sm text-orange-600 font-medium">
              Certified & Audited
            </div>
          </div>

          <!-- End-to-End Encryption -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div
              class="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-lock-closed" class="w-10 h-10 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">End-to-End Encryption</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              256-bit AES encryption protects data both in transit and at rest, ensuring complete confidentiality.
            </p>
            <div class="text-sm text-blue-600 font-medium">
              Military-Grade Security
            </div>
          </div>

          <!-- Access Controls -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div
              class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-user-group" class="w-10 h-10 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Role-Based Access</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Granular permission controls ensure only authorized personnel can access specific medical information.
            </p>
            <div class="text-sm text-purple-600 font-medium">
              Principle of Least Privilege
            </div>
          </div>

          <!-- Audit Trails -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div
              class="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Icon name="i-heroicons-document-text" class="w-10 h-10 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Complete Audit Trails</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Comprehensive logging of all access and modifications to health records for accountability and compliance.
            </p>
            <div class="text-sm text-green-600 font-medium">
              Full Transparency
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Record Types -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health Record Management
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Manage all aspects of student health information in one secure, integrated platform.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Left Column -->
          <div class="space-y-8">
            <!-- Medical History -->
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-heart" class="w-6 h-6 text-orange-600"/>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">Medical History & Diagnoses</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    Complete medical history including diagnoses, conditions, allergies, and ongoing treatments with
                    timeline tracking.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Chronic condition management
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Allergy and medication tracking
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Emergency medical information
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Therapy Records -->
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-blue-600"/>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">Therapy & Treatment Records</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    Detailed documentation of all therapy sessions, treatment plans, and intervention strategies with
                    outcome tracking.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Speech therapy progress
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Occupational therapy goals
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Behavioral intervention plans
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Medications -->
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-beaker" class="w-6 h-6 text-green-600"/>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">Medication Management</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    Comprehensive medication tracking including dosages, schedules, side effects, and interaction
                    warnings.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Prescription tracking
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Dosage reminders
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Side effect monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-8">
            <!-- Assessment Results -->
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-chart-bar-square" class="w-6 h-6 text-purple-600"/>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">Assessment & Evaluation Results</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    Store and track results from psychological, educational, and developmental assessments with trend
                    analysis.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      IEP assessments
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Developmental evaluations
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Behavioral assessments
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Care Plans -->
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-clipboard-document-list" class="w-6 h-6 text-orange-600"/>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">Care Plans & Goals</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    Collaborative care planning with goal setting, progress tracking, and outcome measurement across all
                    providers.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Individual care plans
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      SMART goal tracking
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Multi-provider coordination
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Emergency Information -->
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-red-600"/>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">Emergency Protocols</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    Critical emergency information and protocols easily accessible to authorized personnel during urgent
                    situations.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Emergency contacts
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Crisis intervention plans
                    </li>
                    <li class="flex items-center">
                      <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2"/>
                      Medical alert information
                    </li>
                  </ul>
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
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Seamless Platform Integration
            </h2>

            <div class="space-y-6">
              <!-- Integration 1 -->
              <div class="bg-gray-50 rounded-xl p-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-computer-desktop" class="w-6 h-6 text-blue-600"/>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">LMS Integration</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Health information automatically informs personalized learning plans and accommodations in the
                      Learning Management System.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Integration 2 -->
              <div class="bg-gray-50 rounded-xl p-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-video-camera" class="w-6 h-6 text-green-600"/>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Telemedicine Sync</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Real-time synchronization with telemedicine consultations, ensuring all providers have access to
                      current health information.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Integration 3 -->
              <div class="bg-gray-50 rounded-xl p-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-arrow-path" class="w-6 h-6 text-purple-600"/>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Automatic Updates</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Health records are automatically updated from educational progress and telemedicine sessions,
                      maintaining current information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Integration Diagram -->
          <div class="relative">
            <div class="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Integrated Health Data Flow</h3>
                <p class="text-gray-600">Real-time synchronization across platforms</p>
              </div>

              <!-- Integration Flow -->
              <div class="space-y-6">
                <!-- EHR Central Hub -->
                <div class="text-center">
                  <div class="w-20 h-20 bg-orange-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                    <Icon name="i-heroicons-heart" class="w-10 h-10 text-white"/>
                  </div>
                  <h4 class="font-semibold text-gray-900">Electronic Health Records</h4>
                  <p class="text-sm text-gray-600">Central Data Hub</p>
                </div>

                <!-- Connection Lines -->
                <div class="flex justify-center">
                  <div class="w-px h-8 bg-gray-300"/>
                </div>

                <!-- Connected Platforms -->
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <div class="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon name="i-heroicons-computer-desktop" class="w-6 h-6 text-white"/>
                    </div>
                    <p class="text-sm font-medium text-gray-900">Learning Management</p>
                    <p class="text-xs text-gray-600">Educational Data</p>
                  </div>

                  <div class="text-center">
                    <div class="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon name="i-heroicons-video-camera" class="w-6 h-6 text-white"/>
                    </div>
                    <p class="text-sm font-medium text-gray-900">Telemedicine</p>
                    <p class="text-xs text-gray-600">Medical Consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance & Standards -->
    <section class="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industry Standards & Compliance
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our health record system meets and exceeds industry standards for medical data management and privacy
            protection.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- HIPAA -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Full compliance with Health Insurance Portability and Accountability Act regulations for medical data
              protection.
            </p>
          </div>

          <!-- SOC 2 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-lock-closed" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Independently audited for security, availability, processing integrity, confidentiality, and privacy
              controls.
            </p>
          </div>

          <!-- FERPA -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">FERPA Aligned</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Aligned with Family Educational Rights and Privacy Act requirements for student educational record
              protection.
            </p>
          </div>

          <!-- ISO 27001 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              International standard for information security management systems ensuring systematic data protection.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Metrics -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven Health Record Management
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our electronic health record system has delivered measurable improvements in healthcare coordination and
            data
            management.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Metric 1 -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">99.9%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Uptime Reliability</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              System availability ensuring health records are accessible when needed most.
            </p>
          </div>

          <!-- Metric 2 -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">60%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Faster Access</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Reduction in time to access critical health information during consultations and emergencies.
            </p>
          </div>

          <!-- Metric 3 -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">100%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Data Integrity</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Perfect data accuracy with automated validation and error prevention systems.
            </p>
          </div>

          <!-- Metric 4 -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">Zero</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Security Breaches</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Flawless security record with no data breaches since platform launch.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <app-call-to-action
      title="Secure Your Students' Health Data Today"
      description="Experience the peace of mind that comes with enterprise-grade security and comprehensive health record management."
      color="bg-gradient-to-r from-orange-50 to-red-50"
      first-button-color="bg-orange-500 hover:bg-orange-600 text-white"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Electronic Health Records - Q-Academy Features',
  meta: [
    {
      name: 'description',
      content: 'Secure, HIPAA-compliant electronic health record management for special needs students with Q-Academy\'s comprehensive EHR system and enterprise-grade security.'
    }
  ]
})
</script>
