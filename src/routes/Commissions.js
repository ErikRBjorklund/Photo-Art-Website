import React from 'react'
import Navigation from '../components/navbar';
import Form from '../components/Form'

import commission_styles from '../components/css/commissions.css';


const Commissions = () => {
  return (
    <>
      <Navigation />

      <div className="prelim-wrapper">
        <h1>Commission Me</h1>
        <p>
          You can commission me for any sort of art or photography work including professional headshots and events!
          Fill out the form below with your information about the event and timeframe,
          and I'll get back to you with a price.
        </p>
        <p>
          My typical rates are $60/hr, but may rise depending on the event. Art commissions depend on the order.
        </p>
      </div>

      <Form />
    </>
  );
}

export default Commissions;