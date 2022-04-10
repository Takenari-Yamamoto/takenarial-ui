<template>
  <button
    class="app-button"
    :class="{ '-red': color === 'red', '-blue': color === 'blue' }"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppButton',
  props: {
    text: {
      type: String,
      default: 'BUTTON',
    },
    color: {
      type: String,
      default: '',
    },
  },
})
</script>
