import React from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'

const SideMenu = () => {

    return (
        <div className={css(styles.sidemenu)}>
            <div className={css(styles.smenuitem)}>Campaigns</div>
            <div className={css(styles.smenuitem)}>Segments</div>
            <div className={css(styles.smenuitem)}>More</div>
        </div>
    )

}

export default SideMenu

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