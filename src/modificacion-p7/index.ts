import * as Ob from './tools.js';
import { EstacionMeteorologica } from "./estacion.js";
import { Movil } from "./movil.js";

const tnf2 = new EstacionMeteorologica(2, "Teide");
const mv_ines = new Movil(89, "movil ines");
const mv_edu = new Movil(74, "movil edu");

tnf2.subscribe(mv_ines);
console.log(tnf2.onLluvia());

