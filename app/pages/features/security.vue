<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><span class="text-red-600 font-medium">Advanced Security</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-shield-check" class="w-4 h-4 mr-2" />
              {{ heroSection.badge }}
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {{ heroSection.title }}
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              {{ heroSection.description }}
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div
                v-for="benefit in heroSection.benefits"
                :key="benefit.title"
                class="flex items-start space-x-3"
              >
                <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ benefit.title }}</h3>
                  <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton color="primary" size="lg" class="px-8 py-4">
                {{ heroSection.primaryCta }}
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                {{ heroSection.secondaryCta }}
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <!-- Security Dashboard -->
              <div class="text-center mb-6">
                <h3 class="font-semibold text-gray-900 mb-4">{{ securityDashboard.title }}</h3>

                <!-- Security Status Grid -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div
                    v-for="metric in securityDashboard.metrics"
                    :key="metric.label"
                    :class="['rounded-lg p-3 text-center', metric.bgClass]"
                  >
                    <div :class="['text-lg font-bold', metric.textClass]">{{ metric.value }}</div>
                    <div class="text-xs text-gray-600">{{ metric.label }}</div>
                  </div>
                </div>

                <!-- Security Events -->
                <div class="space-y-2">
                  <div class="text-sm font-medium text-gray-900">{{ securityDashboard.eventsTitle }}</div>
                  <div class="space-y-2">
                    <div
                      v-for="event in securityDashboard.events"
                      :key="event.id"
                      :class="['flex items-center justify-between p-3 rounded-lg', event.bgClass]"
                    >
                      <div class="flex items-center space-x-2">
                        <Icon :name="event.icon" :class="['w-4 h-4', event.iconClass]" />
                        <span class="text-sm text-gray-700">{{ event.message }}</span>
                      </div>
                      <span class="text-xs text-gray-500">{{ event.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div
              v-for="floatingElement in floatingElements"
              :key="floatingElement.id"
              :class="['absolute bg-white rounded-lg shadow-lg p-3', floatingElement.position, floatingElement.animation]"
            >
              <div class="flex items-center space-x-2">
                <div :class="['w-6 h-6 rounded-full flex items-center justify-center', floatingElement.iconBg]">
                  <Icon :name="floatingElement.icon" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">{{ floatingElement.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Layers -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ securityLayers.title }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ securityLayers.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="layer in securityLayers.layers"
            :key="layer.id"
            :class="['rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300', layer.bgClass]"
          >
            <div :class="['w-16 h-16 rounded-2xl mb-6 flex items-center justify-center', layer.iconBg]">
              <Icon :name="layer.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ layer.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ layer.description }}
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li
                v-for="feature in layer.features"
                :key="feature"
                class="flex items-center"
              >
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance Standards -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ complianceSection.title }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ complianceSection.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="standard in complianceSection.standards"
            :key="standard.id"
            class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div :class="['w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center', standard.iconBg]">
              <Icon :name="standard.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ standard.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ standard.description }}
            </p>
            <div :class="['text-sm font-medium', standard.badgeColor]">
              {{ standard.badge }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Threat Protection -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ threatProtection.title }}
            </h2>

            <div class="space-y-6">
              <div
                v-for="protection in threatProtection.protections"
                :key="protection.id"
                class="bg-gray-50 rounded-xl p-6"
              >
                <div class="flex items-start space-x-4">
                  <div :class="['w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0', protection.iconBg]">
                    <Icon :name="protection.icon" :class="['w-6 h-6', protection.iconColor]" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ protection.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">
                      {{ protection.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Threat Protection Visual -->
          <div class="relative">
            <div class="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ threatProtectionVisual.title }}</h3>
                <p class="text-gray-600">{{ threatProtectionVisual.subtitle }}</p>
              </div>

              <!-- Threat Protection Dashboard -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div
                    v-for="stat in threatProtectionVisual.stats"
                    :key="stat.label"
                    :class="['rounded-lg p-3 text-center', stat.bgClass]"
                  >
                    <div :class="['text-lg font-bold', stat.textClass]">{{ stat.value }}</div>
                    <div class="text-xs text-gray-600">{{ stat.label }}</div>
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="text-sm font-medium text-gray-900">{{ threatProtectionVisual.alertsTitle }}</div>
                  <div class="space-y-2">
                    <div
                      v-for="alert in threatProtectionVisual.alerts"
                      :key="alert.id"
                      :class="['flex items-center justify-between p-3 rounded-lg border-l-4', alert.bgClass, alert.borderClass]"
                    >
                      <div class="flex items-center space-x-2">
                        <Icon :name="alert.icon" :class="['w-4 h-4', alert.iconClass]" />
                        <span class="text-sm text-gray-700">{{ alert.message }}</span>
                      </div>
                      <span class="text-xs text-gray-500">{{ alert.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Metrics -->
    <section :class="metricsSection.bgClass">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ metricsSection.title }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ metricsSection.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="metric in metricsSection.metrics"
            :key="metric.id"
            class="bg-white rounded-2xl p-6 text-center shadow-lg"
          >
            <div :class="['w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center', metric.iconBg]">
              <span class="text-white font-bold text-xl">{{ metric.value }}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ metric.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ metric.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-red-600 to-orange-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          {{ ctaSection.title }}
        </h2>
        <p class="text-xl text-red-100 mb-8 leading-relaxed">
          {{ ctaSection.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtButton color="white" size="lg" class="px-8 py-4">
            {{ ctaSection.primaryCta }}
          </NuxtButton>
          <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
            {{ ctaSection.secondaryCta }}
          </NuxtButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Configuration
useHead({
  title: 'Advanced Security - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Enterprise-grade security for special needs education data with HIPAA compliance, encryption, and comprehensive threat protection in Q-Academy platform.' }
  ]
})

// Hero Section Data
const heroSection = {
  badge: 'Enterprise-Grade Protection',
  title: 'Advanced Security',
  description: 'Protect sensitive student and medical data with military-grade encryption, comprehensive compliance, and advanced threat detection. Our multi-layered security approach ensures the highest level of protection for special needs education information.',
  benefits: [
    {
      title: 'Military-Grade Encryption',
      description: 'AES-256 encryption protects all data in transit and at rest'
    },
    {
      title: 'HIPAA & FERPA Compliance',
      description: 'Full compliance with healthcare and education privacy regulations'
    },
    {
      title: 'Real-Time Threat Detection',
      description: 'AI-powered monitoring and instant response to security threats'
    }
  ],
  primaryCta: 'Security Assessment',
  secondaryCta: 'Compliance Report'
}

// Security Dashboard Data
const securityDashboard = {
  title: 'Security Control Center',
  metrics: [
    { value: '256-bit', label: 'Encryption', bgClass: 'bg-green-50', textClass: 'text-green-600' },
    { value: '99.99%', label: 'Uptime', bgClass: 'bg-blue-50', textClass: 'text-blue-600' },
    { value: 'Zero', label: 'Breaches', bgClass: 'bg-purple-50', textClass: 'text-purple-600' },
    { value: '24/7', label: 'Monitoring', bgClass: 'bg-orange-50', textClass: 'text-orange-600' }
  ],
  eventsTitle: 'Security Events',
  events: [
    {
      id: 1,
      icon: 'i-heroicons-shield-check',
      iconClass: 'text-green-500',
      message: 'Security scan completed',
      time: '2m ago',
      bgClass: 'bg-green-50'
    },
    {
      id: 2,
      icon: 'i-heroicons-lock-closed',
      iconClass: 'text-blue-500',
      message: 'Data encrypted successfully',
      time: '5m ago',
      bgClass: 'bg-blue-50'
    },
    {
      id: 3,
      icon: 'i-heroicons-eye',
      iconClass: 'text-purple-500',
      message: 'Access audit logged',
      time: '8m ago',
      bgClass: 'bg-purple-50'
    }
  ]
}

// Floating Elements Data
const floatingElements = [
  {
    id: 1,
    position: '-top-4 -left-4',
    animation: 'animate-bounce',
    iconBg: 'bg-red-500',
    icon: 'i-heroicons-shield-exclamation',
    text: 'Threat Protected'
  },
  {
    id: 2,
    position: '-bottom-4 -right-4',
    animation: 'animate-pulse',
    iconBg: 'bg-green-500',
    icon: 'i-heroicons-lock-closed',
    text: 'Encrypted'
  }
]

// Security Layers Data
const securityLayers = {
  title: 'Multi-Layered Security Architecture',
  description: 'Our comprehensive security framework protects your data through multiple defensive layers, from network perimeter to application level.',
  layers: [
    {
      id: 1,
      title: 'Network Security',
      description: 'Advanced firewall protection, DDoS mitigation, and intrusion detection systems guard against network-based attacks.',
      icon: 'i-heroicons-globe-alt',
      iconBg: 'bg-blue-500',
      bgClass: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      features: [
        'Next-generation firewalls',
        'DDoS protection',
        'Intrusion detection systems',
        'Network segmentation'
      ]
    },
    {
      id: 2,
      title: 'Data Encryption',
      description: 'End-to-end encryption ensures your sensitive data remains protected both in transit and at rest using industry-standard protocols.',
      icon: 'i-heroicons-lock-closed',
      iconBg: 'bg-green-500',
      bgClass: 'bg-gradient-to-br from-green-50 to-emerald-50',
      features: [
        'AES-256 encryption',
        'TLS 1.3 for data in transit',
        'Key rotation policies',
        'Hardware security modules'
      ]
    },
    {
      id: 3,
      title: 'Access Control',
      description: 'Granular permissions and multi-factor authentication ensure only authorized users can access sensitive information.',
      icon: 'i-heroicons-user-group',
      iconBg: 'bg-purple-500',
      bgClass: 'bg-gradient-to-br from-purple-50 to-pink-50',
      features: [
        'Role-based access control',
        'Multi-factor authentication',
        'Single sign-on integration',
        'Privileged access management'
      ]
    },
    {
      id: 4,
      title: 'Monitoring & Detection',
      description: 'AI-powered monitoring systems provide real-time threat detection and automated response to security incidents.',
      icon: 'i-heroicons-eye',
      iconBg: 'bg-orange-500',
      bgClass: 'bg-gradient-to-br from-orange-50 to-red-50',
      features: [
        'Real-time threat detection',
        'Behavioral analytics',
        'Automated incident response',
        'Security information management'
      ]
    },
    {
      id: 5,
      title: 'Backup & Recovery',
      description: 'Comprehensive backup strategies and disaster recovery plans ensure business continuity and data availability.',
      icon: 'i-heroicons-cloud-arrow-up',
      iconBg: 'bg-indigo-500',
      bgClass: 'bg-gradient-to-br from-indigo-50 to-blue-50',
      features: [
        'Automated daily backups',
        'Point-in-time recovery',
        'Disaster recovery testing',
        'Geographic redundancy'
      ]
    },
    {
      id: 6,
      title: 'Compliance Monitoring',
      description: 'Continuous compliance monitoring ensures adherence to healthcare and education regulations with automated reporting.',
      icon: 'i-heroicons-clipboard-document-check',
      iconBg: 'bg-teal-500',
      bgClass: 'bg-gradient-to-br from-teal-50 to-cyan-50',
      features: [
        'HIPAA compliance monitoring',
        'FERPA adherence tracking',
        'Automated audit reports',
        'Regulatory change management'
      ]
    }
  ]
}

// Compliance Standards Data
const complianceSection = {
  title: 'Industry-Leading Compliance Standards',
  description: 'We meet and exceed the most stringent regulatory requirements for healthcare and education data protection.',
  standards: [
    {
      id: 1,
      title: 'HIPAA Compliant',
      description: 'Full compliance with Health Insurance Portability and Accountability Act for medical data protection.',
      icon: 'i-heroicons-shield-check',
      iconBg: 'bg-green-500',
      badge: 'Certified & Audited',
      badgeColor: 'text-green-600'
    },
    {
      id: 2,
      title: 'SOC 2 Type II',
      description: 'Independently audited for security, availability, processing integrity, confidentiality, and privacy.',
      icon: 'i-heroicons-document-check',
      iconBg: 'bg-blue-500',
      badge: 'Annually Verified',
      badgeColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'FERPA Aligned',
      description: 'Compliance with Family Educational Rights and Privacy Act for student record protection.',
      icon: 'i-heroicons-academic-cap',
      iconBg: 'bg-purple-500',
      badge: 'Education Compliant',
      badgeColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'ISO 27001',
      description: 'International standard for information security management systems and systematic protection.',
      icon: 'i-heroicons-globe-alt',
      iconBg: 'bg-orange-500',
      badge: 'Globally Recognized',
      badgeColor: 'text-orange-600'
    }
  ]
}

// Threat Protection Data
const threatProtection = {
  title: 'Advanced Threat Protection',
  protections: [
    {
      id: 1,
      title: 'AI-Powered Threat Detection',
      description: 'Machine learning algorithms continuously analyze patterns to identify and neutralize potential security threats before they can impact your data.',
      icon: 'i-heroicons-cpu-chip',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 2,
      title: 'Zero-Trust Architecture',
      description: 'Never trust, always verify. Our zero-trust security model ensures every access request is validated regardless of location or user credentials.',
      icon: 'i-heroicons-shield-exclamation',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Incident Response Team',
      description: 'Dedicated cybersecurity experts provide 24/7 monitoring and rapid response to security incidents with automated containment protocols.',
      icon: 'i-heroicons-users',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ]
}

// Threat Protection Visual Data
const threatProtectionVisual = {
  title: 'Threat Protection Center',
  subtitle: 'Real-time security monitoring',
  stats: [
    { value: '0', label: 'Active Threats', bgClass: 'bg-green-50', textClass: 'text-green-600' },
    { value: '1,247', label: 'Blocked Today', bgClass: 'bg-blue-50', textClass: 'text-blue-600' },
    { value: '99.9%', label: 'Protection Rate', bgClass: 'bg-purple-50', textClass: 'text-purple-600' },
    { value: '<1s', label: 'Response Time', bgClass: 'bg-orange-50', textClass: 'text-orange-600' }
  ],
  alertsTitle: 'Recent Protection Events',
  alerts: [
    {
      id: 1,
      icon: 'i-heroicons-shield-check',
      iconClass: 'text-green-500',
      message: 'Malware attempt blocked',
      time: '1m ago',
      bgClass: 'bg-green-50',
      borderClass: 'border-green-500'
    },
    {
      id: 2,
      icon: 'i-heroicons-exclamation-triangle',
      iconClass: 'text-yellow-500',
      message: 'Suspicious login detected',
      time: '3m ago',
      bgClass: 'bg-yellow-50',
      borderClass: 'border-yellow-500'
    },
    {
      id: 3,
      icon: 'i-heroicons-lock-closed',
      iconClass: 'text-blue-500',
      message: 'Data encryption verified',
      time: '5m ago',
      bgClass: 'bg-blue-50',
      borderClass: 'border-blue-500'
    }
  ]
}

// Security Metrics Data
const metricsSection = {
  title: 'Proven Security Performance',
  description: 'Our security measures deliver measurable results in protecting sensitive education and healthcare data.',
  bgClass: 'py-20 bg-gradient-to-br from-red-50 to-orange-50',
  metrics: [
    {
      id: 1,
      value: '0',
      title: 'Data Breaches',
      description: 'Zero security breaches since platform launch with continuous monitoring and protection.',
      iconBg: 'bg-green-500'
    },
    {
      id: 2,
      value: '99.99%',
      title: 'Uptime SLA',
      description: 'Industry-leading uptime guarantee ensuring your data and systems are always available.',
      iconBg: 'bg-blue-500'
    },
    {
      id: 3,
      value: '<30s',
      title: 'Threat Response',
      description: 'Average response time to security threats with automated containment and mitigation.',
      iconBg: 'bg-purple-500'
    },
    {
      id: 4,
      value: '24/7',
      title: 'Security Monitoring',
      description: 'Round-the-clock security operations center monitoring and incident response capabilities.',
      iconBg: 'bg-orange-500'
    }
  ]
}

// CTA Section Data
const ctaSection = {
  title: 'Secure Your Student Data Today',
  description: 'Experience peace of mind with enterprise-grade security that protects sensitive educational and medical information.',
  primaryCta: 'Start Security Assessment',
  secondaryCta: 'View Compliance Report'
}
</script>
