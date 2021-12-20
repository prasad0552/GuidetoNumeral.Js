const myLocales = [
  { locale: "ja", title: "Japan", type: "Yen", curr: null },
  { locale: "en", title: "USA", type: "US Dollar", curr: null },
  { locale: "ru", title: "Russia", type: "Ruble", curr: null },
  { locale: "bg", title: "Bulgaria", type: "Lev", curr: null },
  { locale: "en-za", title: "South Africa", type: "Rand", curr: null },
  { locale: "es-es", title: "Spain", type: "Euro", curr: null },
  { locale: "tr", title: "Turkey", type: "Lira", curr: null },
  { locale: "uk-ua", title: "Ukraine", type: "Hryvnia", curr: null },
  { locale: "no", title: "Norway", type: "Krona", curr: null },
  {
    locale: "ar-ae",
    title: "United Arab Emirates",
    type: "Dirham",
    curr: "د.إ"
  },
  { locale: "en-in", title: "India", type: "Rupee" }
];
const currFormats = [
  "$ 0,0[.]00",
  "$0,0.00",
  "0,0[.]00 $",
  "($0,0)",
  "($ 0.00 a)",
  "$0.00",
  "($ 0.00 a)"
];
const byteFormats = ["0b", "0 ib", "0.0 b", "0.00b", "0.000 ib"];
const percentageFormats = ["0%", "0 %", "0.000%", "(0.000 %)"];
const numberFormats = [
  "0,0.0000",
  "0,0",
  "+0,0",
  "000000,0",
  "0a",
  "0o",
  "(.00)"
];

const timeFormats = ["00:00:00"];

const exponentFormats = ["0,0e+0", "0.00e+0", "0.000e+0"];

const numeralTypes = [
  {
    title: "Currency",
    formats: currFormats,
    isCurr: true,
    myLocales: myLocales
  },
  { title: "Bytes", formats: byteFormats },
  { title: "Numbers", formats: numberFormats },
  { title: "Percentage", formats: percentageFormats, isPercentage: true },
  { title: "Exponents", formats: exponentFormats },
  { title: "Time", formats: timeFormats }
];

export default numeralTypes;
