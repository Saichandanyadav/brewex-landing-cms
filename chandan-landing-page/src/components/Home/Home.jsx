import React, { useEffect, useState } from 'react';
import './Home.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Home() {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/heading')
      .then(res => res.json())
      .then(data => setHeading(data?.text || ''));

    socket.on('headingUpdated', newHeading => {
      setHeading(newHeading);
    });

    return () => {
      socket.off('headingUpdated');
    };
  }, []);

  return (
    <div className="home-container">
      <div className="left-section">
        <h1 className="main-heading">{heading}</h1>
        <p className="paragraph">
          Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.
        </p>
        <button className="cta-button">Get started</button>
      </div>
      <div className="right-section">
        <img src="/style-frame.png" alt="Style Frame" className="right-image" />
      </div>
    </div>
  );
}

export default Home;
