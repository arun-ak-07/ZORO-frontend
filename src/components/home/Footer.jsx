import React from 'react'
import './home.css'

const Footer = () => {
  return (
    <>
    <div className="footer1a" style={{backgroundColor:'black'}}>
                    <div className="leftFooter1">
                        <div><h4 class="h4" style={{ fontWeight: 'bold', marginLeft: '30px' }}>LOCATION</h4></div>

                        <div class="text custom-text" className='custom-textsz' style={{ paddingLeft: '118px' }}>
                            <p style={{ fontSize: '13px', letterSpacing: '1px' }}>24-A New India Colony,<br />Marine Drive Kochi,<br />683106 Kerala</p>
                            <p style={{ fontSize: '13px', letterSpacing: '1px' }}><b>Email</b><a href="mailto:support@fansarmy.in"> :support@zoro.in</a></p></div>

                    </div>

                    <div className="centerFooter1">
                        <div><h4 class="h4" style={{ fontWeight: 'bold' }}>INFORMATION</h4></div>
                        <div style={{ paddingRight: '52px' }}>
                            <ul><li><a className='text-white'>About Us</a></li><li><a href="/pages/contact-us">Contact Us</a></li><li><a href="/pages/bulk-order">Bulk Order</a></li></ul>
                        </div>
                    </div>

                    <div className="rightFooter1">
                        <div><h4 class="h4" style={{ fontWeight: 'bold' }}>CUSTOMER SERVICES</h4></div>
                        <div style={{ paddingRight: '5px' }} className='customService'>
                            <ul><li><a className='text-white'>Shipping Policy</a></li>
                                <li><a className='text-white'>Return and Replace Policy</a></li>
                                <li><a className='text-white'>Cancellation Policy</a></li>
                                <li><a className='text-white'>Return and Replace Portal</a></li>
                                <li><a className='text-white'>Terms of Service</a></li></ul>
                        </div>
                    </div>
                </div>

                <div className='footBottom1'><p style={{ fontSize: '13px', fontFamily: 'Poppins,sans-serif', color: 'white' }}>© 2024 ZORO All Rights Reserved.</p></div>

    </>
  )
}

export default Footer
