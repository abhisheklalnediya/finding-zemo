import React from 'react';
import './App.css';
import Room from './roomLayout';
import Seach from './search';
import { ZemoProvider } from './context';

const App = () => (
  <div className="App">
    <ZemoProvider>
      <h2>Dhundo Zemo</h2>
      <div className="container">
        <div className="section">
          <Seach />
          <Room />
        </div>
        {/* <div className="section">
          <div className="preview">
            <img alt="webcam" src="/dummy.jpeg" />
          </div>
        </div> */}
      </div>
    </ZemoProvider>
  </div>
);


export default App;
