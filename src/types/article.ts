export interface IArticle {
  id?: string;
  name?: string;
  callback: (value: any[]) => void;
}
