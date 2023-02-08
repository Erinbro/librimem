import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChapterCardComponent } from './chapter-card.component';

export default {
  title: 'ChapterCardComponent',
  component: ChapterCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChapterCardComponent>;

const Template: Story<ChapterCardComponent> = (args: ChapterCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
