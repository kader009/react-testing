import { render, screen } from '@testing-library/react';
import UserTable from './UserTable';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  {
    id: 3,
    name: 'Sam Brown',
    email: 'sam.brown@example.com',
    role: 'Moderator',
  },
];

describe('this should be find the setTimeout', () => {
  it('should be find the timeout', () => {
    render(<UserTable users={users} />);

    const welcomeText = screen.getByTestId('welcome');
    expect(welcomeText).toBeInTheDocument()
  });
});
