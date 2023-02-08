import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChaptersListComponent } from './chapters-list.component';

export default {
  title: 'ChaptersListComponent',
  component: ChaptersListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChaptersListComponent>;

const Template: Story<ChaptersListComponent> = (
  args: ChaptersListComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
