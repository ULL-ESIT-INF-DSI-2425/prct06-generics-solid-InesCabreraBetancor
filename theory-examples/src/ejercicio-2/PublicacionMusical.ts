import { Cancion } from "./Cancion";

export interface IPublicacionMusical {
  nombre: string;
  publicacion: number;
  getDuracionTotal(): number;
  getReproduccionesTotales(): number;
}

export abstract class PublicacionMusical implements IPublicacionMusical {
  constructor(
    protected _nombre: string,
    protected _publicacion: number,
    protected _canciones: Cancion[]
  ) {}

  get nombre(): string {
    return this._nombre;
  }

  get publicacion(): number {
    return this._publicacion;
  }

  get canciones(): Cancion[] {
    return this._canciones;
  }

  getDuracionTotal(): number {
    return this._canciones.reduce((total, cancion) => total + cancion.duracion, 0);
  }

  getReproduccionesTotales(): number {
    return this._canciones.reduce((total, cancion) => total + cancion.reproducciones, 0);
  }
}
