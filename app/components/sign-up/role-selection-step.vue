<template>
  <div class="space-y-6">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">What's your role?</h2>
      <p class="text-gray-600">Choose the option that best describes you</p>
    </div>

    <div class="space-y-3">
      <button
        type="button"
        v-for="role in userRoles"
        :key="role.value"
        @click="$emit('update:selectedRole', role.value)"
        :class="[
          'relative flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md text-left w-full',
          selectedRole === role.value
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        ]"
      >
        <div class="flex items-center space-x-3">
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center text-white',
              role.bgColor
            ]"
          >
            <Icon :name="role.icon" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">{{ role.label }}</h3>
            <p class="text-sm text-gray-600">{{ role.description }}</p>
          </div>
        </div>
        <div
          v-if="selectedRole === role.value"
          class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
        >
          <Icon name="i-heroicons-check" class="w-4 h-4 text-white" />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Role} from "~~/types/sign-up-types";

interface Props {
  selectedRole: string
  userRoles: Role[]
}

defineProps<Props>()

defineEmits(['update:selectedRole'])
</script>
