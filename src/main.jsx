import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Get the element with the specified id = "root" from index.html <div id="root"></div>
let root = document.getElementById('root')
ReactDOM.createRoot(root).render(
// create react app inside the root element
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
