import React, { useState } from 'react'
import './footerbottom.css'
import social from '../../images/social.png'
import payment from '../../images/payment.png'
import down from '../../images/down.png'
const FooterBottom = () => {
    const [showInfo1, setShowInfo1] = useState(true);
    const [showInfo2, setShowInfo2] = useState(true);
    const [showInfo3, setShowInfo3] = useState(true);
    const toggleInfo1 = () => {
        setShowInfo1(!showInfo1);
    };
    const toggleInfo2 = () => {
        setShowInfo2(!showInfo2);
    };
    const toggleInfo3 = () => {
        setShowInfo3(!showInfo3);
    };
    return (
        <>
            <div className='footer-bottom'>
                <div className='first'>
                    <div className='footer-title' onClick={toggleInfo1}>
                        <span>abc</span>
                        <img src={down} alt="downArrow" className='down-Arrow-footer' />
                    </div>
                    {showInfo1 && (
                        <>
                            <div className='info'>About Us</div>
                            <div className='info'>Stories</div>
                            <div className='info'>Artisans</div>
                            <div className='info'>Boutiques</div>
                            <div className='info'>Contact Us</div>
                            <div className='info'>EU Compliances Docs</div>
                        </>
                    )}
                </div>
                <div className='first'>
                    <div className='footer-title' onClick={toggleInfo2}>
                        <span>Quick Links</span>
                        <img src={down} alt="downArrow" className='down-Arrow-footer' />
                    </div>
                    {showInfo2 && (
                        <>
                            <div className='info'>Orders & Shipping</div>
                            <div className='info'>Orders & Shipping</div>
                            <div className='info'>Payment & Pricing</div>
                            <div className='info'>Return & Refunds</div>
                            <div className='info'>FAQs</div>
                            <div className='info'>Privacy Policy</div>
                            <div className='info'>Terms & Conditions</div>
                        </>
                    )}
                </div>
                <div className='third'>
                    <div>
                        <div className='footer-title' onClick={toggleInfo3}>
                            <span>Follow Us</span>
                            <img src={down} alt="downArrow" className='down-Arrow-footer' />
                        </div>
                        {showInfo3 && (
                            <>
                                <img src={social} alt='social handles' className='info' />
                            </>
                        )}
                    </div>
                    <div>
                        <div className='footer-title'>abc Accepts</div>
                        <img src={payment} alt='payments img' className='info payImg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterBottom