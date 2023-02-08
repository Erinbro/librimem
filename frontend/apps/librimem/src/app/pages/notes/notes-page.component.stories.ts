import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NotesPageComponent } from './notes-page.component';

export default {
  title: 'NotesPageComponent',
  component: NotesPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<NotesPageComponent>;

const Template: Story<NotesPageComponent> = (args: NotesPageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
