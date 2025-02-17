import React from 'react'
import "../app/styles/dropdown.css";

function Dropdown() {
  return (
    <div className='dropdown-container mb-5'>
        <div className="sec-center"> 	
            <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
            <label className="for-dropdown" htmlFor="dropdown">Dropdown Menu 
            <svg className="uil uil-arrow-down" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></path></svg>
            </label>
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