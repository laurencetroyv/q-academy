<template>
  <section :class="['py-20', color]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 :class="['text-3xl lg:text-4xl font-bold text-gray-900 mb-6', textColor]">
        {{ title }}
      </h2>

      <p :class="['text-lg text-gray-600 mb-8 leading-relaxed', textColor]">
        {{ description}}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtButton size="lg" :class="['px-8 py-4 cursor-pointer', firstButtonColor]" @click="navigateTo(firstButtonLink)">
          {{ firstButtonText }}
        </NuxtButton>

        <NuxtLink :to="secondButtonLink" class="px-8 py-4 text-gray-600 hover:text-blue-600 transition-colors">
          {{ secondButtonText }}
        </NuxtLink>
      </div>

      <slot />
    </div>
  </section>
</template>
<script setup lang="ts">
import type { LinkProps, ButtonProps } from "@nuxt/ui"

interface IProps {
  title: string
  description: string
  color: string
  firstButtonText?: string
  firstButtonLink?: LinkProps['to']
  firstButtonColor?: ButtonProps['class']
  secondButtonText?: string
  secondButtonLink?: LinkProps['to']
  textColor?: string
}

withDefaults(defineProps<IProps>(), {
  firstButtonText: 'Get Started Today',
  firstButtonLink: '/get-started',
  firstButtonColor: '',
  secondButtonText: 'Contact Our Team',
  secondButtonLink: '/contact-us',
  textColor: 'text-black'
})
</script>
