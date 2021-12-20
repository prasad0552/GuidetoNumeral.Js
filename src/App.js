import React from "react";
import { useState } from "react";
import Section from "./Section.js";
import numeralTypes from "./formats.js";
import "./styles.css";

//locales codes
//https://www.science.co.il/language/Locale-codes.php

export default function App() {
  const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <div style={{ textAlign: "left" }}>
        Number:{" "}
        <input
          type="text"
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
        />{" "}
      </div>
      {numeralTypes.map((x, i) => {
        return (
          <Section
            formats={x.formats}
            title={x.title}
            isCurr={x.isCurr}
            myLocales={x.myLocales}
            number={number}
          />
        );
      })}
    </div>
  );
}
