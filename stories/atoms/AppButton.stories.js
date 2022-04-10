import AppButtonComp from '@/components/atoms/AppButton'

export default {
  title: 'Components/Atoms/AppButton.vue',
  component: AppButtonComp,
}

const AppButton = (_args, { argTypes }) => ({
  components: { AppButtonComp },
  props: Object.keys(argTypes),
  template: `
    <AppButton
    />
  `,
})

// デフォルト表記
export const Default = AppButton.bind({})
Default.args = {
  ...Default.args,
}
