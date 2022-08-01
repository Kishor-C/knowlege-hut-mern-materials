import { render, screen } from '@testing-library/react';
import {Example} from './Example';

// test(description, callback)
test('renders example component', () => {
  render(<Example />);
  const linkElement = screen.getByText(/Hello Example/i);
  expect(linkElement).toBeInTheDocument();
});