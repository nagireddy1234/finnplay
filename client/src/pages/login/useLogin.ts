import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading, userLogin } from '../../redux/login/actions'
import { AppDispatch } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [userForm, setUserForm] = useState({ userName: '', password: '' })

    const [isShowPassword, setIsShowPassword] = useState(true)

    const togglePassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserForm({ ...userForm, userName: e.target.value })
    }

    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserForm({ ...userForm, password: e.target.value })
    }

    const handleuserLogin = async () => {
        dispatch(setLoading(true))
        const { payload } = await dispatch(userLogin(userForm))
        if ((payload as any)?.status === 200) {
            navigate('/')
        }
        dispatch(setLoading(false))
    }

    return {
        consts: {
            userForm,
            isShowPassword
        },
        funcs: {
            setUserName,
            setPassword,
            handleuserLogin,
            togglePassword,
        },
    }
}
