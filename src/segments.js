import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import DashContext from './dashContext.js'


const Segments = () => {
    const CampaignData = useContext(DashContext)
    return (
        <div className={css(styles.content)}>
            <div className={css(styles.titlerow)}>
                <h2>Segments</h2>
                <button>+ New</button>
            </div>
            <div>
                {JSON.stringify(CampaignData)}
            </div>
            {//data.Campaigns[0]
            }
        </div>
    )

}

export default Segments

const styles = StyleSheet.create({
    
    flex: {
        display: 'flex',
        flex: 1,
    },
    titlerow: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '50px'
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
        padding: '20px'
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