<template>
  <div class="lc-accordion">
    <div class="lc-accordion-head">
      <div class="lc-accordion-head--before">
        <span v-if="title" class="lc-accordion-head--title">{{ title }}</span>
        <slot name="actions-before" />
      </div>
      <div class="lc-accordion-head--actions">
        <slot name="actions-after" />
        <lc-button
          v-if="haveToggle"
          class="lc-accordion-head--toggle-button"
          variant="icon"
          size="xs"
          @click="toggle"
        >
          <slot name="button-toggle-icon">
            <lc-icon
              class="lc-accordion-head--toggle-button-icon"
              :name="modelValue ? 'bottom-chevron' : 'top-chevron'"
              size="xxs"
            />
          </slot>
        </lc-button>
      </div>
    </div>

    <transition
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div
        v-show="modelValue"
        ref="lc-accordion-body"
        class="lc-accordion-body"
        :style="containerStyle"
      >
        <div ref="wrapper" class="lc-accordion-body--wrapper">
          <slot name="body" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import LcButton from '../LcButton'
import LcIcon from '../LcIcon'

export default defineComponent({
  components: {
    LcButton,
    LcIcon,
  },
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
    duration: {
      type: Number,
      default: 250,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    containerStyle() {
      return {
        transitionDuration: `${this.duration}ms`,
      }
    },
  },
  mounted() {
    if (this.modelValue) {
      const el = this.$refs['lc-accordion-body']
      this.setContainerHeight('auto', el)
    }
  },
  methods: {
    getContentHeight() {
      const wrapper = this.$refs.wrapper
      return wrapper?.getBoundingClientRect().height || 0
    },
    onEnter(el) {
      this.setContainerHeight(this.getContentHeight(), el)
    },
    onAfterEnter(el) {
      this.setContainerHeight('auto', el)
    },
    onBeforeLeave(el) {
      this.setContainerHeight(this.getContentHeight(), el)
    },
    onLeave(el) {
      this.setContainerHeight(0, el)
    },
    setContainerHeight(height, el) {
      el.style.height = typeof height === 'number' ? `${height}px` : height
    },
    toggle() {
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
})
</script>

<style lang="css">
.lc-accordion {
  @apply bg-white shadow-md;
}

.lc-accordion-head {
  @apply px-9 py-5 border-b border-gray-300 flex items-center justify-between;
}
.lc-accordion-head--title {
  @apply text-xl font-medium;
}
.lc-accordion-head--toggle-button {
  @apply ml-4;
}
.lc-accordion-head--toggle-button-icon {
  @apply text-white;
}
.lc-accordion-head--actions {
  @apply flex items-center;
}

.lc-accordion-body {
   @apply overflow-hidden h-0 ease-in-out transition-height;
}
.lc-accordion-body--wrapper {
  @apply px-9 py-5 w-full;
}
</style>
