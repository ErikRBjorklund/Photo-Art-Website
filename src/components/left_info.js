import React from 'react'
import { Link } from 'react-router-dom'

import left_styles from './css/left_info.css'
import button_style from './css/button.css'

const left_info = () => {
  return (
    <div id="left-info">
      <div id="wrapper1">
        {/* Wraps headshot for centering (and color outline if wanted)*/}
        <div id="headshot_wrapper">
          <img src={require('../images/profile.JPG')} id="headshot" alt="profile photo of Maya" />
        </div>
        <h1>Maya Haims</h1>
        <p>
          Maya Haims is an avid artist/photographer currently attending CU Boulder.
          She loves nature photography and digital art!
        </p>
        {/* button */}
        <Link to="/about" className="button" id="learnmore">Learn More</Link>
      </div>
      <div id="right_line"></div>
    </div>
  )
}

export default left_info