
import { React, useState } from 'react'

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import commission_style from './css/commissions.css'

const Form = () => {
    const [com, setCom] = useState("Photography");
    const handleChange = (event) => {
        setCom(event.target.value);
    };
    return (
        // Wraps commission form
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
            {
                // Dropdown Menu per Specifications
                <FormControl fullWidth id="form_control">
                    <Select
                        labelId="type_label"
                        id="type_label"
                        value={com}
                        label="Type of Commission"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Photography"}>Photography</MenuItem>
                        <MenuItem value={"Art"}>Art</MenuItem>
                    </Select>
                </FormControl>
            }
            <div className="commission-line" id="description-wrapper">
                <h3>Description of request</h3>
                <textarea className="input-box" id="description-input"></textarea>
            </div>
            <a onClick={save} href="#" className="button">Commission Me</a>
        </form>
    )
}

// Saves data into local storage for later use.
const save = () => {

    const name = document.getElementById("name-input").value;
    const email = document.getElementById('email-input').value;
    const date = document.getElementById('time-input').value;
    const description = document.getElementById('description-input').value;

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