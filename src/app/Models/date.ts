import {Gregorian} from "./gregorian";
import {Hijri} from "./hijri";

export class Date {
  readable!:String
  timestamp!:String
  gregorian!:Gregorian
  hijri!:Hijri
}
