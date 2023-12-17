import React from 'react'
import './footertop.css'
import USflag from '../../images/usFlag.png'
const FooterTop = () => {
    return (
        <div className='footer-top'>
            <div className='first-top-footer'>
                <div className='footer-title'>Be the first to know</div>
                <div className='info'>Sign up for updates from abc.</div>
                <div className='input-class'><input placeholder='Enter your Email' /> <button>SUBSCRIBE</button></div>
            </div>
            <div className='second-top-footer'>
                <div className='first'>
                    <div className='footer-title'>CONTACT US</div>
                    <div className='contact-info'>
                        <div className='info'>+44 221 133 5360</div>
                        <div className='info'>customercare@abc.com</div>
                    </div>
                </div>
                <div className='second'>
                    <div className='footer-title'>Currency</div>
                    <div className='info'><img src={USflag} alt="Flag" className='flag' /> + USD</div>
                    <div className='terms'>Transactions will be completed in Euros and a currency reference is available on hover.</div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop