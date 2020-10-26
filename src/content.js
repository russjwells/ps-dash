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
    content: {
        display:'flex',
        flex: 3,
        backgroundColor: 'light-yellow',
        padding: '20px 0px 20px 0px',
        
    }
})