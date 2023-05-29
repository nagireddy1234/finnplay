import React from 'react'
import { useNavigate } from 'react-router-dom'

const useHeader = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/')
        }
    }
    return {
        funcs: handleLogout,
    }
}

export default useHeader
