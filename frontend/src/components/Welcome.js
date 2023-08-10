import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/welcome.css';
const Welcome = () => {
  return (
    <div className="welcome-box">
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using Unsplash API.
        To Start, search something using the searchbar.
      </p>
      <p>
        <Button variant="success" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  );
};
export default Welcome;
