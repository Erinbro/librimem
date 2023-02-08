import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BookPageComponent } from './book-page.component';

export default {
  title: 'BookPageComponent',
  component: BookPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BookPageComponent>;

const Template: Story<BookPageComponent> = (args: BookPageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
