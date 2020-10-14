import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import DashContext from './dashContext.js'
import { Table } from "semantic-ui-react"


const Segments = () => {

    const CampaignData = useContext(DashContext)
    console.log("data:" + CampaignData)
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.titlerow)}>
                <div className={css(styles.title)}>Segments</div>
                <div className={css(styles.button)}>
                    <div className={css(styles.buttonText)}>New Segment</div>
                </div>
            </div>
            <div className={css(styles.content)}>
                <Table singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Subscribers</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {CampaignData.segments.map(el => {
                        return (
                        <Table.Row key={el.id}>
                            <Table.Cell>{el.id}</Table.Cell>
                            <Table.Cell>{el.name}</Table.Cell>
                            <Table.Cell>{el.subscribers_count}</Table.Cell>
                        </Table.Row>
                        );
                    })}
                    </Table.Body>
                </Table>
            </div>
            
        </div>
)

}

export default Segments

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red',
        color: "white"
    },
    blue: {
        backgroundColor: 'blue'
    },
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