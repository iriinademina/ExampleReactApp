import axios from "axios";

const mainAxios = axios.create({
  baseURL: "https://aviasales-ae362.firebaseio.com/",
});

const currencyAxios = axios.create({
  baseURL: "https://www.cbr-xml-daily.ru/daily_json.js",
});

export {
  mainAxios,
  currencyAxios
}