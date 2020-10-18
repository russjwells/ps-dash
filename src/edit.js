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
    const [smsText, setSmsText] = useState(Data.campaigns[Params.id-1].text)
    const [shop_linkTag, setShop_linkTag] = useState(Data.campaigns[Params.id-1].tags && Data.campaigns[Params.id-1].tags.shop_link)
    const [first_nameTag, setFirst_nameTag] = useState(Data.campaigns[Params.id-1].tags && Data.campaigns[Params.id-1].tags.first_name)

    const handleTxtChange = (event) => {
        setSmsText(event.target.value);
    };
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.editArea)}>
                <h3>Campaign Title</h3>
                <input className={css(styles.editTitle)}
                    defaultValue={Data.campaigns[Params.id-1].name}
                />
                <h3>Tags</h3>
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
                                    defaultValue={Data.campaigns[Params.id-1].tags && Data.campaigns[Params.id-1].tags.shop_name}
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <h3>SMS</h3>
                <textarea 
                className={css(styles.editSMS)}
                defaultValue={smsText}
                onChange={handleTxtChange}
                />
                <h3>Media</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <img src={Data.campaigns[Params.id-1].media} width="100px" height="100px" className={css(styles.editMediaImg)}></img>
                            </Table.Cell>
                            <Table.Cell>
                                <input 
                                    className={css(styles.editMediaLink)}
                                    defaultValue={Data.campaigns[Params.id-1].media}
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                    
                    
                <h3>Target</h3>
                <select 
                    className={css(styles.editTargetSelect)}
                >
                {Data.segments.map(el => {
                    console.log(Data.campaigns[Params.id-1].segment_id)
                    if (el == (Data.campaigns[Params.id-1].segment_id)){
                        return (<option key={el.id} selected>{el.name}</option>)
                    }else{
                        return (<option key={el.id}>{el.name}</option>)
                    }
                    
                    
                })} 
                </select>
                <button>Save</button>
                
            </div>
            <div className={css(styles.livePreview)}>
                <div className="smartphone">
                    <div className="content">
                            <div className="message-blue">
                                <p className="message-content">Hi, welcome to Postscript.</p>
                                <div className="message-timestamp-left">SMS 13:37</div>
                            </div>
                            
                            <div className="message-orange">
                                <p className="message-content">I am so happy to be here!</p>
                                <div className="message-timestamp-right">SMS 13:37</div>
                            </div>
                            
                            <div className="message-blue">
                                <p className="message-content">We're glad to have you.</p>
                                <div className="message-timestamp-left">SMS 13:37</div>
                            </div>

                            <div className="message-orange">
                                <p className="message-content">{smsText}</p>
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
        width: '442px',
        height: '30px',
        border: '3px solid #cccccc',
        padding: '5px',
        fontSize: '16px'
    },
    editMediaLink:{
        width: '300px',
        height: '30px',
        border: '3px solid #cccccc',
        padding: '5px',
        fontSize: '16px'
    },
    editMediaImg:{
        border: '3px solid #cccccc',
    },
    editSMS:{
        width: '442px',
	    height: '60px',
	    border: '3px solid #cccccc',
        padding: '5px',
        resize: 'none'
    },
    editTag:{
        height: '30px',
        border: '3px solid #cccccc',
        padding: '5px',
        fontSize: '16px'
    },
    editTargetSelect:{
        height: '30px',
        width: '400px',
        border: '3px solid #cccccc',
        padding: '5px',
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