export interface Streamable<T> {
  addItem(item: T): void;
  getAll(): T[];
  searchByTitle(title: string): T[];
  searchByYear(year: number): T[];
}
