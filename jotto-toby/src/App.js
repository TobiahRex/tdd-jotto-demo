import React from 'react';
import './App.css';
import Congrats from './Congrats';

function App() {
  return (
    <div className="App">
      <div>Jotto Demo</div>
      <Congrats success={false} />
    </div>
  );
}

export default App;