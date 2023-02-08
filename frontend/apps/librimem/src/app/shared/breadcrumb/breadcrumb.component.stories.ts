import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';

export default {
  title: 'BreadcrumbComponent',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BreadcrumbComponent>;

const Template: Story<BreadcrumbComponent> = (args: BreadcrumbComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
