import { describe, test, expect, beforeEach } from "vitest";
import { Movie } from "../src/ejercicio-1/movies";
import { Series } from "../src/ejercicio-1/series";
import { Documentary } from "../src/ejercicio-1/documentary";
import { MovieCollection } from "../src/ejercicio-1/movieCollection";
import { SeriesCollection } from "../src/ejercicio-1/seriesCollection";
import { DocumentaryCollection } from "../src/ejercicio-1/documentaryCollection";

describe("Streaming Collections", () => {
  let movieCollection: MovieCollection;
  let seriesCollection: SeriesCollection;
  let documentaryCollection: DocumentaryCollection;

  beforeEach(() => {
    movieCollection = new MovieCollection();
    seriesCollection = new SeriesCollection();
    documentaryCollection = new DocumentaryCollection();
  });

  describe("MovieCollection", () => {
    test("should add a movie", () => {
      const movie = new Movie("Inception", 2010, 148, "Sci-Fi");
      movieCollection.addItem(movie);
      expect(movieCollection.getAll()).toContain(movie);
    });

    test("should search movies by title", () => {
      movieCollection.addItem(new Movie("Star Wars", 2010, 148, "Sci-Fi"));
      movieCollection.addItem(new Movie("Interstellar", 2014, 169, "Sci-Fi"));

      const result = movieCollection.searchByTitle("Interstellar");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Interstellar");
    });

    test("should search movies by year", () => {
      movieCollection.addItem(new Movie("Inception", 2010, 148, "Sci-Fi"));
      movieCollection.addItem(new Movie("Interstellar", 2014, 169, "Sci-Fi"));

      const result = movieCollection.searchByYear(2010);
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Inception");
    });

    test("should search movies by genre", () => {
      movieCollection.addItem(new Movie("Inception", 2010, 148, "Sci-Fi"));
      movieCollection.addItem(new Movie("The Godfather", 1972, 175, "Crime"));

      const result = movieCollection.searchByGenre("Sci-Fi");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Inception");
    });
  });

  describe("SeriesCollection", () => {
    test("should add a series", () => {
      const series = new Series("Breaking Bad", 2008, 47, 5, "Crime");
      seriesCollection.addItem(series);
      expect(seriesCollection.getAll()).toContain(series);
    });

    test("should search series by title", () => {
      seriesCollection.addItem(new Series("Breaking Bad", 2008, 47, 5, "Crime"));
      seriesCollection.addItem(new Series("Stranger Things", 2016, 50, 4, "Sci-Fi"));

      const result = seriesCollection.searchByTitle("Stranger Things");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Stranger Things");
    });

    test("should search series by year", () => {
      seriesCollection.addItem(new Series("Breaking Bad", 2008, 47, 5, "Crime"));
      seriesCollection.addItem(new Series("Stranger Things", 2016, 50, 4, "Sci-Fi"));

      const result = seriesCollection.searchByYear(2008);
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Breaking Bad");
    });

    test("should search series by genre", () => {
      seriesCollection.addItem(new Series("Breaking Bad", 2008, 47, 5, "Crime"));
      seriesCollection.addItem(new Series("Stranger Things", 2016, 50, 4, "Sci-Fi"));

      const result = seriesCollection.searchByGenre("Crime");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Breaking Bad");
    });
  });

  describe("DocumentaryCollection", () => {
    test("should add a documentary", () => {
      const doc = new Documentary("Planet Earth", 2006, 550, "Nature");
      documentaryCollection.addItem(doc);
      expect(documentaryCollection.getAll()).toContain(doc);
    });

    test("should search documentaries by title", () => {
      documentaryCollection.addItem(new Documentary("Planet Earth", 2006, 550, "Nature"));
      documentaryCollection.addItem(new Documentary("Inside Job", 2010, 109, "Finance"));

      const result = documentaryCollection.searchByTitle("Inside Job");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Inside Job");
    });

    test("should search documentaries by year", () => {
      documentaryCollection.addItem(new Documentary("Planet Earth", 2006, 550, "Nature"));
      documentaryCollection.addItem(new Documentary("Inside Job", 2010, 109, "Finance"));

      const result = documentaryCollection.searchByYear(2006);
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Planet Earth");
    });

    test("should search documentaries by topic", () => {
      documentaryCollection.addItem(new Documentary("Planet Earth", 2006, 550, "Nature"));
      documentaryCollection.addItem(new Documentary("Inside Job", 2010, 109, "Finance"));

      const result = documentaryCollection.searchByGenre("Finance");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Inside Job");
    });
  });
});