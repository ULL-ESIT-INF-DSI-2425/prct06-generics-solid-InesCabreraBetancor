import { StreamableItem } from "./streamableItem";

export class Movie implements StreamableItem {
  constructor(
    public title: string,
    public year: number,
    public duration: number,
    public genre: string
  ) {}
}
