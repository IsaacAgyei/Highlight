import React from 'react'; 
import image from "./assets/SouloHo.png";


function Background() {
  return (
    <div>
      <img
        className="Background"
        src={image}
        alt="Picture of a celebrity"
      />
    </div>
  )
}

export default Background;

