export interface Flyable {
  fly(): void;
}

export class Bird {
  // Otras propiedades y métodos comunes de las aves
}

export class Sparrow extends Bird implements Flyable {
  fly(): void {
    console.log("Flying...");
  }
}

export class Penguin extends Bird {
  swim(): void {
    console.log("Swimming...");
  }
}
