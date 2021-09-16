import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';

describe('Simpsons Quote Container', () => {
  // eslint-disable-next-line max-len
  it('should render a quote & image of simpsons character on load', async () => {
    render(<SimpsonsQuote />);

    screen.findByText('Loading...');
    
  });
});

