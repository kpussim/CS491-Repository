import React, { useState } from 'react';
import { Button, Alert, Image, Container } from 'react-bootstrap';
import LottieAnimation from './LottieAnimation.js';
import dogAnimation from '../animations/cutedoggie.json';
import redPandaImg from '../images/redpanda.png';

function Home() {
  const [showAlert, setShowAlert] = useState(false);

  const saveDate = () => {
    setShowAlert(true);
  };

  return (
    <Container className="mt-3">
      <h2>Home</h2>
      <p>Welcome! You're in home.</p>

      <Button variant="primary" onClick={saveDate}>
        Save the date!
      </Button>

      {showAlert && (
        <Alert
          variant="info"
          className="mt-3"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          The date is saved!
        </Alert>
      )}

      <div className="mt-3">
        <Image
          src={redPandaImg}
          className="border border-primary"
          roundedCircle
          width={200}
          height={200}
        />
      </div>

      <LottieAnimation animationData={dogAnimation} />
    </Container>
  );
}

export default Home;