import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { API, apiEndpoints } from '../../utils/ApiEndpoints'

interface UserData {
    userName: string
    password: string
}

export const userLogin = createAsyncThunk(
    'login/userLogin',
    async (userData: UserData, { rejectWithValue }) => {
        try {
            const result = await API.post(apiEndpoints.login, userData)
            return {
                status: result.status,
                message: result.data.message,
                userDetails: result.data.userDetails,
            }
        } catch (e) {
            rejectWithValue(e)
            window.alert('Enter correct credentials')
        }
    },
)

export const userLogout = createAction('login/userLogout')

export const setLoading = createAction<boolean>('login/setLoading')
