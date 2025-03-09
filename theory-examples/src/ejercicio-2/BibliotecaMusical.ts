import { Artista } from "./Artista";
import { Disco } from "./Disco";
import { Single } from "./Single";
import { Cancion } from "./Cancion";

export class BibliotecaMusical {
  private artistas: Artista[] = [];

  agregarArtista(artista: Artista): void {
    this.artistas.push(artista);
  }

  buscarArtista(nombre: string): Artista | undefined {
    return this.artistas.find(artista => artista.nombre.toLowerCase() === nombre.toLowerCase());
  }

  buscarPublicacion(nombre: string): Disco | Single | undefined {
    for (const artista of this.artistas) {
      const publicacion = artista.discografia.publicaciones.find(pub => pub.nombre.toLowerCase() === nombre.toLowerCase());
      if (publicacion) return publicacion;
    }
    return undefined;
  }

  mostrarBiblioteca(): void {
    console.table(this.artistas.map(artista => ({
      Nombre: artista.nombre,
      Oyentes: artista.numOyentes,
      Publicaciones: artista.discografia.publicaciones.length
    })));
  }
}
