import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="justify-content-center">
        <Logo />
      </Container>
    </Navbar>
  );
};

export default Header;
