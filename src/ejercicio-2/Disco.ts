import { PublicacionMusical } from "./PublicacionMusical";
import { Cancion } from "./Cancion";

export class Disco extends PublicacionMusical {
  constructor(nombre: string, publicacion: number, canciones: Cancion[]) {
    super(nombre, publicacion, canciones);
  }
}
