import React from 'react';
import UserList from './UserList';
import  './App.css'
const App = () => {
  return (
    <div className="app">
      <h1>User Management</h1>
      <UserList />
    </div>
  );
};

export default App;