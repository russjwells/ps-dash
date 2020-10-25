import React, {useContext, useState} from 'react'
import DashContext from './dashContext.js'

const LaunchPadItem = (props) => {

    const [minimized, setMinimized] = useState(false)

    const Data = useContext(DashContext)
    const el = props.el
    return(
        <div style={{width: '120px', height: '30px', textAlign: 'left', overflow:'visible', backgroundColor: '#222', cursor: 'pointer', textAlign: 'center'}}>
            🚀 {el.name.substr(0, el.name.indexOf(" "))} 
            <div style={{position: 'relative', left:'0px', top:'-222px', width: '300px', height:'200px', backgroundColor: '#222', color:'#FFF', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
                <div>🚀 {el.name}</div>
                <div>Sent: {el.stats && el.stats.sent}</div>
                <div>Clicked: {el.stats && el.stats.clicked}</div>
                <div>Ratio: {el.stats && (el.stats.clicked/el.stats.sent).toFixed(4)*100 + "%"}</div>
            </div>
        </div>
    )
}

export default LaunchPadItem