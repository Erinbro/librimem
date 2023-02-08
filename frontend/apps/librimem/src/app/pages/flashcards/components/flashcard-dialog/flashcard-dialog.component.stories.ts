import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FlashcardDialogComponent } from './flashcard-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Flashcard } from '../../../../models/Flashcard';
import { provideMockStore } from '@ngrx/store/testing';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const flashcard = new Flashcard()
flashcard.question = "Super duper question";

const data = { editing: true, selectedFlashcard: flashcard }

export default {
  title: 'FlashcardDialogComponent',
  component: FlashcardDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FlashcardDialogComponent>;

const Template: Story<FlashcardDialogComponent> = (
  args: FlashcardDialogComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [QuillModule, MatDialogModule],
    providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }, provideMockStore()],
    declarations: [FlashcardDialogComponent]
  }
});

export const Primary = Template.bind({});
Primary.args = {};
