import React, {useContext, useState} from 'react'
import DashContext from './dashContext.js'
import {StyleSheet, css} from 'aphrodite/no-important'
import { Dropdown, TableCell, TableHeader, TableRow } from 'semantic-ui-react'
import './smartphone.scss'
import './texting.scss'
import {useParams} from 'react-router-dom'
import { Table } from "semantic-ui-react"

const Edit = () => {
    const Data = useContext(DashContext)
    let Params = useParams()
    const [CampaignId, setCampaignId] = useState(Params.id)
    const [CampaignTitle, setCampaignTitle] =useState(Data.campaigns[Params.id-1].name)
    const [smsText, setSmsText] = useState(Data.campaigns[Params.id-1].text)
    const [displayText, setDisplayText] = useState(smsText)
    const [media, setMedia] = useState(Data.campaigns[Params.id-1].media)
    const [shop_linkTag, setShop_linkTag] = useState(Data.campaigns[Params.id-1].tags && Data.campaigns[Params.id-1].tags.shop_link)
    const [first_nameTag, setFirst_nameTag] = useState(Data.campaigns[Params.id-1].tags && Data.campaigns[Params.id-1].tags.first_name)
    const [shop_nameTag, setShop_nameTag] = useState(Data.campaigns[Params.id-1].tags && Data.campaigns[Params.id-1].tags.shop_name)
    const [TargetSegmentId, setTargetSegmentId] = useState(Data.campaigns[Params.id-1].segment_id && Data.campaigns[Params.id-1].segment_id)

    const handleSMSChange = (event) => {
        setSmsText(event.target.value);
    }

    const handleMediaChange = (event) => {
        setMedia(event.target.value);
    }
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.editArea)}>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <b>Title</b>
                            </Table.Cell>
                            <Table.Cell>
                                <input className={css(styles.editTitle)}
                                    defaultValue={CampaignTitle}
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <b>Tags</b>
                            </Table.Cell>
                            <Table.Cell>
                            <Table>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.Cell>
                                            <b>Short URL Link</b>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <b>Customer Name</b>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <b>Shop Title</b>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <code>&#123;shop_link&#125;</code>
                                        </Table.Cell>
                                        <Table.Cell>
                                        <code>&#123;first_name&#125;</code>
                                        </Table.Cell>
                                        <Table.Cell>
                                        <code>&#123;shop_name&#125;</code>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <input 
                                                className={css(styles.editTag)} 
                                                defaultValue={shop_linkTag}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                        <input className={css(styles.editTag)}
                                                defaultValue={first_nameTag}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                        <input className={css(styles.editTag)}
                                                defaultValue={shop_nameTag}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <b>SMS</b>
                            </Table.Cell>
                            <Table.Cell>
                            <textarea 
                                className={css(styles.editSMS)}
                                defaultValue={smsText}
                                onChange={handleSMSChange}
                            />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <b>Media</b>
                            </Table.Cell>
                            <Table.Cell>
                            <Table>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <img src={media} alt="attachment" width="100px" height="100px" className={css(styles.editMediaImg)}></img>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <input 
                                                className={css(styles.editMediaLink)}
                                                defaultValue={media}
                                                onChange={handleMediaChange}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <b>Target</b>
                            </Table.Cell>
                            <Table.Cell>
                                <select 
                                    className={css(styles.editTargetSelect)}
                                    //defaultValue={TargetSegmentId}
                                >
                                    {Data.segments.map(el => {
                                        console.log("Target segment: "+ TargetSegmentId)
                                        if (el.id === TargetSegmentId){
                                            console.log("select target in menu")
                                            return (<option key={el.id} selected>{el.name} ({el.subscribers_count})</option>)
                                        }else{
                                            return (<option key={el.id}>{el.name} ({el.subscribers_count})</option>)
                                        }
                                    })} 
                                </select>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>



                
                <button>Save</button>
            </div>
            <div className={css(styles.livePreview)}>
                <div className="smartphone">
                    <div className="content">
                            <div className="message-blue">
                                <p className="message-content">Yes, let me in on the deals.</p>
                                <div className="message-timestamp-left">SMS 13:37</div>
                            </div>
                            <div className="message-orange">
                                <p className="message-content">{smsText}</p>
                                <img src={media} alt="attachment" width="200px" height="200px" className={css(styles.smsAttachImg)}></img>
                                <div className="message-timestamp-right">SMS 13:37</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Edit

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
        width: '300px',
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
	    height: '60px',
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
        width: '400px',
        border: '3px solid #cccccc',
        padding: '5px',
        margin: '4px 2px 2px 4px',
        fontSize: '16px',
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