import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react cicd app', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a React CICD App/i);
  expect(linkElement).toBeInTheDocument();
});
