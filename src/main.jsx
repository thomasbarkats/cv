import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CV } from './CV'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-white py-8 relative overflow-hidden print:py-0">
      <div className="absolute inset-0 w-full h-full print:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-yellow-200 opacity-70 filter blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300 to-orange-200 opacity-70 filter blur-3xl"></div>
      </div>

      <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-75 print:hidden"></div>

      <div className="relative z-10 w-full h-full flex items-start print:text-base">
        <CV />
      </div>
    </div>
  </React.StrictMode>,
)
