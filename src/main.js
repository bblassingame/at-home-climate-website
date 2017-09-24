import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './reset.css'
import './style.css'

/*global process*/
if (process.env.NODE_ENV !== 'production') {
  console.log('Starting Application')
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)