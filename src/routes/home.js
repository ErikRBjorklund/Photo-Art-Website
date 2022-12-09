import React from 'react'
import LeftInfo from '../components/left_info'
import Navigation from '../components/navbar'
import Image_gallery from '../images/image_gallery'

const home = () => {
  // Requirements:
  // react-bootstrap@2.6.0
  // react-dom@18.2.0
  // react-router-dom@6.4.4
  // react-scripts@5.0.1
  // react@18.2.0
  // web-vitals@2.1.4
  // @mui/material@5.10.16
  return (
    <>
      <Navigation />
      <LeftInfo />
      <Image_gallery />
    </>
  );
}

export default home