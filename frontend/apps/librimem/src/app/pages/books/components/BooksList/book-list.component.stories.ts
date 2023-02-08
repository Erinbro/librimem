import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BookListComponent } from './book-list.component';

export default {
  title: 'BookListComponent',
  component: BookListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BookListComponent>;

const Template: Story<BookListComponent> = (args: BookListComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
