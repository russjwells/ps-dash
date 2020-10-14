import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import {Link} from 'react-router-dom'

const SideMenu = () => {
    const [page, setPage] = useState("Campaigns")
    console.log(page)
    let campaignStyle = css(styles.smenuitem)
    let segmentStyle = css(styles.smenuitem)
    if (page === "Campaigns"){
        campaignStyle = css(styles.smenuitemcurrent)
    }
    if (page === "Segments"){
        segmentStyle = css(styles.smenuitemcurrent)
    }
    return (
        <div className={css(styles.sidemenu)}>
            <Link to="/campaigns" onClick={()=>setPage("Campaigns")} className={css(styles.smenulink)}><div className={campaignStyle}>Campaigns</div></Link>
            <Link to="/segments" onClick={()=>setPage("Segments")} className={css(styles.smenulink)}><div className={segmentStyle}>Segments</div></Link>
        </div>
    )

}

export default SideMenu

const styles = StyleSheet.create({
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
        flexDirection: "column",
        
    },
    smenuitemcurrent: {
        
        padding: '20px 20px',
        borderBottom: '1px solid #742FCC',
        backgroundColor: 'purple',
    },
    smenuitem: {
        padding: '20px 20px',
        borderBottom: '1px solid #742FCC',
        backgroundColor: '8269CC',
        ':hover': {
            backgroundColor: '#675EAA'
        }
    },
    smenulink: {
        textDecoration: 'none',
        color: '#fff'
    }
})