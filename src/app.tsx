import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from 'util/routes'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((e, i) => (<Route key={`route-${i}`} path={e.path} element={e.element} />)
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default App