import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <h3>{user.email}</h3>
        </div>
    )
}

export default User;