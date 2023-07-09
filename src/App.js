import './App.css';
import React from 'react';
import TruthTableInput from './components/input/TruthTableInput';
import useTruthTableManager from './business/hooks/UseTruthTableManager';
import ErrorList from './components/error/ErrorList';
import TruthTable from './components/table/TruthTable';

const App = () => {
  const {truthTableManager, initialiseManager, userInputUpdaterFactory} = useTruthTableManager({});

  return (
    <div className="App">
      <h1>Truth Table Generator</h1>
      <TruthTableInput initialiseManager = {initialiseManager}/>
      <ErrorList errors={truthTableManager.errors}/>
      { truthTableManager.table ? 
        <TruthTable 
          truthTableArr={truthTableManager.table} 
          userInputUpdaterFactory={userInputUpdaterFactory}
        /> : null }
    </div>
  );
}

export default App;
