import React from 'react';
import { render } from '@testing-library/react';
import bootStrapHeaderApp from '../components/bootstrap_header';

test('Test for correct text items', () => {
  const { getByText } = render(<bootStrapHeaderApp />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
