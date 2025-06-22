<template>
  <footer id="contact" class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div class="lg:col-span-1">
          <NuxtImg src="/logo.png" class="h-8 mb-6 cursor-pointer" @click="navigateTo('/')" />
          <p class="text-gray-300 mb-6 leading-relaxed">
            An Integrated Learning and Healthcare Management for Special Needs Education developed for seamless collaboration between educators and healthcare professionals.
          </p>
          <div class="flex space-x-4">
            <NuxtLink
              v-for="socials in soc_med_icons"
              :key="socials.icon"
              :to="socials.to"
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <NuxtIcon :name="socials.icon" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6">Explore</h3>
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="link in explore_links"
              :key="link.name"
              :to="link.href"
              class="text-gray-300 hover:text-white transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- User Access -->
        <div>
          <h3 class="text-lg font-semibold mb-6">User Access</h3>
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="link in user_access_links"
              :key="link.name"
              :to="link.href"
              class="text-gray-300 hover:text-white transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Contact & Resources -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Contact & Resources</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <Icon name="i-heroicons-envelope" class="w-5 h-5 text-gray-400" />
              <a href="mailto:academy@qachs.com" class="text-gray-300 hover:text-white transition-colors">
                academy@qachs.com
              </a>
            </li>
            <li class="flex items-center space-x-3">
              <Icon name="i-heroicons-phone" class="w-5 h-5 text-gray-400" />
              <span class="text-gray-300">+63 XXX XXX XXXX</span>
            </li>
            <li class="flex items-start space-x-3">
              <Icon name="i-heroicons-map-pin" class="w-5 h-5 text-gray-400 mt-0.5" />
              <span class="text-gray-300">
                Cagayan de Oro City,<br>
                Northern Mindanao, Philippines
              </span>
            </li>
          </ul>

          <!-- Additional Links -->
          <div class="mt-6 pt-6 border-t border-gray-800">
            <ul class="space-y-2">
              <li>
                <a href="/privacy" class="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" class="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="/accessibility" class="text-gray-300 hover:text-white transition-colors text-sm">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="md:flex md:items-center md:justify-between">
          <div class="text-gray-400 text-sm">
            Copyright © 2024-{{ year }} Q-Academy. All rights reserved.
          </div>
          <div class="mt-4 md:mt-0">
            <div class="flex items-center space-x-6 max-sm:flex-col max-sm:items-start">
              <span class="text-gray-400 text-sm">Powered by</span>
              <div class="flex items-center space-x-4 text-xs text-gray-500 max-sm:flex-col max-sm:items-start">
                <span>Nuxt.js</span>
                <span class="max-sm:hidden">•</span>
                <span>Laravel</span>
                <span class="max-sm:hidden">•</span>
                <span>Flutter</span>
                <span class="max-sm:hidden">•</span>
                <span>.NET MAUI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const soc_med_icons = [
  { icon: 'i-simple-icons-facebook', to: '#' },
  { icon: 'i-simple-icons-twitter', to: '#' },
  { icon: 'i-simple-icons-linkedin', to: '#' },
  { icon: 'i-simple-icons-instagram', to: '#' },
]

const explore_links = [
  { name: 'About Us', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Target Users', href: '#target' },
  // { name: 'Blog', href: '/blogs' },
  { name: 'Support', href: '/support' },
]

const user_access_links = [
  { name: 'Sign in', href: '/login' },
  { name: 'Sign Up', href: '/signup' },
  { name: 'Request Demo', href: '/demo' },
]

const year = new Date().getFullYear()
</script>
