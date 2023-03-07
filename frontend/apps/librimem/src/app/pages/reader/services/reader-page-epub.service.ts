import { Injectable } from '@angular/core';
import { ReadableClientService } from '../../../services/http/readable.client.service';

@Injectable()
export class ReaderPageEpubService {
  constructor(
    private readableClientService: ReadableClientService
  ) { }

  getBook(entityId: number) {
    this.readableClientService.getReadable(entityId);
  }
  getBookCover() {
    return;
  }
}
