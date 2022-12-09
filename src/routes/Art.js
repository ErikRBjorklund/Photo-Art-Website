import React from 'react'
import Navigation from '../components/navbar';

import { Link } from 'react-router-dom'
import art_style from '../components/css/art.css'

const Art = () => {
  return (
    <>
      <Navigation />
      <div className="prelim-wrapper">
        <h1>My Journey Through Art</h1>
        <p>
          Despite finding my passion in life very early on through my photography, over the last few years I have discovered
          my intense adoration for digital art. Whether I am observing works or creating those of my own, the ability to utilize
          vibrant colors and establish new worlds never seizes to excite me in ways I was not aware of previously. The ultimate
          goal of my art is to be able to share this exhilaration I constantly experience with those who are able to connect to it.
          Although the consistent theme of vivacious colors is evident in all my works, I greatly appreciate having the ability to
          practice diverse styles, whether it be creating something more abstracted, developing a maximalist approach, or designing
          a dreamscape. The advancement of digital art provides artists the endless ability to turn their visions into magnificent works
          with infinite possibilities. Hopefully, through my art I am able to use the ups and downs I experience daily and transform them
          into lively scenes people from all over the world can enjoy and establish a connection with!
        </p>
      </div>
      {/* <!-- contains art --> */}
      <div className="art-container">
        <img src={require("../images/artwork/MoonlitPicnic.jpg")} alt="Moonlight Picnic" />
        <img src={require("../images/artwork/ThisWayToTheMoon.jpg")} alt="This Way to the Moon" />
        <img src={require("../images/artwork/DiscoSkeletonsinSpace.jpg")} alt="Disco Skeletons in Space" />
      </div>
      {/* <!-- text box --> */}
      <div className="prelim-wrapper">
        <p>
          You can commission my art here.
        </p>
        <div id="commission-button" className="button">
          <Link to="/commissions" id="commission-button">Commission Me</Link>
        </div>
      </div>
      {/* <!-- contains art --> */}
      <div className="art-container">
        <img src={require("../images/artwork/RainbowRoom.jpg")} alt="Rainbow Room" />
        <img src={require("../images/artwork/Cloud9.jpg")} alt="Cloud9" />
        <img src={require("../images/artwork/WelcometoSaturn.jpg")} alt="Welcome to Saturn" />
      </div>
    </>


  );
}

export default Art;