<template>
  <div class="min-h-screen bg-gray-50">
    <app-hero-section
      title="Privacy Policy"
      description="Your privacy is important to us. This policy explains how Q-Academy collects, uses, and protects your personal information."
      color="bg-white"
    >
      <div class="inline-flex items-center space-x-4 text-sm text-gray-500 mt-8">
        <span>Last updated: December 22, 2024</span>
        <span>•</span>
        <span>Effective: December 22, 2024</span>
      </div>
    </app-hero-section>

    <!-- Table of Contents -->
    <privacy-table-of-contents />

    <!-- Privacy Policy Content -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">

          <!-- Introduction -->
          <div class="mb-16">
            <div class="bg-blue-50 rounded-2xl p-8 mb-8">
              <div class="flex items-center space-x-3 mb-4">
                <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-blue-600" />
                <h2 class="text-2xl font-semibold text-gray-900 m-0">Our Commitment to Privacy</h2>
              </div>
              <p class="text-gray-700 leading-relaxed m-0">
                Q-Academy is committed to protecting the privacy and security of our users' personal information. As a platform serving students with special needs, their families, educators, and healthcare providers, we understand the sensitive nature of the data we handle and the critical importance of maintaining the highest standards of privacy protection.
              </p>
            </div>

            <p class="text-gray-600 leading-relaxed">
              This Privacy Policy applies to all services provided by Q-Academy, including our Learning Management System (LMS), Telemedicine platform, Electronic Health Records (EHR) system, and all associated mobile, desktop, and web applications. By using our services, you consent to the collection, use, and disclosure of your personal information as described in this policy.
            </p>
          </div>

          <!-- Section 1: Information We Collect -->
          <div id="information-collection" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">1</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Information We Collect</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p class="text-gray-600 mb-4">We collect personal information that you provide directly to us, including:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Account Information:</strong> Name, email address, phone number, role (student, parent, teacher, doctor), and profile information</li>
                  <li><strong>Student Information:</strong> Date of birth, grade level, special needs classifications, emergency contact details</li>
                  <li><strong>Educational Records:</strong> Learning progress, activity completion, assessment results, IEP goals and accommodations</li>
                  <li><strong>Health Information:</strong> Medical history, diagnoses, medications, therapy progress, consultation notes (HIPAA-protected)</li>
                  <li><strong>Communication Data:</strong> Messages, video call recordings (with consent), file uploads, and shared documents</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                <p class="text-gray-600 mb-4">We automatically collect certain information when you use our services:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform, user interactions</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Location Data:</strong> General location information (city/region level) for service optimization</li>
                  <li><strong>Performance Data:</strong> Error logs, system performance metrics, accessibility usage patterns</li>
                </ul>
              </div>

              <div class="bg-yellow-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-yellow-800 mb-2">Special Categories of Data</h4>
                    <p class="text-yellow-700 text-sm">
                      We process special categories of personal data including health information and data concerning minors. This processing is necessary for providing educational and healthcare services and is conducted in accordance with applicable laws including HIPAA, FERPA, and Philippine data protection regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: How We Use Information -->
          <div id="information-use" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">2</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">How We Use Information</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Primary Purposes</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="bg-gray-50 rounded-lg p-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Educational Services</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li>• Providing personalized learning experiences</li>
                      <li>• Tracking academic progress and achievements</li>
                      <li>• Creating and managing Individual Education Plans (IEPs)</li>
                      <li>• Facilitating teacher-student-family communication</li>
                    </ul>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Healthcare Services</h4>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li>• Providing telemedicine consultations</li>
                      <li>• Managing electronic health records</li>
                      <li>• Coordinating care between healthcare providers</li>
                      <li>• Monitoring therapy progress and outcomes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Secondary Purposes</h3>
                <p class="text-gray-600 mb-4">We may also use your information for:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Platform Improvement:</strong> Analyzing usage patterns to enhance user experience and develop new features</li>
                  <li><strong>Security:</strong> Detecting and preventing fraud, unauthorized access, and security incidents</li>
                  <li><strong>Communication:</strong> Sending service updates, educational resources, and important notifications</li>
                  <li><strong>Compliance:</strong> Meeting legal obligations and regulatory requirements</li>
                  <li><strong>Research:</strong> Conducting anonymized research to improve special education practices (with explicit consent)</li>
                </ul>
              </div>

              <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-information-circle" class="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-blue-800 mb-2">Legal Basis for Processing</h4>
                    <p class="text-blue-700 text-sm">
                      We process your personal data based on: (1) your consent, (2) contractual necessity for providing our services, (3) legitimate interests in improving our platform and ensuring security, and (4) legal obligations under healthcare and educational regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Information Sharing -->
          <div id="information-sharing" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">3</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Information Sharing and Disclosure</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Within the Q-Academy Ecosystem</h3>
                <p class="text-gray-600 mb-4">Information is shared among authorized users within the platform according to their roles and permissions:</p>
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead class="bg-gray-50">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">User Role</th>
                      <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Access Level</th>
                      <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Information Accessible</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 font-medium">Students</td>
                      <td class="border border-gray-300 px-4 py-2">Own Data Only</td>
                      <td class="border border-gray-300 px-4 py-2 text-sm">Personal activities, progress, schedules</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-2 font-medium">Parents/Guardians</td>
                      <td class="border border-gray-300 px-4 py-2">Child's Data</td>
                      <td class="border border-gray-300 px-4 py-2 text-sm">Complete student records, progress reports, health information</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 font-medium">Teachers</td>
                      <td class="border border-gray-300 px-4 py-2">Assigned Students</td>
                      <td class="border border-gray-300 px-4 py-2 text-sm">Educational records, IEP goals, behavioral notes</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-2 font-medium">Healthcare Providers</td>
                      <td class="border border-gray-300 px-4 py-2">Authorized Patients</td>
                      <td class="border border-gray-300 px-4 py-2 text-sm">Complete health records, educational progress relevant to care</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Third-Party Service Providers</h3>
                <p class="text-gray-600 mb-4">We may share information with trusted third-party service providers who assist us in operating our platform:</p>
                <ul class="space-y-2 text-gray-600">
                  <li><strong>Cloud Infrastructure:</strong> AWS, Azure, or Google Cloud for secure data storage and processing</li>
                  <li><strong>Communication Services:</strong> Video conferencing and messaging service providers</li>
                  <li><strong>Analytics Providers:</strong> Anonymized data for platform improvement and research</li>
                  <li><strong>Security Services:</strong> Cybersecurity firms for threat detection and prevention</li>
                </ul>
                <p class="text-sm text-gray-500 mt-4">All third-party providers are contractually bound to maintain the confidentiality and security of your information and may only use it for the specified purposes.</p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Legal Disclosures</h3>
                <p class="text-gray-600 mb-4">We may disclose your information when required by law or to protect rights and safety:</p>
                <ul class="space-y-2 text-gray-600">
                  <li>• In response to valid legal processes (subpoenas, court orders)</li>
                  <li>• To comply with regulatory requirements (Department of Education, Department of Health)</li>
                  <li>• To protect the safety of students, staff, or the public</li>
                  <li>• To investigate potential violations of our terms of service</li>
                  <li>• In connection with business transfers (mergers, acquisitions) with continued privacy protection</li>
                </ul>
              </div>

              <div class="bg-red-50 rounded-lg p-6">
                <div class="flex items-start space-x-3">
                  <Icon name="i-heroicons-shield-exclamation" class="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 class="font-semibold text-red-800 mb-2">We Never Sell Personal Information</h4>
                    <p class="text-red-700 text-sm">
                      Q-Academy does not sell, rent, or trade personal information to third parties for marketing or commercial purposes. Your data is used solely for providing educational and healthcare services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 4: Data Security -->
          <div id="data-security" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">4</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Data Security and Protection</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Technical Safeguards</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-lock-closed" class="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Encryption</h4>
                        <p class="text-gray-600 text-sm">AES-256 encryption for data at rest and TLS 1.3 for data in transit</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-key" class="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Access Controls</h4>
                        <p class="text-gray-600 text-sm">Multi-factor authentication and role-based access permissions</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-server" class="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Infrastructure</h4>
                        <p class="text-gray-600 text-sm">SOC 2 Type II certified cloud infrastructure with 99.9% uptime</p>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-shield-check" class="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Monitoring</h4>
                        <p class="text-gray-600 text-sm">24/7 security monitoring and intrusion detection systems</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-document-magnifying-glass" class="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Audit Logging</h4>
                        <p class="text-gray-600 text-sm">Comprehensive audit trails for all data access and modifications</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-arrow-path" class="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Backups</h4>
                        <p class="text-gray-600 text-sm">Automated encrypted backups with geographic redundancy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Compliance Standards</h3>
                <div class="grid md:grid-cols-4 gap-4">
                  <div class="bg-blue-50 rounded-lg p-4 text-center">
                    <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 class="font-semibold text-gray-900 text-sm">HIPAA</h4>
                    <p class="text-xs text-gray-600">Healthcare Information Portability</p>
                  </div>
                  <div class="bg-green-50 rounded-lg p-4 text-center">
                    <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 class="font-semibold text-gray-900 text-sm">FERPA</h4>
                    <p class="text-xs text-gray-600">Educational Privacy</p>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-4 text-center">
                    <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 class="font-semibold text-gray-900 text-sm">ISO 27001</h4>
                    <p class="text-xs text-gray-600">Information Security</p>
                  </div>
                  <div class="bg-orange-50 rounded-lg p-4 text-center">
                    <Icon name="i-heroicons-document-check" class="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h4 class="font-semibold text-gray-900 text-sm">DPA 2012</h4>
                    <p class="text-xs text-gray-600">Philippine Data Privacy</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Data Breach Response</h3>
                <p class="text-gray-600 mb-4">In the unlikely event of a data breach, we have established procedures to:</p>
                <ol class="space-y-2 text-gray-600">
                  <li><strong>1. Immediate Response:</strong> Contain the breach and assess the scope within 24 hours</li>
                  <li><strong>2. Investigation:</strong> Conduct thorough investigation to determine cause and extent</li>
                  <li><strong>3. Notification:</strong> Notify affected users and regulatory authorities within 72 hours as required by law</li>
                  <li><strong>4. Remediation:</strong> Implement corrective measures and additional security enhancements</li>
                  <li><strong>5. Support:</strong> Provide affected users with support and resources to protect their information</li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Section 5: Your Rights -->
          <div id="user-rights" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">5</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Your Privacy Rights</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Access and Control</h3>
                <p class="text-gray-600 mb-6">You have the following rights regarding your personal information:</p>

                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-eye" class="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Right to Access</h4>
                        <p class="text-gray-600 text-sm">Request copies of your personal data and information about how it's processed</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-pencil" class="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Right to Correction</h4>
                        <p class="text-gray-600 text-sm">Request correction of inaccurate or incomplete personal data</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-trash" class="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Right to Deletion</h4>
                        <p class="text-gray-600 text-sm">Request deletion of your personal data (subject to legal requirements)</p>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-hand-raised" class="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Right to Object</h4>
                        <p class="text-gray-600 text-sm">Object to processing of your personal data for certain purposes</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Right to Portability</h4>
                        <p class="text-gray-600 text-sm">Request transfer of your data to another service provider</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <Icon name="i-heroicons-pause" class="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 class="font-semibold text-gray-900">Right to Restrict</h4>
                        <p class="text-gray-600 text-sm">Request limitation of processing under certain circumstances</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">How to Exercise Your Rights</h3>
                <div class="bg-teal-50 rounded-lg p-6">
                  <p class="text-teal-800 mb-4">To exercise any of these rights, you can:</p>
                  <div class="space-y-2 text-teal-700">
                    <div class="flex items-center space-x-2">
                      <Icon name="i-heroicons-envelope" class="w-4 h-4" />
                      <span class="text-sm">Email us at privacy@q-academy.ph</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <Icon name="i-heroicons-phone" class="w-4 h-4" />
                      <span class="text-sm">Call our Privacy Hotline: +63-XXX-XXX-XXXX</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <Icon name="i-heroicons-cog-6-tooth" class="w-4 h-4" />
                      <span class="text-sm">Use the privacy controls in your account settings</span>
                    </div>
                  </div>
                  <p class="text-teal-700 text-sm mt-4">
                    We will respond to your request within 30 days and may require verification of your identity to protect your personal information.
                  </p>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Special Considerations for Minors</h3>
                <p class="text-gray-600 mb-4">For students under 18 years of age:</p>
                <ul class="space-y-2 text-gray-600">
                  <li>• Parents or legal guardians may exercise privacy rights on behalf of their child</li>
                  <li>• We require parental consent for certain data processing activities</li>
                  <li>• Students may request access to their own data through their parent or guardian</li>
                  <li>• Enhanced protections apply to all data concerning minors</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section 6: Contact Information -->
          <div id="contact-information" class="mb-16">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">6</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-900 m-0">Contact Information</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Privacy Officer</h3>
                <div class="bg-gray-50 rounded-lg p-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-3">Contact Details</h4>
                      <div class="space-y-2 text-gray-600">
                        <div class="flex items-center space-x-2">
                          <Icon name="i-heroicons-envelope" class="w-4 h-4" />
                          <span class="text-sm">privacy@q-academy.ph</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <Icon name="i-heroicons-phone" class="w-4 h-4" />
                          <span class="text-sm">+63-XXX-XXX-XXXX</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <Icon name="i-heroicons-map-pin" class="w-4 h-4" />
                          <span class="text-sm">Cagayan de Oro City, Northern Mindanao, Philippines</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-3">Response Times</h4>
                      <div class="space-y-2 text-sm text-gray-600">
                        <div class="flex justify-between">
                          <span>Privacy inquiries:</span>
                          <span class="font-medium">24-48 hours</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Data access requests:</span>
                          <span class="font-medium">Up to 30 days</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Breach notifications:</span>
                          <span class="font-medium">Within 72 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Regulatory Authorities</h3>
                <p class="text-gray-600 mb-4">If you believe your privacy rights have been violated, you may also contact:</p>
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-building-office" class="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 class="font-medium text-gray-900">National Privacy Commission (Philippines)</h4>
                      <p class="text-gray-600 text-sm">Website: privacy.gov.ph | Email: info@privacy.gov.ph</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="i-heroicons-building-office" class="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h4 class="font-medium text-gray-900">Department of Education (Philippines)</h4>
                      <p class="text-gray-600 text-sm">For educational privacy concerns related to student records</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Updates to This Policy</h3>
                <p class="text-gray-600 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
                </p>
                <ul class="space-y-2 text-gray-600">
                  <li>• Post the updated policy on our website with a new "Last Updated" date</li>
                  <li>• Notify users via email or in-app notification for material changes</li>
                  <li>• Provide a summary of key changes for easy understanding</li>
                  <li>• Maintain previous versions for reference and transparency</li>
                </ul>
                <p class="text-gray-600 mt-4">
                  Your continued use of Q-Academy services after any updates constitutes acceptance of the revised Privacy Policy.
                </p>
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
          Questions About Your Privacy?
        </h2>
        <p class="text-gray-300 mb-8">
          Our privacy team is here to help. Contact us anytime with questions or concerns about how we handle your personal information.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink size="lg" class="px-8 py-3 text-white cursor-pointer">
            Contact Privacy Team
          </NuxtLink>
          <NuxtLink size="lg" class="px-8 py-3 text-white cursor-pointer">
            View Terms of Service
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PrivacyTableOfContents from "~/components/privacy/privacy-table-of-contents.vue";

useHead({
  title: 'Privacy Policy - Q-Academy',
  meta: [
    { name: 'description', content: 'Learn how Q-Academy protects your privacy and personal information. Our comprehensive privacy policy explains data collection, use, and protection practices.' }
  ]
})
</script>
