import Store from "../config/reducers";

const toFarenheit = celsius => celsius * 9 / 5 + 32;
const toCelsius = farenheight => (farenheight - 32) * 5 / 9;
const toLbs = weight => weight * 2.20462;
const toKgs = weight => weight / 2.20462;
const displayTemp = (temp, round = false) => {
  const value = Store.getState().user.degree_unit === "F" ? temp : toCelsius(temp);
  if (round) return Math.ceil(value / 5) * 5;
  return value;
}
const displayWeight = weight =>
  (Store.getState().user.weight_unit === "lbs" ? weight : toKgs(weight));

export { toFarenheit, toCelsius, toLbs, toKgs, displayTemp, displayWeight };
