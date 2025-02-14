import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CV from './CV'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 py-8">
      <CV />
    </div>
  </React.StrictMode>,
)
