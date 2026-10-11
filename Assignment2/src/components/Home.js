import React from 'react';
import LottieAnimation from './LottieAnimation.js';
import dogAnimation from '../animations/cutedoggie.json';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome! You're in home.</p>
      <LottieAnimation animationData={dogAnimation}/>
    </div>
  );
}

export default Home;