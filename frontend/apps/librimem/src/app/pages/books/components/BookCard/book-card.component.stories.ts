import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BookCardComponent } from './book-card.component';

export default {
  title: 'BookCardComponent',
  component: BookCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BookCardComponent>;

const Template: Story<BookCardComponent> = (args: BookCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
