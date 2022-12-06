import { ISubject } from "./subject.interface";

/**
 * Interface for the Book
 */
export interface IBook {
  id?: number;
  title: string;
  author_prename: string;
  author_name: string;
  status: IBookStatus
  /**
   * Amount of pages
   */
  pages?: number;
  currentPage?: number;
  /**
   * Result of (currentPage / pages * 100)
   */
  progress: number
  publishingHose: string;
  // TODO ? time
  language?: string;
  favorite: boolean;
  subjects: ISubject[];
  opinion: string;
  /**
   * A number from 1 to 5
   */
  rating: number;
}

enum IBookStatus {
  READ = 'READ',
  READING = 'READING',
  TO_READ = 'TO_READ'
}
