import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders navbar links', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});
