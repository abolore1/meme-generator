import React from 'react';
import myImg from './Trollface.png';

function Header(){
    return(
        <header >
          <img src={myImg} alt="pix" style={{height:130}}/>
          <h3><p>Meme Generator </p></h3>
        </header>
    )
}

export default Header

