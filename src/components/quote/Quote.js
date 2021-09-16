import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, quote, name }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      {quote} - {name}
    </figcaption>
  </figure>
  
);

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Quote;
