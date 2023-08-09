import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = (props) => {
  const titleStyle = {
    fontSize: '30px',
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="/" style={titleStyle}>
          {props.title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
