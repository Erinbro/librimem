import { Component, Input } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';

@Component({
  selector: 'librimem-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.scss'],
})
export class ChapterCardComponent {
  @Input() chapter!: IChapter

  navigateToChapterPage() {

  }

}
