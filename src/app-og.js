import React from 'react'
import ReactDOM from 'react-dom'
import {useContext, useState} from 'react'
import DashContext from './dashContext.js'
import {StyleSheet, css} from 'aphrodite'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'


const App = () => {
    const {isDataLoaded, setIsDataLoaded} = useContext(DashContext)
    console.log("IsDataLoaded: " + isDataLoaded)
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export default App

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red',
        color: "white"
    },
    blue: {
        backgroundColor: 'blue'
    },
    flex: {
        display: 'flex',
        flex: 1,
    },
    sidemenu: {
        display:'flex',
        flex: 0,
        backgroundColor: '#0f0d1f',
        color: '#d3d0ec',
        minWidth: '200px',
        maxWidth: '20%',
        flexDirection: "column"
    },
    smenuitem: {
        padding: '10px 10px'
    },
    content: {
        display:'flex',
        flex: 3,
        backgroundColor: 'light-yellow',
    },
    header: {
        display:'flex'
    },
    main: {
        display:'flex',
        flex: 1,
    },
    footer: {
        display:'flex',
        backgroundColor: '#0f0d08'
    }
})