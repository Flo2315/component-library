<template>
  <div>Import your component</div>
  <lc-form
    :button-primary="buttonPrimary"
    :fields="dataFields"
    id-form="loginForm"
    @on-submit="submit"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LcForm from '../src/components/LcForm.vue'

export default defineComponent({
  name: 'App',
  components: { LcForm },
  data() {
    return {
      dataFields: [
        {
          model: '',
          inputType: 'radio',
          attr: {
            name: 'fruits',
          },
          options: [
            { label: 'Banana', value: 'banana', disabled: true, id: 'banana' },
            { label: 'Mongo', value: 'mongo', id: 'mongo' },
            { label: 'Blueberry', value: 'blueberry', id: 'blueberry' },
          ],
        },
        {
          model: '',
          inputType: 'input',
          attr: {
            autocomplete: 'current-password',
            inputClass: 'w-full lc-col mb-4',
            label: 'Firstname',
            name: 'password',
            rules: 'required',
            type: 'password',
          },
        },
      ],
      buttonPrimary: {
        attrs: {
          color: 'secondary',
          class: 'btn-primary',
        },
        full: true,
        text: 'submit',
      },
    }
  },
  methods: {
    submit() {
      console.log('submit')
    },
  },
})
</script>
