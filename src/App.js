import React from 'react';
import './App.css';
import Room from './roomLayout';
import Seach from './search';
import { ZemoProvider } from './context';

const App = () => (
  <div className="App">
    <ZemoProvider>
      <Seach />
      <Room />
    </ZemoProvider>
  </div>
);


export default App;
