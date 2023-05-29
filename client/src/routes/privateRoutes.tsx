import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, Outlet } from 'react-router-dom'
import { selectLoginReducer } from "../redux/login/selector"


const PrivateRoutes = () => {
    const { isAuthenticated } = useSelector(selectLoginReducer);

    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes