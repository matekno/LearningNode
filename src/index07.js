import { getAllInfoByISO } from "iso-country-currency";

let cur = getAllInfoByISO('BE').currency;
console.log(cur);