import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documentary } from "./documentary";

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  searchByGenre(topic: string): Documentary[] {
    return this.items.filter(doc => doc.topic.toLowerCase().includes(topic.toLowerCase()));
  }
}
