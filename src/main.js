import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import SideMenu from './sideMenu.js'
import Content from './content.js'

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
    
    main: {
        display:'flex',
        flex: 1,
        overflowY: 'scroll'
    }
})