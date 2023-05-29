import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PrivateRoutes from "./routes/privateRoutes"
import PageNotFound from "./pages/pageNotFound"

const Login = lazy(() => import('./pages/login'))
const GameList = lazy(() => import('./pages/gamesList'))

const App = () => {
    return (
        <>
            <Suspense fallback={<div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path='*' element={<PageNotFound />} />
                        <Route element={<PrivateRoutes />}>
                            <Route path="/" element={<GameList />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default App
