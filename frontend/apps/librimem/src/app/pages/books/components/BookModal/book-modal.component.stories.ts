import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BookModalComponent } from './book-modal.component';

export default {
  title: 'BookModalComponent',
  component: BookModalComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BookModalComponent>;

const Template: Story<BookModalComponent> = (args: BookModalComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
