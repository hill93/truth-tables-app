import './App.css';
import React from 'react';
import TruthTableInput from './components/input/TruthTableInput';
import useTruthTableManager from './business/hooks/UseTruthTableManager';
import ErrorList from './components/error/ErrorList';
import TruthTable from './components/table/TruthTable';

const App = () => {
  const {
    truthTableManager, 
    initialiseManager, 
    userInputUpdaterFactory, 
    checkRowInputFilled,
    checkRowInputCorrect
  } = useTruthTableManager({});

  return (
    <div className="App">
      <h1>Truth Table Generator</h1>
      <TruthTableInput initialiseManager = {initialiseManager}/>
      { truthTableManager.errors.length > 0 ? <ErrorList errors={truthTableManager.errors}/> : null }
      { truthTableManager.table ? 
        <TruthTable 
          truthTableManager={truthTableManager} 
          userInputUpdaterFactory={userInputUpdaterFactory}
          checkRowInputFilled={checkRowInputFilled}
          checkRowInputCorrect={checkRowInputCorrect}
        /> : null }
    </div>
  );
}

export default App;
