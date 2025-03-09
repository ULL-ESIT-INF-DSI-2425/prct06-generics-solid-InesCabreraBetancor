import { StreamableItem } from "./streamableItem";

export class Series implements StreamableItem {
  constructor(
    public title: string,
    public year: number,
    public duration: number, // Duración promedio de los episodios
    public seasons: number,
    public genre: string
  ) {}
}
