import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { WordsPageComponent } from './words-page.component';

export default {
  title: 'WordsPageComponent',
  component: WordsPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<WordsPageComponent>;

const Template: Story<WordsPageComponent> = (args: WordsPageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
