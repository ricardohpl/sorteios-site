import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout'

import Home from './Home/Home'
import Names from './Names/Names'
import NotFound from './NotFound'
import Numbers from './Numbers/Numbers'

// import { AnimatePresence } from 'framer-motion'


const NavRouter = () => {

    const location = useLocation()

    return (
        // <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route
                path="/"
                element={ <Home /> }
            />
            <Route
                path="/names"
                element={ <Layout > <Names /> </Layout> }
            />
            <Route
                path="/numbers"
                element={ <Layout > <Numbers /> </Layout> }
            />
            <Route
                path="/*"
                element={ <Layout > <NotFound /> </Layout> }
            />
        </Routes>
        // </AnimatePresence>
    )
}

export default NavRouter