<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
      <div class="absolute inset-0 bg-black/20"/>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Q-Academy Blog
          </h1>
          <p class="text-xl text-indigo-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Insights, resources, and stories from the world of special education and healthcare technology in the Philippines.
          </p>

          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search articles, topics, or keywords..."
                class="w-full px-6 py-4 pr-12 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
              <Icon name="i-heroicons-magnifying-glass" class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg">
          <div class="grid lg:grid-cols-2 gap-0">
            <div class="p-8 lg:p-12">
              <div class="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Featured
              </div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">
                Revolutionizing Special Education in the Philippines: A Digital Transformation Story
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Discover how Q-Academy is bridging the gap between education and healthcare for students with special needs across the Philippines, bringing specialized services to remote communities through innovative technology.
              </p>
              <div class="flex items-center space-x-4 mb-6">
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-calendar" class="w-4 h-4 text-gray-400" />
                  <span class="text-sm text-gray-600">December 20, 2024</span>
                </div>
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-gray-400" />
                  <span class="text-sm text-gray-600">8 min read</span>
                </div>
              </div>
              <NuxtButton color="primary" size="lg" class="px-8 py-3">
                Read Full Article
              </NuxtButton>
            </div>
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
              <div class="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center">
                <Icon name="i-heroicons-academic-cap" class="w-32 h-32 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            v-for="category in categories"
            :key="category.name"
            :class="[
              'px-6 py-3 rounded-full text-sm font-medium transition-colors',
              selectedCategory === category.slug
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            ]"
            @click="selectedCategory = category.slug"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Articles Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Article 1 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-16 h-16 text-white/80" />
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Healthcare</span>
                <span class="text-xs text-gray-500">Dec 18, 2024</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Telemedicine for Special Needs: Best Practices and Implementation
              </h3>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Learn how healthcare providers can effectively deliver specialized care remotely, ensuring quality treatment for students with disabilities.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-gray-400" />
                  <span class="text-xs text-gray-500">6 min read</span>
                </div>
                <NuxtButton color="primary" variant="outline" size="sm">
                  Read More
                </NuxtButton>
              </div>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Icon name="i-heroicons-puzzle-piece" class="w-16 h-16 text-white/80" />
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Education</span>
                <span class="text-xs text-gray-500">Dec 15, 2024</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Creating Inclusive Learning Environments: A Teacher's Guide
              </h3>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Practical strategies for educators to create accessible and engaging learning experiences for students with diverse abilities and needs.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-gray-400" />
                  <span class="text-xs text-gray-500">10 min read</span>
                </div>
                <NuxtButton color="primary" variant="outline" size="sm">
                  Read More
                </NuxtButton>
              </div>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Icon name="i-heroicons-chart-bar" class="w-16 h-16 text-white/80" />
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">Technology</span>
                <span class="text-xs text-gray-500">Dec 12, 2024</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Data-Driven Insights: Using Analytics to Improve Student Outcomes
              </h3>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Explore how educational data analytics can help identify patterns and optimize interventions for students with special needs.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-gray-400" />
                  <span class="text-xs text-gray-500">7 min read</span>
                </div>
                <NuxtButton color="primary" variant="outline" size="sm">
                  Read More
                </NuxtButton>
              </div>
            </div>
          </article>

          <!-- Article 4 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-16 h-16 text-white/80" />
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">Family Resources</span>
                <span class="text-xs text-gray-500">Dec 10, 2024</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Empowering Families: Supporting Your Child's Educational Journey
              </h3>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Essential guidance for parents and caregivers on how to actively participate in their child's special education program and advocate for their needs.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-gray-400" />
                  <span class="text-xs text-gray-500">12 min read</span>
                </div>
                <NuxtButton color="primary" variant="outline" size="sm">
                  Read More
                </NuxtButton>
              </div>
            </div>
          </article>

          <!-- Article 5 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <Icon name="i-heroicons-shield-check" class="w-16 h-16 text-white/80" />
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs font-medium">Security</span>
                <span class="text-xs text-gray-500">Dec 8, 2024</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                HIPAA Compliance in Educational Technology: What Schools Need to Know
              </h3>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Understanding the critical importance of healthcare data protection in educational settings and how to maintain compliance.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-gray-400" />
                  <span class="text-xs text-gray-500">9 min read</span>
                </div>
                <NuxtButton color="primary" variant="outline" size="sm">
                  Read More
                </NuxtButton>
              </div>
            </div>
          </article>

          <!-- Article 6 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <Icon name="i-heroicons-light-bulb" class="w-16 h-16 text-white/80" />
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-3">
                <span class="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs font-medium">Innovation</span>
                <span class="text-xs text-gray-500">Dec 5, 2024</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                The Future of Adaptive Learning Technology in Special Education
              </h3>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Exploring emerging technologies and their potential to transform personalized learning experiences for students with diverse needs.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon name="i-heroicons-clock" class="w-4 h-4 text-gray-400" />
                  <span class="text-xs text-gray-500">11 min read</span>
                </div>
                <NuxtButton color="primary" variant="outline" size="sm">
                  Read More
                </NuxtButton>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <NuxtButton color="primary" variant="outline" size="lg" class="px-8 py-3">
            Load More Articles
          </NuxtButton>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Stay Updated with Q-Academy
        </h2>
        <p class="text-xl text-indigo-100 mb-8 leading-relaxed">
          Get the latest insights, resources, and updates about special education and healthcare technology delivered to your inbox.
        </p>

        <div class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-4">
            <input
              v-model="emailSubscription"
              type="email"
              placeholder="Enter your email address"
              class="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
            <NuxtButton color="white" size="lg" class="px-8 py-4 whitespace-nowrap">
              Subscribe
            </NuxtButton>
          </div>
          <p class="text-indigo-200 text-sm mt-4">
            No spam, unsubscribe at any time. Read our <NuxtLink to="/privacy" class="underline">Privacy Policy</NuxtLink>.
          </p>
        </div>
      </div>
    </section>

    <!-- Resource Categories -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Resources
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Dive deeper into specific topics with our comprehensive resource collections.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Resource Category 1 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Special Education</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Best practices, teaching strategies, and curriculum development for special needs education.
            </p>
            <div class="text-sm text-blue-600 font-medium">25+ Articles</div>
          </div>

          <!-- Resource Category 2 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Healthcare Integration</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Connecting healthcare and education for comprehensive student support and care coordination.
            </p>
            <div class="text-sm text-green-600 font-medium">18+ Articles</div>
          </div>

          <!-- Resource Category 3 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Technology Solutions</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              EdTech innovations, implementation guides, and digital transformation in special education.
            </p>
            <div class="text-sm text-purple-600 font-medium">22+ Articles</div>
          </div>

          <!-- Resource Category 4 -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Family & Community</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Resources for families, community engagement, and building support networks.
            </p>
            <div class="text-sm text-orange-600 font-medium">15+ Articles</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Research & Studies -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Research & Studies
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Evidence-based insights and research findings that inform our approach to special education and healthcare technology.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Research Article 1 -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="flex items-center space-x-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Research Study</span>
              <span class="text-xs text-gray-500">Published: Dec 2024</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Impact of Integrated LMS-EHR Systems on Student Outcomes: A Philippine Case Study
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              A comprehensive 12-month study examining the effectiveness of integrated learning management and electronic health record systems in improving educational and health outcomes for students with special needs across 15 schools in the Philippines.
            </p>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600">
                <strong>Key Finding:</strong> 78% improvement in care coordination
              </div>
              <NuxtButton color="primary" variant="outline" size="sm">
                Read Study
              </NuxtButton>
            </div>
          </div>

          <!-- Research Article 2 -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div class="flex items-center space-x-2 mb-4">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">White Paper</span>
              <span class="text-xs text-gray-500">Published: Nov 2024</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Telemedicine Accessibility in Rural Philippines: Barriers and Solutions
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              An in-depth analysis of telemedicine adoption challenges in rural Philippine communities and practical solutions for improving healthcare access for students with disabilities in remote areas.
            </p>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600">
                <strong>Coverage:</strong> 3 provinces, 45 schools
              </div>
              <NuxtButton color="primary" variant="outline" size="sm">
                Download PDF
              </NuxtButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Spotlights -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Community Spotlights
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating the amazing educators, healthcare providers, and families who are making a difference in special education across the Philippines.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Spotlight 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Teacher of the Month</h3>
            <h4 class="text-base font-medium text-blue-600 mb-3">Ms. Elena Rodriguez</h4>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Special education teacher from Cebu who has successfully implemented Q-Academy's integrated platform to serve 45 students with autism spectrum disorders.
            </p>
            <NuxtButton color="primary" variant="outline" size="sm">
              Read Story
            </NuxtButton>
          </div>

          <!-- Spotlight 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Healthcare Hero</h3>
            <h4 class="text-base font-medium text-green-600 mb-3">Dr. Maria Santos</h4>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Pediatric developmental specialist providing telemedicine consultations to remote areas, reaching 200+ students across Northern Mindanao.
            </p>
            <NuxtButton color="primary" variant="outline" size="sm">
              Read Story
            </NuxtButton>
          </div>

          <!-- Spotlight 3 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="i-heroicons-users" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Family Champion</h3>
            <h4 class="text-base font-medium text-purple-600 mb-3">The Martinez Family</h4>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Parents who have become advocates for inclusive education in their community, helping 10 other families navigate special education services.
            </p>
            <NuxtButton color="primary" variant="outline" size="sm">
              Read Story
            </NuxtButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const searchQuery = ref('')
const emailSubscription = ref('')
const selectedCategory = ref('all')

// Categories
const categories = [
  { name: 'All Articles', slug: 'all' },
  { name: 'Special Education', slug: 'education' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Family Resources', slug: 'family' },
  { name: 'Research', slug: 'research' },
  { name: 'Success Stories', slug: 'stories' }
]

// SEO
useHead({
  title: 'Blog - Q-Academy',
  meta: [
    { name: 'description', content: 'Insights, resources, and stories from the world of special education and healthcare technology in the Philippines. Stay updated with Q-Academy blog.' }
  ]
})
</script>
