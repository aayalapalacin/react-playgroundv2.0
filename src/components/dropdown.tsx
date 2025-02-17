import React from 'react'
import "../app/styles/dropdown.css";

function Dropdown() {
  return (
    <div className='dropdown-container mb-5'>
        <div className="sec-center"> 	
            <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
            <label className="for-dropdown" htmlFor="dropdown">Dropdown Menu <i className="uil uil-arrow-down"></i></label>
            <div className="section-dropdown"> 
                <a >Dropdown Link <i className="uil uil-arrow-right"></i></a>
               
                <a >Dropdown Link </a>
                <a >Dropdown Link </a>
            </div>
        </div>
    </div>
  )
}

export default Dropdown