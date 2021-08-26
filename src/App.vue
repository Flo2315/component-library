<template>
  <div>Import your component</div>
  <lc-accordion
    v-model="open"
    title="1. Informations maison"
    :have-toggle="true"
  >
    <template #actions-after>
      <lc-button
        variant="link"
        data-testid="base-collapse__button"
      >
        bouton 1
      </lc-button>
    </template>
    <template #body>
      <div>mon contenu</div>
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
    </template>
  </lc-accordion>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LcButton from './components/LcButton'
import LcAccordion from './components/LcAccordion'

export default defineComponent({
  name: 'App',
  components: {
    LcButton,
    LcAccordion,
  },
  data() {
    return {
      open: true,
    }
  },
})
</script>
