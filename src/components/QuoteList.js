import React from "react";
import Quote from "./Quote";

function QuoteList({ quotes }) {
  const qouteList = quotes.map((quote) => (
    <Quote key={crypto.randomUUID()} quote={quote} />
  ));

  return <ul className="quotes">{qouteList}</ul>;
}

export default QuoteList;
