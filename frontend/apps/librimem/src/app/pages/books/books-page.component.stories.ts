import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BooksPageComponent } from './books-page.component';

export default {
  title: 'BooksPageComponent',
  component: BooksPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BooksPageComponent>;

const Template: Story<BooksPageComponent> = (args: BooksPageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
