import { createReducer } from '@reduxjs/toolkit'
import { loginContainer } from '../../interfaces/redux/login'

const initialState: loginContainer = {
    isAuthenticated: false,
}

const gamesReducer = createReducer(initialState, games => {})

export default gamesReducer
