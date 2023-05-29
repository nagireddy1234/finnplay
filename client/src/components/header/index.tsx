import React from 'react';
import NavbarLogo from '../../assets/images/logo.png';
import styles from './index.module.scss'
import { UserIcon } from "../../assets/icons";
import { useSelector } from "react-redux";
import { selectLoginData } from "../../redux/login/selector";
import useHeader from "./useHeader";

const Header = () => {
    const { userDetails } = useSelector(selectLoginData);
    const {funcs: handleLogout} = useHeader();
   

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={NavbarLogo} alt='logo' />
            </div>
            <div className={styles.right}>
                <p > {userDetails.userName} </p>
                <div className={styles.logOut} onClick={handleLogout}>
                    <UserIcon />
                    <button >Log out</button>
                </div>
            </div>
        </div>
    )
}

export default Header