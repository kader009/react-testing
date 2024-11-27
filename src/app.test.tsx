import { render, screen } from '@testing-library/react';
import App from './App';

it('this return app text', () => {
  render(<App />);  // create virtual dom

  const element = screen.getByText('App');

  expect(element).toBeInTheDocument();
});
