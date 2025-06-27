<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><NuxtLink to="/features" class="text-gray-500 hover:text-gray-700">Features</NuxtLink></li>
            <li><Icon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" /></li>
            <li><span class="text-purple-600 font-medium">Progress Reports</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Icon name="i-heroicons-chart-bar-square" class="w-4 h-4 mr-2" />
              Data-Driven Educational Insights
            </div>

            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Progress Reports & Analytics
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Generate comprehensive, customizable reports that track student progress across educational and medical domains. Our advanced analytics help identify patterns and optimize learning strategies for better outcomes.
            </p>

            <!-- Key Benefits -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Visual Analytics Dashboard</h3>
                  <p class="text-gray-600">Interactive charts, graphs, and visualizations for easy data interpretation</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Customizable Report Templates</h3>
                  <p class="text-gray-600">Create tailored reports for different stakeholders and purposes</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Real-time Progress Tracking</h3>
                  <p class="text-gray-600">Continuous monitoring with automated alerts for significant changes</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtButton size="lg" class="px-8 py-4 bg-purple-500 hover:bg-purple-600 cursor-pointer text-white">
                Generate Report
              </NuxtButton>
              <NuxtButton color="white" variant="outline" size="lg" class="px-8 py-4">
                View Sample
              </NuxtButton>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <!-- Analytics Dashboard Mockup -->
              <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-semibold text-gray-900">Student Progress Dashboard</h3>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full"/>
                    <span class="text-xs text-green-600 font-medium">Live Data</span>
                  </div>
                </div>

                <!-- Chart Area -->
                <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 mb-4">
                  <div class="flex items-end justify-between h-20 space-x-2">
                    <div class="bg-purple-500 rounded-t w-4 h-12"/>
                    <div class="bg-purple-400 rounded-t w-4 h-16"/>
                    <div class="bg-purple-600 rounded-t w-4 h-20"/>
                    <div class="bg-purple-500 rounded-t w-4 h-14"/>
                    <div class="bg-purple-700 rounded-t w-4 h-18"/>
                    <div class="bg-purple-400 rounded-t w-4 h-10"/>
                  </div>
                  <div class="text-center mt-2">
                    <p class="text-xs text-gray-600">Weekly Progress Trend</p>
                  </div>
                </div>

                <!-- Metrics Grid -->
                <div class="grid grid-cols-3 gap-3 mb-4">
                  <div class="bg-blue-50 rounded-lg p-3 text-center">
                    <div class="text-lg font-bold text-blue-600">85%</div>
                    <div class="text-xs text-gray-600">Learning Goals</div>
                  </div>
                  <div class="bg-green-50 rounded-lg p-3 text-center">
                    <div class="text-lg font-bold text-green-600">92%</div>
                    <div class="text-xs text-gray-600">Engagement</div>
                  </div>
                  <div class="bg-orange-50 rounded-lg p-3 text-center">
                    <div class="text-lg font-bold text-orange-600">78%</div>
                    <div class="text-xs text-gray-600">Skills Dev.</div>
                  </div>
                </div>

                <!-- Recent Activities -->
                <div class="space-y-2">
                  <div class="text-xs font-medium text-gray-900">Recent Milestones</div>
                  <div class="flex items-center space-x-2 text-xs">
                    <div class="w-2 h-2 bg-green-500 rounded-full"/>
                    <span class="text-gray-600">Completed reading assessment</span>
                  </div>
                  <div class="flex items-center space-x-2 text-xs">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"/>
                    <span class="text-gray-600">Math skills improvement noted</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-chart-pie" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Real-time Analytics</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <Icon name="i-heroicons-document-arrow-down" class="w-4 h-4 text-white" />
                </div>
                <span class="text-xs font-medium">Export Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Report Types -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Report Types
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Generate detailed reports tailored to different stakeholders and specific needs in special education and healthcare.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Academic Progress Reports -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Academic Progress Reports</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Detailed analysis of learning objectives, skill development, and educational milestones achieved by students.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Learning objective tracking
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Skill mastery assessments
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Curriculum alignment analysis
              </li>
            </ul>
          </div>

          <!-- Behavioral Analysis -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Behavioral Analysis</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Track behavioral patterns, social interactions, and emotional development with data-driven insights.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Behavioral incident tracking
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Social skills progression
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Intervention effectiveness
              </li>
            </ul>
          </div>

          <!-- Medical Progress -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="lucide:heart-pulse" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Medical Progress</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Comprehensive health monitoring reports including therapy outcomes and medical interventions.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Therapy session outcomes
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Medical milestone tracking
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Treatment plan effectiveness
              </li>
            </ul>
          </div>

          <!-- Family Communication -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Family Communication</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Parent-friendly reports that translate complex data into actionable insights for home support.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Plain language summaries
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Home activity suggestions
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Goal setting guidance
              </li>
            </ul>
          </div>

          <!-- IEP Documentation -->
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-indigo-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-document-text" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">IEP Documentation</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Automated IEP progress reports that align with educational standards and legal requirements.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Standards-aligned reporting
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Goal progress tracking
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Legal compliance features
              </li>
            </ul>
          </div>

          <!-- Comparative Analysis -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-teal-500 rounded-2xl mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-arrows-right-left" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Comparative Analysis</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Benchmark student progress against peers and analyze trends across different time periods.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Peer group comparisons
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Historical trend analysis
              </li>
              <li class="flex items-center">
                <Icon name="i-heroicons-check-circle" class="w-4 h-4 text-green-500 mr-2" />
                Performance benchmarking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Analytics Features -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Visual Representation -->
          <div class="relative order-2 lg:order-1">
            <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
              <div class="text-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics Engine</h3>
                <p class="text-gray-600">AI-powered insights and predictions</p>
              </div>

              <!-- Analytics Dashboard -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="space-y-4">
                  <!-- Trend Analysis -->
                  <div class="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Icon name="i-heroicons-arrow-trending-up" class="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Reading Skills</p>
                        <p class="text-xs text-gray-600">15% improvement this month</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm font-bold text-green-600">+15%</p>
                    </div>
                  </div>

                  <!-- Prediction Model -->
                  <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Icon name="i-heroicons-sparkles" class="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Predicted Outcome</p>
                        <p class="text-xs text-gray-600">Goal achievement likely by Feb</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm font-bold text-blue-600">85%</p>
                    </div>
                  </div>

                  <!-- Alert System -->
                  <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Icon name="i-heroicons-exclamation-triangle" class="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Attention Needed</p>
                        <p class="text-xs text-gray-600">Math skills plateau detected</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm font-bold text-orange-600">Review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              AI-Powered Analytics & Insights
            </h2>

            <div class="space-y-6">
              <!-- Feature 1 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-chart-bar" class="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Machine learning algorithms analyze patterns to predict learning outcomes and identify potential challenges before they become problems.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 2 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-bell-alert" class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Smart Alerts & Notifications</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Automated alerts notify educators and healthcare providers when significant changes occur in student performance or behavior patterns.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Feature 3 -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-light-bulb" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
                    <p class="text-gray-600 leading-relaxed">
                      AI-driven suggestions for learning activities, interventions, and support strategies based on individual student data and similar cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Report Customization -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Flexible Report Customization
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Create reports that match your specific needs with our powerful customization tools and template library.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Template Library -->
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-document-duplicate" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Template Library</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Choose from pre-built templates designed for different purposes, stakeholders, and compliance requirements.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• IEP Progress Reports</li>
              <li>• Medical Assessment Forms</li>
              <li>• Parent Communication</li>
              <li>• Administrative Summaries</li>
            </ul>
          </div>

          <!-- Custom Fields -->
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-adjustments-horizontal" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Custom Fields & Metrics</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Add custom data fields, metrics, and tracking parameters specific to your educational or medical programs.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Custom Goal Tracking</li>
              <li>• Behavior Metrics</li>
              <li>• Therapy Outcomes</li>
              <li>• Social Skills Indicators</li>
            </ul>
          </div>

          <!-- Export Options -->
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="i-heroicons-arrow-down-tray" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Multiple Export Formats</h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Export reports in various formats suitable for different purposes and platforms with one-click generation.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• PDF Documents</li>
              <li>• Excel Spreadsheets</li>
              <li>• Interactive Dashboards</li>
              <li>• Email Summaries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 bg-gray-50 ">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Measurable Impact Through Data
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our progress reporting and analytics have improved educational outcomes and decision-making.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Impact 1 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">40%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Faster Goal Achievement</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Students reach IEP goals 40% faster with data-driven interventions and personalized strategies.
            </p>
          </div>

          <!-- Impact 2 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">90%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Teacher Satisfaction</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Educators report high satisfaction with automated reporting and data visualization tools.
            </p>
          </div>

          <!-- Impact 3 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">75%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Time Savings</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Reduction in time spent on manual report generation and data compilation tasks.
            </p>
          </div>

          <!-- Impact 4 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">95%</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Data Accuracy</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Improvement in data accuracy and consistency across all reporting systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-call-to-action
      title="Transform Data Into Actionable Insights"
      description="Start making data-driven decisions that improve student outcomes and streamline your reporting process."
      color="bg-gradient-to-r from-purple-50 to-pink-50"
      first-button-text="Generate Sample Report"
      first-button-color="bg-purple-500 hover:bg-purple-600 text-white"
      first-button-link="#"
      second-button-text="Schedule Demo"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Progress Reports & Analytics - Q-Academy Features',
  meta: [
    { name: 'description', content: 'Generate comprehensive, data-driven progress reports and analytics for special needs students with Q-Academy\'s advanced reporting and visualization tools.' }
  ]
})
</script>
