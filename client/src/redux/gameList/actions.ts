import { createAsyncThunk } from '@reduxjs/toolkit'
import { API, apiEndpoints } from '../../utils/ApiEndpoints'


export const fetchGames = createAsyncThunk(
    'gameslist/fetchGames',
    async (_, { rejectWithValue }) => {
        try {
            const result = await API.get(apiEndpoints.gamelist)
            console.log(result.data,"resultresult")
            return result.data;
        } catch (e) {
            rejectWithValue(e)
        }
    },
)
