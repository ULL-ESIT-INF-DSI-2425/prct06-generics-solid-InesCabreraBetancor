import { IPublicacionMusical } from "./PublicacionMusical";

export class Discografia<T extends IPublicacionMusical> {
  private _publicaciones: T[] = [];

  agregarPublicacion(publicacion: T): void {
    this._publicaciones.push(publicacion);
  }

  get publicaciones(): T[] {
    return this._publicaciones;
  }
}
