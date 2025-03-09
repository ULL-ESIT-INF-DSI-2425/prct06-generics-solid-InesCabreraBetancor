import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movie } from "./movies";

export class MovieCollection extends BasicStreamableCollection<Movie> {
  searchByGenre(genre: string): Movie[] {
    return this.items.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  }
}
