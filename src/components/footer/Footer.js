import React from 'react'
import '../footer/Footer.css'

function Footer() {
    const newYear = new Date().getFullYear()
  return (
    <footer className='footer-main'>
    &copy; A1 Store {newYear} , All Rights Reserved
    </footer>
  )
}

export default Footer