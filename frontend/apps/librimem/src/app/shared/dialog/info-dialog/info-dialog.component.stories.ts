import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InfoDialogComponent } from './info-dialog.component';

export default {
  title: 'InfoDialogComponent',
  component: InfoDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<InfoDialogComponent>;

const Template: Story<InfoDialogComponent> = (args: InfoDialogComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
