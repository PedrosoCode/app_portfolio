import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <Container>
      <h1>About <FontAwesomeIcon icon={faInfoCircle} /></h1>
      <p>This is the about page.</p>
    </Container>
  );
};

export default About;
