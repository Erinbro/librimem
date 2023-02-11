import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DrawerComponent } from './drawer.component';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerIconComponent } from './components/drawer-icon/drawer-icon.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Mock } from '../../utils/testing/Mock.testing';
import { Book } from '../../models/Book';
import { Flashcard } from '../../models/Flashcard';
import { Chapter } from '../../models/chapter.model';

const initialState = Mock.mockGlobalStore()
const book = new Book();
const flashcard = new Flashcard()
const chapter = new Chapter()



export default {
  title: 'DrawerComponent',
  component: DrawerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSidenav],
      declarations: [DrawerIconComponent],
      providers: [provideMockStore({ initialState })]

    }),
  ],
} as Meta<DrawerComponent>;

const Template: Story<DrawerComponent> = (args: DrawerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
