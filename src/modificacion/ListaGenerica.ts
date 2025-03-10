import { resourceLimits } from "worker_threads";

export class GenericArray<T> {
  private items: T[];
  constructor(items: T[] = []) {
    this.items = items;
  };
  toArray(): T[] {
    return this.items;
  }
  /**
   * Metodo que permite averiguar cuantos elementos hay en una lista
   * @returns el tamaño de la lista
   */
  length(): number {
    let count = 0;
    for (let _ of this.items) {
        count++;
    }
    return count;
  }
  /**
   * Metodo que permite conseguir el elemento de la lista dado un indice
   * @param index es el indice de donde sacar el elemento
   * @returns retorna el elemento almacenado en dicho indice
   */
  get(index: number): T {
    return this.items[index];
  }
  /**
   * Dadas dos listas, permite añadir al final de la primera los elementos de la segunda.
   * @param otherList es la otra lista a añadir
   * @returns el resultado de la union de ambas
   */
  append(otherList: GenericArray<T>): void {
    for (let i = 0; i < otherList.length(); i++) {
        this.items[this.items.length] = otherList.get(i);
    }
  }
  /**
   * Dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
   * @param lista primera lista a concatenar
   * @param restListas resto de listas a concatenar
   * @returns retonr la concatenacion de las listas
   */
  concatenate(...lists: GenericArray<T>[]): void {
    for (const list of lists) {
        this.append(list);
    }
  }
  /**
   * Metodo que permite filtrar la lista
   * @param funcion es el predicado a cumplir
   * @returns retorna la lista filtrada
   */
  filter(funcion : (items : T) => boolean) : GenericArray<T> {
    let result : T[] = [];
    let pos = 0;
    for (let i = 0; i < this.length(); i++){
      if (funcion(this.get(i))){
        result[pos] = this.get(i);
        pos++;
      }
    }
    return new GenericArray<T>(result);
  }
  /**
   * Dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función
   * @param funcion es la funcion por la cual se va a mapear
   * @returns retorna una nueva lista con el mapeo hecho
   */
  map<U>(funcion : (item : T) => U) : GenericArray<U> {
    const mappedItems: U[] = [];
    for (let i = 0; i < this.length(); i++) {
        mappedItems[mappedItems.length] = funcion(this.get(i)!);
    }
    return new GenericArray<U>(mappedItems);
  }
  /**
   * 
   * @param funcion es la funcion para reducir
   * @returns 
   */
  reduce<U>(funcion : (accumulator: U, item: T) => U, value: U) : GenericArray<T> {

    return this;
  }
  /**
   * Metodo que permite darle la vuelta a una lista
   * @returns retorna la lista a la inversa
   */
  reverse() : GenericArray<T> {
    let result : T[] = [];
    let pos = 0;
    for (let i = this.length() - 1; i >= 0; i--){
      result[pos] = this.get(i);
      pos++;
    }
    return new GenericArray<T>(result);
  }
  /**
   * Dada una lista y una función, permite iterar en los elementos de la lista 
   * e invocar la función con cada uno de ellos.
   * @param lista Lista por la operar
   * @param funcion funcion que invocamos por cada elemento
   * @returns retorn la propia lista con la funcion aplicada
   */
  forEachGen(funcion : (items : T) => T) : GenericArray<T> {
    for (let i = 0; i < this.length(); i++) {
      funcion(this.get(i))
    }
    return this;
  }
}