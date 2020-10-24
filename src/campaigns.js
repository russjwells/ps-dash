import React, {useContext, useState} from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite/no-important'
import DashContext from './dashContext.js'
import { Table } from "semantic-ui-react"
import {Link} from 'react-router-dom'
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import SwitchButton from './switchButton.js'
import Sent from './sent.js'
import Preview from './preview.js'
import Edit from './edit.js'
import New from './new.js'


const Campaigns = () => {
    let history = useHistory()
    const [pageState, setPageState] = useState("Sent")
    const { campaigns, setCampaigns } = useContext(DashContext)
    const createCampaign = () => {
        setPageState("New")
        const NewCampaign = {
            "id": campaigns.length+1,
            "name": "New Campaign",
            "text": "",
            "tags": {
                "shop_link" : "http://",
                "first_name" : "",
                "shop_name" : ""
              },
              "status": "Preview",
              "segment_id": 1,
              "media": null,
              "stats": null
            }
        
        const NewCampaigns = campaigns.slice()
        NewCampaigns.push(NewCampaign)
        setCampaigns(NewCampaigns)
        history.push("/campaigns/edit/"+(campaigns.length+1))
    }
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.titlerow)}>
                <div className={css(styles.title)}>Campaigns</div>
                <SwitchButton leftLink="/campaigns/sent" rightLink="/campaigns/preview" leftLabel="Sent" rightLabel="Preview" />
                <Link to={"#"} onClick={createCampaign} className={css(styles.link)}>
                    <div className={css(styles.button)}>
                        <div className={css(styles.buttonText)}>New Campaign</div>
                    </div>
                </Link>
            </div>
            <div className={css(styles.content)}>
                <Switch>
                    <Route path="/campaigns/sent">
                        <Sent />
                    </Route>
                    <Route path="/campaigns/preview">
                        <Preview />
                    </Route>
                    <Route path="/campaigns/edit/:id">
                        <Edit />
                    </Route>
                    <Route path="/campaigns/new">
                        <New />
                    </Route>
                    <Route exact path="/campaigns">
                        <Redirect to={"/campaigns/sent"} />
                    </Route>
                </Switch>
            </div>
        </div>
)

}

export default Campaigns

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    flex: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titlerow: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '50px'
    },
    title: {
        color: '#70F0D1F',
        fontSize:'24pt',
        fontWeight:'bold',
        marginLeft: '20px',
        marginTop: '10px'
    },
    switch: {
        display:'flex',
        flexDirection: 'row',
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    },
    lbutton: {
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#742FCC',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '160px',
        height: '50px',
        borderRadius: '20px 0px 0px 20px',
        ':hover': {
            backgroundColor: '#8942E3'
        }
    },
    lbuttonoff: {
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#333',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '160px',
        height: '50px',
        borderColor: '#742FCC',
        borderRadius: '20px 0px 0px 20px',
        ':hover': {
            backgroundColor: '#444'
        }
    },
    rbutton: {
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#742FCC',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '160px',
        height: '50px',
        borderRadius: '0px 20px 20px 0px',
        ':hover': {
            backgroundColor: '#8942E3'
        }
    },
    rbuttonoff: {
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#333',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '160px',
        height: '50px',
        borderRadius: '0px 20px 20px 0px',
        ':hover': {
            backgroundColor: '#444'
        }
    },
    button: {
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#742FCC',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '160px',
        height: '50px',
        borderRadius: '20px',
        ':hover': {
            backgroundColor: '#8942E3'
        }
    },
    buttonText: {
        color: 'white'
    },
    buttonTextOff: {
        color: 'white',
        ':hover': {
            color: 'white',
        }
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
        flex: 1,
        backgroundColor: 'light-yellow',
        padding: '20px',
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