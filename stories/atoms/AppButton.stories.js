import AppButtonComp from '../../components/atoms/AppButton.vue'

export default {
  title: 'Components/Atoms/AppButton.vue',
  component: AppButtonComp,
  argTypes: {
    // text: 'Button',
    // color: '',
  },
}

const AppButton = (_args, { argTypes }) => ({
  components: { AppButtonComp },
  props: Object.keys(argTypes),
  template: `
    <AppButton
      v-bind="$props"
    />
  `,
})

// デフォルト表記
export const Default = AppButton.bind({})
Default.args = {
  ...Default.args,
}
