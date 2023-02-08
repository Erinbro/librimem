import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ReaderInputComponent } from './reader-input.component';

export default {
  title: 'ReaderInputComponent',
  component: ReaderInputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ReaderInputComponent>;

const Template: Story<ReaderInputComponent> = (args: ReaderInputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
