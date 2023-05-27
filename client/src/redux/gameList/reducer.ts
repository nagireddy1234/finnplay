import { createReducer } from '@reduxjs/toolkit'
import { fetchGames } from "./actions"
import { IGames } from "../../interfaces/redux/games";

const initialState: IGames  = {
    data:[],
}

const gamesReducer = createReducer(initialState, games => {
    games.addCase(fetchGames.fulfilled, (state, { payload }) => {
        state.data = payload
    })
})

export default gamesReducer
