import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ReaderPageComponent } from './reader-page.component';

export default {
  title: 'ReaderPageComponent',
  component: ReaderPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ReaderPageComponent>;

const Template: Story<ReaderPageComponent> = (args: ReaderPageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
