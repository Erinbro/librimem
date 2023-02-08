import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChaptersPageComponent } from './chapters-page.component';

export default {
  title: 'ChaptersPageComponent',
  component: ChaptersPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ChaptersPageComponent>;

const Template: Story<ChaptersPageComponent> = (
  args: ChaptersPageComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
