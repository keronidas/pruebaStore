import React from 'react'
import ReactDOM from 'react-dom/client'
import  MyCanvas  from './MyCanvas'
import './index.css'
import { Overlay } from './Overlay'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyCanvas />
    <Overlay />
  </React.StrictMode>,
)
