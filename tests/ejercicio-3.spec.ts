import { describe, test, expect, vi } from "vitest";
import { FileManager } from "../src/ejercicio-3";
import { IFileHandler } from "../src/ejercicio-3";
import { Logger } from "../src/ejercicio-3";

vi.spyOn(Logger, "log").mockImplementation(() => {});

describe("FileManager", () => {
  test("debe leer un archivo correctamente", () => {
    const mockFileHandler: IFileHandler = {
      read: vi.fn().mockReturnValue("Contenido de prueba"),
      write: vi.fn()
    };
    const fileManager = new FileManager(mockFileHandler);

    expect(fileManager.readFile()).toBe("Contenido de prueba");
    expect(mockFileHandler.read).toHaveBeenCalled();
  });

  test("debe escribir en un archivo correctamente", () => {
    const mockFileHandler: IFileHandler = {
      read: vi.fn(),
      write: vi.fn()
    };
    const fileManager = new FileManager(mockFileHandler);

    fileManager.writeFile("Nuevo contenido");
    expect(mockFileHandler.write).toHaveBeenCalledWith("Nuevo contenido");
  });
});