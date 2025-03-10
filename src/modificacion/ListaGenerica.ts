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

  map(funcion : (item : T) => T) : GenericArray<T> {
    for(let i=0; i < this.length(); i++){

    }
    return this;
  }
  reduce(funcion : (item : T) => T) : GenericArray<T> {

    return this;
  }
  reverse() : GenericArray<T> {
    let result : T[] = [];
    /*for (let i = this.length(); i <= 0; i--){
      result = 
    }*/
    return new GenericArray<T>(result);
  }
}