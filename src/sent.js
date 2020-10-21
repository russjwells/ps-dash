import React, {useContext} from 'react'
import { Table } from "semantic-ui-react"
import DashContext from './dashContext.js'
const Sent = () => {
    const Data = useContext(DashContext)
    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
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
                            <Table.Row key={el.id}>
                                <Table.Cell style={{width: '20%', textAlign: 'center'}}>{el.name}</Table.Cell>
                                <Table.Cell style={{width: '20%'}}><code>{el.text}</code></Table.Cell>
                                <Table.Cell>
                                    {el.media && <div><img src={el.media} alt="smsPic" width="50px" height="50px" /></div>}
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