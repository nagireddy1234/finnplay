import { createSelector } from '@reduxjs/toolkit'

import { Selector } from 'react-redux'
import { IAppState } from '../../interfaces/redux/appSate'
import { ILogin } from '../../interfaces/redux/login'

export const selectLoginReducer: Selector<IAppState, ILogin> = games =>
    games.loginReducer

export const selectLogin = createSelector(selectLoginReducer, data => ({
    ...data,
}))
