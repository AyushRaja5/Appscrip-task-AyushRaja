import React from 'react'
import FooterTop from './FooterTop/FooterTop'
import FooterBottom from './FooterBottom/FooterBottom'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-class'>
        <FooterTop/>
        <div style={{ borderTop: '2px solid white', margin: '10px 0', marginBottom:'5%'}}></div>
        <FooterBottom/>
        <div style={{color:'white', marginTop:'5%', display:'flex',justifyContent:'center'}}>Copyright © 2023 abc. All rights reserved.</div>
        
    </div>
  )
}

export default Footer