import React from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <div className="pageContainer">
        <Header />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
