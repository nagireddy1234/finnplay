import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogout } from '../../redux/login/actions'

const useHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(userLogout())
            navigate('/')
        }
    }
    return {
        funcs: handleLogout,
    }
}

export default useHeader
