import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Button from '.';

test('button render correctly', () => {
  const { getByRole } = render(<Button></Button>);
  const getButton = getByRole('button');
  expect(getButton).toBeInTheDocument();

  userEvent.click(getButton);
});
