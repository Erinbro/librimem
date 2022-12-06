export interface IAuthor {
  id?: number;
  author_prename: string;
  author_name: string;
  /**
   * IDs of books from the author
   */
  books: number[];
}
