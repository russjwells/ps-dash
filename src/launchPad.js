import React, {useContext} from 'react'
import DashContext from './dashContext.js'
import LaunchPadItem from './launchPadItem.js'

const LaunchPad = () => {

    const Data = useContext(DashContext)
    return(
        <div class={{display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
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