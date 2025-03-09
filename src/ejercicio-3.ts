/**
 * VERSION MEJORADA DEL CODIGO APORTADO EN EL EJERCICIO 3
 * DE LA PRACTICA 3 DE DSI
 */

import * as fs from "fs";

export interface IFileHandler {
  read(): string;
  write(data: string): void;
}

export class FileSystemHandler implements IFileHandler {
  constructor(private filePath: string) {}

  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      Logger.log("Error al leer el archivo");
      return "";
    }
  }

  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      Logger.log("Archivo escrito exitosamente.");
    } catch (error) {
      Logger.log("Error al escribir en el archivo");
    }
  }
}

export class Logger {
  static log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

export class FileManager {
  constructor(private fileHandler: IFileHandler) {}

  public readFile(): string {
    return this.fileHandler.read();
  }

  public writeFile(data: string): void {
    this.fileHandler.write(data);
  }
}
