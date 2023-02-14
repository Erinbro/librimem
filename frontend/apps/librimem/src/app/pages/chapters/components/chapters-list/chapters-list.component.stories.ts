import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChaptersListComponent } from './chapters-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Mock } from '../../../../utils/testing/Mock.testing';
import { chapters } from "../../../../../assets/data"
import { arrayToEntities } from '../../../../utils/arrayToEntities';

const initialState = Mock.mockGlobalStore();
initialState.chapter.data = arrayToEntities(chapters.chapters)

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
  moduleMetadata: {
    imports: [],
    providers: [provideMockStore({ initialState })]
  }
});

export const Primary = Template.bind({});
Primary.args = {};
