import React from "react";
import { useState } from "react";
import numeral from "numeral";
import locales from "numeral/locales";

export default (Section = props => {
  var isCurr = props.isCurr;

  const [format, setFormat] = useState(props.formats[0]);
  const [locale, setLocale] = useState(isCurr ? props.myLocales[0] : null);

  if (props.isCurr) {
    numeral.locale(locale.locale);
  } else {
    numeral.locale("en-au");
  }

  const checkLocale = e => {
    var newLocale = props.myLocales.find(x => x.locale === e.target.value);
    setLocale(newLocale);
    if (numeral.locales[e.target.value] === undefined) {
      numeral.register("locale", e.target.value, {
        delimiters: {
          thousands: " ",
          decimal: ","
        },
        abbreviations: {
          thousand: "k",
          million: "m",
          billion: "b",
          trillion: "t"
        },
        currency: {
          symbol: newLocale.curr ? newLocale.curr : "$"
        }
      });
    }
  };

  var newNum = numeral(props.number).format(format);

  return (
    <div className="section">
      <h3>{props.title}</h3>
      {props.isCurr ? (
        <div>
          Locale:{" "}
          <select onChange={checkLocale} value={locale.locale}>
            {props.myLocales.map(x => {
              return (
                <option value={x.locale}>
                  {x.title} ({x.type})
                </option>
              );
            })}
          </select>
          <br />
        </div>
      ) : null}
      <div>
        Format:{" "}
        <select onChange={e => setFormat(e.target.value)} value={format}>
          {props.formats.length > 0 ? (
            props.formats.map(x => {
              return <option value={x}>{x}</option>;
            })
          ) : (
            <option>No Options</option>
          )}
        </select>
      </div>
      Result: {newNum}
      <hr />
    </div>
  );
});
