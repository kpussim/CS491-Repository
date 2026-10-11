import React from 'react';
import LottieAnimation from './LottieAnimation.js';
import lobsterAnimation from '../animations/cutelobsteranimal.json';

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the About page.</p>
      <LottieAnimation animationData={lobsterAnimation}/>
    </div>
  );
}

export default About;