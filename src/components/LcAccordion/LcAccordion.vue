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
        v-if="modelValue"
        ref="wrapper"
        class="lc-accordion-body"
        :style="wrapperStyle"
      >
        <div ref="inner" class="lc-accordion-body__inner">
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
      required: true,
    },
    duration: {
      type: Number,
      default: 250,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    wrapperStyle() {
      return {
        transitionDuration: `${this.duration}ms`,
      }
    },
  },
  mounted() {
    if (this.modelValue)
      this.setWrapperHeightTo('auto')
  },
  methods: {
    toggle() {
      this.$emit('update:modelValue', !this.modelValue)
    },
    onEnter(el) {
      this.setWrapperHeightTo(this.getContentHeight(), el)
    },
    onAfterEnter(el) {
      this.setWrapperHeightTo('auto', el)
    },
    onBeforeLeave(el) {
      this.setWrapperHeightTo(this.getContentHeight(), el)
    },
    onLeave(el) {
      // el.scrollHeight
      this.setWrapperHeightTo(0, el)
    },
    getContentHeight() {
      const inner = this.$refs.inner
      return inner?.getBoundingClientRect()?.height || 0
    },
    /**
     * @param {number | 'auto'} height
     */
    setWrapperHeightTo(height, el = this.$refs.wrapper) {
      el.style.height = typeof height === 'number' ? `${height}px` : height
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
  height: 0;
  overflow: hidden;
  transition-timing-function: ease;
  transition-property: height;
}
.lc-accordion-body__inner {
  @apply px-9 py-5;
  display: table;
  width :100%;
}
</style>
