import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChapterPageComponent } from './chapter-page.component';

export default {
  title: 'ChapterPageComponent',
  component: ChapterPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChapterPageComponent>;

const Template: Story<ChapterPageComponent> = (args: ChapterPageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
