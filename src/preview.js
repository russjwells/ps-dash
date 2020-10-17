import React, {useContext} from 'react'
import { Table } from "semantic-ui-react"
import DashContext from './dashContext.js'
const Preview = () => {
    const CampaignData = useContext(DashContext)
    return (
        <Table singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Campaign</Table.HeaderCell>
                        <Table.HeaderCell>SMS</Table.HeaderCell>
                        <Table.HeaderCell >Media</Table.HeaderCell>
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
                                <Table.Cell style={{width: '40px'}}>{CampaignData.segments[el.segment_id] && CampaignData.segments[el.segment_id].name}</Table.Cell>
                            </Table.Row>
                            )
                        }
                    })}
                    </Table.Body>
                </Table>
    )
}
export default Preview