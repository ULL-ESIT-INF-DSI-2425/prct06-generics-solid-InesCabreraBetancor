import { PublicacionMusical } from "./PublicacionMusical";
import { Cancion } from "./Cancion";

export class Single extends PublicacionMusical {
  constructor(nombre: string, publicacion: number, cancion: Cancion) {
    super(nombre, publicacion, [cancion]);
  }
}
