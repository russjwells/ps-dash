import React, {useContext, useState} from 'react'
import DashContext from './dashContext.js'
import LaunchPadItemDetails from './launchPadItemDetails.js'
import {StyleSheet, css} from 'aphrodite'

const LaunchPadItem = (props) => {

    const [minimized, setMinimized] = useState(true)

    const Data = useContext(DashContext)
    const el = props.el
    const handleClick = () => {
        setMinimized(!minimized)
    }
    return(
        <div 
            onClick={handleClick}
            className={css(styles.tab)}
            style={{width: '120px', height: '30px', textAlign: 'center', overflow:'visible', backgroundColor: '#222', cursor: 'pointer', marginRight:'200px', hover: ''}}
        >
            🚀 {el.name.substr(0, el.name.indexOf(" "))} 
            {
                !minimized && <LaunchPadItemDetails el={el}/>
            }
        </div>
    )
}

export default LaunchPadItem

const styles = StyleSheet.create({
    tab: {
        ':hover': {
            backgroundColor: '#444'
        },
    }
})