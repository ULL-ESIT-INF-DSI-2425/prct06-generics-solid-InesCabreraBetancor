import * as Ob from './tools.js';

export class EstacionMeteorologica implements Ob.Observable {
  private observers : Ob.Observer[] = [];
  private eventType: Ob.EventType = Ob.EventType.NO_EVENT;
  constructor(private readonly _id: number, private readonly _name: string) {
  }
  Id() {
    return this._id;
  }
  Name() {
    return this._name;
  }
  getEventType() {
    return this.eventType;
  }
  /**
   * Se trata del metodo suscripcion lo cual indica que una persona se está intentando
   * suscribrir a nuestra App
   * @param observer - usuario a registrarse en la app Meteorologica
   * @return retorna una string si ya estaba el usuario suscrito y nada si es nuevo ingreso
   */
  subscribe(observer: Ob.Observer): string {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      return '\nUsuario nuevo suscrito.\n';
    } 
    return '\nUsuario ya registrado. Emplee otro nombre.\n';
  }
  /**
   * Se trata del metodo de eliminacion de cuenta lo cual indica que una persona
   * se está dessubscribiendo de nuestra app meteorologica
   * @param observer - usuario que quiere eliminar su cuenta
   */
  unsubscribe(observer: Ob.Observer): string {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      return 'Error. Ese usuario nunca estuvo suscrito.\n';
    }
    this.observers.splice(index, 1);
    return 'Usuario eliminado con éxito.\n';
  }
  /**
   * Metodo que permite notificar a las entidades que observan que ha ocurrido un
   * evento nuevo
   */
  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
  /**
   * Permite poner un evento al objeto observable
   * @param event - evento a introducir
   */
  setEvent(event: Ob.EventType): void {
    console.log(`Nuevo evento meteorológico: ${Ob.EventType[event]}`);
    this.eventType = event;
    this.notify();
  }
  /**
   * Metodo que permite notificar cuando está lloviendo
   */
  onLluvia() {
    this.eventType = Ob.EventType.LLUVIA;
    this.notify();
  }
  /**
   * Metodo que permite notificar cuando está nevando
   */
  onNieve() {
    this.eventType = Ob.EventType.NIEVE;
    this.notify();
  }
  /**
   * Metodo que permite notificar cuando se acerca un tornado
   */
  onTornado() {
    this.eventType = Ob.EventType.TORNADO;
    this.notify();
  }
  /**
   * Metodo que permite notificar cuando viene alerta por viento
   */
  onAlertaViento() {
    this.eventType = Ob.EventType.ALERTA_VIENTO;
    this.notify();
  }
}