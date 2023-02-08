import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FlashcardsTableComponent } from './flashcards-table.component';

export default {
  title: 'FlashcardsTableComponent',
  component: FlashcardsTableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FlashcardsTableComponent>;

const Template: Story<FlashcardsTableComponent> = (
  args: FlashcardsTableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
