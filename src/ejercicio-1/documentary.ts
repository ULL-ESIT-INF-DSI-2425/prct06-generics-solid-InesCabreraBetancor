import { StreamableItem } from "./streamableItem";

export class Documentary implements StreamableItem {
  constructor(
    public title: string,
    public year: number,
    public duration: number,
    public topic: string
  ) {}
}
