import './App.css';
import React from 'react';
import TruthTableInput from './components/input/TruthTableInput';
import useTruthTableManager from './business/hooks/UseTruthTableManager';
import ErrorList from './components/error/ErrorList';

const App = () => {
  const {truthTableManager, initialiseManager} = useTruthTableManager({});

  return (
    <div className="App">
      <h1>Truth Table Generator</h1>
      <TruthTableInput initialiseManager = {initialiseManager}/>
      <ErrorList errors={truthTableManager.errors}/>
    </div>
  );
}

export default App;
