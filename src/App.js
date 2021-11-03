import React, { useState } from 'react'
import './App.css';
import Continents from './Components/Continets'


export const CollapseContext = React.createContext()

function App() {
  const [isCollapsed, toggleIsCollapsed] = useState(true)
  return (
    <div className='wrapper'>
      <CollapseContext.Provider value={{ isCollapsed, toggleIsCollapsed }}>
      <Continents />
      </CollapseContext.Provider>
    </div>
  );
}

export default App;
