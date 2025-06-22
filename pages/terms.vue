<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="py-20 bg-white border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            These terms govern your use of Q-Academy's integrated learning management, telemedicine, and electronic health records platform.
          </p>
          <div class="inline-flex items-center space-x-4 text-sm text-gray-500">
            <span>Last updated: December 22, 2024</span>
            <span>•</span>
            <span>Effective: December 22, 2024</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Agreement Summary -->
    <section class="py-12 bg-blue-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="flex items-center space-x-3 mb-6">
            <Icon name="i-heroicons-document-text" class="w-8 h-8 text-blue-600" />
            <h2 class="text-2xl font-semibold text-gray-900">Agreement Summary</h2>
          </div>
          <p class="text-gray-600 mb-6">
            By using Q-Academy, you agree to these terms. Here's what this means in simple terms:
          </p>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="flex items-start space-x-3">
              <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 class="font-semibold text-gray-900 text-sm">We Provide Services</h3>
                <p class="text-gray-600 text-xs">Educational and healthcare technology platform for special needs students</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <Icon name="i-heroicons-shield-check" class="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 class="font-semibold text-gray-900 text-sm">You Use Responsibly</h3>
                <p class="text-gray-600 text-xs">Follow rules, respect others, and protect student privacy and safety</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <Icon name="i-heroicons-heart" class="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h3 class="font-semibold text-gray-900 text-sm">We Protect Privacy</h3>
                <p class="text-gray-600 text-xs">Your data is secure and used only for educational and healthcare purposes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Table of Contents</h2>
          <nav class="grid md:grid-cols-2 gap-4">
            <a href="#acceptance" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-blue-600 font-semibold text-sm">1</span>
              </div>
              <span class="text-gray-700 hover:text-blue-600">Acceptance of Terms</span>
            </a>
            <a href="#services" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-green-600 font-semibold text-sm">2</span>
              </div>
              <span class="text-gray-700 hover:text-green-600">Description of Services</span>
            </a>
            <a href="#user-accounts" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span class="text-purple-600 font-semibold text-sm">3</span>
              </div>
              <span class="text-gray-700 hover:text-purple-600">User Accounts & Responsibilities</span>
            </a>
            <a href="#acceptable-use" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span class="text-orange-600 font-semibold text-sm">4</span>
              </div>
              <span class="text-gray-700 hover:text-orange-600">Acceptable Use Policy</span>
            </a>
            <a href="#privacy-security" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                <span class="text-teal-600 font-semibold text-sm">5</span>
              </div>
              <span class="text-gray-700 hover:text-teal-600">Privacy & Security</span>
            </a>
            <a href="#payment-terms" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-red-600 font-semibold text-sm">6</span>
              </div>
              <span class="text-gray-700 hover:text-red-600">Payment & Subscription</span>
            </a>
            <a href="#intellectual-property" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span class="text-indigo-600 font-semibold text-sm">7</span>
              </div>
              <span class="text-gray-700 hover:text-indigo-600">Intellectual Property</span>
            </a>
            <a href="#termination" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <span class="text-pink-600 font-semibold text-sm">8</span>
              </div>
              <span class="text-gray-700 hover:text-pink-600">Termination</span>
            </a>
          </nav>
        </div>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">

          <!-- Section 1: Acceptance of Terms -->
          <div id="acceptance" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">1</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Acceptance of Terms</h2>
            </div>

            <div class="space-y-6">
              <p class="text-gray-600 leading-relaxed">
                Welcome to Q-Academy! These Terms of Service ("Terms") constitute a legally binding agreement between you and Q-Academy regarding your use of our integrated learning management, telemedicine, and electronic health records platform and related services (collectively, the "Services").
              </p>

              <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-information-circle" class="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 class="font-semibold text-blue-800 mb-2">By Using Q-Academy, You Agree To:</h3>
                    <ul class="text-blue-700 text-sm space-y-1">
                      <li>• Be bound by these Terms and our Privacy Policy</li>
                      <li>• Comply with all applicable laws and regulations</li>
                      <li>• Use the Services for their intended educational and healthcare purposes</li>
                      <li>• Respect the privacy and safety of all users, especially minors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Who Can Use Q-Academy</h3>
                <p class="text-gray-600 mb-4">Our Services are available to:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Educational Institutions:</strong> Schools, special education centers, and learning facilities authorized to serve students with special needs</li>
                  <li><strong>Healthcare Providers:</strong> Licensed physicians, therapists, and healthcare professionals specializing in special needs care</li>
                  <li><strong>Students:</strong> Individuals enrolled in participating educational programs (with parental consent if under 18)</li>
                  <li><strong>Families:</strong> Parents, guardians, and family members of enrolled students</li>
                  <li><strong>Administrators:</strong> Authorized personnel managing institutional accounts</li>
                </ul>
              </div>

              <div class="bg-yellow-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-yellow-800 mb-2">Age Requirements</h4>
                    <p class="text-yellow-700 text-sm">
                      Users under 18 years of age must have explicit parental or guardian consent to use Q-Academy. Parents and guardians are responsible for supervising their child's use of the platform and ensuring compliance with these Terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Description of Services -->
          <div id="services" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">2</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Description of Services</h2>
            </div>

            <div class="space-y-8">
              <p class="text-gray-600 leading-relaxed">
                Q-Academy provides an integrated platform combining educational technology with healthcare management specifically designed for students with special needs, their families, educators, and healthcare providers.
              </p>

              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-blue-50 rounded-lg p-6">
                  <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-blue-600 mb-4" />
                  <h3 class="font-semibold text-gray-900 mb-3">Learning Management System</h3>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Personalized learning activities</li>
                    <li>• Progress tracking and analytics</li>
                    <li>• IEP goal management</li>
                    <li>• Family-teacher communication</li>
                    <li>• Accessibility-focused design</li>
                  </ul>
                </div>

                <div class="bg-green-50 rounded-lg p-6">
                  <Icon name="i-heroicons-video-camera" class="w-8 h-8 text-green-600 mb-4" />
                  <h3 class="font-semibold text-gray-900 mb-3">Telemedicine Platform</h3>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Secure video consultations</li>
                    <li>• Remote therapy sessions</li>
                    <li>• Specialist network access</li>
                    <li>• Appointment scheduling</li>
                    <li>• Prescription management</li>
                  </ul>
                </div>

                <div class="bg-purple-50 rounded-lg p-6">
                  <Icon name="i-heroicons-document-text" class="w-8 h-8 text-purple-600 mb-4" />
                  <h3 class="font-semibold text-gray-900 mb-3">Electronic Health Records</h3>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Secure health data storage</li>
                    <li>• Care coordination tools</li>
                    <li>• Progress reporting</li>
                    <li>• Medical history tracking</li>
                    <li>• HIPAA-compliant security</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Service Availability</h3>
                <p class="text-gray-600 mb-4">Q-Academy services are available through multiple platforms:</p>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="i-heroicons-device-phone-mobile" class="w-6 h-6 text-gray-600" />
                    <div>
                      <h4 class="font-medium text-gray-900 text-sm">Mobile Application</h4>
                      <p class="text-xs text-gray-600">iOS and Android apps for students and families</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="i-heroicons-computer-desktop" class="w-6 h-6 text-gray-600" />
                    <div>
                      <h4 class="font-medium text-gray-900 text-sm">Desktop Application</h4>
                      <p class="text-xs text-gray-600">Windows and macOS apps for educators</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="i-heroicons-globe-alt" class="w-6 h-6 text-gray-600" />
                    <div>
                      <h4 class="font-medium text-gray-900 text-sm">Web Platform</h4>
                      <p class="text-xs text-gray-600">Browser-based access for healthcare providers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-green-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-clock" class="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-green-800 mb-2">Service Level Commitment</h4>
                    <p class="text-green-700 text-sm mb-3">
                      We strive to provide reliable, accessible services with 99.9% uptime availability. Our platform includes offline capabilities to ensure continuity of educational services even during connectivity issues.
                    </p>
                    <div class="grid grid-cols-2 gap-4 text-xs text-green-700">
                      <div>
                        <strong>Support Hours:</strong><br>
                        24/7 emergency support<br>
                        Business hours: 8 AM - 6 PM PHT
                      </div>
                      <div>
                        <strong>Response Times:</strong><br>
                        Critical issues: &lt; 2 hours<br>
                        General support: &lt; 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: User Accounts & Responsibilities -->
          <div id="user-accounts" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">3</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">User Accounts & Responsibilities</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Account Registration</h3>
                <p class="text-gray-600 mb-4">To access Q-Academy services, you must create an account by providing accurate and complete information. You are responsible for:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Account Security:</strong> Maintaining the confidentiality of your login credentials and notifying us immediately of any unauthorized access</li>
                  <li><strong>Information Accuracy:</strong> Ensuring all provided information is current, accurate, and complete</li>
                  <li><strong>Account Activity:</strong> All activities that occur under your account, whether authorized by you or not</li>
                  <li><strong>Role Verification:</strong> Providing appropriate credentials and certifications for your designated role (educator, healthcare provider, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">User Roles and Permissions</h3>
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead class="bg-gray-50">
                    <tr>
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Role</th>
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Responsibilities</th>
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Data Access</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">Students</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Complete assigned activities, participate in sessions, follow platform rules</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Own learning data and progress</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">Parents/Guardians</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Supervise child's use, provide consent, communicate with educators</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Complete child's educational and health records</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">Teachers</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Create activities, monitor progress, maintain professional standards</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Assigned students' educational data</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">Healthcare Providers</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Provide care, maintain confidentiality, follow medical ethics</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Authorized patients' complete health records</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">Administrators</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Manage institutional accounts, ensure compliance, oversee usage</td>
                      <td class="border border-gray-300 px-4 py-3 text-sm">Institution-wide data and analytics</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-purple-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-user-group" class="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-purple-800 mb-2">Professional Standards</h4>
                    <p class="text-purple-700 text-sm mb-3">
                      All healthcare providers and educators using Q-Academy must maintain their professional licenses and follow applicable professional standards and codes of ethics.
                    </p>
                    <ul class="text-purple-700 text-sm space-y-1">
                      <li>• Healthcare providers must maintain valid medical licenses</li>
                      <li>• Educators must follow applicable teaching standards and certifications</li>
                      <li>• All users must report suspected child abuse or safety concerns</li>
                      <li>• Professional boundaries must be maintained in all interactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 4: Acceptable Use Policy -->
          <div id="acceptable-use" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">4</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Acceptable Use Policy</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Permitted Uses</h3>
                <p class="text-gray-600 mb-4">Q-Academy may be used for:</p>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Educational Purposes</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li>• Creating and completing learning activities</li>
                      <li>• Tracking academic progress and achievements</li>
                      <li>• Developing and implementing IEPs</li>
                      <li>• Communication between educators and families</li>
                      <li>• Generating educational reports and assessments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Healthcare Purposes</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li>• Conducting telemedicine consultations</li>
                      <li>• Managing patient health records</li>
                      <li>• Coordinating care between providers</li>
                      <li>• Monitoring therapy progress</li>
                      <li>• Providing remote healthcare services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Prohibited Activities</h3>
                <p class="text-gray-600 mb-4">The following activities are strictly prohibited:</p>

                <div class="bg-red-50 rounded-lg p-6 mb-6">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-x-circle" class="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-red-800 mb-3">Security and Privacy Violations</h4>
                      <ul class="text-red-700 text-sm space-y-1">
                        <li>• Sharing login credentials or unauthorized access attempts</li>
                        <li>• Attempting to bypass security measures or access controls</li>
                        <li>• Disclosing confidential student or patient information</li>
                        <li>• Using the platform for unauthorized data collection</li>
                        <li>• Introducing malware, viruses, or malicious code</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div class="bg-orange-50 rounded-lg p-4">
                    <h4 class="font-semibold text-orange-800 mb-3">Content Violations</h4>
                    <ul class="text-orange-700 text-sm space-y-1">
                      <li>• Posting inappropriate or offensive content</li>
                      <li>• Sharing copyrighted material without permission</li>
                      <li>• Creating false or misleading information</li>
                      <li>• Harassment or bullying of any kind</li>
                    </ul>
                  </div>
                  <div class="bg-yellow-50 rounded-lg p-4">
                    <h4 class="font-semibold text-yellow-800 mb-3">System Abuse</h4>
                    <ul class="text-yellow-700 text-sm space-y-1">
                      <li>• Excessive use that impacts system performance</li>
                      <li>• Automated data scraping or extraction</li>
                      <li>• Reverse engineering or decompiling software</li>
                      <li>• Commercial use outside of approved purposes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Content Standards</h3>
                <p class="text-gray-600 mb-4">All content shared on Q-Academy must meet these standards:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Educational Appropriateness:</strong> Content must be suitable for the educational environment and age-appropriate for students</li>
                  <li><strong>Professional Standards:</strong> All communications must maintain professional boundaries and appropriate language</li>
                  <li><strong>Accuracy:</strong> Health and educational information must be accurate and evidence-based</li>
                  <li><strong>Privacy Respect:</strong> Content must not violate student or patient privacy rights</li>
                  <li><strong>Cultural Sensitivity:</strong> Content should be respectful of diverse backgrounds and abilities</li>
                </ul>
              </div>

              <div class="bg-orange-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-orange-800 mb-2">Reporting Violations</h4>
                    <p class="text-orange-700 text-sm mb-3">
                      If you observe any violations of this Acceptable Use Policy, please report them immediately to our support team at support@q-academy.ph or through the platform's reporting feature.
                    </p>
                    <p class="text-orange-700 text-sm">
                      <strong>Consequences:</strong> Violations may result in account suspension, termination of services, and in serious cases, reporting to relevant authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Continue with remaining sections... -->
          <!-- Section 5: Privacy & Security -->
          <div id="privacy-security" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">5</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Privacy & Security</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Privacy Commitment</h3>
                <p class="text-gray-600 mb-6">
                  Q-Academy is committed to protecting the privacy and security of all users, especially students with special needs. Our privacy practices are governed by our comprehensive Privacy Policy and comply with applicable laws including HIPAA, FERPA, and Philippine data protection regulations.
                </p>

                <div class="grid md:grid-cols-3 gap-6">
                  <div class="bg-teal-50 rounded-lg p-4">
                    <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-teal-600 mb-3" />
                    <h4 class="font-semibold text-gray-900 mb-2">HIPAA Compliance</h4>
                    <p class="text-teal-700 text-sm">Full compliance with healthcare privacy regulations for medical data protection</p>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-4">
                    <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-blue-600 mb-3" />
                    <h4 class="font-semibold text-gray-900 mb-2">FERPA Aligned</h4>
                    <p class="text-blue-700 text-sm">Educational privacy protections for student records and academic information</p>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-4">
                    <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-purple-600 mb-3" />
                    <h4 class="font-semibold text-gray-900 mb-2">Local Compliance</h4>
                    <p class="text-purple-700 text-sm">Adherence to Philippine Data Privacy Act and local regulations</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Data Protection Measures</h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-lock-closed" class="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-gray-900">Encryption</h4>
                      <p class="text-gray-600 text-sm">All data is encrypted using AES-256 encryption at rest and TLS 1.3 for data in transit</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-key" class="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-gray-900">Access Controls</h4>
                      <p class="text-gray-600 text-sm">Role-based access permissions ensure users only access appropriate information</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-eye" class="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-gray-900">Audit Logging</h4>
                      <p class="text-gray-600 text-sm">Comprehensive logs track all data access and modifications for security and compliance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-teal-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-information-circle" class="w-6 h-6 text-teal-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-teal-800 mb-2">Your Privacy Rights</h4>
                    <p class="text-teal-700 text-sm mb-3">
                      You have rights regarding your personal information, including access, correction, deletion, and portability. For complete details, please review our Privacy Policy.
                    </p>
                    <NuxtLink to="/privacy-policy" class="text-teal-600 hover:text-teal-500 text-sm font-medium">
                      View Privacy Policy →
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 6: Payment & Subscription Terms -->
          <div id="payment-terms" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">6</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Payment & Subscription Terms</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Service Plans</h3>
                <p class="text-gray-600 mb-6">Q-Academy offers various service plans to meet different institutional and individual needs:</p>

                <div class="grid md:grid-cols-3 gap-6">
                  <div class="bg-gray-50 rounded-lg p-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Free Trial</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• 30-day full access trial</li>
                      <li>• Up to 10 students</li>
                      <li>• Basic features included</li>
                      <li>• Limited support</li>
                    </ul>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Institutional Plans</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• School-wide licensing</li>
                      <li>• Unlimited students</li>
                      <li>• Full feature access</li>
                      <li>• 24/7 priority support</li>
                    </ul>
                  </div>
                  <div class="bg-green-50 rounded-lg p-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Family Plans</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Individual family access</li>
                      <li>• Multiple children support</li>
                      <li>• Home learning features</li>
                      <li>• Standard support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-credit-card" class="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-gray-900">Billing Cycles</h4>
                      <p class="text-gray-600 text-sm">Subscriptions are billed monthly or annually in advance. Annual subscriptions receive a discount.</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-currency-dollar" class="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-gray-900">Payment Methods</h4>
                      <p class="text-gray-600 text-sm">We accept major credit cards, bank transfers, and institutional purchase orders.</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-receipt-percent" class="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-gray-900">Taxes</h4>
                      <p class="text-gray-600 text-sm">Applicable taxes will be added to subscription fees as required by law.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Cancellation and Refunds</h3>
                <div class="bg-red-50 rounded-lg p-6">
                  <div class="space-y-4">
                    <div>
                      <h4 class="font-semibold text-red-800 mb-2">Cancellation Policy</h4>
                      <ul class="text-red-700 text-sm space-y-1">
                        <li>• You may cancel your subscription at any time</li>
                        <li>• Cancellation takes effect at the end of the current billing period</li>
                        <li>• No prorated refunds for partial months</li>
                        <li>• Free trial can be cancelled without charge</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-red-800 mb-2">Refund Policy</h4>
                      <ul class="text-red-700 text-sm space-y-1">
                        <li>• 30-day money-back guarantee for new subscriptions</li>
                        <li>• Refunds for service outages exceeding SLA commitments</li>
                        <li>• Institutional customers may have custom refund terms</li>
                        <li>• Processing time: 5-10 business days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Price Changes</h3>
                <p class="text-gray-600">
                  We reserve the right to modify subscription prices with 30 days advance notice. Price changes will not affect your current billing period but will apply to subsequent renewals. You may cancel your subscription before the price change takes effect.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 7: Intellectual Property -->
          <div id="intellectual-property" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">7</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Intellectual Property</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Q-Academy Platform Rights</h3>
                <p class="text-gray-600 mb-4">
                  The Q-Academy platform, including all software, applications, content, features, and functionality, is owned by Q-Academy and protected by intellectual property laws. This includes:
                </p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Software and Applications:</strong> All code, algorithms, and technical implementations</li>
                  <li><strong>Educational Content:</strong> Learning activities, assessments, and instructional materials</li>
                  <li><strong>User Interface:</strong> Design, layout, and user experience elements</li>
                  <li><strong>Trademarks:</strong> Q-Academy name, logos, and branding materials</li>
                  <li><strong>Documentation:</strong> User guides, training materials, and technical documentation</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">User Content Rights</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="bg-indigo-50 rounded-lg p-6">
                    <h4 class="font-semibold text-indigo-800 mb-3">Content You Create</h4>
                    <p class="text-indigo-700 text-sm mb-3">
                      You retain ownership of content you create using Q-Academy, including:
                    </p>
                    <ul class="text-indigo-700 text-sm space-y-1">
                      <li>• Educational materials and activities</li>
                      <li>• Student work and assessments</li>
                      <li>• Medical notes and observations</li>
                      <li>• Custom reports and documents</li>
                    </ul>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-6">
                    <h4 class="font-semibold text-blue-800 mb-3">License to Q-Academy</h4>
                    <p class="text-blue-700 text-sm mb-3">
                      By using our platform, you grant Q-Academy a limited license to:
                    </p>
                    <ul class="text-blue-700 text-sm space-y-1">
                      <li>• Store and process your content</li>
                      <li>• Display content to authorized users</li>
                      <li>• Provide technical support services</li>
                      <li>• Ensure platform functionality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Copyright Compliance</h3>
                <div class="bg-yellow-50 rounded-lg p-6">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-document-duplicate" class="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 class="font-semibold text-yellow-800 mb-2">DMCA Compliance</h4>
                      <p class="text-yellow-700 text-sm mb-3">
                        Q-Academy respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA). If you believe content on our platform infringes your copyright:
                      </p>
                      <ul class="text-yellow-700 text-sm space-y-1">
                        <li>• Send a written notice to copyright@q-academy.ph</li>
                        <li>• Include specific identification of copyrighted work</li>
                        <li>• Provide location of allegedly infringing content</li>
                        <li>• Include your contact information and good faith statement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Third-Party Content</h3>
                <p class="text-gray-600 mb-4">
                  Q-Academy may include or link to third-party content, services, or applications. Such content is the property of its respective owners and may be subject to separate terms and conditions.
                </p>
                <ul class="space-y-2 text-gray-600">
                  <li>• We do not claim ownership of third-party content</li>
                  <li>• Use of third-party content may require separate agreements</li>
                  <li>• We are not responsible for the availability or accuracy of third-party content</li>
                  <li>• Third-party content does not represent Q-Academy's views or opinions</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section 8: Termination -->
          <div id="termination" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">8</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Termination</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Termination by You</h3>
                <p class="text-gray-600 mb-4">You may terminate your use of Q-Academy at any time by:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Account Cancellation:</strong> Cancelling your subscription through your account settings</li>
                  <li><strong>Contact Support:</strong> Contacting our support team to close your account</li>
                  <li><strong>Written Notice:</strong> Providing written notice for institutional accounts</li>
                </ul>
                <p class="text-gray-600 mt-4">
                  Upon termination, your access to the Services will cease at the end of your current billing period. You remain responsible for all fees incurred prior to termination.
                </p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Termination by Q-Academy</h3>
                <p class="text-gray-600 mb-4">We may suspend or terminate your access to Q-Academy if:</p>

                <div class="bg-pink-50 rounded-lg p-6">
                  <div class="space-y-4">
                    <div>
                      <h4 class="font-semibold text-pink-800 mb-2">Immediate Termination</h4>
                      <ul class="text-pink-700 text-sm space-y-1">
                        <li>• Violation of these Terms of Service</li>
                        <li>• Breach of Acceptable Use Policy</li>
                        <li>• Fraudulent or illegal activity</li>
                        <li>• Threat to student or user safety</li>
                        <li>• Unauthorized access attempts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-pink-800 mb-2">Termination with Notice</h4>
                      <ul class="text-pink-700 text-sm space-y-1">
                        <li>• Non-payment of fees (30-day notice)</li>
                        <li>• Repeated policy violations (warning system)</li>
                        <li>• Discontinuation of services (90-day notice)</li>
                        <li>• Failure to maintain required credentials</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Effects of Termination</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Immediate Effects</h4>
                    <ul class="space-y-2 text-sm text-gray-600">
                      <li>• Access to Q-Academy services will cease</li>
                      <li>• Active sessions will be terminated</li>
                      <li>• Billing will stop (except for outstanding amounts)</li>
                      <li>• Account permissions will be revoked</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Data Handling</h4>
                    <ul class="space-y-2 text-sm text-gray-600">
                      <li>• 30-day grace period for data export</li>
                      <li>• Critical health/education data preserved longer</li>
                      <li>• Personal data handled per Privacy Policy</li>
                      <li>• Backup data retained per retention policies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-document-arrow-down" class="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Data Export</h4>
                    <p class="text-gray-600 text-sm mb-3">
                      Before account termination, you may export your data using our data export tools. We provide standard formats (PDF, CSV, JSON) for most data types.
                    </p>
                    <p class="text-gray-600 text-sm">
                      <strong>Important:</strong> After the grace period, data may be permanently deleted according to our retention policies and legal requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Legal Terms -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Additional Legal Terms</h2>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
                <div class="bg-gray-50 rounded-lg p-6">
                  <p class="text-gray-600 text-sm leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, Q-ACADEMY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM.
                  </p>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Disclaimers</h3>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Medical Advice:</strong> Q-Academy does not provide medical advice. All healthcare services are provided by licensed professionals.</li>
                  <li><strong>Educational Outcomes:</strong> While we strive to provide effective tools, we cannot guarantee specific educational outcomes.</li>
                  <li><strong>Technical Issues:</strong> We work to maintain service availability but cannot guarantee uninterrupted access.</li>
                  <li><strong>Third-Party Services:</strong> We are not responsible for the performance or content of integrated third-party services.</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Governing Law and Disputes</h3>
                <p class="text-gray-600 mb-4">
                  These Terms are governed by the laws of the Republic of the Philippines. Any disputes arising from these Terms or your use of Q-Academy shall be resolved through:
                </p>
                <ol class="space-y-2 text-gray-600">
                  <li><strong>1. Good Faith Negotiation:</strong> Initial attempt to resolve disputes through direct communication</li>
                  <li><strong>2. Mediation:</strong> Non-binding mediation if negotiation fails</li>
                  <li><strong>3. Philippine Courts:</strong> Legal proceedings in appropriate Philippine courts if other methods fail</li>
                </ol>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h3>
                <p class="text-gray-600 mb-4">
                  We may modify these Terms from time to time. When we make changes, we will:
                </p>
                <ul class="space-y-2 text-gray-600">
                  <li>• Post the updated Terms on our website with a new effective date</li>
                  <li>• Notify users via email or platform notification for material changes</li>
                  <li>• Provide 30 days notice for significant changes</li>
                  <li>• Allow you to terminate your account if you disagree with changes</li>
                </ul>
              </div>

              <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-phone" class="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-blue-800 mb-2">Contact Information</h4>
                    <p class="text-blue-700 text-sm mb-3">
                      If you have questions about these Terms of Service, please contact us:
                    </p>
                    <div class="space-y-1 text-blue-700 text-sm">
                      <div>Email: legal@q-academy.ph</div>
                      <div>Phone: +63-XXX-XXX-XXXX</div>
                      <div>Address: Cagayan de Oro City, Northern Mindanao, Philippines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-gray-300 mb-8">
          By creating an account, you agree to these Terms of Service and our Privacy Policy. Join thousands of educators, healthcare providers, and families using Q-Academy.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtButton color="white" size="lg" class="px-8 py-3">
            Start Free Trial
          </NuxtButton>
          <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-3">
            Contact Sales
          </NuxtButton>
        </div>

        <div class="mt-8 flex items-center justify-center space-x-8 text-gray-400 text-sm">
          <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/accessibility" class="hover:text-white transition-colors">
            Accessibility
          </NuxtLink>
          <NuxtLink to="/contact" class="hover:text-white transition-colors">
            Contact Support
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Terms of Service - Q-Academy',
  meta: [
    { name: 'description', content: 'Terms of Service for Q-Academy platform. Learn about user responsibilities, acceptable use policies, and legal terms for our integrated educational and healthcare services.' }
  ]
})
</script>
