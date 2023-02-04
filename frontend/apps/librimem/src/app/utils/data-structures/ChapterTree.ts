import { IChapter } from '../../../../../../libs/api-interfaces/src/lib/chapter.interface';

export interface IChapterNode {
  data: IChapter;
  /**
   * A child can have as much children as needed
   */
  children: IChapter[] | null;
}

export class ChapterNode implements IChapterNode {
  data: IChapter;
  children: IChapterNode[] | undefined;

  constructor(value: IChapter, children?: IChapterNode[]) {
    this.data = value;
    this.children = children;
  }
}

export interface IChapterTree {
  root: ChapterNode | undefined

  // insert(node: INode<T>): T;
  // delete(nodeId: string | number): T;
  // traverseInOrder(node: INode<T>): void
}

export class ChapterTree implements IChapterTree {
  root: IChapterNode | undefined
}
