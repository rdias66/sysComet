import dB_astroEvents from "./dataBase";
import {arrayFilterToday, arrayFilterUpcoming, arrayPrinter} from "./functions";

let todaysEvents = arrayFilterToday(dB_astroEvents);
let upcomingEvents = arrayFilterUpcoming(dB_astroEvents);
arrayPrinter(todaysEvents, upcomingEvents);
