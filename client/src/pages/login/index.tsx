import React,{FC} from 'react'
import Input from '../../components/common/input'
import styles from './index.module.scss'
import Button from '../../components/common/button'
import { useLogin } from './useLogin'
import Logo from '../../assets/images/logo.png'
import { useSelector } from "react-redux"
import { selectGamesList } from "../../redux/login/selector"
import { EyeIcon } from "../../assets/icons"

const Login = () => {

//    const data = useSelector(selectGamesList)
    const {
        funcs: { setUserName, setPassword, handleuserLogin,userForm },
    } = useLogin()

    const togglePassword = () => {
        // if (type === 'password') {
        //     type = 'text'
        // } else {
        //     type = 'password'
        // }
        console.log("typetype")
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
            <div className={styles.imgContainer}>
                <img src={Logo} alt='logo' />
                </div>
                <Input placeholder="Login" onChange={setUserName} value={userForm.userName}/>
                <Input
                    placeholder="Password"
                    type="password"
                    onChange={setPassword}
                    value={userForm.password}
                    icon ={<EyeIcon style={{ cursor: 'pointer' }} onClick={togglePassword} />}
                />
                <Button onClick={handleuserLogin} text="Login" />
            </div>
        </div>
    )
}

export default Login
