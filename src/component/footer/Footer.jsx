import React from 'react'
import Container from '../../utilis/Container'
import './Footer.scss'
import {ImFacebook2} from "react-icons/im"
import {FaTwitterSquare} from 'react-icons/fa'

export default function Footer() {
  return (
    <>
        <Container>
            <div className='footer'>
                <div className='footer__top'>
                    <div>
                            <h3>Buy</h3>
                        <ul>
                            <li>Registration</li>
                            <li>eBay Money Back Guarantee</li>
                            <li>Bidding & buying help</li>
                            <li>Stores</li>
                            <li>eBay for Charity</li>
                            <li>Charity Shop</li>
                            <li>Seasonal Sales and events</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Sell</h3>
                        <ul>
                            <li>Start selling</li>
                            <li>How to sell</li>
                            <li>Business sellers</li>
                            <li>Affiliates</li>
                        </ul>
                        <h3>Tools & apps</h3>
                        <ul>
                            <li>Developers</li>
                            <li>Security center</li>
                            <li>Site map</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Stay connected</h3>
                        <ul>
                            <li><ImFacebook2/></li>
                            <li><FaTwitterSquare/></li>
                        </ul>
                    </div>
                    <div>
                        <h3>About eBay</h3>
                        <ul>
                            <li>Company info</li>
                            <li>News</li>
                            <li>Investors</li>
                            <li>Careers</li>
                            <li>Diversity & Inclusion</li>
                            <li>Global Impact</li>
                            <li>Advertise with us</li>
                            <li>Policies</li>
                            <li>Verified Rights Owner (VeRO) Program</li>
                            <li>eCI Licenses</li>
                            <li>Government relations</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Help & Contact</h3>
                        <ul>
                            <li>Seller Center</li>
                            <li>Contact Us</li>
                            <li>eBay Returns</li>
                        </ul>
                        <h3>Community</h3>
                        <ul>
                            <li>Announcements</li>
                            <li>eBay Community</li>
                            <li>eBay for Business Podcast</li>
                        </ul>
                        <h3>eBay Sites</h3>
                        <ul>
                            <select>
                                <option value="footer_select">1</option>
                                <option value="footer_select">2</option>
                                <option value="footer_select">3</option>
                            </select>
                        </ul>
                    </div>
                </div>
                <div className='footer__bottom'></div>
            </div>
        </Container>   
    </>
  )
}
