import React, {useContext, useState} from 'react'
import DashContext from './dashContext.js'
import LaunchPadItemDetails from './launchPadItemDetails.js'

const LaunchPadItem = (props) => {

    const [minimized, setMinimized] = useState(false)

    const Data = useContext(DashContext)
    const el = props.el
    return(
        <div style={{width: '120px', height: '30px', textAlign: 'left', overflow:'visible', backgroundColor: '#222', cursor: 'pointer', textAlign: 'center'}}>
            🚀 {el.name.substr(0, el.name.indexOf(" "))} 
            {<LaunchPadItemDetails el={el}/>
            }
        </div>
    )
}

export default LaunchPadItem