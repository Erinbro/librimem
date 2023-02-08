import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SummariesPageComponent } from './summaries-page.component';

export default {
  title: 'SummariesPageComponent',
  component: SummariesPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SummariesPageComponent>;

const Template: Story<SummariesPageComponent> = (
  args: SummariesPageComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
