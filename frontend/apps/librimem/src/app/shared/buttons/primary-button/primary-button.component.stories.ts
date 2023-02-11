import { PrimaryButtonComponent } from './primary-button.component';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
export default {
  title: "PrimaryButtonComponent",
  component: PrimaryButtonComponent,
  decorators: [
    moduleMetadata({
    })
  ]
} as Meta<PrimaryButtonComponent>

const Template: Story<PrimaryButtonComponent> = (args: PrimaryButtonComponent) => ({
  props: args
})

export const Primary = Template.bind({})
Primary.args = {}
