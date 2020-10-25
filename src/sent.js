import React, {useContext} from 'react'
import { Table } from "semantic-ui-react"
import DashContext from './dashContext.js'
import {StyleSheet, css} from 'aphrodite/no-important'
import Toggle from 'react-toggle'
import './reacttoggle.css'
const Sent = () => {
    const Data = useContext(DashContext)
    const toggleWatch = () => {

    }
    return (
        <Table className={css(styles.editTable)}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell> </Table.HeaderCell>
                    <Table.HeaderCell>Campaign</Table.HeaderCell>
                    <Table.HeaderCell>SMS</Table.HeaderCell>
                    <Table.HeaderCell>Media</Table.HeaderCell>
                    <Table.HeaderCell># Sent</Table.HeaderCell>
                    <Table.HeaderCell>CTR</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {Data.campaigns.map(el => {
                    if (el.status === 'Sent'){
                        return (
                            <Table.Row key={el.id} style={{height: '80px'}}>
                                <Table.Cell style={{width: '30px', textAlign: 'center'}}>
                                <Toggle
                                    defaultChecked={el.watch===true}
                                    icons={{
                                        checked: <span style={{fontSize:'10px'}}>🔎</span>, 
                                        unchecked: <span style={{fontSize:'10px'}}>🚀</span>,
                                    }}
                                    onChange={toggleWatch} 
                                />
                                </Table.Cell>
                                <Table.Cell style={{width: '20%', textAlign: 'center'}}>{el.name}</Table.Cell>
                                <Table.Cell style={{width: '40%'}}><code>{el.text}</code></Table.Cell>
                                <Table.Cell>
                                    {el.media && <div><img src={el.media} alt="smsPic" width="80px" height="80px" /></div>}
                                </Table.Cell>
                                
                                <Table.Cell style={{ textAlign: 'center'}}>
                                    {el.stats && el.stats.sent}
                                </Table.Cell>
                                <Table.Cell style={{width: '40px', textAlign: 'center'}}>
                                    {el.stats && (el.stats.clicked/el.stats.sent).toFixed(4)*100 + "%"}
                                </Table.Cell>
                            </Table.Row>
                            )
                    }
                })}
            </Table.Body>
        </Table>
    )
}
export default Sent

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    editArea:{
        display: 'block',
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
    editTitle:{
        width: '360px',
        height: '30px',
        border: '3px solid #cccccc',
        padding: '5px',
        fontSize: '16px',
        margin: '4px 2px 2px 4px'
    },
    editMediaLink:{
        width: '246px',
        height: '30px',
        border: '3px solid #cccccc',
        padding: '5px',
        fontSize: '16px',
        marginLeft: '4px',
    },
    editMediaImg:{
        border: '3px solid #cccccc',
    },
    smsAttachImg:{
        border: '0px solid #cccccc',
    },
    editSMS:{
        width: '360px',
	    height: '100px',
	    border: '3px solid #cccccc',
        padding: '5px',
        resize: 'none',
        margin: '4px 2px 2px 4px',
        fontSize: '16px',
    },
    editTag:{
        height: '30px',
        width: '100px',
        border: '3px solid #cccccc',
        padding: '5px',
        fontSize: '16px',
        margin: '4px 2px 2px 4px'
    },
    editTargetSelect:{
        height: '40px',
        width: '380px',
        border: '3px solid #cccccc',
        padding: '5px',
        margin: '4px 2px 2px 4px',
        fontSize: '16px',
    },
    editTable: {
        margin: 'auto',
        marginTop: '10px',
    },
    editButton:{
        margin: 'auto',
        marginTop: '30px',
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
    livePreview:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
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
    content: {
        display:'flex',
        flex: 1,
        backgroundColor: 'light-yellow',
        padding: '20px',
    }
})