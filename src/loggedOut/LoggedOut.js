import React from 'react'
import tbn1 from '../assests/56805.png'
import '..//loggedOut/LoggedOut.css'

function LoggedOut() {
  return (
    <div className='loggedout-container'>
        <h2>Youre Succesfully Logged Out</h2>
        <img src={tbn1} alt="image" />
    </div>
  )
}

export default LoggedOut