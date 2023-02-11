import { DeleteButtonComponent } from './delete-button.component';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
export default {
  title: "DeleteButton",
  component: DeleteButtonComponent,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ]
} as Meta<DeleteButtonComponent>

const Template: Story<DeleteButtonComponent> = (args: DeleteButtonComponent) => ({
  props: args
})

export const Primary = Template.bind({})
Primary.args = {}
