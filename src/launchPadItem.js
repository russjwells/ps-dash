import React, {useContext, useState} from 'react'
import DashContext from './dashContext.js'
import LaunchPadItemDetails from './launchPadItemDetails.js'

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
            style={{width: '120px', height: '30px', textAlign: 'left', overflow:'visible', backgroundColor: '#222', cursor: 'pointer', textAlign: 'center', marginRight:'200px'}}
        >
            🚀 {el.name.substr(0, el.name.indexOf(" "))} 
            {
                !minimized && <LaunchPadItemDetails el={el}/>
            }
        </div>
    )
}

export default LaunchPadItem