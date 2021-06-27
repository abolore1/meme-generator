import React from 'react';

function Header(){
  const myImg = "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.PNG"
    return(
        <header >
          <img src={myImg} alt="pix" style={{height:130}}/>
          <h3><p>Meme Generator</p></h3>
        </header>
    )
}

export default Header
