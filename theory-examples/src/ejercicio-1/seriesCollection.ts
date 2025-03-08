import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Series } from "./series";

export class SeriesCollection extends BasicStreamableCollection<Series> {
  searchByGenre(genre: string): Series[] {
    return this.items.filter(series => series.genre.toLowerCase() === genre.toLowerCase());
  }
}
