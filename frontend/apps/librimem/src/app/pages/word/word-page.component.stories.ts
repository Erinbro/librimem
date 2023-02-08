import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { WordPageComponent } from './word-page.component';

export default {
  title: 'WordPageComponent',
  component: WordPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<WordPageComponent>;

const Template: Story<WordPageComponent> = (args: WordPageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
