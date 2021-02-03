import React from 'react';
import { List, Head } from '../../styles';
import { HashLink as Link } from 'react-router-hash-link';

function Header(){
  return(
    <Head id="home">
      <List>
        <li><Link smooth to="#home">Home</Link></li>
        <li><Link smooth to="#about">About</Link></li>
        <li><Link smooth to="#contact">Contact</Link></li>
      </List>
    </Head>
  );
}

export default Header;