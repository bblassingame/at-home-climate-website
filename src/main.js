import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './reset.css'
// import './style.css'
import './layout-v2/style2.css'

/*global process*/
if (process.env.NODE_ENV !== 'production') {
  console.log('Dev Environment Detected:  Starting Application')
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)