import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NotePageComponent } from './note-page.component';

export default {
  title: 'NotePageComponent',
  component: NotePageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<NotePageComponent>;

const Template: Story<NotePageComponent> = (args: NotePageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
