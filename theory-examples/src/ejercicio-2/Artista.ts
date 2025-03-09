import { Disco } from "./Disco";
import { Single } from "./Single";
import { Discografia } from "./Discografia";

export class Artista {
  private _discografia: Discografia<Disco | Single>;

  constructor(private _nombre: string, private _numOyentes: number) {
    this._discografia = new Discografia<Disco | Single>();
  }

  get nombre(): string {
    return this._nombre;
  }

  get numOyentes(): number {
    return this._numOyentes;
  }

  get discografia(): Discografia<Disco | Single> {
    return this._discografia;
  }

  agregarPublicacion(publicacion: Disco | Single): void {
    this._discografia.agregarPublicacion(publicacion);
  }
}
