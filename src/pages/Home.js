import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <Container>
      <h1>Home <FontAwesomeIcon icon={faHome} /></h1>
      <p>Welcome to my portfolio!</p>
    </Container>
  );
};

export default Home;
