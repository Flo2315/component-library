
<!-- à supprimer -->
<template>
  <div
    ref="collapse"
    class="lc-collapse"
  >
    <div class="lc-collapse-head">
      <span class="lc-collapse-head--title">{{ title }}</span>
      <div class="lc-collapse-head--actions">
        <slot name="actions" />
        <lc-button
          v-if="haveToggle"
          class="lc-collapse-head--toggle-button"
          variant="icon"
          size="xs"
          @click="toggle"
        >
          <slot name="button-toggle-content">
            <lc-icon
              class="lc-collapse-head--toggle-button-icon"
              :name="modelValue ? 'bottom-chevron' : 'top-chevron'"
              size="xxs"
            />
          </slot>
        </lc-button>
      </div>
    </div>
    <div
      ref="collapse-body"
    >
      <lc-accordion
        :expanded="modelValue"
      >
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <div>Hello World!</div>
        <slot name="body" />
      </lc-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LcButton from '../LcButton'
import LcIcon from '../LcIcon'
import LcAccordion from './LcAccordion.vue'

export default defineComponent({
  name: 'LcCollapse',
  components: {
    LcAccordion,
    LcButton,
    LcIcon,
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: '',
    },
    haveToggle: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    toggle() {
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
})
</script>

<style scoped>
.lc-collapse {
  @apply bg-white shadow-md;
}

.lc-collapse-head {
  @apply px-9 py-5 border-b border-gray-300 flex items-center justify-between;
}

.lc-collapse-head--title {
  @apply text-xl font-medium;
}

.lc-collapse-head--toggle-button {
  @apply ml-4;
}

.lc-collapse-head--toggle-button-icon {
  @apply text-white;
}

.lc-collapse-head--actions {
  @apply flex items-center;
}

.lc-collapse-body {
  @apply px-9 py-5;
}
</style>
