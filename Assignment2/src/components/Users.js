import React from 'react';
import LottieAnimation from './LottieAnimation.js';
import catAnimation from '../animations/cutecat.json';

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <p>You're in users!</p>
      <LottieAnimation animationData={catAnimation}/>
    </div>
  );
}

export default Users;