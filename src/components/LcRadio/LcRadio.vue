<template>
  <!-- <div :class="inputClass"> -->
  <!-- <slot name="label"> -->
  <label :for="$attrs.id">
    <input
      :id="$attrs.id"
      type="radio"
      :checked="modelValue === value"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      @change="onChange"
    >
    <span class="radio" />
    {{ label }}
  </label>
  <!-- </slot> -->
  <error-message :name="name" as="span" class="lc-input--error" />
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ErrorMessage, useField } from 'vee-validate'

export default defineComponent({
  name: 'LcRadio',
  components: {
    ErrorMessage,
  },
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    // inputClass: {
    //   type: String,
    //   default: 'w-full mb-4',
    // },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [Number, String],
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },
  emits: ['update:modelValue', 'focus-out'],
  setup(props, { emit }) {
    // const {
    //   value: inputValue,
    //   handleChange,
    //   errors,
    // } = useField<number|string>(props.name, props.rules, {
    //   initialValue: props.modelValue,
    // })

    // const isError = computed(() => Boolean(errors.value.length))
    // return {
    //   inputValue,
    //   handleChange,
    //   isError,
    // }

    function onChange(event: Event & { target: HTMLInputElement }): void {
      // handleChange(event)
      emit('update:modelValue', event.target.value)
    }

    return {
      onChange,
    }
  },
})
</script>
