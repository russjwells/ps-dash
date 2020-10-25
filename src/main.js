import React from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import SideMenu from './sideMenu.js'
import Content from './content.js'
import {BrowserRouter as Router} from 'react-router-dom'

const Main = () => {
    return (
    <div className={css(styles.main)}>
        <SideMenu />
        <Content />
    </div>
)

}

export default Main

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
        overflowY: 'scroll'
    },
    footer: {
        display:'flex',
        backgroundColor: '#0f0d08'
    }
})