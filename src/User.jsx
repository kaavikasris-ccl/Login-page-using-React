import React from 'react'

function User(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.email}</h1>
    </div>
  );
}

export default User;