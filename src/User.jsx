import React from 'react';

const User = ({ user }) => {
    return (
        <div className="card">
            <div className="user-card">
                <img src={user.image} alt="" />
                <h3>First Name:{user.firstName}</h3>
                <p>Phone: {user.phone}; </p>
                <p>Address:{user.address.region} Zip:{user.address.zip}</p>
                <p>Email: {user.email}</p>
                <p className='car'>Car:{user.cars}
                </p>
            </div>
        </div>
    );
};

export default User;