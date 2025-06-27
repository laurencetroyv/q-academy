<template>
  <div>
    <!-- Hero Section -->
    <timeline-header />

    <!-- Current Status Banner -->
    <section class="py-8 bg-blue-50 border-b border-blue-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center space-x-3 mb-4 md:mb-0">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-gray-700">Currently in Development</span>
          </div>
          <div class="text-sm text-gray-600">
            <span class="font-medium">Phase 1:</span> Foundation & Core LMS
            <span class="mx-2">•</span>
            <span class="text-green-600 font-medium">Month 6 of 8</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Four-Phase Development Strategy
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures we build a stable, scalable platform that truly serves the special education community in the Philippines.
          </p>
        </div>

        <timeline-phase-card />

      </div>
    </section>

    <!-- Detailed Development Phases -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Detailed Development Phases
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive breakdown of features, user roles, and success metrics for each development phase.
          </p>
        </div>

        <!-- Phase Details -->
        <div class="space-y-16">
          <timeline-detailed-phase-breakdown
            v-for="(phase, index) in detailedPhaseBreakdown"
            :key="index"
            :phase="phase"
            :index="index"
          />
        </div>
      </div>
    </section>

    <timeline-tech-stack />

    <timeline-development-updates />
  </div>
</template>

<script setup>
useHead({
  title: 'Development Timeline - Q-Academy',
  meta: [
    {
      name: 'description',
      content: 'Follow Q-Academy\'s development journey as we build a comprehensive platform connecting SPED doctors, teachers, and students across the Philippines.'
    }
  ]
})

