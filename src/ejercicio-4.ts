export interface Printable {
  print(): void;
}

export interface Scannable {
  scan(): void;
}

export class Printer implements Printable {
  print(): void {
    console.log("Printing...");
  }
}

export class Scanner implements Scannable {
  scan(): void {
    console.log("Scanning...");
  }
}

export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log("Printing...");
  }
  scan(): void {
    console.log("Scanning...");
  }
}