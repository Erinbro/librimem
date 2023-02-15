import { db } from '../storage';
import { IFlashcard } from '@librimem/api-interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class FlashcardStorageApi {
  private flashcardStorage = db.flashcards

  public async addFlashcard(flashcard: IFlashcard): Promise<IFlashcard> {
    const savedFlashcardId = await this.flashcardStorage.add(flashcard)
    const savedFlashcard = await this.flashcardStorage.get(savedFlashcardId)
    return savedFlashcard as IFlashcard
  }

  public async getFlashcards(entityId: number, chapterId?: number): Promise<IFlashcard[]> {
    const flashcards = await this.flashcardStorage.where("entityId").equals(entityId).toArray()
    return flashcards
  }

  public async getFlashcard(entityId: number, flashcardId: number): Promise<IFlashcard> {
    const flashcard = await this.flashcardStorage.get(flashcardId)
    return flashcard as IFlashcard
  }

  public async updateFlashcard(flashcard: IFlashcard): Promise<IFlashcard> {
    await this.flashcardStorage.delete(flashcard.id)
    const updatedFlashcardId = await this.flashcardStorage.add(flashcard)
    const updatedFlashcard = await this.flashcardStorage.get(updatedFlashcardId)
    return updatedFlashcard as IFlashcard
  }

  public async deleteFlashcard(id: number) {
    const deletedFlashcard = await this.flashcardStorage.get(id)
    if (!deletedFlashcard) return
    await this.flashcardStorage.delete(id)
    return deletedFlashcard as IFlashcard
  }

  public async deleteFlashcards(entityId: number, chapterId?: number) {
    let deletedFlashcards

    if (chapterId) {
      deletedFlashcards = await this.flashcardStorage
        .where({ entityId, chapterId })
        .toArray()

      await this.flashcardStorage
        .where({ entityId, chapterId })
        .delete()
    }
    else {
      deletedFlashcards = await this.flashcardStorage
        .where({ entityId })
        .toArray()

      await this.flashcardStorage
        .where({ entityId })
        .delete()
    }

    return deletedFlashcards

  }
}
