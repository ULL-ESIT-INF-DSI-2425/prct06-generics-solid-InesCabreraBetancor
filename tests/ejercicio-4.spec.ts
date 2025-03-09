import { describe, test, expect, vi } from "vitest";
import {Printer, Scanner, PrinterScanner} from "../src/ejercicio-4";

describe("Printer", () => {
  test("should print", () => {
    const printer = new Printer();
    const logSpy = vi.spyOn(console, "log");
    printer.print();
    expect(logSpy).toHaveBeenCalledWith("Printing...");
    logSpy.mockRestore();
  });
});

describe("Scanner", () => {
  test("should scan", () => {
    const scanner = new Scanner();
    const logSpy = vi.spyOn(console, "log");
    scanner.scan();
    expect(logSpy).toHaveBeenCalledWith("Scanning...");
    logSpy.mockRestore();
  });
});

describe("PrinterScanner", () => {
  test("should print and scan", () => {
    const printerScanner = new PrinterScanner();
    const logSpy = vi.spyOn(console, "log");
    printerScanner.print();
    expect(logSpy).toHaveBeenCalledWith("Printing...");
    printerScanner.scan();
    expect(logSpy).toHaveBeenCalledWith("Scanning...");
    logSpy.mockRestore();
  });
});