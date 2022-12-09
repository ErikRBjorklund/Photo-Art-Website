import React from 'react'
import about_style from '../components/css/about.css'
import Navigation from '../components/navbar';

const About = () => {
  return (
    <>
      <Navigation />
      <img src="../../Media/drive-download-20221020T233827Z-001/img8.jpg" alt="" />

      <div id="prelim-wrapper">
        <h1>My BIO</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper congue libero, eu consectetur ante faucibus vitae. Ut eu venenatis mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse nec justo eget mauris consequat cursus. Vivamus vitae mattis metus, in cursus nulla.
        </p>
        <p>
          Tincidunt augue interdum velit euismod in pellentesque. Odio tempor orci dapibus ultrices. Nisi est sit amet facilisis magna etiam tempor. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Facilisis gravida neque convallis a cras semper. In iaculis nunc sed augue lacus viverra vitae. Adipiscing enim eu turpis egestas. Non quam lacus suspendisse faucibus. Cursus euismod quis viverra nibh cras pulvinar mattis. Fusce ut placerat orci nulla. Elit pellentesque habitant morbi tristique senectus et netus et. Ultrices tincidunt arcu non sodales neque sodales.
        </p>
      </div>
      <img id="image1" src={require("../images/photos2/img5.jpg")} alt="birds" />
      <div id="prelim-wrapper">
        <h1>Some Experiences</h1>
        <p>
          Pellentesque massa placerat duis ultricies. A arcu cursus vitae congue mauris rhoncus aenean vel. Arcu ac tortor dignissim convallis aenean et tortor. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Gravida quis blandit turpis cursus in. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Suspendisse sed nisi lacus sed. Pretium nibh ipsum consequat nisl vel. Pulvinar neque laoreet suspendisse interdum. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Consequat nisl vel pretium lectus quam. Mauris vitae ultricies leo integer malesuada.
        </p>
        <p>
          Fermentum iaculis eu non diam phasellus vestibulum. Dolor magna eget est lorem ipsum dolor. Sit amet purus gravida quis blandit turpis cursus in hac. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Lacinia at quis risus sed vulputate odio. Mattis pellentesque id nibh tortor id aliquet. Proin nibh nisl condimentum id venenatis. Et netus et malesuada fames ac turpis egestas integer eget. Ut porttitor leo a diam sollicitudin tempor. Euismod elementum nisi quis eleifend quam adipiscing vitae.
        </p>
      </div>
    </>
  )
}
export default About;