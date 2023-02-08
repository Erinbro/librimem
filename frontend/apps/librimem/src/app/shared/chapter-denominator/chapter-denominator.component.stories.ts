import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChapterDenominatorComponent } from './chapter-denominator.component';

export default {
  title: 'ChapterDenominatorComponent',
  component: ChapterDenominatorComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChapterDenominatorComponent>;

const Template: Story<ChapterDenominatorComponent> = (
  args: ChapterDenominatorComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
