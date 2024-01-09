import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import AppProvider from './context/AppProvider';


function App() {
  return (
    <AppProvider>
        <div className="App">
        <Calculator />
        </div>
    </AppProvider>
  );
}

export default App;
