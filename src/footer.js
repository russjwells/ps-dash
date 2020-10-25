import React, {useContext} from 'react'
import {StyleSheet, css} from 'aphrodite'
import DashContext from './dashContext.js'
import LaunchPad from './launchPad.js'

const Footer = () => {
    const Data = useContext(DashContext)
    return (
        <div style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding:'10px', flexDirection: "row", display: "flex", justifyContent: 'flex-start'}}>
            <div style={{marginRight: '75px', marginLeft: '25px'}}>
            🚀 Launch Pad 
            </div>
            <LaunchPad />
            <div style={{marginLeft:'auto'}}>
            Happy Sending ✉️💨
            </div>
        </div>
    )

}

export default Footer

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
        backgroundColor: '#0f0d08',
        borderTop: '1px solid #534F5F'
    }
})