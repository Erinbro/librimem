import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DrawerIconComponent } from './drawer-icon.component';

export default {
  title: 'DrawerIconComponent',
  component: DrawerIconComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<DrawerIconComponent>;

const Template: Story<DrawerIconComponent> = (args: DrawerIconComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
