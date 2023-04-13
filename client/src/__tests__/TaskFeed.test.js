import { render, screen } from '@testing-library/react';
import TaskFeed from '../components/TaskFeed';

test('renders task cards', () => {
  render(<TaskFeed />);
  const linkElement = screen.getByText(/Task 1/i);
  expect(linkElement).toBeInTheDocument();
});
