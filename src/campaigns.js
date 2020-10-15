import React, {useContext, useState} from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite/no-important'
import DashContext from './dashContext.js'
import { Table } from "semantic-ui-react"
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import SwitchButton from './switchButton.js'


const Campaigns = () => {
    const [pageState, setPageState] = useState("Sent")
    const CampaignData = useContext(DashContext)
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.titlerow)}>
                <div className={css(styles.title)}>Campaigns</div>
                <SwitchButton leftLink="/campaigns/sent" rightLink="/campaigns/preview" leftLabel="Sent" rightLabel="Preview" />
                <Link to="/campaigns/edit/new" onClick={() => setPageState("New")} className={css(styles.link)}>
                <div className={css(styles.button)}>
                    <div className={css(styles.buttonText)}>New Campaign</div>
                </div>
                </Link>
            </div>
            <div className={css(styles.content)}>
                <Switch>
                    <Route path="/campaigns/sent">
                        <Table singleLine>
                            <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Campaign</Table.HeaderCell>
                                <Table.HeaderCell>SMS</Table.HeaderCell>
                                <Table.HeaderCell>Media</Table.HeaderCell>
                                <Table.HeaderCell>#</Table.HeaderCell>
                                <Table.HeaderCell>CTR</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            {CampaignData.campaigns.map(el => {
                                 if (el.status === 'Sent'){
                                    return (
                                        <Table.Row key={el.id}>
                                            <Table.Cell style={{width: '20%'}}>{el.name}</Table.Cell>
                                            <Table.Cell style={{width: '20%'}}><code>{el.text}</code></Table.Cell>
                                            <Table.Cell style={{width: '40px'}}>
                                                {el.media && <img src={el.media} width="50px" height="50px" />}
                                            </Table.Cell>
                                            
                                            <Table.Cell style={{width: '40px'}}>{el.segment_id}</Table.Cell>
                                        </Table.Row>
                                        )
                                 }
                            })}
                            </Table.Body>
                        </Table>
                    </Route>
                    <Route path="/campaigns/preview">
                    <Table singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Campaign</Table.HeaderCell>
                        <Table.HeaderCell>SMS</Table.HeaderCell>
                        <Table.HeaderCell>Media</Table.HeaderCell>
                        <Table.HeaderCell>Segment</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {CampaignData.campaigns.map(el => {
                        if (el.status === 'Preview'){
                            return (
                            <Table.Row key={el.id}>
                                <Table.Cell style={{width: '20%'}}>{el.name}</Table.Cell>
                                <Table.Cell style={{width: '20%'}}><code>{el.text}</code></Table.Cell>
                                <Table.Cell style={{width: '40px'}}>
                                    {el.media && <img src={el.media} width="50px" height="50px" />}
                                </Table.Cell>
                                <Table.Cell style={{width: '40px'}}>{JSON.toString(CampaignData.segments[el.segment_id])}</Table.Cell>
                            </Table.Row>
                            )
                        }
                    })}
                    </Table.Body>
                </Table>
                    </Route>
                    <Route path="/edit">
                    
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