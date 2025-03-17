import {describe, test, expect} from "vitest";
import { EstacionMeteorologica } from "../src/modificacion-p7/estacion.js";
import * as Ob from "../src/modificacion-p7/tools.js";
import { Movil } from "../src/modificacion-p7/movil.js";
import { Panel } from "../src/modificacion-p7/panel.js";

const tnf2 = new EstacionMeteorologica(2, 'tnf2');
const mv_ines = new Movil(98, "movil ines");
const mv_edu = new Movil(37, "movil edu");
const panel_teresitas = new Panel("Playa las teresitas", "Panel Teresitas");

describe ("PRUEBAS UNITARIAS - PRACTICA 7 - ESTACION METEOROLOGICA", () => {
  test("Creacion de la estacion meteorologica - get id", () => {
    expect(tnf2.Id()).toBe(2);
  });
  test("Creacion de la estacion meteorologica - get nombre", () => {
    expect(tnf2.Name()).toBe("tnf2");
  });
  test ("Probar nuevo evento", () => {
    let evento = Ob.EventType.ALERTA_VIENTO;
    tnf2.setEvent(evento);
    expect(tnf2.getEventType()).toBe(4);
  });
  test("Suscripcion de ines", () => {
    expect(tnf2.subscribe(mv_ines)).toBe("\nUsuario nuevo suscrito.\n");
  });
  test("Suscripcion de ines segunda vez", () => {
    expect(tnf2.subscribe(mv_ines)).toBe("\nUsuario ya registrado. Emplee otro nombre.\n");
  });
  test("Probamos el unsuscribe", ()=> {
    expect(tnf2.unsubscribe(mv_edu)).toBe("Error. Ese usuario nunca estuvo suscrito.\n");
  });
  test("Panel Teresitas probar ubicacion", ()=> {
    expect(panel_teresitas.Ubicacion()).toBe("Playa las teresitas");
  });
  test("Probamos que se notifique la lluvia", () => {
    tnf2.onLluvia();
    expect(mv_ines.update(tnf2)).toBe("Tu movil movil ines recibió notificación de que en media hora va a llover.\n");
  });
  test("Probar notificacion del panel alerta viento", ()=> {
    tnf2.subscribe(panel_teresitas);
    tnf2.onAlertaViento();
    expect(panel_teresitas.update(tnf2)).toBe("Tu panel Panel Teresitas recibió notificación de no se recomienda salir por Alerta de Viento.\n");
  });
  test("Probar notificacion alerta por nieve", () => {
    tnf2.subscribe(mv_edu);
    tnf2.onNieve();
    expect(mv_edu.update(tnf2)).toBe("Tu movil movil edu recibió notificación de que en el Teide está nevando.\n");
  });
  test("Probar motificacion tornado", ()=> {
    tnf2.onTornado();
    expect(panel_teresitas.update(tnf2)).toBe("Tu panel Panel Teresitas recibió notificación de que se avecina un Tornado entre el Lunes y el Martes.\n");
  })
});