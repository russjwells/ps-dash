import React from 'react'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        </>
    )
}
export default App
