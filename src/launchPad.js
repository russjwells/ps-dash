import React, {useContext} from 'react'
import DashContext from './dashContext.js'
import LaunchPadItem from './launchPadItem.js'

const LaunchPad = () => {

    const Data = useContext(DashContext)
    return(
        <div>
            {Data.campaigns.map(el => {
                    if (el.watch === true){
                        return (
                            <LaunchPadItem el={el} />
                        )
                    }
                })}
            </div>
    )
}

export default LaunchPad