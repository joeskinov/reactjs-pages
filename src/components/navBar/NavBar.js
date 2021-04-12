import {
    useState
} from 'react';
import {
    Link
} from 'react-router-dom';
import Logo from './../../assets/logo.svg';

import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => setClick(false);
    return ( 
        <header className="site-header site-header__header-one" >
            <nav className="navbar navbar-expand-lg navbar-light header-navigation ">
                <div className="container ">
                    <div className="logo-box ">
                        <Link className="navbar-brand" to="/"><img src={Logo} className="main-logo" width="128" alt="MPA Logo" /></Link>
                        <div className="header__social"><Link to="https://twitter.com/minorityprogram"><i className="fab fa-twitter"></i></Link><Link to="https://www.facebook.com/MinorityProgrammers"><i className="fab fa-facebook-square"></i></Link><Link to="https://linkedin.com/company/minority-programmers/"><i className="fab fa-linkedin"></i></Link><Link to="https://www.instagram.com/minorityprogrammers/"><i className="fab fa-instagram"></i></Link></div>
                        <button className="menu-toggler" onClick={handleClick}><i className="fas fa-bars"></i></button>
                    </div>
                    <div className={click ? 'main-navigation show' : 'main-navigation hide'} style={{display: 'none' }}>
                        <ul className=" navigation-box">
                        <li style={{marginRight: '5%', }}>
                        <div className="connect-wallet-wrapper">
                            <button type="button" className="connect-walet" ><span className="connect-walet-text">Connect Wallet</span></button>
                        </div>
                        </li>
                        <li id="services-nav">
                            <Link to="/services">Services</Link>
                            <ul className="sub-menu"></ul>
                        </li>
                        <li id="events-nav"><Link to="/events">Events</Link></li>
                        <li id="learn-nav">
                            <Link to="/learn">Learn</Link>
                            <ul className="sub-menu"></ul>
                        </li>
                        <li id="join-nav">
                            <Link to="/join">Join</Link>
                            <ul className="sub-menu"></ul>
                        </li>
                        </ul>
                    </div>
                    <div className="right-side-box"><Link to="https://discord.gg/zGBrEd7UCn" target="_blank" className="header__search-btn search-popup__toggler search-toggle"><i className="fas fa-search"></i></Link></div>
                </div>
            </nav>
            <div className="site-header__decor">
                <div className="site-header__decor-row">
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-1"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-2"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-3"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar