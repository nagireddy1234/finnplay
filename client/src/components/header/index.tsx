import React from 'react';
import './header.scss';
import NavbarLogo from '../../assets/images/logo.png';

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="header_container">
            <div className="left">
                <img src={NavbarLogo} alt='logo' />
            </div>
            <div className="right">
                <a className="player" href="#"> Player </a>
                <a href="#">Log out</a>
            </div>
        </div>
    )
}

export default Header