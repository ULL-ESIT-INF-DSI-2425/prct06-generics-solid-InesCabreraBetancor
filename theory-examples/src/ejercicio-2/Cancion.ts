export type Genero = "Pop" | "Rock" | "Reggaeton" | "Reggae" | "R&B" | "Country" | "HipHop";

export class Cancion {
  constructor(
    private _nombre: string,
    private _duracion: number,
    private _generos: Genero[],
    private _single: boolean,
    private _reproducciones: number = 0
  ) {}

  get nombre(): string {
    return this._nombre;
  }

  get duracion(): number {
    return this._duracion;
  }

  get generos(): Genero[] {
    return this._generos;
  }

  get single(): boolean {
    return this._single;
  }

  get reproducciones(): number {
    return this._reproducciones;
  }

  reproducir(): void {
    this._reproducciones++;
  }
}
