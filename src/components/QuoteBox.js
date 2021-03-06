import React from "react";
import quotes from "../quotes.json";
import { useState } from "react";
import Button from "./Button";

const QuoteBox = () => {
  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#845EC2",
    "#008F7A",
    "#C34A36",
    "#D5CABD",
    "#9B89B3",
  ];

  const [quote, setQuote] = useState(quotes[getNumber(quotes.length)]);
  const [background, setBackground] = useState(
    colors[getNumber(colors.length)]
  );

  const handleUser = () => {
    setQuote(quotes[getNumber(quotes.length)]);
    setBackground(colors[getNumber(colors.length)]);
  };

  return (
    <div className="app" style={{ background }}>
      <div className="quotes">
        <div className="comillas">
          <i className="fas fa-quote-left" style={{ color: background }}></i>
        </div>
        <div className="frase">
          <h2 style={{ color: background }}>{quote.quote}</h2>
        </div>
        <div className="h4boton">
          <i>
            <h4 style={{ color: background }}>{quote.author}</h4>
          </i>
          <Button changeUser={handleUser} background={background}/>
        </div>
      </div>
    </div>
  );
};
const getNumber = (max) => Math.floor(Math.random() * max);
export default QuoteBox;
