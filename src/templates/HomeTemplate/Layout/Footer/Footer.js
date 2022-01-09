import React from 'react';
import { AppleOutlined, FacebookOutlined, RightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './Footer.css';


export default function Footer(props) {


    return (
        <footer style={{ backgroundColor: '#1b1b1b', color: '#999' }} className="pt-10 px-20 pb-5 text-coolGray-800 relative">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-4 md:grid-cols-5">
                <div className="flex flex-col space-y-4">
                    <h2 style={{ color: '#999' }} className="font-normal">EXCLUSIVE SERVICES</h2>
                    <div style={{ color: '#999' }} className="flex flex-col space-y-2 text-xs">
                        <NavLink to="/" className='text-gray-300'>Gucci Services</NavLink>
                        <NavLink to="/" className='text-gray-300'>Gucci Osteria Beverly Hills <br/> da Massimo Bottura</NavLink>
                        <NavLink to="/" className='text-gray-300'>Book An Appointment</NavLink>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 style={{ color: '#999' }} className="font-medium">NEED HELP?</h2>
                    <div className="flex flex-col space-y-2 text-xs text-coolGray-600">
                        <NavLink to="/" className='text-gray-300'>Contact Us</NavLink>
                        <NavLink to="/" className='text-gray-300'>Shipping Services</NavLink>
                        <NavLink to="/" className='text-gray-300'>Payment Options</NavLink>
                        <NavLink to="/" className='text-gray-300'>Returns & Exchanges</NavLink>
                        <NavLink to="/" className='text-gray-300'>Product Care</NavLink>
                        <NavLink to="/" className='text-gray-300'>FAQs</NavLink>
                        <NavLink to="/" className='text-gray-300'>Unsubscribe</NavLink>
                        <NavLink to="/" className='text-gray-300'>Sitemap</NavLink>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 style={{ color: '#999' }} className="font-normal">THE COMPANY</h2>
                    <div className="flex flex-col space-y-2 text-xs text-coolGray-600">
                        <NavLink to="/" className='text-gray-300'>About Gucci</NavLink>
                        <NavLink to="/" className='text-gray-300'>Gucci Equilibrium</NavLink>
                        <NavLink to="/" className='text-gray-300'>Code of Ethics</NavLink>
                        <NavLink to="/" className='text-gray-300'>Gucci Garden</NavLink>
                        <NavLink to="/" className='text-gray-300'>Careers</NavLink>
                        <NavLink to="/" className='text-gray-300'>Legal</NavLink>
                        <NavLink to="/" className='text-gray-300'>Privacy & Cookies</NavLink>
                        <NavLink to="/" className='text-gray-300'>Corporate Information</NavLink>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 style={{ color: '#999' }} className="font-normal">FIND US ON</h2>
                    <div className="flex flex-col space-y-2 text-xs">
                        <NavLink to="/" className='text-gray-300 hover:text-blue-700'>
                            <i class="fab fa-facebook-f mr-3"></i>
                            Facebook
                        </NavLink>
                        <NavLink to="/" className='text-gray-300'>
                            <i class="fab fa-twitter mr-2"></i>
                            Twitter 
                        </NavLink>
                        <NavLink to="/" className='text-gray-300'>
                            <i class="fab fa-instagram mr-2.5"></i>
                            Instagram
                        </NavLink>
                        <NavLink to="/" className='text-gray-300'>
                            <i class="fab fa-instagram mr-2.5"></i>
                            Instagram Beauty
                        </NavLink>
                        <NavLink to="/" className='text-gray-300 hover:text-red-700'>
                            <i class="fab fa-youtube-square mr-2.5"></i>
                            YouTube 
                        </NavLink>
                        <NavLink to="/" className='text-gray-300'>
                            <i class="fas fa-podcast mr-2.5"></i>
                            Gucci Postcast
                        </NavLink>
                        <NavLink to="/" className='text-gray-300 hover:text-red-700'>
                            <i class="fab fa-pinterest-p mr-3"></i>
                            Pinterst
                        </NavLink>
                        <NavLink to="#" className='text-gray-300 hover:text-yellow-300'>
                            <div className='snapchat'>
                                <i class="fab fa-snapchat-ghost mr-2.5"></i>
                                Snapchat
                                <img src="https://www.gucci.com/_ui/responsive/common/images/snapchat_code-desktop.png" alt="gucci_snapchat" style={{width:106,height:108, bottom:80,right:580}} className='absolute iconsnapchat' />
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 style={{ color: '#999' }} className="font-normal">SIGN UP FOR GUCCI UPDATES</h2>
                    <div className="flex flex-col space-y-2 text-xs text-coolGray-600">
                        <p>
                            By entering your email address below, you consent to receiving our <br/>newsletter with access to our latest collections, events and initiatives. <br/> More details on this are provided in our <NavLink to="/" className='underline-offset-1 underline text-gray-400'>Privacy Policy</NavLink>
                        </p>
                        <div>
                            <input type="email" placeholder='Email Address' required className='text-gray-400 bg-black p-1.5 relative' />
                            <RightOutlined className='absolute mt-2' style={{right:160}} />
                        </div>
                        <p>STORE LOCATOR</p>
                        <div>
                            <i className="fas fa-map-marker-alt absolute" style={{right:295,bottom:122,zIndex:10}}></i>
                            <input type="text" placeholder='   City, Region, Country' className='text-gray-400 bg-black p-1.5 relative' />
                            <RightOutlined className='absolute mt-2' style={{right:160}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 mt-20 text-xs">
                <span className="text-coolGray-600">© 2016 - 2020 Guccio Gucci S.p.A. - All rights reserved. SIAE LICENCE # 2294/I/1936 and 5647/I/1936</span>
                <button className='border-2 border-gray-600 px-2 py-3 rounded-xl text-xs hover:bg-white hover:text-gray-500 absolute font-bold' style={{bottom:30, right:250}}>
                    GUCCI
                </button>
            </div>
        </footer>

    )
}
