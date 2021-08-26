import LcButton from '../LcButton'
import LcAccordion from './LcAccordion'

export default {
  title: 'Example/LcCollapse',
  component: LcAccordion,
}

const Template = (args: any) => ({
  components: { LcAccordion, LcButton },
  setup() {
    return { args }
  },
  template: `
    <lc-accordion v-bind="args">
      <template #body>
        Mon contenu
      </template>
    </lc-accordion>
  `,
})

const TemplateSlotActionsAfter = (args: any) => ({
  components: { LcAccordion, LcButton },
  setup() {
    return { args }
  },
  template: `
    <lc-accordion v-bind="args">
      <template #actions-after>
        <lc-button>button after</lc-button>
      </template>
      <template #body>
        Mon contenu
      </template>
    </lc-accordion>
  `,
})

const TemplateSlotActionsBefore = (args: any) => ({
  components: { LcAccordion, LcButton },
  setup() {
    return { args }
  },
  template: `
    <lc-accordion v-bind="args">
      <template #actions-before>
        <lc-button>button before</lc-button>
      </template>
      <template #body>
        Mon contenu
      </template>
    </lc-accordion>
  `,
})

export const Base = Template.bind({}) as any
Base.args = {
  title: '1. Informations maison',
  modelValue: true,
}

export const HaveToogle = Template.bind({}) as any
HaveToogle.args = {
  ...Base.args,
  haveToggle: true,
}

export const HaveToogleButClose = Template.bind({}) as any
HaveToogleButClose.args = {
  ...HaveToogle.args,
  modelValue: false,
}

export const HaveButtonRight = TemplateSlotActionsAfter.bind({}) as any
HaveButtonRight.args = {
  title: '1. Informations maison',
  modelValue: true,
}

export const HaveButtonRightAndToggle = TemplateSlotActionsAfter.bind({}) as any
HaveButtonRightAndToggle.args = {
  ...HaveButtonRight.args,
  haveToggle: true,
}

export const HaveButtonLeft = TemplateSlotActionsBefore.bind({}) as any
HaveButtonLeft.args = {
  title: '1. Informations maison',
  modelValue: true,
}

export const HaveButtonLeftAndToggle = TemplateSlotActionsBefore.bind({}) as any
HaveButtonLeftAndToggle.args = {
  ...HaveButtonLeft.args,
  haveToggle: true,
}
