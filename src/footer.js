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
