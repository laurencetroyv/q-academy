<template>
  <section :class="['bg-gradient-to-br pt-16 pb-20', color]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot name="header" />
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ title }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ description }}
        </p>
        <slot />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
interface IProps {
  title: string;
  description: string;
  color: string
}

defineProps<IProps>()
</script>
