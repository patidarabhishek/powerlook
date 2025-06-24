import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-light pt-5">
            <div className="container pb-4">
                <div className="row text-center text-md-start">
                    <div className="col-md-5 mb-4">
                        <div className="mb-3 d-flex align-items-start">
                            <i className="bi bi-award fs-3 me-3"></i>
                            <div>
                                <h6 className="mb-0 fw-bold">Premium Quality</h6>
                                <small>All the clothing products are made from 100% premium quality fabric.</small>
                            </div>
                        </div>
                        <div className="mb-3 d-flex align-items-start">
                            <i className="bi bi-shield-lock fs-3 me-3"></i>
                            <div>
                                <h6 className="mb-0 fw-bold">Secure Payments</h6>
                                <small>Highly Secured SSL-Protected Payment Gateway.</small>
                            </div>
                        </div>
                        <div className="mb-3 d-flex align-items-start">
                            <i className="bi bi-arrow-repeat fs-3 me-3"></i>
                            <div>
                                <h6 className="mb-0 fw-bold">7 Days Return</h6>
                                <small>Return or exchange the orders within 7 days of delivery.</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h5>Get Coupons & Offers</h5>
                        <p className="text-muted">You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
                        <form className="d-flex">
                            <input type="email" className="form-control me-2" placeholder="Your email address" required />
                            <button type="submit" className="btn btn-danger px-4">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row text-center text-md-start footer-link">
                    <div className="col-md-3">
                        <h6 className="">COMPANY</h6>
                        <ul className="list-unstyled small footer-link" style={{ lineHeight: '2' }}>
                            <li><Link to="/about_us" className="footer-link-li" >About us</Link></li>
                            <li><Link to="/blog" className="footer-link-li" >Blog</Link></li>
                            <li><Link to="/affiliate_program" className="footer-link-li" >Affiliate Program</Link></li>
                            {/* <li><Link to="/sitemap" className="footer-link-li" >Sitemap</Link></li> */}
                            <li><Link to="/store_locator" className="footer-link-li" >Stores</Link></li>
                            <li><Link to="/contact_us" className="footer-link-li" >Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="">NEED HELP FROM POWERLOOK</h6>
                        <ul className="list-unstyled small footer-link" style={{ lineHeight: '2' }}>
                            <li><NavLink to="/return_and_exchange" className="footer-link-li" >Returns, Exchange & Refunds</NavLink></li>
                            <li><NavLink to="/cancellation_policy" className="footer-link-li" >Cancellation Policy</NavLink></li>
                            <li><NavLink to="/shipping_policy" className="footer-link-li" >Shipping Policy</NavLink></li>
                            <li><NavLink to="/privacy_policy" className="footer-link-li" >Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms_and_conditions" className="footer-link-li" >Terms & Conditions</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="">SUPPORT</h6>
                        <ul className="list-unstyled small" style={{ lineHeight: '2' }}>
                            <NavLink to="mailto:support@powerlook.in"><li><i className="bi bi-envelope"></i> support@powerlook.in</li></NavLink>
                            <NavLink to="tel:+919696333000"><li><i className="bi bi-telephone"></i> +91 9696333000</li></NavLink>
                            <li><i className="bi bi-clock"></i> Mon - Sat: 10:30 AM - 06:00 PM</li>
                        </ul>
                    </div>
                    <div className="col-md-3" >
                        <h6 className="">REGISTERED OFFICE ADDRESS</h6>
                        <small style={{ color: '#808080' }} >
                            Powerlook Apparels Pvt Ltd<br />
                            Lotus Corporate Park Wing G02 - 1502, Ram Mandir Lane, off Western Express Highway,<br />
                            Goregaon, Mumbai, 400063
                        </small>
                    </div>
                </div>
                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center gap-3 mt-4">
                    <h6 className="mb-0">Experience The Powerlook App</h6>
                    <NavLink to="https://play.google.com/store/apps/details?id=com.powerlook.in.android" target="_blank"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                        height="40"
                    /></NavLink>
                    <NavLink to="https://apps.apple.com/in/app/powerlook-mens-fashion/id6504237550" target="_blank"><img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        height="40"
                    /></NavLink>
                </div>
                <hr className="my-4" />

                <div className="row ">

                    <div className="col-md-6 text-center d-flex align-items-center ">
                        <small className="mb-0">100% Secure Payment</small>
                        <div className="">
                            <img src="https://www.powerlook.in/icons/payments-logo.svg?aio=w-256" height="24" />
                        </div>
                    </div>
                    <div className="col-md-6 text-center d-flex justify-content-end align-items-center gap-3">
                        <p className="mb-0">Join The Power Squad</p>
                        <NavLink to="https://www.facebook.com/powerlookofficial" target="_blank" className="text-dark fs-5 social-icon">
                            <i className="bi bi-facebook"></i>
                        </NavLink>
                        <NavLink to="https://www.instagram.com/powerlookofficial" target="_blank" className="text-dark fs-5 social-icon">
                            <i className="bi bi-instagram"></i>
                        </NavLink>
                        <NavLink to="https://www.youtube.com/@powerlook6252" target="_blank" className="text-dark fs-5 social-icon">
                            <i className="bi bi-youtube"></i>
                        </NavLink>
                        <NavLink to="https://in.pinterest.com/powerlookpinterest/" target="_blank" className="text-dark fs-5 social-icon">
                            <i className="bi bi-pinterest"></i>
                        </NavLink>
                    </div>


                </div>

            </div>
        </footer>

    );
};

export default Footer;
