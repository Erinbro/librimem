import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { InfoButtonComponent } from './info-button.component';
export default {
  title: "InfoButtonComponent",
  decorators: [
    moduleMetadata({})
  ]
} as Meta<InfoButtonComponent>

const Template: Story<InfoButtonComponent> = (args: InfoButtonComponent) => ({
  props: args
})

export const Primary = Template.bind({})
Primary.args = {}
