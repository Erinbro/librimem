import { environment } from './../../../environments/environment';
import { IFlashcard } from '@librimem/api-interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class FlashcardClient {
  url = `${environment.host}:${environment.port}/flashcards`

  constructor(private http: HttpClient) { }

  // CREATE
  public addFlashcard(newFlashcard: IFlashcard) {
    return this.http.post<IFlashcard>(this.url, newFlashcard)
  }

  // READ
  public getFlashcards() {
    return this.http.get<IFlashcard[]>(this.url)
  }

  /**
   * Gets a particular flashcard by its id
   * @param id ID of flashcard
   */
  public getFlashcard(id: number) {
    return this.http.get<IFlashcard>(`${this.url}/${id}`)
  }

  // UPDATE
  public updateFlashcard(updatedFlashcard: IFlashcard) {
    return this.http.put<IFlashcard>(`${this.url}/${updatedFlashcard.id}`, updatedFlashcard)
  }

  // DELETE
  public deleteFlashcard(id: number) {
    return this.http.delete<IFlashcard>(`${this.url}/${id}`)
  }
}
