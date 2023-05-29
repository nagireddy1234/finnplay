import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { API, apiEndpoints } from '../../utils/ApiEndpoints'
import { IGroup, IProvider } from '../../interfaces/redux/data'

export const setShowNumberOfColumns = createAction<number>(
    'gameList/setShowNumberOfColumns',
)

export const filterGames = createAction<string>('gameList/filterGames')
export const filterProvider = createAction<IProvider>('gameList/filterProvider')
export const filterGroups = createAction<IGroup>('gameList/filterGroups')
export const setsortingGameValue = createAction<string>('gameList/sortingGames')

export const fetchGames = createAsyncThunk(
    'gamesList/fetchGames',
    async (_, { rejectWithValue }) => {
        try {
            const result = await API.get(apiEndpoints.gamelist)
            console.log(result.data, 'resultresult')

            return result.data
        } catch (e) {
            rejectWithValue(e)
        }
    },
)
