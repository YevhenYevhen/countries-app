import React, { useState } from 'react'
import './App.css';
import Continents from './Components/Continets'

export const isCollapsedContext = React.createContext()

function App() {
  const [isCollapsed, toggleIsCollapsed] = useState(true)
  
  return (
    <div className='wrapper'>
      <isCollapsedContext.Provider value={isCollapsed}>
      <Continents isCollapsed={isCollapsed} toggleIsCollapsed={toggleIsCollapsed} />
      </isCollapsedContext.Provider>
    </div>
  );
}

export default App;
