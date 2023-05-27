import { createSelector } from '@reduxjs/toolkit'

import { Selector } from 'react-redux'
import { IAppState } from '../../interfaces/redux/appSate'
import { StoreContainer } from '../../interfaces/redux/login'

export const selectStoreReducer: Selector<IAppState, StoreContainer> = games =>
    games.gamesReducer

export const selectGamesList = createSelector(selectStoreReducer, data => ({
    ...data,
}))
