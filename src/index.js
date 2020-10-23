import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-og';
import * as serviceWorker from './serviceWorker';
import DashContext from './dashContext.js'
import SampleData from './data/campaigns.json'
import { useContext } from 'react';
//console.log(SampleData.campaigns[0].name)


//


function Index() {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [dashData, setDashData] = useState(SampleData)
  //const data = SampleData
  //console.log(JSON.stringify(data))
  return (
      <>
          <DashContext.Provider value={dashData}>
              <App/>
          </DashContext.Provider>
      </>
     
  )
}

export default Index


ReactDOM.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
