import { describe, test, expect } from "vitest";
import {GenericArray} from "../src/modificacion/ListaGenerica";


describe("Pruebas unitarias para la clase generica", () => {
  test("Pruebas append con numeros", () => {
    const lista_nums1 = new GenericArray<number>([1,2,3]);
    const lista_nums2 = new GenericArray<number>([4,5,6]);
    lista_nums1.append(lista_nums2);
    expect(lista_nums1.toArray()).toStrictEqual([1,2,3,4,5,6]);
  })
  test("Pruebas append con strings", () => {
    const lista_string1 = new GenericArray<string>(["hola", "que"]);
    const lista_string2 = new GenericArray<string>(["tal?", "bien."]);
    lista_string1.append(lista_string2)
    expect(lista_string1.toArray()).toStrictEqual(["hola", "que", "tal?", "bien."]);
  })
  test("Pruebas concatenate number", () => {
    const lista_nums1 = new GenericArray<number>([1,2,3]);
    const lista_nums2 = new GenericArray<number>([4,5,6]);
    const lista_nums3 = new GenericArray<number>([7,8,9]);
    lista_nums1.concatenate(lista_nums2, lista_nums3)
    expect(lista_nums1.toArray()).toStrictEqual([1,2,3,4,5,6,7,8,9]);
  })
  test("Pruebas concatenate string", () => {
    const lista_string1 = new GenericArray<string>(["hola", "que"]);
    const lista_string2 = new GenericArray<string>(["tal?", "bien."]);
    const lista_string3 = new GenericArray<string>(["tal?", "bien."]);
    lista_string1.concatenate(lista_string2, lista_string3)
    expect(lista_string1.toArray()).toStrictEqual(["hola", "que", "tal?", "bien.", "tal?", "bien."]);
  })
  test("Pruebas filter numbers", () => {
    const list_number = new GenericArray<number>([1,2,3,4,5,6,7,8,9,10]);
    const expected = list_number.filter(n => n % 2 === 0);
    expect(expected.toArray()).toStrictEqual([2,4,6,8,10])
  })
})
