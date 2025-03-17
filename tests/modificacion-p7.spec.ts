import {describe, test, expect} from "vitest";
import { EstacionMeteorologica } from "../src/modificacion-p7/estacion";
import { Observable, Observer, EventType} from "../src/modificacion-p7/tools";

let tnf2 = new EstacionMeteorologica(2, 'tnf2');

describe ("PRUEBAS UNITARIAS - PRACTICA 7 - ESTACION METEOROLOGICA", () => {
  test("Creacion de la estacion meteorologica - get id", () => {
    expect(tnf2.Id()).toBe(2);
  });
  test("Creacion de la estacion meteorologica - get nombre", () => {
    expect(tnf2.Name()).toBe("tnf2");
  });
  test ("Probar nuevo evento", () => {
    let evento = EventType.ALERTA_VIENTO;
    tnf2.setEvent(evento);
    expect(tnf2.getEventType()).toBe(4);
  });
});