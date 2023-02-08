import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DeleteDialogComponent } from './delete-dialog.component';

export default {
  title: 'DeleteDialogComponent',
  component: DeleteDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<DeleteDialogComponent>;

const Template: Story<DeleteDialogComponent> = (
  args: DeleteDialogComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
