import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import DashContext from './dashContext.js'

const Footer = () => {
    const Data = useContext(DashContext)
    return (
        <div style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding:'10px', flexDirection: "row", display: "flex", justifyContent: 'space-between'}}>
            <div >
            🚀 Launch Pad 
            </div>
            <div>
            {Data.campaigns.map(el => {
                    if (el.watch === true){
                        return (
                            <div style={{width: '120px', height: '30px', textAlign: 'left', overflow:'visible', backgroundColor: '#222', cursor: 'pointer', textAlign: 'center'}}>
                                🚀 {el.name.substr(0, el.name.indexOf(" "))} 
                                <div style={{position: 'relative', left:'0px', top:'-222px', width: '300px', height:'200px', backgroundColor: '#222', color:'#FFF'}}>
                                    content
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div style={{textAlign:"end"}}>
            Happy Sending ✉️💨
            </div>
        </div>
    )

}

export default Footer

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
        backgroundColor: '#0f0d08',
        borderTop: '1px solid #534F5F'
    }
})