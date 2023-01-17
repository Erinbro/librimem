import { Injectable } from '@angular/core';
import { ChapterPageComponent } from '../../pages/chapter/chapter-page.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IChapter } from '@librimem/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ChapterClient {

  options = {

  }
  host = environment.production ? "PRODUCTION" : "DEVELOPMENT"

  constructor(private http: HttpClient) { }

  /**
   * Adds a new chapter
   * @param bookId
   * @param newChapter
   */
  public async addChapter(bookId: number, newChapter: IChapter) {
    return this.http.post(`${this.host}/book/chapter/${bookId}`, newChapter)
  }
  /**
   * Gets all chapters of a book
   * @param bookId
   */
  public getChapters(bookId: number): Observable<IChapter[]> {
    return this.http.get(`${this.host}/book/chapter`) as Observable<IChapter[]>
  }
  public async getChapter() { }
  public async updateChapter() { }
  public async deleteChapter() { }
}
