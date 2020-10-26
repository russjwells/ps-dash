import React, {useContext, useState} from 'react'
import DashContext from './dashContext.js'
import {StyleSheet, css} from 'aphrodite/no-important'

const LaunchPadItemDetails = (props) => {

    const [minimized, setMinimized] = useState(false)

    const Data = useContext(DashContext)
    const el = props.el
    if (props.el.status === "Sent"){
        return(
            <div style={{position: 'relative', left:'0px', top:'-222px', width: '300px', height:'198px', backgroundColor: '#222', color:'#FFF', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
                <div>🚀 {el.name}</div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', fontSize: '16pt'}}>
                    <div style={{fontSize: '24pt', color: 'lightblue'}}>
                        <div style={{fontSize: '8pt', color: 'lightblue'}}>Sent: </div>
                        <div>{el.stats && el.stats.sent}</div>
                    </div>
                    <div style={{fontSize: '24pt', color: 'lightgreen'}}>
                        <div style={{fontSize: '8pt', color: 'lightgreen'}}>Clicked: </div>
                        <div>{el.stats && el.stats.clicked}</div>
                    </div>
                </div>
                
                <div style={{color :'lightcoral'}}>
                    <div style={{fontSize: '8pt', color: 'lightcoral'}}>CTR: </div>
                    <div style={{fontSize: '16pt'}}>{el.stats && (el.stats.clicked/el.stats.sent).toFixed(4)*100 + "%"}</div>
                </div>
            </div>
        )
    } else {
        return(
            <div style={{position: 'relative', left:'0px', top:'-222px', width: '300px', height:'198px', backgroundColor: '#222', color:'#FFF', display: 'flex', flexDirection: 'column', justifyContent:'flex-start'}}>
                <div style={{paddingTop: '3px'}}>🚀 {el.name}</div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flex: '1'}}>
                    <div className={css(styles.button)}>
                        <div className={css(styles.buttonText)}>Launch</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default LaunchPadItemDetails

const styles = StyleSheet.create({
    container: {

    },
    button: {
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#742FCC',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '120px',
        height: '50px',
        
        borderRadius: '20px',
        ':hover': {
            backgroundColor: '#8942E3'
        },
    }
})