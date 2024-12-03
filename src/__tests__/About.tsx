import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('this show the H1', () => {
  it('this should be return h1', () => {
    render(<About />);

    const element = screen.getByText('this is about page');
    const element1 = screen.getByAltText('person');

    expect(element)
    expect(element1)
  });
});
