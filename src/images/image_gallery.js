import React from 'react'
import gallery_styles from '../components/css/image_gallery.css'

const image_gallery = () => {
  return (
    <div className="container">
      <ul className="image-gallery">
        <li><img src={require("../images/photos2/img1.jpeg")} alt="photo of snowwy mountain with village" /></li>
        <li><img src={require("../images/photos2/img2.jpg")} alt="photo of beach" /></li>
        <li><img src={require("../images/photos2/img3.jpg")} alt="photo of lizard" /></li>
        <li><img src={require("../images/photos2/img4.jpg")} alt="photo of birds" /></li>
        <li><img src={require("../images/photos2/img11.jpg")} alt="photo of snowwy landscape" /></li>
        <li><img src={require("../images/photos2/img5.jpg")} alt="photo of birds" /></li>
        <li><img src={require("../images/photos2/img6.jpg")} alt="photo of chipmunk" /></li>
        <li><img src={require("../images/photos2/img7.jpg")} alt="photo of berry plant" /></li>
        <li><img src={require("../images/photos2/img8.jpg")} alt="photo of mountains and river" /></li>
        <li><img src={require("../images/photos2/img9.jpg")} alt="photo of cat" /></li>
        <li><img src={require("../images/photos2/img10.jpg")} alt="photo of lizard" /></li>
        <li><img src={require("../images/photos2/img12.png")} alt="photo of birds" /></li>
        <li><img src={require("../images/photos2/img13.jpg")} alt="photo of bird" /></li>
        <li><img src={require("../images/photos2/img14.jpg")} alt="photo of snowwy landscape" /></li>
        <li><img src={require("../images/photos2/img15.jpeg")} alt="photo of small bird" /></li>
        <li><img src={require("../images/photos2/img16.jpg")} alt="photo of lady in ocean" /></li>
        <li><img src={require("../images/photos2/img17.JPG")} alt="photo of seal" /></li>
        <li><img src={require("../images/photos2/img18.jpg")} alt="photo of moon" /></li>
        <li><img src={require("../images/photos2/img19.jpg")} alt="photo of crab" /></li>
        <li><img src={require("../images/photos2/img20.jpg")} alt="photo of bee" /></li>
        <li><img src={require("../images/photos1/img1.jpg")} alt="photo of deer" /></li>
        <li><img src={require("../images/photos1/img2.JPG")} alt="photo of bridge" /></li>
        <li><img src={require("../images/photos1/img3.jpg")} alt="photo of deer" /></li>
        <li><img src={require("../images/photos1/img4.jpg")} alt="photo of crab" /></li>
        <li><img src={require("../images/photos1/img5.JPG")} alt="photo of valley with river" /></li>
        <li><img src={require("../images/photos1/img6.jpg")} alt="photo of trees" /></li>
        <li><img src={require("../images/photos1/img7.JPG")} alt="photo of flowers" /></li>
        <li><img src={require("../images/photos1/img8.JPG")} alt="photo of flower" /></li>
        <li><img src={require("../images/photos1/img9.jpg")} alt="photo of black and white cactus" /></li>
        <li><img src={require("../images/photos1/img10.JPG")} alt="photo of flowers" /></li>
        <li><img src={require("../images/photos1/img11.JPG")} alt="photo of deer" /></li>
        <li><img src={require("../images/photos1/img12.JPG")} alt="photo of ferris wheel" /></li>
        <li><img src={require("../images/photos1/img13.jpg")} alt="photo of snowwy tree" /></li>
      </ul>
    </div>
  )
}

export default image_gallery

