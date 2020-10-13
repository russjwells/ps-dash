import React, {useState,} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-og';
import * as serviceWorker from './serviceWorker';
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
