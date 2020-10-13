import React, {useState,} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-og';
import * as serviceWorker from './serviceWorker';
import DashContext from './dashContext.js'
import CampaignData from './data/campaigns.json'
console.log(CampaignData)
const data = CampaignData
function Index() {
  //const [isDataLoaded, setIsDataLoaded] = useState(false)
  const data = CampaignData
  console.log(data)
  return (
      <>
          <DashContext.Provider value="hi from context">
              <App/>
          </DashContext.Provider>
      </>
     
  )
}
export default Index
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
