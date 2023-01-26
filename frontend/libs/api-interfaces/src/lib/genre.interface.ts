export interface IGenre {
    id?: number;
    name: string;
    /**
     * Reference of the books that belong to this genre
     */
    books?: number[];
    collection?: number[];
}
