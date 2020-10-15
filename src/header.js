import React from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <div style={{backgroundColor: '#3D2090', color: 'white', fontWeight: 'bold', fontSize:'18pt', padding:'20px'}}>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/campaigns/sent'>✉️ Postscript</Link>
        </div>
    )

}

export default Header

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
    link: {
        textDecoration: 'none',
        color: '#fff'
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