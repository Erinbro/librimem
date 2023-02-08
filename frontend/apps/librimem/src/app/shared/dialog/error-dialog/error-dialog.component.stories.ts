import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ErrorDialogComponent } from './error-dialog.component';

export default {
  title: 'ErrorDialogComponent',
  component: ErrorDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ErrorDialogComponent>;

const Template: Story<ErrorDialogComponent> = (args: ErrorDialogComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
