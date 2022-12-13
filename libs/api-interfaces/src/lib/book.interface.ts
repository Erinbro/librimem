import { IEntity } from './entity.interface';
/**
 * Interface for the Book
 */
export interface IBook extends IEntity {
  id?: number;
  title: string;
  author_prename: string;
  author_name: string;
  currentPage?: number;
  publishingHose: string;
  // TODO ? time
  language?: string;
  /**
   * A number from 1 to 5
   */
  rating: number;
}

// TODO --> IEntityStatus
enum IBookStatus {
  READ = 'READ',
  READING = 'READING',
  TO_READ = 'TO_READ'
}
