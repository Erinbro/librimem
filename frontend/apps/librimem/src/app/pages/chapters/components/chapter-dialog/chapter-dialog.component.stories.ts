import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChapterDialogComponent } from './chapter-dialog.component';

export default {
  title: 'ChapterDialogComponent',
  component: ChapterDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChapterDialogComponent>;

const Template: Story<ChapterDialogComponent> = (
  args: ChapterDialogComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