// Detailed Phase Breakdown Data
const detailedPhaseBreakdown = [
  {
    number: 1,
    title: 'Core LMS Platform',
    subtitle: 'Q3 2025 • 8 months • Foundation Release',
    color: 'green',
    userRoles: [
      {
        icon: 'i-heroicons-device-phone-mobile',
        title: 'Student (Mobile App)',
        color: 'blue',
        features: [
          'View assigned activities',
          'Complete interactive activities',
          'Auto-submit with notifications',
          'Activity analytics tracking',
          'Performance metrics',
          'Progress visualization',
          'QR code authentication'
        ]
      },
      {
        icon: 'i-heroicons-computer-desktop',
        title: 'Teacher (Multi-platform)',
        color: 'green',
        features: [
          'CRUD activities & assignments',
          'Student management system',
          'Photo/video capture tools',
          'Accept/reject student requests',
          'Progress report generation',
          'IEP management',
          'QR code generation/scanning',
          'Activity sharing with teachers',
          'Academic year management',
          'ANNEX report creation',
          'Session management'
        ]
      },
      {
        icon: 'i-heroicons-heart',
        title: 'Parent (Multi-platform)',
        color: 'purple',
        features: [
          'Add & manage children',
          'View child\'s activities',
          'Progress & analytics dashboard',
          'Report card access',
          'Subject & teacher information',
          'Photo/video album',
          'IEP viewing',
          'Home capture tools',
          'Subscription management',
          'School migration tools',
          'QR code scanning',
          'Session management'
        ]
      },
      {
        icon: 'i-heroicons-building-office',
        title: 'School & Super Admin',
        color: 'orange',
        features: [
          'Teacher/staff management',
          'Permission system',
          'Academic year setup',
          'ANNEX report templates',
          'Analytics dashboard',
          'QR code management',
          'Session monitoring',
          'Super admin controls',
          'School account management',
          'System-wide analytics'
        ]
      }
    ],
    metrics: [
      { value: '5+', label: 'Pilot Schools', color: 'text-green-600' },
      { value: '100+', label: 'Active Students', color: 'text-blue-600' },
      { value: '25+', label: 'Teachers', color: 'text-purple-600' },
      { value: '80%', label: 'User Satisfaction', color: 'text-orange-600' }
    ]
  },
  {
    number: 2,
    title: 'Enhanced Features & Communication',
    subtitle: 'Q3 2026 • 8 months • Feature Enhancement',
    color: 'blue',
    userRoles: [
      {
        icon: 'i-heroicons-chart-bar-square',
        title: 'Advanced Analytics',
        color: 'blue',
        features: [
          'Screen pressure tracking',
          'Time-based analytics',
          'Detailed performance metrics',
          'Behavioral pattern analysis',
          'Learning progression insights',
          'Custom analytics dashboards'
        ]
      },
      {
        icon: 'i-heroicons-chat-bubble-left-right',
        title: 'Communication System',
        color: 'green',
        features: [
          'Parent-teacher messaging',
          'Real-time notifications',
          'Activity sharing enhancement',
          'Progress alert system',
          'Communication history',
          'Multi-language support'
        ]
      },
      {
        icon: 'i-heroicons-arrow-path',
        title: 'Migration & Transfer',
        color: 'purple',
        features: [
          'Student school transfers',
          'Data migration tools',
          'Cross-school compatibility',
          'Approval workflows',
          'Record continuity',
          'Transfer notifications'
        ]
      },
      {
        icon: 'i-heroicons-document-text',
        title: 'Report Generation',
        color: 'orange',
        features: [
          'Custom ANNEX templates',
          'Drag-and-drop builder',
          'Automated report creation',
          'Multi-format exports',
          'Template sharing',
          'Report scheduling'
        ]
      }
    ],
    metrics: [
      { value: '25+', label: 'Partner Schools', color: 'text-blue-600' },
      { value: '750+', label: 'Active Students', color: 'text-green-600' },
      { value: '75+', label: 'Teachers', color: 'text-purple-600' },
      { value: '80%', label: 'Feature Adoption', color: 'text-orange-600' }
    ]
  },
  {
    number: 3,
    title: 'Telemedicine & EHR Integration',
    subtitle: 'Q3 2027 • 8 months • Healthcare Integration',
    color: 'purple',
    userRoles: [
      {
        icon: 'i-heroicons-video-camera',
        title: 'Doctor Portal',
        color: 'blue',
        features: [
          'Video conferencing platform',
          'Appointment scheduling',
          'Patient management system',
          'Electronic health records',
          'Prescription management',
          'Progress analysis tools',
          'Medical report generation',
          'Therapy session recording'
        ]
      },
      {
        icon: 'i-heroicons-calendar-days',
        title: 'Appointment System',
        color: 'green',
        features: [
          'Calendar integration',
          'Automated reminders',
          'Booking management',
          'Cancellation handling',
          'Waitlist management',
          'Multi-doctor scheduling'
        ]
      },
      {
        icon: 'i-heroicons-document-check',
        title: 'EHR Management',
        color: 'purple',
        features: [
          'Secure record storage',
          'Progress correlation',
          'Medical history tracking',
          'Treatment plan updates',
          'Lab result integration',
          'HIPAA compliance'
        ]
      },
      {
        icon: 'i-heroicons-share',
        title: 'Data Sharing',
        color: 'orange',
        features: [
          'Parent data sharing',
          'Teacher-doctor communication',
          'Progress synchronization',
          'Medical insights sharing',
          'Collaborative care plans',
          'Cross-platform updates'
        ]
      }
    ],
    metrics: [
      { value: '15+', label: 'Medical Partners', color: 'text-purple-600' },
      { value: '1500+', label: 'Consultations', color: 'text-blue-600' },
      { value: '15+', label: 'Doctors', color: 'text-green-600' },
      { value: '85%', label: 'Care Improvement', color: 'text-orange-600' }
    ]
  },
  {
    number: 4,
    title: 'AI & Advanced Analytics',
    subtitle: 'Q3 2028 • 8 months • Intelligence Integration',
    color: 'orange',
    userRoles: [
      {
        icon: 'i-heroicons-cpu-chip',
        title: 'AI Recognition',
        color: 'blue',
        features: [
          'Student face recognition',
          'Automatic assignment',
          'Behavior pattern AI',
          'Learning style detection',
          'Progress prediction',
          'Personalized recommendations'
        ]
      },
      {
        icon: 'i-heroicons-chart-pie',
        title: 'Advanced Analytics',
        color: 'green',
        features: [
          'Predictive insights',
          'Custom dashboards',
          'Performance forecasting',
          'Trend analysis',
          'Comparative reporting',
          'Success metrics tracking'
        ]
      },
      {
        icon: 'i-heroicons-code-bracket',
        title: 'Developer API',
        color: 'purple',
        features: [
          'Third-party integrations',
          'Government data sharing',
          'External tool connections',
          'Custom app development',
          'Data export capabilities',
          'Webhook support'
        ]
      },
      {
        icon: 'i-heroicons-document-chart-bar',
        title: 'Custom Reporting',
        color: 'orange',
        features: [
          'Report template builder',
          'Multi-format exports',
          'Automated generation',
          'Scheduled reports',
          'Data visualization',
          'Interactive dashboards'
        ]
      }
    ],
    metrics: [
      { value: '5+', label: 'AI Integrations', color: 'text-orange-600' },
      { value: '3500+', label: 'Students Served', color: 'text-blue-600' },
      { value: '10+', label: 'Gov Partnerships', color: 'text-green-600' },
      { value: '99%', label: 'Platform Reliability', color: 'text-purple-600' }
    ]
  }
];
</script>
