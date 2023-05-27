import { createSelector } from '@reduxjs/toolkit'

import { Selector } from 'react-redux'
import { IAppState } from '../../interfaces/redux/appSate'
import { IGames } from "../../interfaces/redux/games"

export const selectGameReducer: Selector<IAppState, IGames> = games =>
    games.gamesReducer

export const selectGamesList = createSelector(selectGameReducer, data => ({
    ...data,
}))
