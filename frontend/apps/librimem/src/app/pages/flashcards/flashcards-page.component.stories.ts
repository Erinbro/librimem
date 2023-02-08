import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FlashcardsPageComponent } from './flashcards-page.component';

export default {
  title: 'FlashcardsPageComponent',
  component: FlashcardsPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FlashcardsPageComponent>;

const Template: Story<FlashcardsPageComponent> = (
  args: FlashcardsPageComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
