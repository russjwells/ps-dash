import React, {useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import DashContext from './dashContext.js'

function Index() {
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    return (
        <>
            <DashContext.Provider value={{isDataLoaded, setIsDataLoaded}}>
                <App/>
            </DashContext.Provider>
        </>
       
    )
}
export default Index
ReactDOM.render(<Index/>, document.getElementById('root'))