import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Props {
  users: User[];
}

const UserTable = ({ users }: Props) => {
  const [showMessage, SetshowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetshowMessage(true);
    }, 1000);
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showMessage && <div data-testid='welcome'>welcome to Kader Worlds</div>}
      </div>
    </div>
  );
};

export default UserTable;
