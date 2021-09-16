import React, { useState } from 'react';
import Load from '../../components/quote/Load';
import Quote from '../../components/quote/Quote';
import { getQuote } from '../../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const quote = await getQuote();

    setQuote(quote);

    setLoading(false);
  };

  return (
    <>
      <Load onClick={handleClick} />
      {loading ? (<h1>Loading...</h1>) : (quote) &&
        (<Quote
          image={quote.image}
          quote={quote.quote}
          name={quote.name}
        />)}
    </>
  );

};

export default SimpsonsQuote;
