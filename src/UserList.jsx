import React from 'react';
import User from './User';
import userData from './user.json';

const UserList = () => {
  return (
    <div className="user-list">
      {userData.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;