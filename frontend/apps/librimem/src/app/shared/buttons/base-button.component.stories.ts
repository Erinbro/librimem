import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { BaseButtonComponent } from './base-button.component';
export default {
  title: "PrimaryButtonComponent",
  component: BaseButtonComponent,
  decorators: [
    moduleMetadata({
    })
  ]
} as Meta<BaseButtonComponent>

const Template: Story<BaseButtonComponent> = (args: BaseButtonComponent) => ({
  props: args
})

export const Primary = Template.bind({})
Primary.args = {}
