import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FlashcardCardComponent } from './flashcard-card.component';

export default {
  title: 'FlashcardCardComponent',
  component: FlashcardCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FlashcardCardComponent>;

const Template: Story<FlashcardCardComponent> = (
  args: FlashcardCardComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
