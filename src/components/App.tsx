import React from 'react';
import Sidebar from './Sidebar';  // Assicurati di avere il percorso corretto
import Rectangle from './Rectangle'; // Assicurati di avere il percorso corretto

const App: React.FC = () => {
  return (
    <div className="App flex">
      <Sidebar />
      <Rectangle />  
    </div>
  );
};

export default App;
