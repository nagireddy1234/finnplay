import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('./pages/login'))
const GameList = lazy(() => import('./pages/gamesList'))

const App = () => {
    return (
        <>
            <Suspense fallback={<div style={{height:'100vh', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>Loading...</div>}>
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
