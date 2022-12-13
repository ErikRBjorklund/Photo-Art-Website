
import {React, useState} from 'react'

import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FormControl, InputLabel, MenuItem } from '@mui/material'
import commission_style from './css/commissions.css'



const Form = () => {
    const [com, setCom] = useState("Photography");
    const handleChange = (event) => {
        setCom(event.target.value);
    };
  return (
    <form id="commission-wrapper">
      <div className="commission-line" id="name-wrapper">
        <h3>Name</h3>
        <input type="text" className="input-box" id="name-input" />
      </div>
      <div className="commission-line" id="email-wrapper">
        <h3>Email</h3>
        <input type="text" className="input-box" id="email-input" />
      </div>
      <div className="commission-line" id="date-wrap">
        <h3>Date</h3>
        <input type="date" className="input-box" id="time-input" />
      </div>
     
      <div className="commission-line" id="description-wrapper">
        <h3>Description of request</h3>
        <textarea className="input-box" id="description-input"></textarea>
      </div>
      <a onClick={save} href="#" className="button">Commission Me</a>
    </form>
  )
}

function EmailCheck(input) {
  var validExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validExp)) {
    
    return true;
  } else {
    var element = document.getElementById('email-input')
    element.style.border = '3px solid red';
    
    return false;
  }
}

const save = () => {

  const name = document.getElementById("name-input").value;
  const email = document.getElementById('email-input').value;
  const date = document.getElementById('time-input').value;
  const description = document.getElementById('description-input').value;

  // Check if the email is valid
  const emailCheck = EmailCheck(document.getElementById('email-input'))
  
  // Remove any existing error message
  var emailInput = document.getElementById('email-input')
  if (emailInput.parentNode.contains(document.getElementById("error-message"))) {
    emailInput.parentNode.removeChild(document.getElementById("error-message"))
  }
  
  // Create and insert error message if email is invalid
  if (!emailCheck) {
    var errorMessage = document.createElement('p')
    errorMessage.setAttribute("id", "error-message");
    errorMessage.innerHTML = "Invalid email. Please enter a valid email address."
    errorMessage.style.color = "red"
    emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling)
  } else {
    var element = document.getElementById('email-input')
    element.style.border = 'none'
  }

  
  // Save the commission data to local storage
  let current = localStorage.getItem('commissions')
  localStorage.setItem('commissions', '')
  let object = JSON.parse(current)
  if (!('commissions' in object)) {
    object['commissions'] = []
  }
  object['commissions'].push({ 'name': name, 'email': email, 'date': date, 'description': description })
  localStorage.setItem('commissions', JSON.stringify(object))

  console.log(object)


}

export default Form