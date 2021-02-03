import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Begin from '../Begin';
import { Container } from '../../styles';

function Home(){
  return(
    <Container>
        <Begin />
        <About />
        <Contact />
    </Container>
  );
}

export default Home;