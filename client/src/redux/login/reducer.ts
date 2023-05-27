import { createReducer } from '@reduxjs/toolkit'
import { ILogin } from '../../interfaces/redux/login'
import { setLoading } from "./actions"

const initialState: ILogin = {
    isAuthenticated: false,
    isLoading:false,
}

const loginReducer = createReducer(initialState, games => {
    
    games.addCase(setLoading, (state, { payload }) => {
        state.isLoading = payload
    })
})

export default loginReducer
