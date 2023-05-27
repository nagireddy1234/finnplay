import React from 'react'
import Header from '../../components/header'
import Input from '../../components/common/input'
import styles from './index.module.scss'
import Button from '../../components/common/button'
import { useLogin } from './useLogin'

const Login = () => {
    const {
        funcs: { setUserName, setPassword, handleuserLogin },
    } = useLogin()

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <Input placeholder="Enter username" onChange={setUserName} />
                <Input
                    placeholder="Enter password"
                    type="password"
                    onChange={setPassword}
                />
                <Button onClick={handleuserLogin} text="Login" />
            </div>
        </div>
    )
}

export default Login
