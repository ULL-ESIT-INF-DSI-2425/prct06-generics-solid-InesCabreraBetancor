import { Streamable } from "./streamable";
import { StreamableItem } from "./streamableItem";

export abstract class BasicStreamableCollection<T extends StreamableItem> implements Streamable<T> {
  protected items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  searchByTitle(title: string): T[] {
    return this.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByYear(year: number): T[] {
    return this.items.filter(item => item.year === year);
  }

  abstract searchByGenre(genre: string): T[];
}
