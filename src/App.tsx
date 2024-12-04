import UserTable from "./components/UserTable";

export const users= [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  { id: 3, name: 'Sam Brown', email: 'sam.brown@example.com', role: 'Moderator' },
];

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <UserTable users={users}/>
    </div>
  );
};

export default App;
