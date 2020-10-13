import React from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import {Link} from 'react-router-dom'

const SideMenu = () => {

    return (
        <div className={css(styles.sidemenu)}>
            <Link to="/campaigns" className={css(styles.smenulink)}><div className={css(styles.smenuitem)}>Campaigns</div></Link>
            <Link to="/segments" className={css(styles.smenulink)}><div className={css(styles.smenuitem)}>Segments</div></Link>
        </div>
    )

}

export default SideMenu

const styles = StyleSheet.create({
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
        flexDirection: "column",
    },
    smenuitem: {
        padding: '20px 20px'
    },
    smenulink: {
        textDecoration: 'none',
        color: '#fff'
    }
})