import React from 'react';
import './footer.css';
import logo from '../../images/Serving-Food-PH.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer id="myFooter">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center text-center">
                        <div className="col-sm-12 ">
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                        <div className="col">
                            <h5><Link to="/">Home</Link></h5>
                        </div>
                        <div className="col">
                            <h5><Link to="/signup">Register</Link></h5>
                        </div>
                        <div className="col">
                            <h5><Link to="/menu">Menu</Link></h5>
                        </div>
                        {/* <div className="col-sm-3">
                            <div className="social-networks">
                                <a href="!#" className="facebook"><i className="fa-brands fa-github"></i></a>
                                <a href="!#" className="facebook"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>© 2022 3alGahez </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;