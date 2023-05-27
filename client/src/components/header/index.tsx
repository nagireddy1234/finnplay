import React from 'react';
import NavbarLogo from '../../assets/images/logo.png';
import styles from './index.module.scss'
import { UserIcon } from "../../assets/icons";

type Props = {}

const Header = (props: Props) => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <img src={NavbarLogo} alt='logo' />
            </div>
            <div className={styles.right}>
                <p > Player </p>
                <div className={styles.logOut}>
                <UserIcon />
                <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Header