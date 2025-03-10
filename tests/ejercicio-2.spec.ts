import { describe, test, expect, beforeEach } from "vitest";
import { Cancion } from "../src/ejercicio-2/Cancion";
import { Disco } from "../src/ejercicio-2/Disco";
import { Single } from "../src/ejercicio-2/Single";
import { Artista } from "../src/ejercicio-2/Artista";
import { BibliotecaMusical } from "../src/ejercicio-2/BibliotecaMusical";

let cancion1: Cancion, cancion2: Cancion, cancion3: Cancion;
let disco: Disco, single: Single;
let artista: Artista;
let biblioteca: BibliotecaMusical;

beforeEach(() => {
  cancion1 = new Cancion("Song A", 180, ["Rock"], false);
  cancion2 = new Cancion("Song B", 210, ["Pop"], false);
  cancion3 = new Cancion("Song C", 200, ["Rock"], true);
  disco = new Disco("Best Hits", 2020, [cancion1, cancion2]);
  single = new Single("Song C - Single", 2021, cancion3);
  artista = new Artista("Band X", 50000);
  artista.agregarPublicacion(disco);
  artista.agregarPublicacion(single);
  biblioteca = new BibliotecaMusical();
  biblioteca.agregarArtista(artista);
});

describe("Cancion", () => {
  test("debe crear una canción con los valores correctos", () => {
    expect(cancion1.nombre).toBe("Song A");
    expect(cancion1.duracion).toBe(180);
    expect(cancion1.generos).toEqual(["Rock"]);
    expect(cancion1.single).toBe(false);
    expect(cancion1.reproducciones).toBe(0);
  });

  test("debe aumentar el número de reproducciones", () => {
    cancion1.reproducir();
    expect(cancion1.reproducciones).toBe(1);
  });
});

describe("Disco", () => {
  test("debe calcular la duración total correctamente", () => {
    expect(disco.getDuracionTotal()).toBe(390);
  });

  test("debe calcular las reproducciones totales correctamente", () => {
    cancion1.reproducir();
    cancion2.reproducir();
    expect(disco.getReproduccionesTotales()).toBe(2);
  });
});

describe("Single", () => {
  test("debe contener solo una canción", () => {
    expect(single.canciones.length).toBe(1);
  });
});

describe("Artista", () => {
  test("debe tener un nombre y un número de oyentes", () => {
    expect(artista.nombre).toBe("Band X");
    expect(artista.numOyentes).toBe(50000);
  });

  test("debe permitir agregar publicaciones", () => {
    expect(artista.discografia.publicaciones.length).toBe(2);
  });
});

describe("BibliotecaMusical", () => {
  test("debe agregar y encontrar un artista", () => {
    expect(biblioteca.buscarArtista("Band X")).toBeDefined();
  });

  test("debe buscar publicaciones correctamente", () => {
    expect(biblioteca.buscarPublicacion("Best Hits")).toBeDefined();
    expect(biblioteca.buscarPublicacion("Song C - Single")).toBeDefined();
  });
});
