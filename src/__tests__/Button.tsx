import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button test', () => {
  it('should return a without pros', () => {
    // arrange
    render(<Button />);
    // action
    const element = screen.getByText('Help me Ok');
    // assertion
    expect(element).toBeInTheDocument();
  });

  it('should return with a pros', () => {
    const ActionButton = 'Reject';
    // arrange
    render(<Button ActionButton={ActionButton} />);
    // action
    const element = screen.getByText(`Help me ${ActionButton}`);
    // assertion
    expect(element).toBeInTheDocument();
  });
});
