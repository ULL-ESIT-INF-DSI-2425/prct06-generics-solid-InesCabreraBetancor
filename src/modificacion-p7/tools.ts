/**
 * Interfaz para las clases observables
 */
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable): void;
}

export enum EventType {'NO_EVENT', 'LLUVIA', 'NIEVE', 'TORNADO', 'ALERTA_VIENTO'};