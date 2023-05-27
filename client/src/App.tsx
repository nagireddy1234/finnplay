import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from './redux/store'
import { selectGamesList } from './redux/login/selector'
import { fetchGames } from './redux/login/actions'
import { Helmet } from 'react-helmet'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import {
    getDataFromLocalStorage,
    localStorageKeys,
    saveDataInLocalStorage,
} from './utils/localStorage'

const Login = lazy(() => import('./pages/login'))
const GameList = lazy(() => import('./pages/gamesList'))

const App = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/gamelist" element={<GameList />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default App
