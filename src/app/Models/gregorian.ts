import  {Weekday} from "./weekday";
import {Month} from "./month";
import {Designation} from "./designation";

export class Gregorian {
  date!:String
  format!:String
  day!:String
  weekday!:Weekday
  month!:Month
  year!:String
  designation!:Designation
}
