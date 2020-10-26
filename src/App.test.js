import React from 'react';
import { render } from '@testing-library/react';
import App from './app-og.js';

/*test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
});*/

test('data is loading and routes work on / path load', () => {
  const { getByText } = render(<App />)
  expect(getByText("Fourth of July Promo")).not.toBeNull()
})
