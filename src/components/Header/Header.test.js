import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import Header from '.';

test('header render correctly', () => {
  render(<Header/>);
  const headerElement = screen.getByTestId('test');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('Lorem Ipsum');
});
