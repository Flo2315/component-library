<template>
  <div :class="inputClass">
    <lc-radio
      v-for="option in options"
      :key="option.value"
      :model-value="modelValue"
      :name="name"
      v-bind="{...option}"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LcRadio from './LcRadio.vue'

export default defineComponent({
  name: 'LcRadioGroup',
  components: { LcRadio },
  props: {
    inputClass: {
      type: String,
      default: 'w-full flex mb-4',
    },
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  emits: ['update:modelValue'],
})
</script>
