import React from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import {Switch, Route, Redirect} from 'react-router-dom'
import Campaigns from './campaigns.js'
import Segments from './segments.js'

const Content = () => {

    return (
        <div className={css(styles.content)}>
            <Switch>
                <Route path="/campaigns">
                    <Campaigns/>
                </Route>
                <Route path="/segments">
                    <Segments/>
                </Route>
                <Route exact path="/">
                    <Redirect to={"/campaigns/sent"} />
                </Route>
            </Switch>
        </div>
)

}

export default Content

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
        padding: '20px 0px 20px 0px',
        
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