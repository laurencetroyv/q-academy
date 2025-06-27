<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="py-20 bg-white border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Accessibility Commitment
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Q-Academy is committed to ensuring digital accessibility for all users, especially students with
            disabilities, their families, educators, and healthcare providers.
          </p>
          <div class="inline-flex items-center space-x-4 text-sm text-gray-500">
            <span>WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span>Section 508 Aligned</span>
            <span>•</span>
            <span>Continuously Improving</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Commitment -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Accessibility Promise
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Accessibility isn't just a feature for us—it's fundamental to our mission of empowering every student with
            special needs to reach their full potential.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Universal Design -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Universal Design</h3>
            <p class="text-gray-600 leading-relaxed">
              Every feature is designed from the ground up to be accessible to users with diverse abilities, ensuring no
              one is left behind in their educational or healthcare journey.
            </p>
          </div>

          <!-- Continuous Improvement -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-arrow-trending-up" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Continuous Improvement</h3>
            <p class="text-gray-600 leading-relaxed">
              We regularly test our platform with users who have disabilities and continuously refine our accessibility
              features based on real-world feedback and evolving standards.
            </p>
          </div>

          <!-- Expert Collaboration -->
          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Expert Collaboration</h3>
            <p class="text-gray-600 leading-relaxed">
              We work closely with accessibility experts, special education professionals, and disability advocacy
              organizations to ensure our platform meets the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Accessibility Standards -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Standards We Follow
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Q-Academy adheres to internationally recognized accessibility standards and guidelines to ensure our
            platform is usable by everyone.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- WCAG 2.1 AA -->
          <div class="bg-blue-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-check-badge" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">WCAG 2.1 AA</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Web Content Accessibility Guidelines Level AA compliance ensures our platform meets international
              accessibility standards.
            </p>
          </div>

          <!-- Section 508 -->
          <div class="bg-green-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-document-check" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Section 508</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Aligned with U.S. federal accessibility requirements to ensure government institutions can confidently
              adopt our platform.
            </p>
          </div>

          <!-- ADA Compliance -->
          <div class="bg-purple-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-scale" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">ADA Aligned</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Designed to meet Americans with Disabilities Act requirements for digital accessibility in educational
              settings.
            </p>
          </div>

          <!-- EN 301 549 -->
          <div class="bg-orange-50 rounded-2xl p-6 text-center">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-globe-europe-africa" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">EN 301 549</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              European accessibility standard compliance for ICT products and services, ensuring global accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Accessibility Features -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built-in Accessibility Features
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Q-Academy includes comprehensive accessibility features designed to support users with various disabilities
            and learning differences.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Visual Accessibility -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-eye" class="w-6 h-6 text-white"/>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Visual Accessibility</h3>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Screen Reader Support</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Full compatibility with NVDA, JAWS, and VoiceOver</li>
                  <li>• Semantic HTML markup for proper navigation</li>
                  <li>• Alternative text for all images and graphics</li>
                  <li>• Descriptive labels for interactive elements</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Visual Customization</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• High contrast mode for better visibility</li>
                  <li>• Adjustable font sizes (up to 200% zoom)</li>
                  <li>• Customizable color schemes</li>
                  <li>• Reduced motion options for sensitivity</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Low Vision Support</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Screen magnification compatibility</li>
                  <li>• Focus indicators for keyboard navigation</li>
                  <li>• Clear visual hierarchy and spacing</li>
                  <li>• Color-blind friendly design patterns</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Motor/Mobility Accessibility -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-hand-raised" class="w-6 h-6 text-white"/>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Motor & Mobility Accessibility</h3>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Keyboard Navigation</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Full keyboard accessibility for all functions</li>
                  <li>• Logical tab order throughout the platform</li>
                  <li>• Keyboard shortcuts for common actions</li>
                  <li>• Skip links to main content areas</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Touch & Click Options</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Large touch targets (minimum 44px)</li>
                  <li>• Adjustable click timing settings</li>
                  <li>• Drag and drop alternatives</li>
                  <li>• Voice control compatibility</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Switch Control Support</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Compatible with switch access devices</li>
                  <li>• Customizable switch timing</li>
                  <li>• Scanning interface options</li>
                  <li>• Single-switch navigation modes</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Cognitive Accessibility -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-brain" class="w-6 h-6 text-white"/>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Cognitive Accessibility</h3>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Clear Communication</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Plain language throughout the interface</li>
                  <li>• Consistent navigation and layout</li>
                  <li>• Clear instructions and feedback</li>
                  <li>• Error messages with helpful guidance</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Memory Support</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Auto-save functionality for activities</li>
                  <li>• Breadcrumb navigation trails</li>
                  <li>• Session timeout warnings</li>
                  <li>• Progress indicators for complex tasks</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Attention Support</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Distraction-free learning modes</li>
                  <li>• Customizable notification settings</li>
                  <li>• Break reminders and pacing options</li>
                  <li>• Focus mode with reduced interface</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Hearing Accessibility -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-speaker-wave" class="w-6 h-6 text-white"/>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Hearing Accessibility</h3>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Visual Alternatives</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Closed captions for all video content</li>
                  <li>• Visual alerts and notifications</li>
                  <li>• Text transcripts for audio materials</li>
                  <li>• Sign language interpretation support</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Audio Customization</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Adjustable volume controls</li>
                  <li>• Audio description options</li>
                  <li>• Background noise reduction</li>
                  <li>• Hearing aid compatibility</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Communication Support</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Text-based chat options</li>
                  <li>• Video relay service integration</li>
                  <li>• Real-time text communication</li>
                  <li>• Written consultation summaries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform-Specific Accessibility -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Accessibility Across All Platforms
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're using our mobile app, desktop application, or web platform, accessibility features are
            consistent and comprehensive.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Mobile Accessibility -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-device-phone-mobile" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Mobile Application</h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Native iOS and Android accessibility APIs</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>VoiceOver and TalkBack screen reader support</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Dynamic type and font scaling</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Voice Control and Switch Control compatibility</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Gesture-based navigation alternatives</span>
              </li>
            </ul>
          </div>

          <!-- Desktop Accessibility -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-computer-desktop" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Desktop Application</h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Windows Narrator and macOS VoiceOver support</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Keyboard-only navigation and shortcuts</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>High contrast and dark mode options</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Screen magnification software compatibility</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Eye-tracking device support</span>
              </li>
            </ul>
          </div>

          <!-- Web Platform Accessibility -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-globe-alt" class="w-8 h-8 text-white"/>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Web Platform</h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Cross-browser accessibility compatibility</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>ARIA labels and semantic markup</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Browser zoom up to 400% without scrolling</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Progressive Web App accessibility features</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-heroicons-check" class="w-4 h-4 text-green-500 mt-0.5"/>
                <span>Browser extension compatibility</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testing & Quality Assurance -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testing & Quality Assurance
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We employ rigorous testing methodologies to ensure our accessibility features work reliably for all users.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Our Testing Approach</h3>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Automated Testing</h4>
                  <p class="text-gray-600 text-sm">Continuous automated accessibility testing integrated into our
                    development pipeline using tools like axe-core and Lighthouse.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Manual Testing</h4>
                  <p class="text-gray-600 text-sm">Comprehensive manual testing with assistive technologies including
                    screen readers, voice recognition software, and switch controls.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">User Testing</h4>
                  <p class="text-gray-600 text-sm">Regular testing sessions with users who have disabilities to gather
                    real-world feedback and identify improvement opportunities.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Expert Review</h4>
                  <p class="text-gray-600 text-sm">Third-party accessibility audits by certified accessibility
                    professionals and disability advocacy organizations.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Testing Tools & Standards</h3>

            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">WAVE Web Accessibility Evaluator</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500"/>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">axe DevTools</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500"/>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Lighthouse Accessibility Audit</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500"/>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Color Contrast Analyzer</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500"/>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Screen Reader Testing</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500"/>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm font-medium text-gray-900">Keyboard Navigation Testing</span>
                <Icon name="i-heroicons-check" class="w-5 h-5 text-green-500"/>
              </div>
            </div>

            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
              <div class="flex items-center text-blue-700 mb-2">
                <Icon name="i-heroicons-trophy" class="w-5 h-5 mr-2"/>
                <span class="font-medium text-sm">Current Accessibility Score</span>
              </div>
              <div class="text-2xl font-bold text-blue-900">98/100</div>
              <p class="text-blue-600 text-xs">Based on automated testing and expert evaluation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support & Resources -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Accessibility Support & Resources
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support to help all users make the most of Q-Academy's accessibility features.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Documentation -->
          <div class="bg-blue-50 rounded-2xl p-8">
            <Icon name="i-heroicons-book-open" class="w-12 h-12 text-blue-600 mb-6"/>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Accessibility Documentation</h3>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              Comprehensive guides on using Q-Academy with various assistive technologies and accessibility settings.
            </p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Screen reader setup guides</li>
              <li>• Keyboard navigation tutorials</li>
              <li>• Customization instructions</li>
              <li>• Video tutorials with captions</li>
            </ul>
            <NuxtButton color="primary" variant="outline" size="sm">
              View Documentation
            </NuxtButton>
          </div>

          <!-- Training & Support -->
          <div class="bg-green-50 rounded-2xl p-8">
            <Icon name="i-heroicons-academic-cap" class="w-12 h-12 text-green-600 mb-6"/>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Training & Support</h3>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              Personalized training sessions and ongoing support to help users maximize accessibility features.
            </p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li>• One-on-one accessibility training</li>
              <li>• Webinar series on accessibility</li>
              <li>• 24/7 accessibility support hotline</li>
              <li>• Community forum for users</li>
            </ul>
            <NuxtButton color="primary" variant="outline" size="sm">
              Schedule Training
            </NuxtButton>
          </div>

          <!-- Feedback & Improvement -->
          <div class="bg-purple-50 rounded-2xl p-8">
            <Icon name="i-heroicons-chat-bubble-left-right" class="w-12 h-12 text-purple-600 mb-6"/>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Feedback & Improvement</h3>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              Your feedback helps us continuously improve our accessibility features and user experience.
            </p>
            <ul class="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Accessibility feedback portal</li>
              <li>• User research participation</li>
              <li>• Feature request system</li>
              <li>• Bug reporting for accessibility issues</li>
            </ul>
            <NuxtButton color="primary" variant="outline" size="sm">
              Share Feedback
            </NuxtButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Assistive Technology Compatibility -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Assistive Technology Compatibility
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Q-Academy is tested and optimized to work seamlessly with a wide range of assistive technologies.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Screen Readers -->
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
              <Icon name="i-heroicons-speaker-wave" class="w-5 h-5 mr-2 text-blue-600"/>
              Screen Readers
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• JAWS (Windows)</li>
              <li>• NVDA (Windows)</li>
              <li>• VoiceOver (macOS/iOS)</li>
              <li>• TalkBack (Android)</li>
              <li>• Orca (Linux)</li>
            </ul>
          </div>

          <!-- Voice Recognition -->
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
              <Icon name="i-heroicons-microphone" class="w-5 h-5 mr-2 text-green-600"/>
              Voice Recognition
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Dragon NaturallySpeaking</li>
              <li>• Windows Speech Recognition</li>
              <li>• macOS Dictation</li>
              <li>• Voice Control (iOS/macOS)</li>
              <li>• Google Voice Access</li>
            </ul>
          </div>

          <!-- Switch Access -->
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
              <Icon name="i-heroicons-cursor-arrow-rays" class="w-5 h-5 mr-2 text-purple-600"/>
              Switch Access
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Single switch devices</li>
              <li>• Multi-switch arrays</li>
              <li>• Sip-and-puff switches</li>
              <li>• Eye-gaze switches</li>
              <li>• Head mouse systems</li>
            </ul>
          </div>

          <!-- Magnification -->
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
              <Icon name="i-heroicons-magnifying-glass-plus" class="w-5 h-5 mr-2 text-orange-600"/>
              Magnification
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• ZoomText (Windows)</li>
              <li>• MAGic (Windows)</li>
              <li>• macOS Zoom</li>
              <li>• iOS Zoom</li>
              <li>• Browser zoom tools</li>
            </ul>
          </div>
        </div>

        <!-- Compatibility Testing Notice -->
        <div class="mt-12 bg-blue-50 rounded-2xl p-8">
          <div class="flex items-start space-x-4">
            <Icon name="i-heroicons-information-circle" class="w-8 h-8 text-blue-600 mt-1"/>
            <div>
              <h3 class="text-xl font-semibold text-blue-900 mb-3">Continuous Compatibility Testing</h3>
              <p class="text-blue-800 mb-4">
                We regularly test Q-Academy with the latest versions of assistive technologies to ensure ongoing
                compatibility. If you encounter any issues with your assistive technology, please contact our
                accessibility support team immediately.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtButton color="primary" size="sm">
                  Report Compatibility Issue
                </NuxtButton>
                <NuxtButton color="primary" variant="outline" size="sm">
                  View Compatibility Matrix
                </NuxtButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Accessibility Roadmap -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Accessibility Roadmap
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We're continuously working to enhance our accessibility features. Here's what's coming next in our
            commitment to universal access.
          </p>
        </div>

        <div class="space-y-8">
          <!-- Current Quarter -->
          <div class="bg-green-50 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-play" class="w-6 h-6 text-white"/>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Q1 2025 - In Progress</h3>
                <p class="text-green-700 text-sm">Current development priorities</p>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Enhanced Mobile Accessibility</h4>
                <p class="text-gray-600 text-sm">Improved gesture navigation and voice command integration for mobile
                  applications</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">AI-Powered Descriptions</h4>
                <p class="text-gray-600 text-sm">Automatic alt-text generation for user-uploaded images using AI
                  technology</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Advanced Customization</h4>
                <p class="text-gray-600 text-sm">Expanded personalization options for visual and interaction
                  preferences</p>
              </div>
            </div>
          </div>

          <!-- Next Quarter -->
          <div class="bg-blue-50 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-clock" class="w-6 h-6 text-white"/>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Q2 2025 - Planned</h3>
                <p class="text-blue-700 text-sm">Upcoming accessibility enhancements</p>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Cognitive Support Tools</h4>
                <p class="text-gray-600 text-sm">Advanced reading support, simplified interfaces, and memory aids</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Multi-language Accessibility</h4>
                <p class="text-gray-600 text-sm">Accessibility features support for Filipino, Cebuano, and other local
                  languages</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Collaborative Accessibility</h4>
                <p class="text-gray-600 text-sm">Enhanced accessibility for group activities and collaborative
                  learning</p>
              </div>
            </div>
          </div>

          <!-- Future -->
          <div class="bg-purple-50 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Icon name="i-heroicons-eye" class="w-6 h-6 text-white"/>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Q3-Q4 2025 - Future Vision</h3>
                <p class="text-purple-700 text-sm">Long-term accessibility innovations</p>
              </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Predictive Accessibility</h4>
                <p class="text-gray-600 text-sm">AI-driven accessibility suggestions based on user behavior and
                  needs</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Virtual Reality Support</h4>
                <p class="text-gray-600 text-sm">Accessible VR experiences for immersive educational content</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Brain-Computer Interface</h4>
                <p class="text-gray-600 text-sm">Research and development for direct neural interface accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Feedback -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Help Us Improve Accessibility
        </h2>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          Your feedback and experiences help us make Q-Academy more accessible for everyone. We welcome your input and
          are committed to addressing accessibility concerns promptly.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-white mb-4">Accessibility Support</h3>
            <div class="space-y-3 text-blue-100 text-sm">
              <div class="flex items-center space-x-2">
                <Icon name="i-heroicons-envelope" class="w-4 h-4"/>
                <span>accessibility@q-academy.ph</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="i-heroicons-phone" class="w-4 h-4"/>
                <span>+63-XXX-XXX-XXXX (24/7 Accessibility Hotline)</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="i-heroicons-chat-bubble-left" class="w-4 h-4"/>
                <span>Live chat support with accessibility specialists</span>
              </div>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-white mb-4">Response Commitment</h3>
            <div class="space-y-2 text-blue-100 text-sm">
              <div class="flex justify-between">
                <span>Accessibility issues:</span>
                <span class="font-medium">&lessdot; 24 hours</span>
              </div>
              <div class="flex justify-between">
                <span>Feature requests:</span>
                <span class="font-medium">&lessdot; 48 hours</span>
              </div>
              <div class="flex justify-between">
                <span>General inquiries:</span>
                <span class="font-medium">&lessdot; 2 hours</span>
              </div>
              <div class="flex justify-between">
                <span>Critical barriers:</span>
                <span class="font-medium">Immediate</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtButton color="white" size="lg" class="px-8 py-4">
            Report Accessibility Issue
          </NuxtButton>
          <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
            Request Accessibility Demo
          </NuxtButton>
        </div>

        <div class="mt-8 text-blue-200 text-sm">
          <p>
            Q-Academy is committed to providing equal access to information and functionality.
            We strive to meet or exceed WCAG 2.1 AA standards and continuously improve our accessibility based on user
            feedback.
          </p>
        </div>
      </div>
    </section>

    <!-- Alternative Formats -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="flex items-center space-x-3 mb-6">
            <Icon name="i-heroicons-document-arrow-down" class="w-8 h-8 text-gray-600"/>
            <h2 class="text-2xl font-semibold text-gray-900">Alternative Formats</h2>
          </div>

          <p class="text-gray-600 mb-6">
            This accessibility statement and all Q-Academy documentation are available in alternative formats upon
            request:
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-semibold text-gray-900 mb-3">Available Formats</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li>• Large print versions (18pt, 24pt fonts)</li>
                <li>• High contrast versions</li>
                <li>• Screen reader optimized versions</li>
                <li>• Audio recordings</li>
                <li>• Braille format (upon request)</li>
                <li>• Easy-read versions with simple language</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-3">How to Request</h3>
              <p class="text-sm text-gray-600 mb-4">
                To request alternative formats, please contact our accessibility team with your specific needs. We
                typically provide alternative formats within 3-5 business days.
              </p>
              <NuxtButton color="primary" size="sm">
                Request Alternative Format
              </NuxtButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Accessibility - Q-Academy',
  meta: [
    {
      name: 'description',
      content: 'Q-Academy\'s commitment to digital accessibility. Learn about our WCAG 2.1 AA compliant features, assistive technology support, and inclusive design for students with disabilities.'
    }
  ]
})
</script>
