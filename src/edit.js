import React, {useContext, useParams} from 'react'
import DashContext from './dashContext.js'
import {StyleSheet, css} from 'aphrodite/no-important'
import { Dropdown } from 'semantic-ui-react'
import './smartphone.scss'
import './texting.scss'

const Edit = () => {
    const Data = useContext(DashContext)
    //let params = useParams()
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.editArea)}>
                <h2>edit area </h2>
                <h3>
                    {//Data.campaigns[params.id].title
                    }

                </h3>
                <input 
                    //defaultValue={Data.campaigns[params.id].title}
                />
                <h3>Tags</h3>
                <h4>Name</h4>
                <input />
                <h4>Shop</h4>
                <input />
                <h4>Link</h4>
                <input/>
                <h3>SMS</h3>
                <textarea width="300px" height="300px"/>
                <h3>Media</h3>
                <img src="#" width="300px" height="300px"></img>
                <h3>Target</h3>
                <select>
                    <option>Segment 1</option>
                    <option>Segment 2</option>
                    <option>Segment 3</option>
                </select>
                <button>Save</button>
                
            </div>
            <div className={css(styles.livePreview)}>
                <div class="smartphone">
                    <div class="content">
                            <div class="message-blue">
                                <p class="message-content">Hi, welcome to Postscript.</p>
                                <div class="message-timestamp-left">SMS 13:37</div>
                            </div>
                            
                            <div class="message-orange">
                                <p class="message-content">I am so happy to be here!</p>
                                <div class="message-timestamp-right">SMS 13:37</div>
                            </div>
                            
                            <div class="message-blue">
                                <p class="message-content">We're glad to have you.</p>
                                <div class="message-timestamp-left">SMS 13:37</div>
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
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#FFF',
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