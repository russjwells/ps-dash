import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite/no-important'

const SwitchButton = (props) => {
    const [buttonState, setButtonState] = useState("Left")
    let lSwitchBG
    let rSwitchBG
    let lSwitchTxt
    let rSwitchTxt
    if (buttonState === "Left") {
        lSwitchBG = css(styles.lbutton)
        rSwitchBG = css(styles.rbuttonoff)
        lSwitchTxt = css(styles.lbuttonText)
        rSwitchTxt = css(styles.buttonTextOff)
    } 
    if (buttonState === "Right") {
        lSwitchBG = css(styles.lbuttonoff)
        rSwitchBG = css(styles.rbutton)
        lSwitchTxt = css(styles.buttonTextOff)
        rSwitchTxt = css(styles.buttonText)
    }

    return (
        <div className={css(styles.switch)}>
            <Link to={props.leftLink} onClick={() => setButtonState("Left")} className={css(styles.link)}>
                <div className={lSwitchBG}>
                    <div className={lSwitchTxt}>{props.leftLabel}</div>
                </div>
            </Link>
            <Link to={props.rightLink} onClick={() => setButtonState("Right")} className={css(styles.link)}>
                <div className={rSwitchBG}>
                    <div className={rSwitchTxt}>{props.rightLabel}</div>
                </div>
            </Link>
        </div>
    )
}

export default SwitchButton

const styles = StyleSheet.create({
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
    }
})