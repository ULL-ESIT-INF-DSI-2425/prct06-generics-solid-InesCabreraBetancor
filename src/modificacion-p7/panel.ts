import { EstacionMeteorologica } from './estacion.js';
import * as Ob from './tools.js';

export class Panel implements Ob.Observer {
  constructor(private readonly _ubi: string, private readonly _name: string) {
  }
  /**
   * Getter del id del dispositivo
   * @returns el id del movil
   */
  Ubicacion() {
    return this._ubi;
  }
  /**
   * Getter del nombre del dispositivo
   * @returns retorna el nombre del dispositivo
   */
  Name() {
    return this._name;
  }
  /**
   * Permmite actualizar la informacion del movil
   * @param observable - es el usuario que observa
   */
  update(observable: Ob.Observable): string {
    if (observable instanceof EstacionMeteorologica) {
      switch(observable.getEventType()) {
        case Ob.EventType.LLUVIA:
          return `Tu panel ${this._name} recibió notificación de que en media hora va a llover.\n`;
        case Ob.EventType.NIEVE:
          return `Tu panel ${this._name} recibió notificación de que en el Teide está nevando.\n`;
        case Ob.EventType.ALERTA_VIENTO:
          return `Tu panel ${this._name} recibió notificación de no se recomienda salir por Alerta de Viento.\n`;
        case Ob.EventType.TORNADO:
          return `Tu panel ${this._name} recibió notificación de que se avecina un Tornado entre el Lunes y el Martes.\n`;
      }
    } 
    return 'Error. No eres una instancia de la clase Meteorologica.\n';
  }
}