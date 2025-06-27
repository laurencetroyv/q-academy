<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          A diverse group of passionate professionals dedicated to transforming special needs education.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="team in teams"
            :key="team.name"
            class="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div
            :class="[
              'w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center',
              team.color
          ]">
            <span class="text-white font-bold text-2xl">{{ team.initials }}</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ team.name }}</h3>
          <p :class="['font-medium mb-4', team.role_color]">{{ team.role }}</p>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ team.description}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const teams = [
  {
    name: "Kenno Michael Uy",
    role: "Chief Executive Officer",
    initials: "KM",
    description: "Pediatric specialist with 15 years of experience in special needs healthcare and passionate advocate for inclusive education.",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    role_color: "text-red-600"
  },
  {
    name: "Jerino Cardino",
    role: "Master Teacher",
    initials: "KM",
    description: "Master teacher with over 10 years of experience in special education, specializing in curriculum development and inclusive teaching strategies.",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    role_color: "text-green-600"
  },
  {
    name: "Archie Velasco",
    role: "Research Program Manager",
    initials: "KM",
    description: "Experienced program manager with a background in educational research, focusing on data-driven solutions for special needs education.",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    role_color: "text-blue-600"
  },
  {
    name: "Laurence Troy Sambaan Valdez",
    role: "Chief Technology Officer",
    initials: "LT",
    description: "Software engineer with expertise in healthcare technology and passion for creating accessible digital solutions.",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    role_color: "text-yellow-600"
  },
  {
    name: "Maurel Conato Ploya",
    role: "Design Lead",
    initials: "MC",
    description: "UX/UI designer with a focus on user-centered design, creating intuitive and engaging experiences for special needs education platforms.",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    role_color: "text-orange-600"
  },
  {
    name: "Andrea Bautista",
    role: "Research and Development Lead",
    initials: "AB",
    description: "Special education teacher and curriculum designer with 20 years of experience in developing inclusive learning programs.",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    role_color: "text-purple-600"
  },
]
</script>