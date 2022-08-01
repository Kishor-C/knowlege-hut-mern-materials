import { render, screen } from '@testing-library/react';
import App from './App';

// test(description, callback)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My React App/i);
  expect(linkElement).toBeInTheDocument();
});
