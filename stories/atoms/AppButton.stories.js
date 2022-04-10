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
      v-bind="$props"
    />
  `,
})

// デフォルト表記
export const Default = AppButton.bind({})
Default.args = {
  ...Default.args,
}

// ボタンを赤くする
export const Red = AppButton.bind({})
Red.args = {
  text: 'RED',
  color: 'red',
}

// ボタンを赤くする
export const Blue = AppButton.bind({})
Blue.args = {
  text: 'Blue',
  color: 'blue',
}
