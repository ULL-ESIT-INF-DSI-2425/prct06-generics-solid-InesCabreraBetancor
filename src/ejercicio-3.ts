/**
 * VERSION MEJORADA DEL CODIGO APORTADO EN EL EJERCICIO 3
 * DE LA PRACTICA 3 DE DSI
 */

import * as fs from "fs";

interface IFileHandler {
  read(): string;
  write(data: string): void;
}

class FileSystemHandler implements IFileHandler {
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

class Logger {
  static log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

class FileManager {
  constructor(private fileHandler: IFileHandler) {}

  public readFile(): string {
    return this.fileHandler.read();
  }

  public writeFile(data: string): void {
    this.fileHandler.write(data);
  }
}

// "MAIN"
const fileHandler = new FileSystemHandler("example.txt");
const fileManager = new FileManager(fileHandler);
const currentContent = fileManager.readFile();
Logger.log(`Current content: ${currentContent}`);
const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);
const updatedContent = fileManager.readFile();
Logger.log(`Updated content: ${updatedContent}`);
