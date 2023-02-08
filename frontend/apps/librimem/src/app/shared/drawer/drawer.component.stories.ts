import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DrawerComponent } from './drawer.component';

export default {
  title: 'DrawerComponent',
  component: DrawerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<DrawerComponent>;

const Template: Story<DrawerComponent> = (args: DrawerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
