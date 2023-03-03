import { IEntity, IEntityType } from './entity.interface';
/**
 * Interface for the Book
 */
export interface IBook extends IEntity {
  type: string
  title: string;
  /**
   * basae64 data of book
   */
  data?: string;
  /**
   * url ofcover
   */
  cover?: string;
  author_name: string;
  currentPage?: number;
  publishingHouse?: string;
  // TODO ? time
  language?: string;
  /**
   * A number from 1 to 5
   */
  rating?: number;
}

// TODO --> IEntityStatus
enum IBookStatus {
  READ = 'READ',
  READING = 'READING',
  TO_READ = 'TO_READ'
}
