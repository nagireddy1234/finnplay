import { createReducer } from '@reduxjs/toolkit'
import { ILogin } from '../../interfaces/redux/login'
import { setLoading, userLogin, userLogout } from './actions'

const initialState: ILogin = {
    isAuthenticated: false,
    isLoading: false,
    userDetails: { userName: '' },
}

const loginReducer = createReducer(initialState, games => {
    games.addCase(setLoading, (state, { payload }) => {
        state.isLoading = payload
    }),
    games.addCase(userLogin.fulfilled, (state, { payload }) => {
        state.userDetails = payload?.userDetails
        state.isAuthenticated = true
    })
    games.addCase(userLogout, (state, ) => {
        state.isAuthenticated = false
    })
}) 

export default loginReducer
