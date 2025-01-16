import { UNITS } from "../Constants/ConstantsValues";

export function convertTemperatureTo(temperature, untiTo) {
  if (untiTo === UNITS.celcius) {
    return (temperature - 32) / 1.8;
  } else if (untiTo === UNITS.fahrenheit) {
    return temperature * 1.8 + 32;
  } else {
    throw new Error("Invalid Unit");
  }
}

export function isIceTemperature(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0;
  } else if (unit === UNITS.fahrenheit) {
    return temperature <= 32;
  } else {
    throw new Error("Invalid Unit");
  }
}

export function returnOppositUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}
