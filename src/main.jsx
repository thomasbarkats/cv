import React from 'react'
import ReactDOM from 'react-dom/client'
import { Printer } from 'lucide-react';
import './index.css'
import { CV } from './CV'
import Iridescence from './blocks/Backgrounds/Iridescence/Iridescence';


// eslint-disable-next-line react-refresh/only-export-components
const PrintButton = () => (
  <button
    onClick={() => window.print()}
    className="fixed bottom-8 right-8 p-3 bg-white/70 hover:bg-white shadow-xl rounded-full text-gray-600 hover:text-gray-800 transition-all duration-200 backdrop-blur-sm print:hidden"
    aria-label="Imprimer le CV"
  >
    <Printer size={24} />
  </button>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-white py-8 relative overflow-hidden print:py-0">
      <div className="absolute inset-0 w-full h-full print:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-yellow-200 opacity-70 filter blur-xl"></div>
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-50 print:hidden"></div>

      <div className="relative z-10 w-full h-full flex items-start print:text-base">
        <CV />
        <PrintButton />
      </div>
    </div>
  </React.StrictMode>,
)
