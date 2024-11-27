import { render, screen } from '@testing-library/react';
import Button from './Button';

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
    // arrange
    render(<Button ActionButton='Reject'/>);
    // action
    const element = screen.getByText('Help me Reject');
    // assertion
    expect(element).toBeInTheDocument();
  });
});
